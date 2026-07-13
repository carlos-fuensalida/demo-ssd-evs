import Typography from "@mui/material/Typography";

import { MetricsGrid } from "@/features/kpi-dashboard/MetricsGrid";
import { getDashboardMetrics } from "@/services/dashboard.service";

export default async function SummaryPage() {
  const metrics = await getDashboardMetrics("summary");

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Summary
      </Typography>
      <MetricsGrid metrics={metrics} />
    </>
  );
}
