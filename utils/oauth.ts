import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvehezwpkjvasmbkgnpj.supabase.co'
const supabaseKey = "c987ed62c7c23811abfcb958dab9b4a92fbc3564e7c3df315fcc7668fa163a35"
const supabase = createClient(supabaseUrl, supabaseKey)
export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}

export async function signout() {
  const { error } = await supabase.auth.signOut()
}
