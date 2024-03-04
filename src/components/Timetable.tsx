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
  return (
    <>
      <Box w="100%" bg={borderColor} borderWidth={3}>
        <Heading textAlign="center">{heading}</Heading>
        <Center>
          <Image src={image}></Image>
        </Center>
      </Box>
      <TableContainer w="100%">
        <Table>
          <Thead>
            <Tr>
              <Th
                bg="#ffffcc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text>Departs</Text>
              </Th>
              <Th
                colSpan={6}
                textAlign="center"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text>Monday to Friday</Text>
              </Th>
              <Th
                colSpan={3}
                textAlign="center"
                bg="#ffcccc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text>Saturday</Text>
              </Th>
              <Th
                colSpan={2}
                textAlign="center"
                bg="#ccffcc"
                borderWidth={borderWidth}
                borderColor={borderColor}
              >
                <Text>Sunday</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {departureTimes.map((departureTime, index) => (
              <Tr key={index}>
                <Td
                  bg="#ffffcc"
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                >
                  <VStack>
                    <Text fontSize={24}>
                      <strong>{departureTime.stop}</strong>
                    </Text>
                    <Link
                      fontSize={12}
                      href={departureTime.locationLink}
                      color="blue"
                      textAlign="center"
                      isExternal
                    >
                      {"(" + departureTime.locationName + ")"}
                    </Link>
                  </VStack>
                </Td>
                {departureTime.times.map((time, index) => (
                  <Td
                    bg={
                      index < 6 ? undefined : index > 8 ? "#ccffcc" : "#ffcccc"
                    }
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                    key={index}
                  >
                    <Text>{time}</Text>
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
