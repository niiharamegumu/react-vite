import {
  Center,
  Grid,
  GridItem,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllusers } from "../../hooks/useAllusers";
import { useLoginUser } from "../../hooks/userLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllusers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      onOpen();
    },
    [users]
  );

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
                id={user.id}
                image="https://source.unsplash.com/random"
                fullName={user.username}
                userName={user.name}
                onClick={onClickUser}
              />
            </GridItem>
          ))}
        </Grid>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser!}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
