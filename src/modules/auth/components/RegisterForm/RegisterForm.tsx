import { Button, Flex } from '@chakra-ui/react';

import { Link } from '../../../../components/common/Link';
import { FieldWrapper, Form, TextInput } from '../../../../components/Form';
import { RegisterCredentials } from '../../api/types';

import scheme from './schema';

type RegisterFormProps = {
  onSuccess: () => void;
  onError: (message: string) => void;
};

export const RegisterForm = ({ onSuccess, onError }: RegisterFormProps) => {
  // const { register, isRegistering } = useAuth();

  return (
    <Form<RegisterCredentials>
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={async (values) => {
        try {
          alert('SUCCESS');
          onSuccess();
        } catch (err: any) {
          alert('ERROR');
        }
      }}
      validationSchema={scheme}
    >
      {() => (
        <Flex direction="column">
          <FieldWrapper
            name="name"
            required
            label="Nome"
            as={(props) => <TextInput type="text" {...props} />}
          />
          <FieldWrapper
            name="email"
            required
            label="Email"
            as={(props) => <TextInput type="email" {...props} />}
          />
          <FieldWrapper
            name="password"
            required
            label="Senha"
            as={(props) => <TextInput type="password" {...props} />}
          />
          <FieldWrapper
            name="confirmPassword"
            required
            label="Confirmar senha"
            as={(props) => <TextInput type="password" {...props} />}
          />
          <Flex direction="column" center spaceBetween>
            <Button w="100%" variant="@primary" my={4}>
              Cadastrar
            </Button>
            <Button size="sm" as={Link} to="../entrar" type="submit" variant="ghost">
              Já possui uma conta?
            </Button>
          </Flex>
        </Flex>
      )}
    </Form>
  );
};
