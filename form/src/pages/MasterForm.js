import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import InputMask from 'react-input-mask'
import './style/Home.css';


const validationSchema = yup.object({
  email: yup
    .string('Wprowadź email')
    .email('Wprowadzono niepoprawny email')
    .required('Email jest wymagany'),
  name: yup
    .string("Wprowadź swoję imie")
    .required('Imię jest wymagane')
    .matches(
      /^[A-Z].*$/,
      "Wprowadź imię z dużej litery"
    )
  ,
  surname: yup
    .string("Wprowadź swoję nazwisko")
    .required('Nazwisko jest wymagane')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwisko z dużej litery"
    )
  ,
  password: yup
    .string('Wprowadź hasło')
    .min(8, 'Hasło powinno mieć conajmniej 8 znaków')
    .required('Hasło jest wymagane'),
});

const inputStyle = {
   style: { 
    fontSize: 22,
    color: 'white',
    shrink: true,
  } 
}

const inputLabelStyle = {
  floatingLabelFocusStyle: { 
   fontSize: 400,
  //  color: 'white',
  }
}

const values = {
  defaultDateValue: "1998-06-13"
};

const MasterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
  <React.Fragment>
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" justifyContent="center">
        <Typography variant='h3'>
          Dane osobowe
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Imię"
              placeholder="Piotrek"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box p={3}> 
            <TextField
              fullWidth
              id="surname"
              name="surname"
              label="Nazwisko"
              placeholder="Sobieszczyk"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
            <TextField
              id="date"
              label="Data urodzenia"
              type="date"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              defaultValue={values.defaultDateValue}
            />
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box p={3}>
            <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Telefon"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><PhoneIcon/></InputAdornment>,
                }}
                InputLabelProps={inputLabelStyle}
                value={formik.values.phone}
                onChange={formik.handleChange}
              >
              <InputMask mask="(0)999 999 99 99" maskChar=" " />
            </TextField>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant='h3'>
              Pokój
            </Typography>
          </Box>
          <Box p={1}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Wyślij
            </Button>
          </Box>
      </form>
    </React.Fragment>
  );
};


export default MasterForm;
