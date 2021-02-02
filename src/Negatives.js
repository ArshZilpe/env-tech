import React from 'react';
import {
    ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Heading, Flex, Image, UnorderedList, ListItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    SimpleGrid, useColorMode, useColorModeValue
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Negatives() {

    const { toggleColorMode } = useColorMode()
    const tealR = useColorModeValue("teal.400", "teal.300")
    return (
        <Box>            
            <Flex height="50px" align="center">
                <ColorModeSwitcher justifySelf="right" />
            </Flex>
            <Flex width="100%" padding="15px">
                <Flex width="100%" marginTop="100px" justify="center">

                    <Flex maxWidth="1000px" direction="column" align="center">

                        <Box maxW="50rem">
                            <Heading lineHeight="1.2" size="3xl" color={tealR}>Negative Impacts</Heading>
                            <Text paddingTop="15px" fontSize="2xl">
                                Technology has also caused a negative effect on the environment.
                        </Text>

                            <Flex paddingTop="15px">
                                <Text fontSize="xl">
                                    There are still some drawbacks to the adoption of technology, including the environmental impact of increased demand in the field. Some argue that
                                    technology has had a net-negative impact on the enviroment. Below are some of the points that are brought up:
                                </Text>
                                <Image display={['none', 'flex']} borderRadius="10px" marginRight="20px" maxWidth="300px" src="http://environmentinsider.com/wp-content/uploads/2014/06/ase18.jpg" />
                            </Flex>
                            <Flex textAlign="center" flexDirection="column">
                                <Text fontWeight="500" paddingTop="40px" fontSize="2xl">Studies clearly show that our current understanding of the health and environmental impacts of
                                computers is inadequate. We can no longer ignore
                                the potential for serious long-term problems. Users should think carefully about whether they really need to buy a new computer; if upgrading the existing
                            machine could serve the same purpose. </Text>
                                <Text fontWeight="500" fontSize="2xl" paddingTop="15px" color={tealR}> - Hans van Ginkel, UN University</Text>
                            </Flex>
                            <UnorderedList pt="30px" marginBottom="50px">
                                <ListItem fontSize="xl" pt="15px">Energy consumption: All electronics require some form of electricity to function. Most tablets, laptops
                                and phones require a charge every few hours to keep using. This also leads to a degredation in the Litium Ion batteries, which means that
                                they have to be replaced to return to their 'new like' state. This leads to more environmental concerns, since Lithium Ion batteries use rare earth
                                materials, which will be thrown away after a few years when they degrade/stop functioning. Nevertheless, the surge in use for technology has
                            lead to a significant increase in power usage, indirectly creating more greenhouse gases.</ListItem>
                                <ListItem fontSize="xl" pt="15px">Waste: The current mindset of consumers, especially younger ones, is that new electronics, like phones, need to be 
                                bought every few years in order to have a 'pleasant' experience. There are various factors which have lead to this. However, the environmental 
                                impact of this is that a lot of waste is created. Depsite various efforts for reusing and recycling components, many toxic materials are crushed
                                and released into the atmosphere, contributing to climate change.</ListItem>
                            </UnorderedList>
                            <Image src="https://bam.files.bbci.co.uk/bam/live/content/z2rmsbk/large" width="100%" borderRadius="15px" marginBottom="100px" />
                        </Box>


                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}