/*
  # Fix INSERT policy for profiles table
  
  1. Changes
    - Drop existing INSERT policy if it exists
    - Create new INSERT policy with proper email verification
    
  2. Security
    - Ensure users can only insert their own profile data
    - Verify email matches the authenticated user's email
*/

DO $$ 
BEGIN
    -- Drop any existing INSERT policies
    DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
    DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
    
    -- Create new INSERT policy with proper checks
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'profiles' 
        AND policyname = 'Enable insert for authenticated users only'
    ) THEN
        CREATE POLICY "Enable insert for authenticated users only" 
        ON profiles
        FOR INSERT 
        TO authenticated 
        WITH CHECK (
            auth.uid() = id AND 
            email = (auth.jwt()->>'email')
        );
    END IF;
END $$;