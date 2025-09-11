import ProfileBar from "@/components/Profile/ProfileBar";
import ProfileTabs from "@/components/Profile/ProfileTabs";
import { VStack, Image } from "@chakra-ui/react";
import { getProfileName } from "./SetName";
// import React from "react";

const profileName = getProfileName();

const Profilepage = () => {
  return (
    <VStack>
      <Image
        src="/background.jpg"
        alt="Profile Picture"
        borderRadius="20px"
        w="full"
        h="200px"
      />
      <ProfileBar
        username={profileName}
        avatarUrl=""
        bio={`This is an example of a bio. About a random guy called ${profileName}. He is very basic and enjoys everythings`}
      />
      <ProfileTabs />
    </VStack>
  );
};

export default Profilepage;
