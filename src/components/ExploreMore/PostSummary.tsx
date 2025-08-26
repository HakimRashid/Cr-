import { Avatar, Flex, VStack, Text, Box, RatingGroup } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import { BsBuildingAdd, BsBuildingFillDash } from 'react-icons/bs';
import React from 'react'

interface PostSummaryProps {
    src: string;
    name: string;
    creator: string;
    rating: number;
}

const PostSummary: React.FC<PostSummaryProps> = ({src, name, creator, rating}) => {

    const [following, setFollowing] = React.useState(false);

  return (
    <Flex direction={'row'} alignItems="flex-start" justifyContent="left" py={2} px={0} borderBottom={"2px solid white"} w="full" gap={2}>
        <Avatar.Root shape={"rounded"} size={"lg"} cursor={"pointer"}>
            <Avatar.Image src={src} alt={name}/>
            <Avatar.Fallback name={name} />
        </Avatar.Root>
        <VStack fontSize={12} color={"gray.500"} gap={-1} fontWeight={"bold"} alignItems="flex-start" justifyContent="left">
            <span>{name}</span>
            <RatingGroup.Root readOnly allowHalf value={rating} count={5} defaultValue={2.5} size="sm" colorPalette={"orange"}>
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
            </RatingGroup.Root>
            <Text as="span" cursor="pointer" _hover={{color: "white"}}>{ "by " + creator}</Text>
        </VStack>
        <Box cursor={"pointer"} ml="auto" borderWidth={2} borderRadius={"50%"} color={following ? "#b11605ff" : "#0552b1ff"} borderColor={following ? "#b11605ff" : "#0552b1ff"} p={0.5} alignSelf={"center"} _hover={{borderColor: "white", color: "white"}}>
            <Tooltip content={following ? "Unfollow" : "Follow"} positioning={{ placement: "top" }} showArrow openDelay={500} closeDelay={100}>
            {following ? 
                <BsBuildingFillDash size={20} onClick={() => setFollowing(false)} />
                : 
                <BsBuildingAdd size={20} onClick={() => setFollowing(true)} />
            }
            </Tooltip>
        </Box>
    </Flex>
  )
}

export default PostSummary