import Sidebar from '@/components/Sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import React from 'react'

interface PageLayoutsProps {
    children: React.ReactNode;
    }

const PageLayouts = ({ children } : PageLayoutsProps) => {
    const { pathname } = useLocation();
  return (
    <Flex>
        { /* sidebar on the left */}
        {(pathname !== '/auth' && pathname !== '/OnBoarding' && pathname !== '/onboarding') ? (<Box w={{base: '70px', md:'250px'}}>
            <Sidebar />
        </Box>) : null}
        { /*Page content on the right */}
        <Box flex={1} w={{base: 'calc(100% - 70px)', md: 'calc(100% - 250px)'}} padding={5} overflowY="auto">
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayouts