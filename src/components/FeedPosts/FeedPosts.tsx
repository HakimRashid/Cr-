import { Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Flex direction="column" gap={5} py={10} px={2} maxW={"xlg"}>
        <FeedPost img={"placeholder.png"} username={"User"} avatar={"placeholder.png"}/>
        <FeedPost img={"placeholder.png"} username={"User"} avatar={"placeholder.png"}/>
        <FeedPost img={"placeholder.png"} username={"User"} avatar={"placeholder.png"}/>
        <FeedPost img={"placeholder.png"} username={"User"} avatar={"placeholder.png"}/>
    </Flex>
  )
}

export default FeedPosts