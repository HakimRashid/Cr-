import ExploreNew from '@/components/ExploreMore/ExploreNew'
import TrendingCru from '@/components/ExploreMore/TrendingCru'
import FeedPosts from '@/components/FeedPosts/FeedPosts'
import { Box, Flex, VStack } from '@chakra-ui/react'

const Homepage = () => {
  return (
      <Flex gap={10} borderWidth={5} borderColor={"red"}>
        <Box flex={2} py={10}  borderColor={"green"} borderWidth={5} maxW={"100%"}>
          <FeedPosts/>
        </Box>
        <Box flex={1} display={{ base: 'none', md: 'block' }}
         borderColor={"black"} borderWidth={4}>
          <VStack gap={8}>
            <TrendingCru />
            <ExploreNew />
          </VStack>
        </Box>
      </Flex>
  )
}

export default Homepage