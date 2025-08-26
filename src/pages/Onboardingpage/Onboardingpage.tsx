import React, { useState, type JSX } from 'react'
import { Box, Button, ButtonGroup, Steps, VStack, Image, Text, Wrap, WrapItem, Avatar, Input, useFileUploadContext, FileUpload, FileUploadItem } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import QuestionsA from '@/components/UserSetup/QuestionsA'
import QuestionsB from '@/components/UserSetup/QuestionsB'
import QuestionsC from '@/components/UserSetup/QuestionsC'
import QuestionsD from '@/components/UserSetup/QuestionsD'

const OnBoarding = () => {

  const [step, setStep] = useState<number>(0)
  const [questions, setQuestions] = useState<number>(1)
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleClick = (option: { label: string; icon: string }, index: number) => {
    console.log(`Option clicked: ${option.label} at index ${index}`);
    nextStep();
  }

  const handleClick2 = (option: { label: string; }, index: number) => {
    console.log(`Step 2 option clicked: ${option.label} at index ${index}`);
    //TO DO: Store the selected option for step 2
    nextStep(); 
  };


  const initOptions = [
    {
      label: "Adult",
      icon: "placeholder.png",
    },
    {
      label: "General User",
      icon: "placeholder.png",
    },
    {
      label: "Student",
      icon: "placeholder.png",
    },
    {
      label: "Institution",
      icon: "placeholder.png",
    }
  ]
  
  const components: { [key: number]: JSX.Element } = {
    1: <QuestionsA onOptionClick={handleClick2} />,
    2: <QuestionsB onOptionClick={handleClick2} />,
    3: <QuestionsC onOptionClick={handleClick2} />,
    4: <QuestionsD onOptionClick={handleClick2} />,
  };

  const stepContent = components[questions];

  const steps = [
  {
    title: "Step 1",
    content: <Wrap justify="center" gap={5}>
      {initOptions.map((option, index) => (
       <WrapItem key={index}>
        <Button colorScheme="blue" color="black" h="75vh" w="75vh" p={0} onClick={() => handleClick(option, index)}>
          <VStack>
            <Image src={option.icon} alt="Student Icon" boxSize="40vh" />
            <Text>{option.label}</Text>
          </VStack>
        </Button>
      </WrapItem>
      ))}
    </Wrap>,
    description: "What best describes you?",
  },
  {
    title: "Step 2",
    content: components[questions] || components[1],
    description: "How would you like to use Crü?",
  },
  {
    title: "Step 3",
    content: <VStack>
      <FileUpload.Root accept={["image/*"]} maxFiles={1}>
        <FileUpload.HiddenInput />
          <FileUpload.Trigger asChild>
          <Avatar.Root h="25vh" w="25vh" colorPalette={"green"} alignSelf={"center"} cursor={"pointer"}>
            
            <Avatar.Fallback />
          </Avatar.Root>
        </FileUpload.Trigger>
      </FileUpload.Root>
      <Input variant={"flushed"} placeholder={"Username"} fontSize={14} w="50vh" textAlign={"center"} value={username} onChange={(e) => {setUsername(e.target.value)}}/>
      {username.length > 0 ? (<Button bg="green" colorScheme="green" color="green.200" variant="solid" onClick={() => {nextStep; navigate("/")}}>Next</Button>) : null}
    </VStack>,
    description: "Profile setup",
  },
]

  return (
    <Steps.Root defaultStep={0} count={steps.length} step={step}>
      <Steps.List colorPalette={"green"}> 
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Box>
              <Steps.Title color="gray.700">{step.title}</Steps.Title>
              <Steps.Description>{step.description}</Steps.Description>
            </Box>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <ButtonGroup size="sm" variant="outline">
        <Button color="black" onClick={prevStep}>Prev</Button>
        <Button color="black" onClick={nextStep}>Next</Button>
      </ButtonGroup>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index} colorPalette={"black"}>
          {step.content}
        </Steps.Content>
      ))}
    </Steps.Root>
  )
}



export default OnBoarding;