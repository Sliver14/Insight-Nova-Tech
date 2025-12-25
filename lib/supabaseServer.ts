import { createClient } from '@supabase/supabase-js'

// IMPORTANT: These are server-only environment variables.
// Do not expose them to the browser!
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error("Missing environment variable: SUPABASE_URL")
}

if (!supabaseServiceRoleKey) {
  throw new Error("Missing environment variable: SUPABASE_SERVICE_ROLE_KEY")
}

// Note: this client is a server-side-only client that uses the service_role_key
// and should never be exposed to the browser.
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey)
