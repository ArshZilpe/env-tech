import React from 'react';
import {
    ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Heading, Flex
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Home() {
    return (
        <Flex width="100%">
            <Flex height="50px" align="center">
                <ColorModeSwitcher justifySelf="right" />
            </Flex>
            <Flex width="100%" marginTop="100px" justify="center">

                <Flex maxWidth="1000px" direction="column" textAlign="center" align="center">

                    <Box maxW="50rem">
                        <Heading lineHeight="1.2" size="3xl" >Environmental impacts of Technology</Heading>
                        <Text padding="15px" opacity="70%" fontSize="2xl">
                            The growing use of Technology has both a postive and negative impact on the environment. Explore the website to find out more.
                </Text>
                    </Box>


                </Flex>
            </Flex>
        </Flex>
    )
}