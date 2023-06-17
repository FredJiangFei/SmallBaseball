import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SfLink from '../../components/SfLink';
import { Toggle, ToggleButton, ToggleOff, ToggleOn } from '../../components/Toggle';
import { Switch } from '../../components/switch/switch';
import useToggleProps from '../../hooks/useToggleProps';
import React from 'react';
import { useForceRerender } from '../../utils/utils';
import { getItems } from '../../utils/filter-cities';
import { useCombobox } from '../../hooks/useCombobox';
import { SfMenu } from '../../components/SfMenu';

const loadGlobe = () => import('../../components/globe');
const Globe = React.lazy(loadGlobe);

const schema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
    .required('Password Confirmation is required')
    .oneOf([Yup.ref('password')], 'The two passwords you entered did not match'),
  firstName: Yup.string().required('FirstName is required'),
  lastName: Yup.string().required('LastName is required'),
});

function SignUp() {
  const navigate = useNavigate();
  const { on, togglerProps } = useToggleProps();
  const [showGlobe, setShowGlobe] = React.useState(false);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: schema,
    onSubmit: (values: any) => handleRegister(values),
  });

  const handleRegister = async (values: any) => {
    await userService.register(values);
    navigate('/auth/sign-in');
  };

  const forceRerender = useForceRerender();
  const [inputValue, setInputValue] = React.useState('');

  const allItems = React.useMemo(() => getItems(inputValue), [inputValue]);
  const items = allItems.slice(0, 100);

  const {
    selectedItem,
    highlightedIndex,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    selectItem,
  }: any = useCombobox({
    items,
    inputValue,
    onInputValueChange: ({ inputValue: newValue }: any) => setInputValue(newValue),
    itemToString: (item: any) => (item ? item.name : ''),
  });

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.firstName && errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.lastName && errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.passwordConfirmation && errors.passwordConfirmation)}
          helperText={touched.passwordConfirmation && errors.passwordConfirmation}
        />
        {/* <Toggle>
          <span>Open to join team: </span>
          <ToggleOn></ToggleOn>
          <ToggleOff></ToggleOff>
          <div>
            <ToggleButton />
          </div>
        </Toggle> */}

        <Switch on={on} {...togglerProps} />
        <hr />
        <Button type="button" variant="contained" aria-label="custom-button" {...togglerProps}>
          {on ? 'on' : 'off'}
        </Button>

        <div>
          <label style={{ marginBottom: '1rem' }}>
            <input
              type="checkbox"
              checked={showGlobe}
              onChange={e => setShowGlobe(e.target.checked)}
            />
            {' Choose my location'}
          </label>
          <React.Suspense fallback={<div>loading globe...</div>}>
            {showGlobe ? <Globe /> : null}
          </React.Suspense>
        </div>
        <div className="city-app">
          <button onClick={forceRerender}>force rerender</button>
          <div>
            <label {...getLabelProps()}>Find a city</label>
            <div>
              <input {...getInputProps({ type: 'text' })} />
              <button type='button' onClick={() => selectItem(null)} aria-label="toggle menu">
                &#10005;
              </button>
            </div>
            <SfMenu
              items={items}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              selectedItem={selectedItem}
            />
          </div>
        </div>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container>
          <Grid item display="flex" flex={1} justifyContent="center">
            <SfLink to="/auth/sign-in"> Sign In</SfLink>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignUp;
