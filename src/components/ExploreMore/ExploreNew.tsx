import { VStack, Text, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import PostSummary from './PostSummary'

const ExploreNew = () => {

    const [isloading, setIsLoading] = useState(true);
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      },[]);

    
  return (
    <VStack borderColor={"whiteAlpha.300"} borderWidth={1} p={7} borderRadius={50} bgColor={"#cfceceff"} boxShadow={"md"} w="full">
      {!isloading && (
        <>
          <Text alignSelf={"flex-start"} fontWeight={"bold"} cursor={"pointer"} _hover={{color: "white"}}>Explore New Crü's</Text>
          <PostSummary src='placeholder.png' name='Trending Post 1' creator='User' rating={0} />
          <PostSummary src='placeholder.png' name='Trending Post 1' creator='User' rating={0} />
          <PostSummary src='placeholder.png' name='Trending Post 1' creator='User' rating={0} />
          <PostSummary src='placeholder.png' name='Trending Post 1' creator='User' rating={0} />
          <Text alignSelf={"center"} fontSize={10} fontWeight={"bold"} cursor={"pointer"} _hover={{color: "white"}}>See More...</Text>
        </>
      )}
      {isloading && [0,1,2,3].map((_, index) => (
        <VStack key={index} gap={2} alignItems={"flex-start"} mb={10} w="full">
          <Skeleton height={"10px"} w={"300px"} />
          <Skeleton height={"10px"} w={"300px"} />
          <Skeleton w={"full"}>
          </Skeleton>
        </VStack>
      ))}
    </VStack>
  )
}

export default ExploreNew