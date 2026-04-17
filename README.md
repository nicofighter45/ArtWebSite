
# ArtWebSite

Minimal Next.js project using TypeScript and Material-UI (MUI).

## Getting Started

### Frontend (Next.js)

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Rust Backend

Assuming your Rust backend is in a `backend/` folder:

```bash
cd backend
cargo run
# The API will be available at http://localhost:8080
```

#### Calling the Rust API from Next.js

Example (TypeScript):

```ts
fetch('http://localhost:8080/api/artworks')
	.then(res => res.json())
	.then(data => console.log(data));
```

## Material-UI (MUI) Setup

MUI and Emotion are installed. To use MUI components:

```ts
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
```

## Deployment with GitHub Actions

This project includes a minimal workflow at `.github/workflows/deploy.yml` that:

- Installs and builds the frontend (Next.js)
- Runs tests and builds the Rust backend
- (Add your deployment steps for Vercel/Netlify and Render/Railway)

To use the workflow:

1. Push to the `main` branch.
2. The workflow will run automatically.
3. Edit the deploy steps in the workflow to match your hosting provider.

---

Ready for your custom stack!
