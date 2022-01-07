import { useToast } from "@chakra-ui/react";
import { useCallback, VFC } from "react";

type Props = {
  title: string;
  status: "success" | "error" | "info" | "warning";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        position: "top",
        title,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
