import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Supplier Management
        </Typography>
        {/* TODO: user menu / SSO identity — see Authentication Strategy */}
      </Toolbar>
    </AppBar>
  );
}
