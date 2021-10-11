import { v } from '../../../../lib/validator';

export default v.object().shape({
  name: v.string().required('Nome é obrigatório'),
  email: v.string().email('Email não é válido').required('Email é obrigatório'),
  password: v.string().required('Senha é obrigatório'),
  confirmPassword: v.string().oneOf([v.ref('password'), null], 'As senhas devem ser iguais'),
});
