"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type LayoutProps = {
  children: React.ReactNode;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Qui suis-je?", href: "/me" },
  { label: "Galerie", href: "/gallery" },
  { label: "Admin", href: "/login" },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Portfolio de Serge Fagot
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  color="inherit"
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Box component="footer" sx={{ mt: "auto", py: 4, borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" gutterBottom>
                Légal
              </Typography>
              <Typography variant="body2">Politique de confidentialité</Typography>
              <Typography variant="body2">Conditions d'utilisation</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" gutterBottom>
                Me Contacter
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:serge.fagot@wanadoo.fr"
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                serge.fagot@wanadoo.fr
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" gutterBottom>
                Copyright
              </Typography>
              <Typography variant="body2">© 2026 Serge Fagot - Tous droits réservés</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}