import { Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">button</Button>
    </ChakraProvider>
  );
}

export default App;
