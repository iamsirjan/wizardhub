import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={0}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
    >
      <Text color={"rgb(3, 169, 244)"} fontWeight={"300"} fontSize={"15px"}>
        Wizardhub
      </Text>
      <Text>© 2022 Wizardhub. All Rights Reserved.</Text>
    </Flex>
  );
}
