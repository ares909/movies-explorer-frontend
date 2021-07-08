import AuthForm from '../AuthForm/AuthForm';
function Register({ handleChange, handleSubmit, errors, isValid, serverError, errorVisible }) {
  return (
    <section className='Register'>
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

export default Register;
