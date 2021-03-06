import { Container, Stack, Heading, Text, Button, Input } from '@chakra-ui/react';

export const EnterEmail = () => {
  return (
    <Container maxW={'full'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'column' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}
            >
              Digite seu email,
            </Text>
            <br />
            <Text as={'span'} color={'green.400'}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Snippy is a rich coding snippets app that lets you create your own code snippets,
            categorize them, and even sync them in the cloud so you can use them anywhere. All that
            is free!
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'column' }}>
            <Input
              maxW="70%"
              type="email"
              bg="#ebebeb"
              size="md"
              placeholder="Digite seu melhor email..."
            />
            <Button
              rounded={'full'}
              w="10rem"
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}
            >
              Começar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
