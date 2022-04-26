import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Home</Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="/create">Create new Card</Link>
          </Grid>
          <Grid item xs={12}>
            <Image
              src="/School of Fish 3.jpg"
              alt="School of Fish"
              width={640}
              height={426}
              layout="responsive"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
