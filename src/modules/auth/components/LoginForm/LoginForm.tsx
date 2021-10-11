import { Button, Flex } from '@chakra-ui/react';

import { Link } from '../../../../components/common/Link';
import { FieldWrapper, Form, TextInput } from '../../../../components/Form';
import { LoginCredentials } from '../../api/types';

import schema from './schema';

type LoginFormProps = {
  onSuccess: () => void;
  onError: (message: string) => void;
};

export const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  // const { login, isLoggingIn } = useAuth();

  return (
    <Form<LoginCredentials>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          alert('SUCESS');
          onSuccess();
        } catch (err: any) {
          alert('ERROR');
        }
      }}
      validationSchema={schema}
    >
      {() => (
        <Flex direction="column" w="100%">
          <FieldWrapper
            name="email"
            required
            label="E-mail"
            as={(props) => <TextInput type="email" {...props} />}
          />
          <FieldWrapper
            name="password"
            required
            label="Senha"
            as={(props) => <TextInput type="password" {...props} />}
          />

          <Flex direction="column" center spaceBetween>
            <Button size="sm" as={Link} to="../cadastro" mb={4} variant="ghost">
              Não tem uma conta?
            </Button>
            <Button type="submit" className="w-full" variant="@primary" w="100%">
              Entrar
            </Button>
          </Flex>
        </Flex>
      )}
    </Form>
  );
};
