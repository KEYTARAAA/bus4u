import { Box, Link, Text } from "@chakra-ui/react";

function Notice() {
  const fontSizes = { lg: 30, sm: 15, md: 20, xl: 30 };
  const smallerFontSizes = { lg: 20, sm: 10, md: 15, xl: 20 };
  return (
    <Box bg="#fabd05" w="100%" paddingTop={4}>
      <Text fontSize={smallerFontSizes}>Timetable published 11/02/2024</Text>
      <Text paddingTop={15} fontSize={fontSizes} textAlign="center">
        <strong>For enquiries call 086 0430753</strong>
      </Text>
      <Text fontSize={fontSizes} textAlign="center">
        On Facebook.com/Bus4u Click "
        <Link color="blue" href="http://www.facebook.com/Bus4u" isExternal>
          Like
        </Link>
        ".
      </Text>
      <Text fontSize={fontSizes} textAlign="center">
        Email:{" "}
        <Link color="blue" href="mailto:info@bus4u.net" isExternal>
          info@bus4u.net
        </Link>
      </Text>
      <Text fontSize={fontSizes} textAlign="center">
        <strong>
          Sunday schedule on Public Holidays. No Service on Christmas Day
        </strong>
      </Text>
    </Box>
  );
}
export default Notice;
