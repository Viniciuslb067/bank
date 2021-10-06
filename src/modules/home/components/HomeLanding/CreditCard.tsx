import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  Image,
  IconButton,
} from '@chakra-ui/react';

export const CreditCard = () => {
  return (
    <Container maxW={'full'} bg="#f1f0f0">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        px={{ base: 300 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} px="7xl">
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
              Cartão de credito,
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
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}
              rightIcon={<ArrowForwardIcon />}
            >
              Saiba mais
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
          <Box
            position={'relative'}
            rounded={'2xl'}
            width={'full'}
            boxShadow={'2xl'}
            overflow={'hidden'}
            height={'400px'}
          >
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
