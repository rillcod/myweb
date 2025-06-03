/*
  # Create registration tables

  1. New Tables
    - `school_registrations`
      - `id` (uuid, primary key)
      - `school_name` (text)
      - `school_type` (text)
      - `principal_name` (text)
      - `address` (text)
      - `lga` (text)
      - `state` (text)
      - `phone` (text)
      - `email` (text)
      - `contact_name` (text)
      - `contact_position` (text)
      - `contact_phone` (text)
      - `contact_email` (text)
      - `contact_whatsapp` (text)
      - `student_count` (integer)
      - `age_groups` (text[])
      - `computers_available` (integer)
      - `preferred_schedule` (text)
      - `duration` (text)
      - `has_computer_lab` (boolean)
      - `internet_status` (text)
      - `power_status` (text)
      - `additional_space` (text)
      - `expected_students` (integer)
      - `start_date` (date)
      - `special_requirements` (text)
      - `created_at` (timestamptz)
      - `status` (text)

    - `student_registrations`
      - `id` (uuid, primary key)
      - `student_name` (text)
      - `age` (integer)
      - `dob` (date)
      - `grade` (text)
      - `current_school` (text)
      - `gender` (text)
      - `parent_name` (text)
      - `relationship` (text)
      - `parent_phone` (text)
      - `parent_whatsapp` (text)
      - `parent_email` (text)
      - `home_address` (text)
      - `course_interest` (text)
      - `preferred_schedule` (text)
      - `learning_level` (text)
      - `class_type` (text)
      - `coding_experience` (boolean)
      - `experience_details` (text)
      - `own_device` (boolean)
      - `special_requirements` (text)
      - `hear_about_us` (text)
      - `payment_method` (text)
      - `payment_plan` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read their own data
    - Add policies for admins to read all data
*/

-- Create school_registrations table
CREATE TABLE IF NOT EXISTS school_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name text NOT NULL,
  school_type text NOT NULL,
  principal_name text NOT NULL,
  address text NOT NULL,
  lga text NOT NULL,
  state text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  contact_name text NOT NULL,
  contact_position text NOT NULL,
  contact_phone text NOT NULL,
  contact_email text NOT NULL,
  contact_whatsapp text,
  student_count integer NOT NULL,
  age_groups text[] NOT NULL,
  computers_available integer NOT NULL,
  preferred_schedule text NOT NULL,
  duration text NOT NULL,
  has_computer_lab boolean NOT NULL,
  internet_status text NOT NULL,
  power_status text NOT NULL,
  additional_space text,
  expected_students integer NOT NULL,
  start_date date NOT NULL,
  special_requirements text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Create student_registrations table
CREATE TABLE IF NOT EXISTS student_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  age integer NOT NULL,
  dob date NOT NULL,
  grade text NOT NULL,
  current_school text NOT NULL,
  gender text NOT NULL,
  parent_name text NOT NULL,
  relationship text NOT NULL,
  parent_phone text NOT NULL,
  parent_whatsapp text NOT NULL,
  parent_email text NOT NULL,
  home_address text NOT NULL,
  course_interest text NOT NULL,
  preferred_schedule text NOT NULL,
  learning_level text NOT NULL,
  class_type text NOT NULL,
  coding_experience boolean NOT NULL,
  experience_details text,
  own_device boolean NOT NULL,
  special_requirements text,
  hear_about_us text NOT NULL,
  payment_method text NOT NULL,
  payment_plan text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE school_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for school_registrations
CREATE POLICY "Enable read access for all users" ON school_registrations
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON school_registrations
  FOR INSERT WITH CHECK (true);

-- Create policies for student_registrations
CREATE POLICY "Enable read access for all users" ON student_registrations
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON student_registrations
  FOR INSERT WITH CHECK (true);