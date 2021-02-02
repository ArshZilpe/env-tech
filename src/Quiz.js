import React, { useState } from 'react';
import {
    ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue, FormControl, FormLabel, FormErrorMessage, FormHelperText, Radio, RadioGroup, Button, Stack
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Quiz() {

    const { toggleColorMode } = useColorMode()
    const tealR = useColorModeValue("teal.400", "teal.300")
    const [value1, setValue1, value2, setValue2, value3, setValue3, value4, setValue4, value5, setValue5, value6, setValue6] = React.useState("0")

    return (
        <Box>
            <Flex height="50px" align="center">
                <ColorModeSwitcher justifySelf="right" />
            </Flex>
            <Flex width="100%" padding="15px">
                <Flex width="100%" marginTop="100px" justify="center">

                    <Flex width="700px" direction="column">

                        <Box maxW="50rem">
                            <Heading width="100%" lineHeight="1.2" size="3xl" color={tealR}>Quiz</Heading>
                            <Text width="100%" paddingTop="15px" fontSize="2xl">
                                Check your knowledge on the subject.
                            </Text>
                        </Box>
                        <FormControl id="1" pt="20px">
                            <FormLabel fontSize="lg">1. What has the advancement of technology done?</FormLabel>
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack direction="column">
                                    <Radio id="1" colorScheme="teal" size="lg" value1="1">Increased use of postage</Radio>
                                    <Radio id="2" colorScheme="teal" size="lg" value1="2">Made it more power efficient</Radio>
                                    <Radio id="3" colorScheme="teal" size="lg" value1="3">Reduced overall energy usage</Radio>
                                    <Radio id="4" colorScheme="teal" size="lg" value1="4">Reduced manufacturing costs</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <FormLabel fontSize="lg">2. By what percentage has paper usage decreased due to email?</FormLabel>
                            <RadioGroup onChange={setValue2} value={value2}>
                                <Stack direction="column">
                                    <Radio id="5" colorScheme="teal" size="lg" value2="5">40.0%</Radio>
                                    <Radio id="6" colorScheme="teal" size="lg" value2="6">29.5%</Radio>
                                    <Radio id="7" colorScheme="teal" size="lg" value2="7">39.5%</Radio>
                                    <Radio id="8" colorScheme="teal" size="lg" value2="8">35.9%</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <FormLabel fontSize="lg">3. Select the negative effect of technology mentioned on the page:</FormLabel>
                            <RadioGroup onChange={setValue3} value={value3}>
                                <Stack direction="column">
                                    <Radio id="9" colorScheme="teal" size="lg" value3="1">Toxic materials are released into the atmosphere</Radio>
                                    <Radio id="10" colorScheme="teal" size="lg" value3="2">Poverty rates increased</Radio>
                                    <Radio id="11" colorScheme="teal" size="lg" value3="3">100 million tonnes of waste created</Radio>
                                    <Radio id="12" colorScheme="teal" size="lg" value3="4">Less rare-earth materials are found</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <FormLabel fontSize="lg">4. How many tonnes of electrical waste are disposed of every year?</FormLabel>
                            <RadioGroup onChange={setValue4} value={value4}>
                                <Stack direction="column">
                                    <Radio id="13" colorScheme="teal" size="lg" value4="1">1 bilion</Radio>
                                    <Radio id="14" colorScheme="teal" size="lg" value4="2">1 million</Radio>
                                    <Radio id="15" colorScheme="teal" size="lg" value4="3">800 million</Radio>
                                    <Radio id="16" colorScheme="teal" size="lg" value4="4">100 million</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="1" pt="20px">
                            <FormLabel fontSize="lg">5. Select the power requirements of a server, compared to a PC:</FormLabel>
                            <RadioGroup onChange={setValue5} value={value5}>
                                <Stack direction="column">
                                    <Radio id="13" colorScheme="teal" size="lg" value5="1">The same</Radio>
                                    <Radio id="14" colorScheme="teal" size="lg" value5="2">Lower</Radio>
                                    <Radio id="15" colorScheme="teal" size="lg" value5="3">Higher</Radio>
                                    <Radio id="16" colorScheme="teal" size="lg" value5="4">None of the above</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>


                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}