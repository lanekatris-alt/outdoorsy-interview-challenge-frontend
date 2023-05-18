import { SearchListings } from "@/listings/search-listings";
import Head from "next/head";

import "./page.css";

export default function Home() {
  return (
    <div className="page">
      {/*<Head>*/}
      {/*  <link rel="preconnect" href="https://fonts.googleapis.com" />*/}
      {/*  <link rel="preconnect" href="https://fonts.gstatic.com" />*/}
      {/*  <link*/}
      {/*    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"*/}
      {/*    rel="stylesheet"*/}
      {/*  />*/}
      {/*</Head>*/}
      <SearchListings />
    </div>
  );
}
