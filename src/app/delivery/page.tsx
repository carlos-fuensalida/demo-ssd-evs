import Typography from "@mui/material/Typography";

import { MetricsGrid } from "@/features/kpi-dashboard/MetricsGrid";
import { getDashboardMetrics } from "@/services/dashboard.service";

export default async function DeliveryPage() {
  const metrics = await getDashboardMetrics("delivery");

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Delivery
      </Typography>
      <MetricsGrid metrics={metrics} />
    </>
  );
}
