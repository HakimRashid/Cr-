import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ExpandableText } from './ExpandableText';

interface PostHeaderProps {
  username: string;
  avatar: string;
  cruPost: boolean;
}

const PostHeader: React.FC<PostHeaderProps> = ({username, avatar, cruPost}) => {
  return (
    <VStack>
        <Flex justifyContent="space-between" alignItems="center" w="full">
            <Flex alignItems="center" gap={2}>
                {cruPost ?
                <Avatar.Root size="sm" shape="rounded">
                    <Avatar.Image src={avatar} alt="User Avatar" />
                </Avatar.Root> :
                <Avatar.Root size="sm">
                    <Avatar.Image src={avatar} alt="User Avatar" />
                </Avatar.Root>}
                <VStack fontSize={12} gap={-1} alignItems={"initial"} fontWeight="bold">
                    {username}
                    <Text color={"gray.500"}>Saturday, 9 August 11:00AM</Text>
                </VStack>
            </Flex>
            <Flex alignItems={"center"} gap={2} />
            <Box cursor={"pointer"}>
                <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}>Unfollow</Text>
            </Box>
        </Flex>

        <Box display="flex" width="100%">
            <ExpandableText lines={1}>
                Lorem ipsum dolor sit. 
            </ExpandableText>
        </Box>
    </VStack>
  )
}

export default PostHeader