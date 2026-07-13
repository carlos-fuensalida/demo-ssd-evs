export type MetricTrend = "up" | "down" | "flat";

export interface DashboardMetric {
  id: string;
  label: string;
  value: number;
  unit?: string;
  trend?: MetricTrend;
}
