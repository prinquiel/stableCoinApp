import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gywmpqsqdrjvswourdnd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5d21wcXNxZHJqdnN3b3VyZG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NDA1NzMsImV4cCI6MjA1NTQxNjU3M30.POs1hamRTrDOafbdwruJamPMAtAl63Ginhokzm93KSk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;