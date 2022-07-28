import type { NextPage } from "next";
import Head from "next/head";
import PricingOne from "../src/components/pricing/pricing-one";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pricing Components</title>
        <meta name="description" content="Business pricing components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingOne />
    </div>
  );
};

export default Home;
