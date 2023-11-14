"use client";

import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  MenuItem,
  MenuDivider,
  MenuList,
  VStack,
  Avatar,
  HStack,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import logo from "../images/logo.png";
import Widget from "../Pages/Widget";
import Deployment from "../Pages/Deployment";
import Pricing from "../Pages/Pricing";
import settings from "../images/settings.png";
import Edit from "../Pages/Edit/Edit";


const LinkItems = [
  { name: "Projects", path: "/uploaded" },
  { name: "Widget", path: "/widget" },
  { name: "Deployment", path: "/deployment" },
  { name: "Pricing", path: "/pricing" },
];

const SidebarContent = ({ onClose, setPageOpen, pageOpen, ...rest }) => {
  return (
    <>
      <Box
        bg={"#f3e8ff"}
        border={"1px solid black"}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={["full", "270px", "290px"]}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box display={"flex"} padding={"10px 10px"}>
            <Box width={"52.84px"} h={"52.84px"}>
              <Image src={logo}></Image>
            </Box>
            <Box>
              <Text
                fontSize={"38px"}
                color={"rgba(126, 34, 206, 1)"}
                fontFamily={"sans-serif"}
                fontWeight={700}
                lineHeight={"47.56px"}
              >
                LAMA.
              </Text>
            </Box>
          </Box>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Flex align="center" p="4" mx="4" borderRadius="35px" cursor="pointer">
          <Text>Podcast Upload Flow</Text>
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            onClick={() => {
              setPageOpen(link.name);
              // onClose(); // Invoke the onClose function here
            }}
          >
            {link.name}
          </NavItem>
        ))}
        <Flex align="center" p="4" mx="4" marginTop={"120px"}>
        <Image src={settings}>
        </Image>
        <Text color={"rgba(73, 69, 79, 1)"}>Settings</Text>

        </Flex>
      </Box>
    </>
  );
};

const NavItem = ({ children, pageOpen, ...rest }) => {
  return (
    <Box
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex
        align="center"
        width={"260px"}
        p="4"
        mx="4"
        borderRadius="35px"
        cursor="pointer"
        _hover={{
          bg: "#7e22ce",
          color: "white",
        }}
        {...rest}
      >
        <Box
          backgroundColor={"rgba(243, 232, 255, 1)"}
          padding={"5px"}
          width={"40px"}
          height={"40px"}
          borderRadius={"50%"}
        ></Box>
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export const SideBarForAll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [pageOpen, setPageOpen] = React.useState(LinkItems[0].name);
  const [pageOpen, setPageOpen] = React.useState("uploaded");
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        pageOpen={pageOpen}
        setPageOpen={setPageOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {pageOpen === "Projects" ? (
          <Edit/>
        ) : pageOpen === "Widget" ? (
          <Widget />
        ) : pageOpen === "Deployment" ? (
          <Deployment />
        ) : pageOpen === "Pricing" ? (
          <Pricing />
        ) : (
          <Edit/>
        )}
      </Box>
    </Box>
  );
};
