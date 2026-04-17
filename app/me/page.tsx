import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function MePage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Qui suis-je?
      </Typography>
      <Typography variant="body1">
         Peintre autodidacte, je peins depuis 1995.
        J'ai d'abord été attiré par les couleurs et le style
        de Vincent Van Gogh, ce qui m'a donné
        l'élan de me donner dans la peinture ...

        Mon travail est coloré, chatoyant et plutôt figuratif.
        Il est inspiré par mes voyages et illustre des paysages,
        des marines, des portraits ...
        Cela me permet de prolonger le plaisir et d'immortaliser
        tous ces lieux découverts.

        Je peins uniquement à l'huile
      </Typography>
    </Container>
  );
}