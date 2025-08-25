import { Formik, Form, Field } from 'formik'

const LoginPage = () => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ setSubmitting }) => {
        console.log('Form is validated! Submitting the form...')
        setSubmitting(false)
      }}
    >
      {() => (
        <Form className='col-12 col-md-6 mt-3 mt-md-0'>
          <h1 class='text-center mb-4'>Войти</h1>
          <div class='form-floating mb-3'>
            <Field
              name='username'
              autocomplete='username'
              required=''
              placeholder='Ваш ник'
              id='username'
              className='form-control'
              value='admin'
            />
            <label for='username'>Ваш ник</label>
          </div>
          <div class='form-floating mb-4'>
            <Field
              name='password'
              autocomplete='current-password'
              required=''
              placeholder='Пароль'
              type='password'
              id='password'
              className='form-control'
              value='admin'
            />
            <label class='form-label' for='password'>
              Пароль
            </label>
          </div>
          <button type='submit' class='w-100 mb-3 btn btn-outline-primary'>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginPage
