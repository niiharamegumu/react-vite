import { Box, Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllusers } from "../../hooks/useAllusers";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllusers();

  useEffect(() => getUsers(), []);

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
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
});
