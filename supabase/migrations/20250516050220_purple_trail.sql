/*
  # Create demo accounts

  1. New Data
    - Creates two demo accounts in the profiles table:
      - Demo Student account with role 'student'
      - Demo Admin account with role 'admin'
    
  2. Security
    - Uses existing RLS policies
    - No changes to table structure or permissions
*/

-- Insert demo student account if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM profiles 
    WHERE email = 'demo.student@example.com'
  ) THEN
    INSERT INTO profiles (id, email, full_name, role)
    VALUES (
      '00000000-0000-0000-0000-000000000001',
      'demo.student@example.com',
      'Demo Student',
      'student'
    );
  END IF;
END $$;

-- Insert demo admin account if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM profiles 
    WHERE email = 'demo.admin@example.com'
  ) THEN
    INSERT INTO profiles (id, email, full_name, role)
    VALUES (
      '00000000-0000-0000-0000-000000000002',
      'demo.admin@example.com',
      'Demo Admin',
      'admin'
    );
  END IF;
END $$;