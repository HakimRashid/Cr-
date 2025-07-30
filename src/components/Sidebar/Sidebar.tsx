import { CreatePostLogo, NotificationsLogo, SearchLogo } from '@/assets/constants'
import { Box, Flex, Text, Link, Image, Avatar, VStack, Spacer } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link as RouterLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size ={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create Post",
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
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0}>
      <Flex direction="column" h="full" justifyContent="space-between" alignItems="flex-start"> {/* Main container changed to Flex */}
        {/* Top Section (Logo and main links) */}
        <VStack spacing={4} align="stretch" w="full"> 
          {/* Logo Section */}
          <Link as={RouterLink} to={"/"} pl={2} display={{ base: "none", md: "block" }} cursor="pointer" >
            <Text fontFamily="Bangers, cursive" fontWeight="bold" fontSize="4xl">Cru</Text>
          </Link>
          <Link as={RouterLink} to={"/"} pl={2} display={{ base: "block", md: "none" }} cursor="pointer" borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} w={10}>
            <Image src="/placeholder.png" alt="Logo" />
          </Link>

          {/* Sidebar Items */}
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (
              <Tooltip content={item.text} key={index} positioning={{ placement: "right" }} showArrow openDelay={500} closeDelay={100}>
                <Link as={RouterLink} to={item.link || "#"} display="flex" alignItems="center" gap={4} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} key={index} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }}>
                  {item.icon}
                  <Text display={{ base: "none", md: "block" }}>{item.text}</Text>
                </Link>
              </Tooltip>
            ))}
          </Flex>
        </VStack>

        {/* Log Out Button" */}
        <Tooltip content="Log Out" positioning={{ placement: "right" }} showArrow openDelay={500} closeDelay={100}>
          <Link as={RouterLink} to={"/auth"} display="flex" alignItems="center" gap={4} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} mb={4}>
            <BiLogOut size={25} />
            <Text display={{ base: "none", md: "block" }}>Log Out</Text>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar