// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tahzvvghvnhimjrwlazd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhaHp2dmdodm5oaW1qcndsYXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MzkzNDUsImV4cCI6MjA3NDExNTM0NX0.UnXdclChG7BI8sX5dGpRdkyCnq37vCbYiVgqzXThla4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
