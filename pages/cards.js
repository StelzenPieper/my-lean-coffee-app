import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";
import swrFetcher from "../src/lib/swr-fetcher";

//static side rendering mit "getStaticProps"
export function getStaticProps() {
  const cards = getCards();

  return {
    props: {
      fallback: {
        "/api/cards": cards,
      },
    },
  };
}

//server-sie rendering mit "getServerSideProps"
/*export function getServerSideProps() {

} */

export default function Cards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1">Cards</Typography>
      <CardGrid />
    </SWRConfig>
  );
}
