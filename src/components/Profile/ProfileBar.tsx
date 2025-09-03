import { Avatar, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ExpandableText from '../FeedPosts/ExpandableText';
import { AiFillEdit, AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';

interface ProfileBarProps {
    username: string;
    avatarUrl: string;
    bio?: string;
    followers?: number;
    cru?: number;
    isOwner?: boolean;
    isFollowing?: boolean;
}

const ProfileBar: React.FC<ProfileBarProps> = ({username, avatarUrl, bio, followers, cru, isOwner = true, isFollowing}) => {

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  return (
    <Flex alignItems={'left'} align={'left'} p={4} gap={4} w={'full'} borderColor={"whiteAlpha.300"} borderWidth={1} borderRadius={25} bgColor={"#cfceceff"} boxShadow={"md"}>
        <Avatar.Root w={'12vh'} h={'12vh'} bgColor={"black"}>
            <Avatar.Fallback name={username} />
            <Avatar.Image alt={username} src={avatarUrl} />
        </Avatar.Root>
        <VStack align={'left'}>
            <Text mt={2} fontSize={'lg'} color={'black'}>{username}</Text>
            <Flex>
              <Text color={'gray.500'} fontSize={'sm'}>@{username.replace(/\s+/g, '').toLowerCase()}</Text>
              {followers !== undefined && <Text ml={2} color={'gray.500'} fontSize={'sm'}>• {formatNumber(followers)} followers</Text>}
              {cru !== undefined && <Text ml={2} color={'gray.500'} fontSize={'sm'}>• {formatNumber(cru)} Crü's</Text>}
            </Flex>
            <ExpandableText color={'gray.500'} fontSize={'sm'} lines={1}>{bio}</ExpandableText>
        </VStack>
        <Box ml={'auto'} color={'blue.500'} fontSize={'sm'}>
          {isOwner ? (<Button color={"blue.400"} variant={"ghost"} borderWidth={2} colorPalette={"blue"}>Edit Profile<AiFillEdit/></Button>) : (isFollowing ? (<Button color={"blue.400"} variant={"ghost"} borderWidth={2} colorPalette={"red"}><AiOutlineUserAdd />Follow</Button>) : (<Button color={"red.400"} variant={"ghost"} borderWidth={2} colorPalette={"blue"}><AiOutlineUserDelete />Unfollow</Button>))}
        </Box>
    </Flex>
  )
}

export default ProfileBar