import { Typography } from "@mui/material";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";

//static side rendering mit "getStaticProps"
export function getStaticProps() {
  const cards = getCards();

  return {
    props: {
      cards,
    },
  };
}

//server-sie rendering mit "getServerSideProps"
/*export function getServerSideProps() {

} */

export default function Cards({ cards }) {
  console.log(cards);
  return (
    <>
      <Typography variant="h1">Cards</Typography>
      <CardGrid cards={cards} />
    </>
  );
}
