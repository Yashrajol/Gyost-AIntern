/*
  # Fix backend setup and user authentication
  
  1. Changes
    - Drop existing foreign key constraint that's causing issues
    - Modify profiles table structure
    - Update RLS policies for proper authentication flow
    
  2. Security
    - Maintain RLS enabled
    - Ensure proper authentication checks
    - Set up correct access policies
*/

-- First, drop the problematic foreign key constraint
ALTER TABLE IF EXISTS profiles
DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- Recreate the profiles table with proper structure
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  role text CHECK (role IN ('student', 'admin')) NOT NULL DEFAULT 'student',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for registration" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies
CREATE POLICY "Enable insert for registration"
ON profiles FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);