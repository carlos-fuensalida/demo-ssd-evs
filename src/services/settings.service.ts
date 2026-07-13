import type { UserPreference } from "@/types/user";

/**
 * TODO: backed by the not-yet-defined preferences/saved-filters storage
 * (see .specs/constitution.md — Authentication Strategy).
 */
export async function getUserPreferences(
  userId: string,
): Promise<UserPreference> {
  return { userId, savedFilters: [] };
}

export async function saveUserFilter(
  userId: string,
  filter: Record<string, unknown>,
): Promise<UserPreference> {
  const current = await getUserPreferences(userId);
  return { ...current, savedFilters: [...current.savedFilters, filter] };
}
