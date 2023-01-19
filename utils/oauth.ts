import supabase from "./supabase";

export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
  });
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
}

export async function getUser() {
  const { data, error } = await supabase.auth.refreshSession();
  const { session, user } = data;
}
