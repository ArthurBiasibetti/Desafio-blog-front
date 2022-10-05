import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('É necessário fornecer um e-mail!').required('e-mail é um campo obrigatório'),
  password: yup.string().required('senha é um campo obrigatório'),
});
