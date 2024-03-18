import React from "react";
import { Box, Heading, Text, Stack, Container, Button, Flex, Image } from "@chakra-ui/react";
import { FaRocket, FaBrain, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.900" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={6}>
            Innovating with AI for a Smarter Future
          </Heading>
          <Text fontSize="xl" mb={10}>
            AICorp: Driving digital transformation through cutting-edge artificial intelligence technologies
          </Text>
          <Button colorScheme="blue" size="lg">
            Learn More
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
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Our Services
          </Heading>
          <Stack spacing={8}>
            <Flex align="center">
              <Box as={FaRocket} size="3em" color="blue.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI Consulting
                </Heading>
                <Text fontSize="lg">We provide expert guidance and strategic consulting services to help businesses integrate AI into their operations and achieve their goals.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaBrain} size="3em" color="blue.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI Solutions Development
                </Heading>
                <Text fontSize="lg">Our team develops custom AI solutions tailored to the specific needs of our clients, leveraging advanced machine learning algorithms and deep learning techniques.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaUsers} size="3em" color="blue.600" mr={4} />
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

      {}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Our Partners and Clients
          </Heading>
          <Stack direction="row" spacing={8} justify="center">
            <Image src="path/to/partner1-logo.png" alt="Partner 1" />
            <Image src="path/to/partner2-logo.png" alt="Partner 2" />
            <Image src="path/to/partner3-logo.png" alt="Partner 3" />
          </Stack>
        </Container>
      </Box>

      {}
      <Box bg="blue.900" color="white" py={24}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={6}>
            Unlock the Power of AI for Your Business
          </Heading>
          <Text fontSize="lg" mb={10}>
            Partner with AICorp's expert team to leverage AI and drive innovation in your industry. Schedule a consultation today.
          </Text>
          <Button colorScheme="blue" size="lg">
            Request a Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
