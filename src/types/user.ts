export type UserRole = "internal" | "supplier";

export interface UserPreference {
  userId: string;
  savedFilters: Record<string, unknown>[];
}
