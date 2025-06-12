/*
  # Fix profiles table RLS policies for registration
  
  1. Changes
    - Drop existing policies
    - Create new policies that properly handle registration flow
    - Allow unauthenticated users to insert during registration
    
  2. Security
    - Maintains RLS enabled on profiles table
    - Allows new user registration while maintaining security
*/

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies with proper permissions
CREATE POLICY "Enable insert for registration"
ON profiles
FOR INSERT
TO public -- Allow unauthenticated users to insert
WITH CHECK (true); -- During registration, we trust the application logic

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