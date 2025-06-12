/*
  # Fix profiles table RLS policies

  1. Changes
    - Drop existing INSERT policy that may be causing issues
    - Create new INSERT policy with proper checks for registration
    - Ensure policies allow proper user access while maintaining security

  2. Security
    - Maintains RLS enabled on profiles table
    - Updates INSERT policy to properly handle user registration
    - Keeps existing SELECT and UPDATE policies intact
*/

-- Drop the existing INSERT policy that's causing issues
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new INSERT policy with proper checks
CREATE POLICY "Enable insert for authenticated users only" 
ON profiles
FOR INSERT 
TO authenticated 
WITH CHECK (
  auth.uid() = id AND
  email = auth.jwt()->>'email'
);

-- Note: Keeping existing SELECT and UPDATE policies as they are correct:
-- "Users can view own profile" - allows users to view their own profile
-- "Users can update own profile" - allows users to update their own profile