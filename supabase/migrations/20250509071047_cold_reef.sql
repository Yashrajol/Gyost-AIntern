/*
  # Add INSERT policy for profiles table
  
  1. Changes
    - Add new policy to allow users to insert their own profile data during registration
    
  2. Security
    - Policy ensures users can only insert profiles with their own auth.uid()
*/

create policy "Users can insert own profile"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = id);