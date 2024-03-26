import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const MenuItem = (props: any) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props: any) => {
  const { logout } = useAuth0();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">
        <Text color={"rgb(3, 169, 244)"} fontWeight={"300"} fontSize={"25px"}>
          Wizardhub
        </Text>
      </Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem>
            <Button
              size="sm"
              rounded="md"
              onClick={() => logout({})}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Logout
            </Button>
          </MenuItem>
          <MenuItem></MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
