import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { API } from './globle';

export const FormValidationSchema = yup.object({
  name: yup.string().required("enter valid name").min(3, "type more than 3 letters"),
  Email: yup.string().required("enter valid gamil")
})


export function Register() {
  const navigate = useNavigate();
  const { handleChange, handleBlur, handleSubmit, values, touched, errors, } = useFormik({
    initialValues: {
      name: "",
      Email: "",
      mobileNumber: "",
      City: "",
      State: "",
      Messege: "",
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => { Login(values) }

  });
  const Login=(value)=>{
    fetch(`${API}login`,
    {
        method: "POST",
        body: JSON.stringify(value),
        headers: { 'Content-Type': 'Application/json' }
    })
    .then(() => navigate('/Home'));
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ""} />
        <TextField
          type="text"
          name="Email"
          label="Email"
          variant="outlined"
          value={values.Email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.Email && touched.Email}
          helperText={errors.Email && touched.Email ? errors.Email : ""} />
        <TextField
          type="text"
          name="mobileNumber"
          label="mobile"
          variant="outlined" />
        <TextField
          type="text"
          name="Country"
          label="Country"
          variant="outlined" />
        <TextField
          type="text"
          name="City"
          label="City"
          variant="outlined" />
        <TextField
          type="text"
          name="State"
          label="State"
          variant="outlined" />
        <TextField
          type="text"
          name="Messege"
          label="Messege"
          variant="outlined" />
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </div>
  );
}
