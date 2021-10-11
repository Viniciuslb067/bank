import { useToast } from '@chakra-ui/react';

import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const toast = useToast();
  return (
    <AuthLayout title="Entrar">
      <LoginForm
        onSuccess={() =>
          toast({
            title: 'Logado com sucesso.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
        onError={(message) =>
          toast({
            title: message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      ></LoginForm>
    </AuthLayout>
  );
};
