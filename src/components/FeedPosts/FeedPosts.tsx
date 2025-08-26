import { Box, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {

  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  },[]); // Simulate a 1 second loading time

  const posts = [
    {
      id: 1,
      vid: 'https://youtu.be/u31qwQUeGuM?si=q99YO7lU68ds2AO0',
      username: 'User1',
      avatar: 'placeholder.png'
    },
    {
      id: 2,
      vid: 'https://youtu.be/u31qwQUeGuM?si=q99YO7lU68ds2AO0',
      username: 'User2',
      avatar: 'placeholder.png'
    },
    {
      id: 3,
      vid: 'https://youtu.be/u31qwQUeGuM?si=q99YO7lU68ds2AO0',
      username: 'User3',
      avatar: 'placeholder.png'
    },
    {
      id: 4,
      vid: 'https://youtu.be/u31qwQUeGuM?si=q99YO7lU68ds2AO0',
      username: 'User4',
      avatar: 'placeholder.png'
    }];

  return (
    <Flex direction="column" gap={5} py={10} px={2} maxW={"xlg"}>
      {isloading && [0,1,2,3].map((_, index) => (
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10' />
            <VStack gap={5} alignItems={"flex-start"}>
              <Skeleton height={"10px"} w={"200px"} />
              <Skeleton height={"10px"} w={"200px"} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      

      {!isloading && (
        <>
          {posts.map(post => (
            <Box key={post.id}>
              <FeedPost vid={post.vid} username={post.username} avatar={post.avatar} />
            </Box>
          ))}
        </>
      )}
    </Flex>
  )
}

export default FeedPosts