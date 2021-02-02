import React from 'react';
import {
    ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Positives() {

    const { toggleColorMode } = useColorMode()
    const tealR = useColorModeValue("teal.400", "teal.300")

    return (
        <Flex width="100%">
            <Flex height="50px" align="center">
                <ColorModeSwitcher justifySelf="right" />
            </Flex>
            <Flex width="100%" marginTop="100px" justify="center">

                <Flex maxWidth="1000px" direction="column" align="center">

                    <Box maxW="50rem">
                        <Heading lineHeight="1.2" size="3xl" color={tealR}>Positive Impacts</Heading>
                        <Text paddingTop="15px" fontSize="2xl">
                            Technology has had a mostly positive impact on the environment.
                        </Text>

                        <Flex paddingTop="15px">
                            <Image display={['none', 'flex']} borderRadius="10px" marginRight="20px" maxWidth="300px" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/31/13/spam.jpg?width=1200" />
                            <Text fontSize="xl">
                                The growing digital nature of communication, enternainment and general lifestyle has meant that the net environmental impact of
                                these fields has significantly reduced, as well as people's personal carbon footprints.
                            </Text>
                        </Flex>
                        <SimpleGrid pt="40px" minChildWidth="240px" spacing="40px">
                            <Stat size="3xl">
                                <StatLabel fontSize="xl">Tonnes of CO2 saved</StatLabel>
                                <StatNumber fontSize="5xl">23,475</StatNumber>
                                <StatHelpText fontSize="xl">by emailing</StatHelpText>
                            </Stat>
                            <Stat size="3xl">
                                <StatLabel fontSize="xl">Tonnes of CO2 saved</StatLabel>
                                <StatNumber fontSize="5xl">97,000</StatNumber>
                                <StatHelpText fontSize="xl">by video calling</StatHelpText>
                            </Stat>
                            <Stat size="3xl">
                                <StatLabel fontSize="xl">Decrease in paper usage</StatLabel>
                                <StatNumber fontSize="5xl">39.5%</StatNumber>
                                <StatHelpText fontSize="xl">by online comms</StatHelpText>
                            </Stat>
                        </SimpleGrid>
                        <UnorderedList pt="30px" marginBottom="100px">
                            <ListItem fontSize="xl" pt="15px">Saving energy: New technologies such as LEDs and smart devices  conserve energy. For example, smart plugs automatically turn off power when 
                                the device connected is no longer using electricity. Another example would be smart thermostats that can reduce the temperature of the house when
                                you're not at home.</ListItem>
                            <ListItem fontSize="xl" pt="15px">Using emails and other digital means of communication means that there is no logistics, materials or manufacturing needing
                            to take place. This has lead to a significant decrease in paper usage, as well as letter postage. Overall, this means there is less greenhouse gas emmision.
                            In addition, video conferencing software such as Skype, FaceTime and Teams have reduced environmental damage from travelling.</ListItem>
                            <ListItem fontSize="xl" pt="15px">Technology has allowed for more jobs to transfer to a work-from-home style, and has created even more jobs in the
                            technical space. This has lead a significant reduction in emmissions from commuting, with only a minimal increase in electricity usage.</ListItem>
                            <ListItem fontSize="xl" pt="15px">The smartphone, most notably, has meant that many products have been merged into one. The calculator, the phone, the fax 
                            machine, and more have been merged into one product. This means less resources, both in terms of manufacturing and logistics, are used, leading to a reduction 
                            of carbon from every stage of the process.</ListItem>
                        </UnorderedList>
                    </Box>


                </Flex>
            </Flex>
        </Flex>
    )
}