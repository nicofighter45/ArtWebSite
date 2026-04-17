import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        Admin Login
      </Typography>
      {/* This page will be used by the admin to add pictures to the gallery. */}
      <form>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          type="email"
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </form>
    </Container>
  );
}