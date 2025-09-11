import { Avatar, Button, Flex, Group, Input, VStack, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiPhotoAlbum } from 'react-icons/bi';
import FeedPosts from '../FeedPosts/FeedPosts';

interface ProfileTabsProps {
    isEdit?: boolean;
    username?: string;
    avatarUrl?: string;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({isEdit, username, avatarUrl}) => {

  const [activeTabs, setActiveTabs] = useState('pst');

  const renderTabContent = () => {switch(activeTabs) {
    case "pst":
      return (
        <VStack w={'full'}>
          <Flex gap={2} w={'full'} maxH="10vh" alignItems={'left'} align={'left'} p={4} borderColor={"whiteAlpha.300"} borderWidth={1} borderRadius={25} bgColor={"#cfceceff"} boxShadow={"md"} mt={4}>
            <Avatar.Root size="md" bgColor={"black"}>
              <Avatar.Fallback name={username} />
              <Avatar.Image alt={username} src={avatarUrl} />
            </Avatar.Root>
            <Group attached w={'full'}>
              <Input placeholder='Share something...' variant="subtle" color="white"/>
              <Button colorScheme='blue' variant='solid'>Post</Button>
            </Group>
          </Flex>
          <Box w={'full'}>
             <FeedPosts />
          </Box>
        </VStack>) ;
    case "exp":
      return (<Box w="full" p={4}>Experience & Skills content here</Box>);
    case "cru":
      return (<Box w="full" p={4}>Crü's content here</Box>);
    default:
      return null;
    }
  }


  return (
    <Flex gap={4} w={'full'}>
        <VStack flex={1} alignItems={'left'} align={'left'} p={4} gap={4} w={'full'} h={'25vh'} borderColor={"whiteAlpha.300"} borderWidth={1} borderRadius={25} bgColor={"#cfceceff"} boxShadow={"md"}>   
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost' onClick={() => {setActiveTabs("exp")}}>Experience & Skills</Button>
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost' onClick={() => {setActiveTabs("cru")}}>Crü's</Button>
            <Button colorScheme='blue' borderWidth={2} color={'black'} variant='ghost' onClick={() => {setActiveTabs("pst")}}>Posts</Button>
        </VStack>
        <Box flex={3}>{renderTabContent()}</Box>
    </Flex>
  )
}

export default ProfileTabs