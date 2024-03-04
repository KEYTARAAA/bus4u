import { Box, HStack, Link, Text, useBreakpointValue } from "@chakra-ui/react";

function Footer() {
  const fontSize = useBreakpointValue({
    base: "50",
    md: "25",
    lg: "20",
  });
  const smallerFontSize = 20;
  return (
    <Box w="100%" paddingTop={15} borderWidth={3} px={3}>
      <Text fontSize={smallerFontSize} paddingBottom={50}>
        <strong>
          Fares to Galway, from...
          <br />
          Roscommon Mount Talbot and Athleague: Single €10, Open returns €15,
          Ten Journey €60 (Students €55)
          <br />
          Ballygar, Newbridge, Mountbellew, Moylough, Abbeyknockmoy: Single €8,
          Open returns €12, Ten Journey €50 (Students €45)
          <br />
          Turloughmore and Lackagh: Single €5
          <br />
          Return Journey and 10 Journey are valid for one month
        </strong>
      </Text>
      <Text fontSize={fontSize}>
        This{" "}
        <Text as="span" color={"blue"}>
          <strong>433</strong>
        </Text>{" "}
        bus service is operated by Brendan Boyle Bus and Coach hire.
      </Text>
      <Text fontSize={fontSize} paddingBottom={4}>
        If you want to make a complaint about your bus trip contact Brendan
        Boyle, Bovinion, Mountbellew.
      </Text>
      <Text paddingTop={10} fontSize={fontSize}>
        <strong>
          If you are not happy with the response from Brendan Boyle contact the
          National Transport Authority, Dun Sceine, Harcourt Lane, Dublin 2
          email:{" "}
          <Link href="info@nationaltransport.ie" color="blue">
            info@nationaltransport.ie
          </Link>
        </strong>
      </Text>
    </Box>
  );
}
export default Footer;
