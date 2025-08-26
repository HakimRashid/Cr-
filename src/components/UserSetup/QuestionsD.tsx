import { Button, VStack, Image, Text, Wrap, WrapItem} from '@chakra-ui/react'
import React from 'react'

interface QuestionsDProps {
  onOptionClick?: (option: { label: string }, index: number) => void;
}

const QuestionsD: React.FC<QuestionsDProps> = ({ onOptionClick }) => {

  const options = [
    {
      label: "Option 1",
      icon: "placeholder.png",
    },
    {
      label: "Option 2",
      icon: "placeholder.png",
    },
    {
      label: "Option 3",
      icon: "placeholder.png",
    },
    {
      label: "Option 4",
      icon: "placeholder.png",
    }
  ]

  return (
    <Wrap justify="center" gap={5}>
      {options.map((option, index) => (
        <WrapItem key={index}>
          <Button colorScheme="blue" color="black" h="75vh" w="75vh" p={0} onClick={() => onOptionClick?.(option, index)}>
            <VStack>
              <Image src={option.icon} alt="Student Icon" boxSize="40vh" />
              <Text>{option.label}</Text>
            </VStack>
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default QuestionsD