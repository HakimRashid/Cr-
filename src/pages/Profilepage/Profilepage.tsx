import { VStack, Image } from '@chakra-ui/react'
import React from 'react'

const Profilepage = () => {
  return (
    <VStack>
      <Image
        src="/background.jpg"
        alt="Profile Picture"
        borderRadius="20px"
        w="full"
        h="200px" />
    </VStack>
  )
}

export default Profilepage