import { Flex } from '@chakra-ui/layout';
import { ChakraProvider, Spinner, ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { APP_NAME } from '../config';
import { theme, Fonts } from '../styles';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      }
    >
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <title>{APP_NAME}</title>
        </Helmet>
        <ChakraProvider
          theme={{
            ...theme,
          }}
        >
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Fonts />
          <Router>{children}</Router>
        </ChakraProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};
