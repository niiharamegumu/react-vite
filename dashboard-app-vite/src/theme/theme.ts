import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "unset",
        },
      },
    },
  },
});

export default theme;
