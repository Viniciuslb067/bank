import { Container, Heading, Text, Flex } from '@chakra-ui/react';
import PillPity from 'pill-pity';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <>
      <PillPity
        pattern="topography"
        as={Flex}
        direction="column"
        center
        position="relative"
        w="100%"
        minH="100vh"
        pb="5%"
        pt={10}
        bgColor="brand.600"
        patternFill="whiteAlpha.300"
        patternOpacity={0.3}
      >
        <Container maxW="container.md">
          <Flex
            direction="column"
            center
            w="70%"
            bg="white"
            mx="auto"
            py={8}
            px={12}
            borderRadius="lg"
            boxShadow="md"
          >
            {title && (
              <Heading as="h1" fontSize="2xl" mb={8} textTransform="uppercase" textAlign="center">
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text
                fontSize="sm"
                maxW="60%"
                mb={12}
                fontWeight="normal"
                textAlign="center"
                mx="auto"
              >
                {subtitle}
              </Text>
            )}
            {children}
          </Flex>
        </Container>
      </PillPity>
    </>
  );
};
