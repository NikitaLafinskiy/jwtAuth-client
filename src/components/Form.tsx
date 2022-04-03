import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikHelpers,
} from 'formik';
import { authValidationSchema } from 'validators/auth.validator';
import { AuthFormProps } from 'types/authForm.d';
import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks';
import { AuthActions } from 'store/auth/ActionCreators';

function AuthForm() {
  const dispatch = useAppDispatch();
  const { user, isAuth, error } = useAppSelector((state) => state.authReducer);

  const initialFormValues: AuthFormProps = {
    email: '',
    password: '',
  };

  const onSubmit = async (
    values = initialFormValues,
    { setSubmitting }: FormikHelpers<AuthFormProps>
  ) => {
    isAuth
      ? await dispatch(AuthActions.getUser(user.id))
      : await dispatch(AuthActions.register(values.email, values.password));
    // await dispatch(AuthActions.register(values.email, values.password));
    console.log('submitted');
    console.log(isAuth, user, error);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={authValidationSchema}>
      {(formik: FormikProps<AuthFormProps>) => {
        return (
          <>
            <Form>
              <Field name='email' placeholder='Email:' />
              <ErrorMessage name='email' />
              <br />
              <Field type='password' name='password' placeholder='Password:' />
              <ErrorMessage name='password' />
              <br />
              <button
                disabled={!formik.dirty || formik.isSubmitting}
                type='submit'>
                Submit
              </button>
              <br />
            </Form>
            <div>{isAuth ? user.email : 'Please authenticate first'}</div>
          </>
        );
      }}
    </Formik>
  );
}

export default AuthForm;
