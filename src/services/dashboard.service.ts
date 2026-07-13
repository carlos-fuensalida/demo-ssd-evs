import type { DashboardMetric } from "@/types/dashboard";

export type DashboardView = "summary" | "quality" | "delivery";

/**
 * TODO: replace with the real Analytics API call once the API spec is
 * defined (see .specs/constitution.md — Open Questions: "Analytics API").
 * Kept as the single place pages/hooks go through, per the API
 * Integration Strategy — no page or component should call HTTP endpoints
 * directly.
 */
export async function getDashboardMetrics(
  view: DashboardView,
): Promise<DashboardMetric[]> {
  return MOCK_METRICS[view];
}

const MOCK_METRICS: Record<DashboardView, DashboardMetric[]> = {
  summary: [
    { id: "quality-score", label: "Quality Score", value: 92, unit: "%", trend: "up" },
    { id: "on-time-delivery", label: "On-Time Delivery", value: 87, unit: "%", trend: "flat" },
    { id: "active-suppliers", label: "Active Suppliers", value: 134, trend: "up" },
  ],
  quality: [
    { id: "defect-rate", label: "Defect Rate", value: 1.4, unit: "%", trend: "down" },
    { id: "audit-pass-rate", label: "Audit Pass Rate", value: 96, unit: "%", trend: "up" },
  ],
  delivery: [
    { id: "on-time-delivery", label: "On-Time Delivery", value: 87, unit: "%", trend: "flat" },
    { id: "lead-time", label: "Avg. Lead Time", value: 6.2, unit: "days", trend: "down" },
  ],
};
