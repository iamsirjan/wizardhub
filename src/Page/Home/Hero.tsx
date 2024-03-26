import { Box, Flex, Image, Heading, Stack, Button } from "@chakra-ui/react";
// import FileUpload from "../../Component/FIleUpload";

export default function Hero({
  title,
  subtitle,
  image,

  ...rest
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap={"nowrap"}
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Button borderRadius="8px" py="4" px="6" lineHeight="1" size="md">
          Authorize
        </Button>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={image}
          height={"600px"}
          width={"800px"}
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
}
