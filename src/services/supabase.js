import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nffajebckyxzhadcmngl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmFqZWJja3l4emhhZGNtbmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDcyNTksImV4cCI6MjAxMDcyMzI1OX0.PGauAtQewEaTrpTXFT9hj_I2xT_ZnvGhlw8JH0zXmMo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
