import { Box, Center, VStack } from "@chakra-ui/react";
import Notice from "./components/Notice";
function App() {
  return (
    <Center paddingTop={15}>
      <VStack spacing={0}>
        <Notice />
        <Box bg="black" w="100%" h={100} color="black" />
      </VStack>
    </Center>
  );
}

export default App;
