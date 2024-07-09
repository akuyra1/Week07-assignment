import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxecaymdhzhbihrxzqvb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZWNheW1kaHpoYmlocnh6cXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTI5NTQsImV4cCI6MjAzNTg2ODk1NH0.I5ZfmZZkOOSPRJKAQwR0_IkvQSNJ-IFdWTaXhU_cN6I"

if (!supabaseKey){
    throw new Error('No SUPABASE_KEY provided in environment variables')
}
export const supabase = createClient(supabaseUrl, supabaseKey)




