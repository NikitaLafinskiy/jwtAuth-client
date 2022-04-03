import * as yup from 'yup';

export const authValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('The field is required')
    .email('Has to be an email'),
  password: yup.string().required('The field is required'),
});
