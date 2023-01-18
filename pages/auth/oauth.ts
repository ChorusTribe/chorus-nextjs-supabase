import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const session = useSession()
const supabase = useSupabaseClient()

export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}

export async function signout() {
  const { error } = await supabase.auth.signOut()
}