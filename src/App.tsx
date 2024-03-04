import { Box, Center, Heading, Table, VStack } from "@chakra-ui/react";
import Notice from "./components/Notice";
import TimeTable from "./components/Timetable";
import GalwayToRoscomon from "./assets/Bus4u_route2A.webp";
import RoscommonToGalway from "./assets/Bus4u_route2B.webp";
import {
  departureTimesGalwayToRoscommon,
  departureTimesRoscommonToGalway,
} from "./Times";
import Footer from "./components/Footer";
function App() {
  const padding = { lg: 150, sm: 50, md: 100, xl: 200 };
  return (
    <Center px={padding} paddingTop={15}>
      <VStack w="100%" spacing={0}>
        <Notice />
        <Box bg="black" w="100%" h={100} color="black" />
        <TimeTable
          image={RoscommonToGalway}
          departureTimes={departureTimesRoscommonToGalway}
          heading="Roscommon to Galway Bus Service"
        />
        <TimeTable
          image={GalwayToRoscomon}
          departureTimes={departureTimesGalwayToRoscommon}
          heading="Galway to Roscommon Bus Service"
        />
        <Footer />
      </VStack>
    </Center>
  );
}

export default App;
