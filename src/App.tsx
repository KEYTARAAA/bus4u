import { Box, Center, VStack } from "@chakra-ui/react";
import Notice from "./components/Notice";
function App() {
  return (
    <Center paddingTop={15}>
      <VStack spacing={0}>
        <Notice />
      </VStack>
    </Center>
  );
}

export default App;
