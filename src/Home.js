import React from 'react';
import { Link } from 'react-router-dom'
import {
    ChakraProvider, Box, Text, VStack, Code, Grid, theme, Heading, Flex, Image, SimpleGrid, Button, Link as ELink
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Home() {
    return (
        <Box >
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

                    <Flex maxWidth="1000px" direction="column" textAlign="center" align="center">

                        <Box maxW="50rem">
                            <Heading lineHeight="1.2" size="3xl" >Environmental impacts of Technology</Heading>
                            <Text padding="15px" opacity="70%" fontSize="2xl">
                                The growing use of Technology has both a postive and negative impact on the environment. Explore the website to find out more.
                        </Text>
                        </Box>
                        <Flex pb="70px">
                            <a href="https://github.com/ArshZilpe/env-tech" target="_blank" rel="noopener noreferrer">
                                <Button colorScheme="gray" size="lg" leftIcon={<FaGithub />}>
                                    GitHub Repo
                                </Button>
                            </a>
                            <Link to="/quiz">
                                <Button ml="20px" colorScheme="teal" size="lg" leftIcon={<AiOutlineForm />}>
                                    Try the Quiz
                                </Button>
                            </Link>
                        </Flex>

                        <SimpleGrid columns={[1, 2]} spacing={10}>
                            <Link to="/positives">
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="350px">
                                    <Image src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/31/13/spam.jpg?width=1200" alt="positives image" />

                                    <Box p="6" textAlign="left">
                                        <Heading fontSize="3xl">Positive Impacts</Heading>
                                        <Text noOfLines="3" isTruncated>The growing digital nature of communication, enternainment and general lifestyle has meant that the net environmental impact of
                                these fields has significantly reduced, as well as people's personal carbon footprints.</Text>
                                    </Box>
                                </Box>
                            </Link>
                            <Link to="/negatives">
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="350px">
                                    <Image src="http://environmentinsider.com/wp-content/uploads/2014/06/ase18.jpg" alt="negatives image" />

                                    <Box p="6" textAlign="left">
                                        <Heading fontSize="3xl">Negative Impacts</Heading>
                                        <Text noOfLines="4" isTruncated>There are still some drawbacks to the adoption of technology, including the environmental impact of increased demand in the field. Some argue that
                            technology has had a net-negative impact on the enviroment. </Text>
                                    </Box>
                                </Box>
                            </Link>
                        </SimpleGrid>
                        <Link to="/servers">
                            <Box mt="40px" borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="740px" maxH="200px">
                                <Flex direction="row">
                                    <Image src="https://www.cbronline.com/wp-content/uploads/2020/05/amazon1.jpg" alt="server image" maxH="200px" />

                                    <Box p="6" textAlign="left">
                                        <Heading fontSize="3xl">Impact: Servers</Heading>
                                        <Text noOfLines="5" isTruncated>Data centres provide the information the consumer needs when they need it. Servers are essential for modern day
                                        software, websites and more. Google uses them to provide search results for your queries within milliseconds. Epic Games uses them to create an online,
                                        real-time gaming experience. And Amazon uses servers to create the biggest ecommerce site in the western world. However, these data centres are not
                                    magic, and require power, resources and materials just like any other computer.</Text>
                                    </Box>
                                </Flex>

                            </Box>
                        </Link>
                        <Link to="/phones">
                            <Box mb="100px" mt="40px" borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="740px" maxH="200px">
                                <Flex direction="row">
                                    <Image src="https://images.macrumors.com/article-new/2020/10/iphone-size-comparisons-d.jpg" alt="server image" maxH="200px" />

                                    <Box p="6" textAlign="left">
                                        <Heading fontSize="3xl">Impact: Phones</Heading>
                                        <Text noOfLines="5" isTruncated>Many people upgrade their smartphones every few years. However, most don't realise the long process for where raw metals and other materials
                                        are manufactured together to create the phone which they use. The manufacturing process of a new electronic device is often the most energy hungry part of the product's lifetime. In the
                                case of smartphones, this is shown by the frequent sales and short lifecycle of them.</Text>
                                    </Box>
                                </Flex>

                            </Box>
                        </Link>

                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}