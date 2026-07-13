import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { DashboardMetric } from "@/types/dashboard";

const TREND_ICON = {
  up: <ArrowUpwardIcon fontSize="small" color="success" />,
  down: <ArrowDownwardIcon fontSize="small" color="error" />,
  flat: <RemoveIcon fontSize="small" color="disabled" />,
};

export function StatCard({ label, value, unit, trend }: DashboardMetric) {
  return (
    <Card variant="outlined" sx={{ minWidth: 220 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h4" component="p">
            {value}
            {unit}
          </Typography>
          {trend && TREND_ICON[trend]}
        </Stack>
      </CardContent>
    </Card>
  );
}
