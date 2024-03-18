import React from "react";
import { Box, Heading, Text, Stack, Container, Button, Flex, Image } from "@chakra-ui/react";
import { FaRocket, FaBrain, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to AICorp
          </Heading>
          <Text fontSize="xl" mb={8}>
            Revolutionizing industries with cutting-edge AI solutions
          </Text>
          <Button colorScheme="white" size="lg">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            AICorp is a leading AI company dedicated to developing innovative solutions for businesses and individuals. With a team of expert data scientists and engineers, we leverage the power of artificial intelligence to solve complex problems and drive transformative change.
          </Text>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEwNzQyMDMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" mb={8} />
          <Text fontSize="lg">Our mission is to harness the potential of AI to create intelligent systems that enhance productivity, streamline operations, and unlock new opportunities for growth. We are committed to pushing the boundaries of what's possible with AI and delivering exceptional value to our clients.</Text>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Our Services
          </Heading>
          <Stack spacing={8}>
            <Flex align="center">
              <Box as={FaRocket} size="3em" color="purple.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI Consulting
                </Heading>
                <Text fontSize="lg">We provide expert guidance and strategic consulting services to help businesses integrate AI into their operations and achieve their goals.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaBrain} size="3em" color="purple.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI Solutions Development
                </Heading>
                <Text fontSize="lg">Our team develops custom AI solutions tailored to the specific needs of our clients, leveraging advanced machine learning algorithms and deep learning techniques.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaUsers} size="3em" color="purple.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI Training and Support
                </Heading>
                <Text fontSize="lg">We offer comprehensive training programs and ongoing support to empower businesses with the knowledge and skills necessary to effectively utilize AI technologies.</Text>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Transform Your Business with AI?
          </Heading>
          <Text fontSize="lg" mb={8}>
            Contact us today to learn how AICorp can help you unlock the power of artificial intelligence and drive your business forward.
          </Text>
          <Button colorScheme="white" size="lg">
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
