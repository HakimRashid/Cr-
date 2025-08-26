import PostHeader from './PostHeader'
import { Box,  AspectRatio } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import React from 'react';
import AutoplayVideo from '../AutoPlayVideo/AutoPlayVideo';

interface FeedPostProps {
  vid: string;
  username: string;
  avatar: string;
}

const FeedPost: React.FC<FeedPostProps> = ({ vid, username, avatar }) => {
  return (
    <Box borderColor={"whiteAlpha.300"} borderWidth={1} p={5} borderRadius={50} bgColor={"#cfceceff"} boxShadow={"md"}>
      <PostHeader username={username} avatar={avatar}/>
        <Box my={2} borderRadius={4} overflow={"hidden"}>
          <AspectRatio ratio={9/16} maxW="100%">
            <AutoplayVideo url={vid}/>
          </AspectRatio>
        </Box>
      <PostFooter username={username} ratings={0}/>
    </Box>
  )
}

export default FeedPost