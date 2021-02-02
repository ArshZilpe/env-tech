import React from 'react';
import {
    ChakraProvider, Box, Text, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue, Button
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from 'react-router-dom'

export default function Servers() {

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
            </Flex>
            <Flex width="100%" padding="15px">
                <Flex width="100%" marginTop="100px" justify="center">

                    <Flex maxWidth="1000px" direction="column" align="center">

                        <Box maxW="50rem">
                            <Heading lineHeight="1.2" size="3xl" color={tealR}>Servers: The unforseen impact</Heading>
                            <Text paddingTop="15px" fontSize="2xl">
                                Servers are the backbone of the internet and modern technology, which most don't know about.
                        </Text>

                            <Flex paddingTop="15px" flexDirection="column">
                                <Box display="inline-block">
                                    <Image borderRadius="10px" marginRight="20px" width="100%" src="https://www.cbronline.com/wp-content/uploads/2020/05/amazon1.jpg" />
                                    <Text opacity="80%" pt="5px">Amazon Web Services data centre</Text>
                                </Box>
                                <Text fontSize="xl">
                                    Data centres provide the information the consumer needs when they need it. Servers are essential for modern day
                                    software, websites and more. Google uses them to provide search results for your queries within milliseconds. Epic Games uses them to create an online,
                                    real-time gaming experience. And Amazon uses servers to create the biggest ecommerce site in the western world. However, these data centres are not
                                    magic, and require power, resources and materials just like any other computer.</Text>

                            </Flex>
                            <UnorderedList pt="30px" marginBottom="50px">
                                <ListItem fontSize="xl" pt="15px">A relatively new technology, based entirely on the server side is cloud gaming. This is where Games
                                are run on a server in a data centre miles away, and the game is being streamed via the internet to your device, within milliseconds.
                                These services offer the ultimate convenience, making games accessible to people without the requirement for major hardware.
                                <Flex textAlign="center" flexDirection="column">
                                        <Text fontWeight="500" paddingTop="20px" fontSize="2xl">Unfortunately the advent of cloud-gaming, where the graphics processing is done in data centers,
                                        has a large energy burden and the very large amounts of data that must be moved through the internet pipeline also trigger energy use. He found that PC-based
                                    cloud gaming requires about 500W of power during gameplay. "This is far more than most local desktop or laptop gaming rigs."</Text>
                                        <Text fontWeight="500" fontSize="2xl" paddingBottom="20px" paddingTop="15px" color={tealR}> - Evan Mills, senior scientist at Lawrence Berkeley Lab</Text>
                                    </Flex>
                                This means there is a much higher cost, both economically and environmentally for cloud services, when compared to running locally on your PC or phone.
                                The higher environmental cost means that there is further contribution to global climate change.
                                </ListItem>

                                <ListItem fontSize="xl" pt="15px">As more and more of our information is stored digitally and we access it by communicating
                                with the servers that house it, we're creating tons of energy requirements. According to the International Data Corporation, there are more
                                than eight million data centers globally that are tasked with handling all of our data — and they're making a mark on the planet along the way.
                                 </ListItem>
                                <ListItem fontSize="xl" pt="15px">Looking at a 2016 report from the The Independent, data centers will consume three times as much energy as they are currently using over the
                                course of the next decade. According to a 2015 report these data centers are responsible for about 2 percent of global greenhouse gas emissions —
                                 about the same amount generated by the entire aviation industry.</ListItem>
                            </UnorderedList>

                        </Box>


                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}