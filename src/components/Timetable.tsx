import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  border,
} from "@chakra-ui/react";
import { DepartureTime } from "../Times";
interface Props {
  image: string;
  departureTimes: DepartureTime[];
  heading: string;
}

function TimeTable({ image, departureTimes, heading }: Props) {
  const borderWidth = 3;
  const borderColor = "gray.200";
  const fontSizes = { lg: 16, sm: 8, md: 12, xl: 16 };
  const biggerFontSizes = { lg: 24, sm: 12, md: 16, xl: 24 };
  const smallerFontSizes = { lg: 12, sm: 4, md: 8, xl: 12 };
  return (
    <>
      <Box w="100%" bg={borderColor} borderWidth={3}>
        <Heading textAlign="center">{heading}</Heading>
        <Center>
          <Image src={image}></Image>
        </Center>
      </Box>
      <TableContainer w="100%">
        <Table w="100%">
          <Thead>
            <Tr>
              <Th
                bg="#ffffcc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text fontSize={fontSizes}>Departs</Text>
              </Th>
              <Th
                colSpan={6}
                textAlign="center"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text fontSize={fontSizes}>Monday to Friday</Text>
              </Th>
              <Th
                colSpan={3}
                textAlign="center"
                bg="#ffcccc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text fontSize={fontSizes}>Saturday</Text>
              </Th>
              <Th
                colSpan={2}
                textAlign="center"
                bg="#ccffcc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text fontSize={fontSizes}>Sunday</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {departureTimes.map((departureTime) => (
              <Tr>
                <Td
                  bg="#ffffcc"
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                >
                  <VStack>
                    <Text fontSize={biggerFontSizes}>
                      <strong>{departureTime.stop}</strong>
                    </Text>
                    <Link
                      fontSize={smallerFontSizes}
                      href={departureTime.locationLink}
                      color="blue"
                      textAlign="center"
                      isExternal
                    >
                      {"(" + departureTime.locationName + ")"}
                    </Link>
                  </VStack>
                </Td>{" "}
                {departureTime.times.map((time, index) => (
                  <Td
                    bg={
                      index < 6 ? undefined : index > 8 ? "#ccffcc" : "#ffcccc"
                    }
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                  >
                    <Text fontSize={fontSizes}>{time}</Text>
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
export default TimeTable;
