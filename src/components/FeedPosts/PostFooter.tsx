import { AppliedIcon, ApplyIcon, CommentLogo } from '@/assets/constants';
import { Box, Button, Flex, Group, Input, Text, RatingGroup } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

interface PostFooterProps {
    username: string;
    ratings: number;
}

const PostFooter: React.FC<PostFooterProps> = ({username, ratings}) => {
    const [applied, setApplied] = useState(false);
    const [applications, setapplications] = useState(1000);
    
    const handleApply = () => {
        if (applied){
            setApplied(false);
            setapplications(applications + 1);
        } else {
            setApplied(true);
            setapplications(applications - 1);
        }
    }

  return (
    <>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <RatingGroup.Root readOnly count={5} defaultValue={3} value ={ratings} size="sm" colorPalette={"orange"}>
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
            </RatingGroup.Root>
            <Box onClick={handleApply} cursor={"pointer"} fontSize={18}>
                {applied ? (<ApplyIcon />) : (<AppliedIcon />)}
            </Box>
            <Box cursor={"pointer"} fontSize={18}>
                <CommentLogo />
            </Box>
        </Flex>
        <Text fontWeight={600} fontSize={"sm"}>
            {ratings} Ratings
        </Text>
        <Text fontSize={"sm"} fontWeight={700}>
            {username + " "}
            <Text as='span' fontWeight={400}>
                comment
            </Text>
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
            view all 1,000 comments
        </Text>

        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
            <Group attached w={"full"} maxW={"xlg"}>
                <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14}/>
                <Button variant={"ghost"} fontSize={14} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}>Post</Button>
            </Group>
        </Flex>
    </>
  )
}

export default PostFooter