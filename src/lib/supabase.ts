import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  throw new Error('Invalid or missing VITE_SUPABASE_URL. Please check your .env file.');
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);