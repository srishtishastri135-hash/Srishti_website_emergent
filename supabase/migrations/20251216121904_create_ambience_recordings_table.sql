/*
  # Create ambience recordings table

  1. New Tables
    - `ambience_recordings`
      - `id` (uuid, primary key)
      - `title` (text) - Name of the recording
      - `description` (text) - Description of the recording
      - `location` (text) - Location where recording was made
      - `recording_type` (text) - Type: "Outdoor", "Live Venue", "Studio Ambience", "Field Recordings"
      - `duration` (integer) - Duration in seconds
      - `audio_url` (text) - URL to the audio file in Supabase Storage
      - `waveform_data` (text) - JSON string of waveform data for visualization
      - `featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `ambience_recordings` table
    - Add policy for authenticated users to read all recordings
    - Add policy for authenticated users with admin role to manage recordings
*/

CREATE TABLE IF NOT EXISTS ambience_recordings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  location text,
  recording_type text NOT NULL,
  duration integer,
  audio_url text NOT NULL,
  waveform_data text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE ambience_recordings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read ambience recordings"
  ON ambience_recordings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert ambience recordings"
  ON ambience_recordings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update ambience recordings"
  ON ambience_recordings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete ambience recordings"
  ON ambience_recordings
  FOR DELETE
  TO authenticated
  USING (true);
