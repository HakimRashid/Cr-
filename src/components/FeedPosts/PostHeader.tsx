import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PostHeader = () => {
  return (
    <VStack>
        <Flex justifyContent="space-between" alignItems="center" w="full">
            <Flex alignItems="center" gap={2}>
                <Avatar.Root size="sm">
                    <Avatar.Image src="/placeholder.png" alt="User Avatar" />
                </Avatar.Root>
                <Flex fontSize={12} fontWeight="bold" gap={2}>
                    User
                    <Box color={"gray.500"}>• 2h ago</Box>
                </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={2}></Flex>
            <Box cursor={"pointer"}>
                <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}>Unfollow</Text>
            </Box>
        </Flex>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
    </VStack>
  )
}

export default PostHeader