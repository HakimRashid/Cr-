import { Box, Button, Input, VStack, Flex, Text, ButtonGroup, Image } from "@chakra-ui/react"
import { useState } from "react";

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(false);

  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
            {/* Form content goes here */}
            <Text fontFamily="Bangers, cursive" fontWeight="bold" fontSize="4xl"> { isLogin ? "Login" : "Sign up"} </Text>
            <Input type="email" placeholder="Email or Username" />
            <Input type="password" placeholder="Password" />

            {isLogin ? (<Text flex={10} fontSize={11} color={"green.500"} textAlign={"left"} alignSelf={"flex-start"} _hover={{ color: "gray.300", textDecoration: "underline"}}>forgot password?</Text>) : null}

            {!isLogin ? (<Input type="password" placeholder="Confirm Password" />) : null}

            <Button w={"full"} colorScheme="blue" bgColor={"green.400"} size={"sm"} fontSize={14}>
                {isLogin ? "Login" : "Sign Up"}
            </Button>
            
            {/* OR Divider 8 */}
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={0} w={"full"}>
             <Box flex={2} height={"1px"} bgColor={"gray.300"}/>
              <Box border={"1px solid gray"} borderRadius={4} padding={0} flex={1} textAlign={"center"} fontSize={14} color={"gray.100"} borderWidth={2}>
                  {"OR"}
              </Box>
             <Box flex={2} height={"1px"} bgColor={"gray.300"}/>
            </Flex>

            <Flex alignContent={"center"} justifyContent={"center"} gap={2} w={"full"}>
                <ButtonGroup variant='outline' colorPalette="white">
                    <Button>
                      <Image src="/linkedIn.png" alt="LinkedIn" h={6} mr={1} />
                      LinkedIn
                      </Button>
                    <Button>
                      <Image src="/google.png" alt="LinkedIn" h={4} mr={1} />
                      Google
                      </Button>
                </ButtonGroup>
            </Flex>
            
            <Flex gap={0}>
              <Text fontSize={11} color={"white.500"} textAlign={"left"} alignSelf={"center"}> {isLogin ? "Don't have an account?" : "Already have an account?"} </Text>
              <Text padding={1} fontSize={11} color={"green.500"} textAlign={"left"} alignSelf={"center"} flex={1} onClick={() => setIsLogin(!isLogin)} _hover={{ color: "gray.300", textDecoration: "underline"}}> {isLogin ? "Sign up" : "Login"} </Text>
            </Flex>
        </VStack>
    </Box>
  )
}

export default AuthForm