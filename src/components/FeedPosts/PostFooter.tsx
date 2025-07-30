import { AppliedIcon, ApplyIcon, CommentLogo } from '@/assets/constants';
import { Box, Button, Flex, Group, Input, InputGroup, Text } from '@chakra-ui/react'
import { useState } from 'react'

const PostFooter = () => {
    const [applied, setApplied] = useState(false);
    const [applications, setapplications] = useState(1000);
    
    const handleApply = () => {
        if (applied){
            setApplied(false);
            setapplications(applications - 1);
        } else {
            setApplied(true);
            setapplications(applications + 1);
        }
    }

  return (
    <>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <Box onClick={handleApply} cursor={"pointer"} fontSize={18}>
                {applied ? (<ApplyIcon />) : (<AppliedIcon />)}
            </Box>
            <Box cursor={"pointer"} fontSize={18}>
                <CommentLogo />
            </Box>
        </Flex>
        <Text fontWeight={600} fontSize={"sm"}>
            {applications} Applications
        </Text>
        <Text fontSize={"sm"} fontWeight={700}>
            Reviewer_name{" "}
            <Text as='span' fontWeight={400}>
                review
            </Text>
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
            view all 1,000 reviews
        </Text>

        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
            <Group attached w={"full"} maxW={"xlg"}>
                <Input variant={"flushed"} placeholder={"Add a review..."} fontSize={14}/>
                <Button variant={"ghost"} fontSize={14} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}>Post</Button>
            </Group>
        </Flex>
    </>
  )
}

export default PostFooter