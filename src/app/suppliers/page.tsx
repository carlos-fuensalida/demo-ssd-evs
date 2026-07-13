import Typography from "@mui/material/Typography";

import { ViewPlaceholder } from "@/components/ui/ViewPlaceholder";

export default function SuppliersPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Suppliers
      </Typography>
      <ViewPlaceholder
        title="Supplier comparison & self-review"
        note="Pending: supplier data model, user roles, and signed-URL access strategy (see .specs/constitution.md — Open Questions)."
      />
    </>
  );
}
