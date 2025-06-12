/*
  # Create internships and applications tables

  1. New Tables
    - `internships`
      - `id` (uuid, primary key)
      - `title` (text)
      - `company` (text)
      - `description` (text)
      - `requirements` (text)
      - `duration` (text)
      - `location` (text)
      - `type` (text) - remote, onsite, hybrid
      - `deadline` (date)
      - `status` (text) - active, closed
      - `created_by` (uuid, references profiles)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `applications`
      - `id` (uuid, primary key)
      - `internship_id` (uuid, references internships)
      - `student_id` (uuid, references profiles)
      - `status` (text) - pending, accepted, rejected
      - `applied_at` (timestamp)
      - `cover_letter` (text)
      - `resume_url` (text)

  2. Security
    - Enable RLS on both tables
    - Add appropriate policies for students and admins
*/

-- Create internships table
CREATE TABLE IF NOT EXISTS internships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  description text NOT NULL,
  requirements text,
  duration text NOT NULL,
  location text NOT NULL,
  type text CHECK (type IN ('remote', 'onsite', 'hybrid')) NOT NULL DEFAULT 'onsite',
  deadline date NOT NULL,
  status text CHECK (status IN ('active', 'closed')) NOT NULL DEFAULT 'active',
  created_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  internship_id uuid REFERENCES internships(id) ON DELETE CASCADE,
  student_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  status text CHECK (status IN ('pending', 'accepted', 'rejected')) NOT NULL DEFAULT 'pending',
  applied_at timestamptz DEFAULT now(),
  cover_letter text,
  resume_url text,
  UNIQUE(internship_id, student_id)
);

-- Enable RLS
ALTER TABLE internships ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Internships policies
CREATE POLICY "Anyone can view active internships"
ON internships FOR SELECT
TO public
USING (status = 'active');

CREATE POLICY "Admins can manage internships"
ON internships FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Applications policies
CREATE POLICY "Students can view own applications"
ON applications FOR SELECT
TO authenticated
USING (student_id = auth.uid());

CREATE POLICY "Students can create applications"
ON applications FOR INSERT
TO authenticated
WITH CHECK (
  student_id = auth.uid() AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'student'
  )
);

CREATE POLICY "Admins can view all applications"
ON applications FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admins can update application status"
ON applications FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  )
);