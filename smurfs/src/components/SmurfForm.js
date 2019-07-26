import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='name' />
      </div>
      <div>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type='number' name='age' placeholder='age' />
      </div>
      <div>
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field type='text' name='height' placeholder='height' />
      </div>
      <button disabled={isSubmitting}>Add Smurf</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || '',
      age: age || '',
      height: height || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('name is required'),
    age: Yup.string().required('age is required'),
    height: Yup.string().required('height is required'),
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        document.location.reload();
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  },
})(SmurfForm);

export default FormikLoginForm;
