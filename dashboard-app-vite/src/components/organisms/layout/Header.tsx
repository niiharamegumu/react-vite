import { Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // header nav links
  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    [navigate]
  );
  const onClickSetting = useCallback(
    () => navigate("/home/setting"),
    [navigate]
  );

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="flex-start"
        gap={4}
        padding={{ base: 3, md: 5 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "md", md: "lg" }}
          onClick={onClickHome}
        >
          <Link _hover={{ border: "none" }}>ユーザー管理アプリ</Link>
        </Heading>
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
