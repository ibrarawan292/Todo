import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

    const { handleSubmit, handleBlur, handleChange, handleReset, values, touched, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatar: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Must be 3 characters or long')
                .max(15, 'Must be 15 characters or less')
                .required('First name is Required'),

            LastName: Yup.string()
                .min(3, 'Must be 3 characters or long')
                .max(15, 'Must be 15 characters or less')
                .required('Last Name name is Required'),

            email: Yup.string().email('Invalid email address').required('Required'),

            password: Yup.string()
                .min(6, 'Must be 6 characters or long')
                .max(15, 'Must be 15 characters or less')
                .required('Password is Required'),

            avatar: Yup.string().required('please upload an image')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })






    return (
        <div className="register-form">
            <div className="container">
                <form onSubmit={handleSubmit} className='register-form-container'>
                    <h2 className='form-title' style={{}}>Sign up</h2>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}

                    />
                    {errors.firstName ?  <p className='error'>Please enter a firstName</p>: null }
                   

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}


                    />
                    <p className='error'>Please enter a lastName</p>

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}


                    />
                    <p className='error'>Please enter a email</p>

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}


                    />
                    <p className='error'>Please enter a Password</p>

                    <label htmlFor="avatar">Please upload a picture</label>
                    <input
                        id="img"
                        name="image"
                        type="file"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.picture}

                    />
                    <p className='error'>Please upload an picture</p>

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Register;