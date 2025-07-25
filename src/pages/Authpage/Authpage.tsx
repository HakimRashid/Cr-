import AuthForm from '@/components/AuthForm/AuthForm';
import { Container, Flex, Box, Image, VStack } from '@chakra-ui/react';

const Authpage = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" px={4}>
        <Container maxW='container.md' padding={4}>
            <Flex gap ={5}>
              {/* Left side content */}
            <Box display={{base: "none", md: "block"}}>
              <Image src="/1000067987.jpg" h={400} alt="Cru"/>
            </Box>
            {/* Right side content */}
            <VStack>
              <AuthForm />
              <Box textAlign={"center"}>Get the app</Box>
              <Flex gap={5} justifyContent="center">
                <Image src="/appstore.png" alt="App Store" h={10} mr={2} />
                <Image src="/playstore.png" alt="Play Store" h={10} />
              </Flex>
            </VStack>
            </Flex>

            
        </Container>
    </Flex>
  )
}

export default Authpage