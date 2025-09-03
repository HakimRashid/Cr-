import ProfileBar from '@/components/Profile/ProfileBar'
import ProfileTabs from '@/components/Profile/ProfileTabs'
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
        <ProfileBar username='John Doe' avatarUrl='' 
        bio={"This is an example of a bio. About a random guy called John Doe. He is very basic and enjoys everyhtings"} />
        <ProfileTabs />
    </VStack>
  )
}

export default Profilepage