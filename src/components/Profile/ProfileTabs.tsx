import { Avatar, Button, Flex, Group, Input, VStack } from '@chakra-ui/react'
import React from 'react'

interface ProfileTabsProps {
    isEdit?: boolean;
    username?: string;
    avatarUrl?: string;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({isEdit, username, avatarUrl}) => {

    const tabs = ['Experience & Skills', 'Crü\'s', 'Posts'];

  return (
    <Flex gap={4} w={'full'}>
        <VStack flex={1} alignItems={'left'} align={'left'} p={4} gap={4} w={'full'} borderColor={"whiteAlpha.300"} borderWidth={1} borderRadius={25} bgColor={"#cfceceff"} boxShadow={"md"}>   
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost'>Experience & Skills</Button>
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost'>Crü's</Button>
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost'>Posts</Button>
        </VStack>

        {/*User Posts*/}
        <VStack flex={3} alignItems={'left'} align={'left'} p={4} gap={4} w={'full'} borderColor={"whiteAlpha.300"} borderWidth={1} borderRadius={25} bgColor={"#cfceceff"} boxShadow={"md"}>
          <Flex>
            <Avatar.Root w={'12vh'} h={'12vh'} bgColor={"black"}>
              <Avatar.Fallback name={username} />
              <Avatar.Image alt={username} src={avatarUrl} />
            </Avatar.Root>
            <Group attached>
              <Input placeholder='Share something...' />
              <Button colorScheme='blue' variant='solid'>Post</Button>
            </Group>
          </Flex>
        </VStack>
    </Flex>
  )
}

export default ProfileTabs