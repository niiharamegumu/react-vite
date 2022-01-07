import {
  Center,
  Grid,
  GridItem,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllusers } from "../../hooks/useAllusers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllusers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Grid
          p={{ base: 4, md: 10 }}
          justify="center"
          templateColumns="repeat(auto-fit, minmax(260px, 1fr))"
          gap={4}
        >
          {users.map((user) => (
            <GridItem key={user.id} m="auto">
              <UserCard
                image="https://source.unsplash.com/random"
                fullName={user.username}
                userName={user.name}
                onClick={onClickUser}
              />
            </GridItem>
          ))}
        </Grid>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
