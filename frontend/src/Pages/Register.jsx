import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import avatar from '../images/avatar.jpg'

const Register = () => {

    const { handleSubmit, handleBlur, handleChange, values, touched, errors, setFieldValue, setPreview } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatar: avatar,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Must be 3 characters or long')
                .max(15, 'Must be 15 characters or less')
                .required('First name is Required'),

            lastName: Yup.string()
                .min(3, 'Must be 3 characters or long')
                .max(15, 'Must be 15 characters or less')
                .required('Last Name name is Required'),

            email: Yup.string().email('Invalid email address').required('Email is Required'),

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
                    {touched.firstName && errors.firstName ? <p className='error'>{errors.firstName}</p> : null}


                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}


                    />
                    {touched.lastName && errors.lastName ? <p className='error'>{errors.lastName}</p> : null}

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}


                    />
                    {touched.email && errors.email ? <p className='error'>{errors.email}</p> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}


                    />
                    {touched.password && errors.password ? <p className='error'>{errors.password}</p> : null}

                    <label htmlFor="avatar">Please upload a picture</label>
                    <input
                        id="avatar"
                        name="avatar"
                        type="file"
                        onChange={(event) => {
                            let reader = new FileReader();
                            reader.onload = () => {
                                if (reader.readyState === 2) {

                                    console.log(reader.result)
                                    setFieldValue('avatar', reader.result);
                                    setPreview(reader.result)

                                }
                            }
                            reader.readAsDataURL(event.target.files[0])
                        }}
                        onBlur={handleBlur}


                    />
                    {touched.avatar && errors.avatar ? <p className='error'>{errors.avatar}</p> : null}

                    <img className='avatar' src={values.avatar} alt="" />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Register;