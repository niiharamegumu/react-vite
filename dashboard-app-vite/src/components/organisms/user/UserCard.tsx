import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  id: number;
  image: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, image, userName, fullName, onClick } = props;
  return (
    <Box
      p={4}
      w="260px"
      h="260px"
      bg="white"
      borderRadius={10}
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          objectFit="cover"
          m="auto"
          alt={userName}
          src={image}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
