import { Flex } from "@chakra-ui/react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer/Footer";
import ComingSoonPage from "./CommingSoon";

const Home = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1500px" }} m="0 auto">
      <Header />
      {/* 
      <Button borderRadius="8px" py="4" px="6" lineHeight="1" size="md">
        Authorize
      </Button> */}
      <ComingSoonPage />
      <Footer />
    </Flex>
  );
};

export default Home;
