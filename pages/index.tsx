import type { NextPage } from "next";
import Head from "next/head";
import PricingOne from "../src/components/pricing/pricing-one";
import PricingTwo from "../src/components/pricing/pricing-two";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pricing Components</title>
        <meta name="description" content="Business pricing components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingOne />
      <PricingTwo />
    </div>
  );
};

export default Home;
