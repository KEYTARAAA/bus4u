import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { DepartureTime } from "../Times";
import { useEffect } from "react";
interface Props {
  image: string;
  departureTimes: DepartureTime[];
  heading: string;
  setWidth?: (width: number) => void;
}

function TimeTable({ image, departureTimes, heading, setWidth }: Props) {
  const borderWidth = 3;
  const borderColor = "gray.200";
  useEffect(() => {
    const table = document.getElementById("table");
    if (setWidth && table) {
      setWidth(
        Math.max(window.innerWidth, table.getBoundingClientRect().width)
      );
    }
  }, []);
  return (
    <>
      <Box w="100%">
        <Box w="100%" bg={borderColor} borderWidth={3}>
          <Heading paddingBottom={2} textAlign="center">
            {heading}
          </Heading>
          <Center>
            <Image src={image}></Image>
          </Center>
        </Box>
        <Box w="100%" borderWidth={5}>
          <Table id="table">
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
                        index < 6
                          ? undefined
                          : index > 8
                          ? "#ccffcc"
                          : "#ffcccc"
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
        </Box>
      </Box>
    </>
  );
}
export default TimeTable;
