import { v } from '../../../../lib/validator';

export default v.object().shape({
  email: v.string().email('Email não é válido').required('Email é obrigatório'),
  password: v.string().required('Senha é obrigatória'),
});
