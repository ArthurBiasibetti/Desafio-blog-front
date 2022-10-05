import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('É necessário fornecer um e-mail!').required('e-mail é um campo obrigatório'),
  name: yup.string().max(120, 'Seu nome passa do tamanho máximo aceito').required('nome é um campo obrigatório'),
  password: yup.string().required('senha é um campo obrigatório'),
  rePassword: yup.string().required('confirmar senha é um campo obrigatório'),
});
