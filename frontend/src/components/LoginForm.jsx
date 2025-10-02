import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const history = useHistory()

  const initialValues = { username: '', password: '' }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('/api/login', values)
      const { token } = response.data
      localStorage.setItem('token', token)
      history.push('/')
    } catch (error) {
      setErrors({ submit: 'Invalid username or password' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <label htmlFor='username'>Username</label>
            <Field type='text' name='username' />
            <ErrorMessage name='username' component='div' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
          </div>
          {errors.submit && <div>{errors.submit}</div>}
          <button type='submit' disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
