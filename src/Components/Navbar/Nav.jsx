import React from "react";
import { DrawerExample } from "./SideBar";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <>
      <Container
        maxW="100%"
        border="1px solid lightgrey"
        color="#262626"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex width="45%" justifyContent="space-around" alignItems="center">
          <DrawerExample />
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                colorScheme="teal"
                borderRadius="0px"
                variant="ghost"
                height="25px"
              >
                Inspiration
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>New And note worthy</PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                colorScheme="teal"
                variant="ghost"
                height="25px"
                borderRadius="0px"
              >
                Find work
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Job worthy</PopoverHeader>
              <PopoverBody>Free Lance</PopoverBody>
            </PopoverContent>
          </Popover>
          <ButtonGroup display="flex" alignItems="center">
            <Button
              colorScheme="teal"
              variant="ghost"
              borderRadius="0px"
              height="25px"
            >
              Learn Designers
            </Button>

            <Button
              colorScheme="teal"
              variant="ghost"
              borderRadius="0px"
              height="25px"
            >
              Hire Designers
            </Button>
          </ButtonGroup>
        </Flex>
        <Flex>
          <ButtonGroup display="flex" alignItems="center">
            <Button
              colorScheme="teal"
              variant="ghost"
              borderRadius="0px"
              height="25px"
            >
              Sign In
            </Button>

            <Button colorScheme="pink">SignUp</Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
};
