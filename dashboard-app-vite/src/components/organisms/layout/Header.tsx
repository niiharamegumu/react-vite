import { Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Link _hover={{ border: "none" }}>ユーザー管理アプリ</Link>
        </Heading>
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <Link>ユーザー一覧</Link>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
