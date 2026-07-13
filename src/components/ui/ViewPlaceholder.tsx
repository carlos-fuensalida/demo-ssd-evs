import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function ViewPlaceholder({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <Stack spacing={1} sx={{ py: 6 }} alignItems="center" textAlign="center">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" color="text.secondary" maxWidth={480}>
        {note}
      </Typography>
    </Stack>
  );
}
