import FeedPosts from '@/components/FeedPosts/FeedPosts'
import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

const Homepage = () => {
  return (
    <Container maxW={"8xl"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"1px solid blue"}>
          <FeedPosts/>
        </Box>
        <Box flex={1} mr={20} display={{ base: 'none', md: 'block' }} py={10}
        maxW={"300px"} border={"1px solid red"}>
          suggestions
        </Box>
      </Flex>
    </Container>
  )
}

export default Homepage