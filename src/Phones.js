import React from 'react';
import {
    ChakraProvider, Box, Text, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue, Button, Link as ELink
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from 'react-router-dom'

export default function Phones() {

    const { toggleColorMode } = useColorMode()
    const tealR = useColorModeValue("teal.400", "teal.300")
    return (
        <Box>
            <Flex height="50px" align="center">
                <ColorModeSwitcher justifySelf="right" />
                <Link exact to="/quiz">
                    <Button ml="15px" colorScheme="teal" size="md">
                        Quiz
                    </Button>
                </Link>
                <Link exact to="/">
                    <Button display={['none', 'flex']} ml="15px" variant="link" colorScheme="teal" size="md">
                        Home
                    </Button>
                </Link>
                <Link exact to="/positives">
                    <Button display={['none', 'flex']} ml="15px" variant="link" colorScheme="teal" size="md">
                        Positive Impacts
                    </Button>
                </Link>
                <Link exact to="/negatives">
                    <Button display={['none', 'flex']} ml="15px" variant="link" colorScheme="teal" size="md">
                        Negative Impacts
                    </Button>
                </Link>
                <Link exact to="/servers">
                    <Button display={['none', 'flex']} ml="15px" variant="link" colorScheme="teal" size="md">
                        Servers
                    </Button>
                </Link>
                <Link exact to="/phones">
                    <Button display={['none', 'flex']} ml="15px" variant="link" colorScheme="teal" size="md">
                        Phones
                    </Button>
                </Link>
                <ELink ml="auto" href="https://azmotion.co.uk" target="_blank" rel="noopener noreferrer">
                    <Button variant="link" colorScheme="teal" size="md" mr="20px">
                        By Arsh Zilpe
                    </Button>
                </ELink>
            </Flex>
            <Flex width="100%" padding="15px">
                <Flex width="100%" marginTop="100px" justify="center">

                    <Flex maxWidth="1000px" direction="column" align="center">

                        <Box maxW="50rem">
                            <Heading lineHeight="1.2" size="3xl" color={tealR}>Mobile Phones</Heading>
                            <Text paddingTop="15px" fontSize="2xl">
                                Smartphones, especially for the younger consumer, are now essential, both socially and in terms of education. But what environmental impact does this have?
                        </Text>

                            <Flex paddingTop="15px" flexDirection="column">
                                <Box display="inline-block">
                                    <Image borderRadius="10px" marginRight="20px" width="100%" src="https://images.macrumors.com/article-new/2020/10/iphone-size-comparisons-d.jpg" />
                                    <Text opacity="80%" pt="5px">Some of the many models of iPhone.</Text>
                                </Box>
                                <Text fontSize="xl">
                                    Many people upgrade their smartphones every few years. However, most don't realise the long process for where raw metals and other materials
                                    are manufactured together to create the phone which they use.</Text>
                                <Text pt="10px" fontSize="xl">
                                    Below shows the resources needed to manufacture one phone, and one PC (generally).</Text>
                            </Flex>
                            <Flex paddingTop="15px" flexDirection="column">
                                <SimpleGrid minChildWidth="120px" spacing="40px">
                                    <Box>
                                        <Image src="https://fonts.gstatic.com/s/i/materialicons/smartphone/v10/24px.svg" width="100px" color="gray.100" filter="invert(100%) sepia(0%) saturate(0%) hue-rotate(127deg) brightness(100%) contrast(101%)" />
                                        <Text pt="15px" fontSize="2xl">240kg fuel</Text>
                                        <Text fontSize="2xl">22kg chemicals</Text>
                                        <Text fontSize="2xl">1500 litres water</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://fonts.gstatic.com/s/i/materialicons/computer/v9/24px.svg" width="100px" color="gray.100" filter="invert(100%) sepia(0%) saturate(0%) hue-rotate(127deg) brightness(100%) contrast(101%)" />
                                        <Text pt="15px" fontSize="2xl">540kg fuel</Text>
                                        <Text fontSize="2xl">76kg chemicals</Text>
                                        <Text fontSize="2xl">4800 litres water</Text>
                                    </Box>
                                </SimpleGrid>
                            </Flex>
                            <UnorderedList pt="30px" marginBottom="50px">
                                <ListItem fontSize="xl" pt="15px">The manufacturing process of a new electronic device is often the most energy hungry part of the product's lifetime. In the
                                case of smartphones, this is shown by the frequent sales and short lifecycle of them.
                                </ListItem>
                            </UnorderedList>

                        </Box>


                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}