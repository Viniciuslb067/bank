import { Image, ImageProps, Flex, Text } from '@chakra-ui/react';

import brandLogo from '../../../assets/logo.png';

export const Logo = (props: ImageProps) => {
  return (
    <Flex align="center">
      <Image mr={4} boxSize="250px" src={brandLogo} {...props} />
      <Text>Amazon Bank</Text>
    </Flex>
  );
};
