import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      display={{ base: "block", md: "none" }}
      variant="unstyled"
      ml="auto"
      aria-label="ハンバーガーメニュー"
      icon={<HamburgerIcon />}
      onClick={onOpen}
    />
  );
});
