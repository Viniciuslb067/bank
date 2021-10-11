import { useToast } from '@chakra-ui/toast';

import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const toast = useToast();
  return (
    <AuthLayout title="Registrar na plataforma">
      <RegisterForm
        onSuccess={() =>
          toast({
            title: 'Cadastrado com sucesso.',
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
      />
    </AuthLayout>
  );
};
