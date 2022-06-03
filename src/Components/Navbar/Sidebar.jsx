import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Image
        src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"
        width="70px"
        height="30px"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>

          <DrawerBody>
            <ButtonGroup
              flexDirection="column"
              size="lg"
              variant="teal"
              hoverColor="skyblue"
              gap="20px"
              width="70%"
            >
              <Button justifyContent="left">Home</Button>
              <Button justifyContent="left">Trending</Button>
              <Button justifyContent="left">Explore</Button>
              <Button justifyContent="left">Favorites</Button>
              <Button justifyContent="left">Settings</Button>
            </ButtonGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
