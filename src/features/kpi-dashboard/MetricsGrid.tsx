import Grid from "@mui/material/Grid";

import { StatCard } from "@/components/ui/StatCard";
import type { DashboardMetric } from "@/types/dashboard";

export function MetricsGrid({ metrics }: { metrics: DashboardMetric[] }) {
  return (
    <Grid container spacing={2}>
      {metrics.map((metric) => (
        <Grid key={metric.id} item xs={12} sm={6} md={4}>
          <StatCard {...metric} />
        </Grid>
      ))}
    </Grid>
  );
}
