import { Flex } from "@chakra-ui/react";
import Header from "../../Component/Header";
import Hero from "./Hero";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Header />
      <Hero
        title=""
        subtitle="Upload your file or image here"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Upload File"
        ctaLink=""
      />
      <Footer />
    </Flex>
  );
};

export default Home;
