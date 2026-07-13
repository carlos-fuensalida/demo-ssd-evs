import Typography from "@mui/material/Typography";

import { MetricsGrid } from "@/features/kpi-dashboard/MetricsGrid";
import { getDashboardMetrics } from "@/services/dashboard.service";

export default async function QualityPage() {
  const metrics = await getDashboardMetrics("quality");

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Quality
      </Typography>
      <MetricsGrid metrics={metrics} />
    </>
  );
}
