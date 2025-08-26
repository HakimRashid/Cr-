import { Box, Button, Input, VStack, Flex, Text, ButtonGroup, Image } from "@chakra-ui/react"
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
    email: string;
    password: string;
    confirmPassword?: string;
}

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [inputs, setInputs] = useState<Inputs>({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [missMatchError, setMissMatchError] = useState<boolean>(false);
    const [missingFieldsError, setMissingFieldsError] = useState<boolean>(false);

    const handleAuth = () => {
        // Handle authentication logic here
        if (!inputs.email || !inputs.password) {
            setMissingFieldsError(true);
            return;
        }
        setMissingFieldsError(false);
        if (inputs.password.length < 6) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
        if (!isLogin && inputs.password !== inputs.confirmPassword) {
            setMissMatchError(true);
            return;
        }
        setMissMatchError(false);
        isLogin ? navigate('/') : navigate('/onboarding');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5} shadow={"md"}>
        <VStack>
            {/* Form content goes here */}
            <Text fontFamily="Bangers, cursive" fontWeight="bold" fontSize="4xl"> { isLogin ? "Login" : "Sign up"} </Text>
            <Input name='email' type="email" placeholder="Email or Username" value={inputs.email} onChange={handleChange} />
            <Input name='password' type="password" placeholder="Password" value={inputs.password} onChange={handleChange} />

            {isLogin ? (<Text flex={10} fontSize={11} color={"green.500"} textAlign={"left"} alignSelf={"flex-start"} _hover={{ color: "gray.300", textDecoration: "underline"}}>forgot password?</Text>) : null}

            {!isLogin ? (<Input name='confirmPassword' type="password" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={handleChange} />) : null}

            {passwordError && <Text color="red.500" fontSize={11}>Password must be at least 6 characters long.</Text>}
            {missMatchError && <Text color="red.500" fontSize={11}>Passwords do not match.</Text>}
            {missingFieldsError && <Text color="red.500" fontSize={11}>Please fill in all fields.</Text>}

            <Button w={"full"} colorScheme="blue" bgColor={"green.400"} size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin ? "Login" : "Sign Up"}
            </Button>
            
            {/* OR Divider  */}
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={0} w={"full"}>
             <Box flex={2} height={"1px"} bgColor={"gray.300"}/>
              <Box border={"1px solid gray"} borderRadius={4} padding={0} flex={1} textAlign={"center"} fontSize={14} color={"black"} borderWidth={2}>
                  {"OR"}
              </Box>
             <Box flex={2} height={"1px"} bgColor={"gray.300"}/>
            </Flex>

            <Flex alignContent={"center"} justifyContent={"center"} gap={2} w={"full"}>
                <ButtonGroup variant='outline' colorPalette="white">
                    <Button color={"black"}>
                      <Image src="/linkedIn.png" alt="LinkedIn" h={6} mr={1} />
                      LinkedIn
                      </Button>
                    <Button color={"black"}>
                      <Image src="/google.png" alt="LinkedIn" h={4} mr={1} />
                      Google
                      </Button>
                </ButtonGroup>
            </Flex>
            
            <Flex gap={0}>
              <Text fontSize={11} color={"white.500"} textAlign={"left"} alignSelf={"center"}> {isLogin ? "Don't have an account?" : "Already have an account?"} </Text>
              <Text padding={1} fontSize={11} color={"green.500"} textAlign={"left"} alignSelf={"center"} flex={1} onClick={() => setIsLogin(!isLogin)} _hover={{ textDecoration: "underline"}}> {isLogin ? "Sign up" : "Login"} </Text>
            </Flex>
        </VStack>
    </Box>
  )
}

export default AuthForm