import { Box, Link, Text, useBreakpointValue } from "@chakra-ui/react";

function Notice() {
  const fontSize = useBreakpointValue({
    base: "64",
    md: "32",
    lg: "24",
  });
  return (
    <Box bg="#fabd05" w="100%" paddingTop={4} paddingBottom={15}>
      <Text fontSize={fontSize}>Timetable published 11/02/2024</Text>
      <Text paddingTop={25} fontSize={fontSize} textAlign="center">
        <strong>For enquiries call 086 0430753</strong>
      </Text>
      <Text fontSize={fontSize} textAlign="center">
        On Facebook.com/Bus4u Click "
        <Link color="blue" href="http://www.facebook.com/Bus4u" isExternal>
          Like
        </Link>
        ".
      </Text>
      <Text fontSize={fontSize} textAlign="center">
        Email:{" "}
        <Link color="blue" href="mailto:info@bus4u.net" isExternal>
          info@bus4u.net
        </Link>
      </Text>
      <Text fontSize={fontSize} textAlign="center">
        <strong>
          Sunday schedule on Public Holidays. No Service on Christmas Day
        </strong>
      </Text>
    </Box>
  );
}
export default Notice;
