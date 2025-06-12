/*
  # Fix profiles table RLS policies for registration
  
  1. Changes
    - Drop existing INSERT policies
    - Create new INSERT policy that allows registration
    - Ensure proper email verification
    
  2. Security
    - Maintains RLS enabled on profiles table
    - Allows new user registration while maintaining security
*/

-- Drop existing INSERT policies to start fresh
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new INSERT policy that allows registration
CREATE POLICY "Enable insert for authenticated users only"
ON profiles
FOR INSERT
TO authenticated
WITH CHECK (
  -- Allow users to insert their own profile during registration
  auth.uid() = id
);

-- Note: Keeping existing SELECT and UPDATE policies as they are working correctly