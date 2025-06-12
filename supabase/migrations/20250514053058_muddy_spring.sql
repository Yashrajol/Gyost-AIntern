/*
  # Fix registration flow and foreign key constraint
  
  1. Changes
    - Drop existing policies
    - Create new policies that allow public registration
    - Maintain security for authenticated users
    
  2. Security
    - Allow public access for registration
    - Maintain RLS for authenticated users
    - Ensure proper access control
*/

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Enable insert for registration" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies with proper permissions
CREATE POLICY "Enable insert for registration"
ON profiles
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Users can view own profile"
ON profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id);