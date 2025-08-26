import {  SearchLogo } from '@/assets/constants'
import { Box, Flex, Text, Link, Image, Avatar, VStack } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { SlInfo, SlFire, SlEnvolope, SlList  } from 'react-icons/sl'
import type { BsBorderWidth } from 'react-icons/bs'

interface SidebarItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

const Sidebar: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    {
      icon: <SlList  size ={25} fill='black'/>,
      text: "Home", 
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <SlEnvolope fill='black' size={25} />,
      text: "Notifications",
    },
    {
      icon: <SlFire fill='black' size={25}/>,
      text: "Create Crü",
    },
    {
      icon: <Avatar.Root size="sm">
              <Avatar.Image src="/placeholder.png" alt="User Avatar" />
            </Avatar.Root>,
      text: "Profile",
      link: "/profile"
    }
  ]

  return (
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} bgColor={"#F7F7F7"} boxShadow={"md"} borderRadius={"5%"}>
      <Flex direction="column" h="full" justifyContent="space-between" alignItems="flex-start" borderColor={"orange"} borderWidth={5}> {/* Main container changed to Flex */}
        {/* Top Section (Logo and main links) */}
        <VStack align="stretch" w="full"> 
          {/* Logo Section */}
          <Link as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor="pointer" {...{ to: "/" }}>
            <Text fontFamily="Bangers, cursive" fontWeight="bold" fontSize="4xl" color={"black"}>Crü</Text>
          </Link>
          <Link as={RouterLink} {...{ to: "/" }} pl={2} display={{ base: "block", md: "none" }} cursor="pointer" borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} w={10}>
            <Image src="/placeholder.png" alt="Logo" />
          </Link>

          {/* Sidebar Items */}
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (
              <Tooltip content={item.text} key={index} positioning={{ placement: "right" }} showArrow openDelay={500} closeDelay={100}>
                <Link as={RouterLink} {...{ to: item.link || "#" }}  display="flex" alignItems="center" gap={4} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} key={index} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }}>
                  {item.icon}
                  <Text display={{ base: "none", md: "block" }} color={"black"}>{item.text}</Text>
                </Link>
              </Tooltip>
            ))}
          </Flex>
        </VStack>

        {/* Log Out Button" */}
        <VStack>
          <Tooltip content={"Help & Support"} positioning={{ placement: "right" }} showArrow openDelay={500} closeDelay={100}>
            <Link as={RouterLink} {...{ to: "/#" }} display="flex" alignItems="center" gap={4} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} mb={4}>
              <SlInfo size={25} fill={"black"}/>
              <Text display={{ base: "none", md: "block" }} color={"black"}>Help & Support</Text>
            </Link>
          </Tooltip>
          <Tooltip content={"Log Out"} positioning={{ placement: "right" }} showArrow openDelay={500} closeDelay={100}>
            <Link as={RouterLink} {...{ to: "/auth" }} display="flex" alignItems="center" gap={4} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} mb={4}>
              <BiLogOut size={25} fill={"black"}/>
              <Text display={{ base: "none", md: "block" }} color={"black"}>Log Out</Text>
            </Link>
          </Tooltip>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Sidebar