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
            더 스마트한 미래를 위한 AI 혁신
          </Heading>
          <Text fontSize="xl" mb={10}>
            AICorp: 최첨단 인공지능 기술로 디지털 혁신을 주도합니다
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
            회사 소개
          </Heading>
          <Text fontSize="lg" mb={8}>
            AICorp는 기업과 개인을 위한 혁신적인 솔루션 개발에 전념하는 선도적인 AI 기업입니다. 전문 데이터 과학자와 엔지니어로 구성된 팀과 함께 인공지능의 힘을 활용하여 복잡한 문제를 해결하고 변혁적인 변화를 이끌어냅니다.
          </Text>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEwNzQyMDMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI 기술" mb={8} />
          <Text fontSize="lg">우리의 사명은 AI의 잠재력을 활용하여 생산성을 높이고 운영을 간소화하며 성장을 위한 새로운 기회를 열어주는 지능형 시스템을 만드는 것입니다. 우리는 AI로 가능한 한계를 뛰어넘고 고객에게 탁월한 가치를 제공하기 위해 최선을 다하고 있습니다.</Text>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            서비스
          </Heading>
          <Stack spacing={8}>
            <Flex align="center">
              <Box as={FaRocket} size="3em" color="blue.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI 컨설팅
                </Heading>
                <Text fontSize="lg">기업이 AI를 운영에 통합하고 목표를 달성할 수 있도록 전문적인 지침과 전략적 컨설팅 서비스를 제공합니다.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaBrain} size="3em" color="blue.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI 솔루션 개발
                </Heading>
                <Text fontSize="lg">우리 팀은 고급 머신러닝 알고리즘과 딥러닝 기술을 활용하여 고객의 특정 요구 사항에 맞춘 맞춤형 AI 솔루션을 개발합니다.</Text>
              </Box>
            </Flex>
            <Flex align="center">
              <Box as={FaUsers} size="3em" color="blue.600" mr={4} />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  AI 교육 및 지원
                </Heading>
                <Text fontSize="lg">기업이 AI 기술을 효과적으로 활용하는 데 필요한 지식과 기술을 갖출 수 있도록 종합적인 교육 프로그램과 지속적인 지원을 제공합니다.</Text>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            파트너 및 고객사
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
            비즈니스를 위한 AI의 힘을 활용하세요
          </Heading>
          <Text fontSize="lg" mb={10}>
            AICorp의 전문 팀과 협력하여 AI를 활용하고 귀하의 산업에서 혁신을 이끌어 내세요. 오늘 상담을 예약하세요.
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
