import AuthForm from '../AuthForm/AuthForm';
function Login({
  handleChange,
  handleSubmit,
  errors,
  isValid,
  serverError,
  errorVisible,
}) {
  return (
    <section className='Login'>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
        serverError={serverError}
        errorVisible={errorVisible}
      ></AuthForm>
    </section>
  );
}

export default Login;
