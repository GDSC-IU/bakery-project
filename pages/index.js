import Head from "next/head";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
        <title>Dummy Donuts</title>
      </Head>
      <Hero />
      <Products heading="Choose Your Favourite Donuts!" data={productData} />
      <Feature />
      <Products
        heading="Choose Your Favourite Cupcakes!"
        data={productDataTwo}
      />
      <Footer />
    </>
  );
}
