import React, { useState } from 'react';
import {
    ChakraProvider, Box, Text, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue, FormControl, FormLabel, FormErrorMessage, FormHelperText, Radio, RadioGroup, Button, Stack, Alert, AlertIcon, Link as ELink
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Quiz() {

    const { toggleColorMode } = useColorMode()
    const tealR = useColorModeValue("teal.400", "teal.300")
    const [value1, setValue1] = React.useState("0")
    const [value2, setValue2] = React.useState("0")
    const [value3, setValue3] = React.useState("0")
    const [value4, setValue4] = React.useState("0")
    const [value5, setValue5] = React.useState("0")
    const [value6, setValue6] = React.useState("0")

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

                    <Flex direction="column">

                        <Box maxW="50rem">
                            <Heading width="100%" lineHeight="1.2" size="3xl" color={tealR}>Quiz</Heading>
                            <Text width="100%" paddingTop="15px" fontSize="2xl">
                                Check your knowledge on the subject.
                            </Text>
                        </Box>
                        <FormControl id="1" pt="20px">
                            <Alert id="1c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="1r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">1. What has the advancement of technology done?</FormLabel>
                            <RadioGroup id="f1" onChange={setValue1} value={value1}>
                                <Stack direction="column">
                                    <Radio id="1" colorScheme="teal" size="lg" value="1">Increased use of postage</Radio>
                                    <Radio id="2" colorScheme="teal" size="lg" value="2">Made it more power efficient</Radio>
                                    <Radio id="3" colorScheme="teal" size="lg" value="3">Reduced overall energy usage</Radio>
                                    <Radio id="4" colorScheme="teal" size="lg" value="4">Reduced manufacturing costs</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <Alert id="2c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="2r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">2. By what percentage has paper usage decreased due to email?</FormLabel>
                            <RadioGroup onChange={setValue2} value={value2}>
                                <Stack direction="column">
                                    <Radio id="5" colorScheme="teal" size="lg" value="1">40.0%</Radio>
                                    <Radio id="6" colorScheme="teal" size="lg" value="2">29.5%</Radio>
                                    <Radio id="7" colorScheme="teal" size="lg" value="3">39.5%</Radio>
                                    <Radio id="8" colorScheme="teal" size="lg" value="4">35.9%</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <Alert id="3c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="3r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">3. Select the negative effect of technology mentioned on the page:</FormLabel>
                            <RadioGroup onChange={setValue3} value={value3}>
                                <Stack direction="column">
                                    <Radio id="9" colorScheme="teal" size="lg" value="1">Toxic materials are released into the atmosphere</Radio>
                                    <Radio id="10" colorScheme="teal" size="lg" value="2">Poverty rates increased</Radio>
                                    <Radio id="11" colorScheme="teal" size="lg" value="3">100 million tonnes of waste created</Radio>
                                    <Radio id="12" colorScheme="teal" size="lg" value="4">Less rare-earth materials are found</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <Alert id="4c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="4r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">4. How many tonnes of electrical waste are disposed of every year?</FormLabel>
                            <RadioGroup onChange={setValue4} value={value4}>
                                <Stack direction="column">
                                    <Radio id="13" colorScheme="teal" size="lg" value="1">1 bilion</Radio>
                                    <Radio id="14" colorScheme="teal" size="lg" value="2">1 million</Radio>
                                    <Radio id="15" colorScheme="teal" size="lg" value="3">800 million</Radio>
                                    <Radio id="16" colorScheme="teal" size="lg" value="4">100 million</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <Alert id="5c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="5r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">5. Select the power requirements of a server, compared to a PC:</FormLabel>
                            <RadioGroup onChange={setValue5} value={value5}>
                                <Stack direction="column">
                                    <Radio id="17" colorScheme="teal" size="lg" value="1">The same</Radio>
                                    <Radio id="18" colorScheme="teal" size="lg" value="2">Lower</Radio>
                                    <Radio id="19" colorScheme="teal" size="lg" value="3">Higher</Radio>
                                    <Radio id="20" colorScheme="teal" size="lg" value="4">None of the above</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px" pb="50px">
                            <Alert id="6c" display="none" status="success" variant="solid" mb="10px">
                                <AlertIcon />
                                Question correct!
                            </Alert>
                            <Alert id="6r" display="none" status="error" variant="solid" mb="10px">
                                <AlertIcon />
                                Question Incorrect.
                            </Alert>
                            <FormLabel fontSize="lg">6. To be manufactured, phones require:</FormLabel>
                            <RadioGroup onChange={setValue6} value={value6}>
                                <Stack direction="column">
                                    <Radio id="21" colorScheme="teal" size="lg" value="1">22kg of chemicals</Radio>
                                    <Radio id="22" colorScheme="teal" size="lg" value="2">150 litres of water</Radio>
                                    <Radio id="23" colorScheme="teal" size="lg" value="3">250kg of fuel</Radio>
                                    <Radio id="24" colorScheme="teal" size="lg" value="4">25kg of chemicals</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <Flex>
                            <Button colorScheme="teal" size="lg" onClick={checkAnswers}>Finish Quiz</Button>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )

    function checkAnswers() {
        window.scrollTo(0, 0)
        if (value1 == 2) {
            document.getElementById('1c').style.display = "flex";
            document.getElementById('1r').style.display = "none";
        } else {
            document.getElementById('1r').style.display = "flex";
            document.getElementById('1c').style.display = "none";
        }
        if (value2 == 3) {
            document.getElementById('2c').style.display = "flex";
            document.getElementById('2r').style.display = "none";
        } else {
            document.getElementById('2r').style.display = "flex";
            document.getElementById('2c').style.display = "none";
        }
        if (value3 == 1) {
            document.getElementById('3c').style.display = "flex";
            document.getElementById('3r').style.display = "none";
        } else {
            document.getElementById('3r').style.display = "flex";
            document.getElementById('3c').style.display = "none";
        }
        if (value4 == 2) {
            document.getElementById('4c').style.display = "flex";
            document.getElementById('4r').style.display = "none";
        } else {
            document.getElementById('4r').style.display = "flex";
            document.getElementById('4c').style.display = "none";
        }
        if (value5 == 3) {
            document.getElementById('5c').style.display = "flex";
            document.getElementById('5r').style.display = "none";
        } else {
            document.getElementById('5r').style.display = "flex";
            document.getElementById('5c').style.display = "none";
        }
        if (value6 == 1) {
            document.getElementById('6c').style.display = "flex";
            document.getElementById('6r').style.display = "none";
        } else {
            document.getElementById('6r').style.display = "flex";
            document.getElementById('6c').style.display = "none";
        }

    }
}