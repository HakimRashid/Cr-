import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = (img, username, avatar) => {
  return (
    <Box borderColor={"whiteAlpha.300"} borderWidth={1} p={7} borderRadius={50}>
      <PostHeader username={username} avatar={avatar}/>
        <Box>
          <Image src="/placeholder.png" alt="Post Image" h={400} borderRadius={4} overflow={"hidden"}/>
        </Box>
      <PostFooter />
    </Box>
  )
}

export default FeedPost