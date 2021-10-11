import { Image, Flex, ImageProps } from '@chakra-ui/react';

import brandLogo from '../../../assets/logo.svg';

export const Logo = ({ size }, props: ImageProps) => {
  return (
    <Flex direction="column" align="center">
      <Image boxSize={`${size}px`} src={brandLogo} {...props} />
    </Flex>
  );
};
