import {useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'


export const FormikYupPage = () => {
//Campos y tipos de el formulario
  interface FormValues{ 
    firstName: string;
    lastName: string;
    email: string;
  }  



    
  const {handleSubmit, errors, touched, getFieldProps} = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:''
    },
    onSubmit: (values) => { //Función que se ejecutara´cuando nuestro formulario sea validado y enviado 
        console.log(values)
    },
    validationSchema: Yup.object({
        firstName:Yup.string()
                      .max(15,'Debe de tener 15 caracteres o menos')
                      .required('Requerido'),

        lastName:Yup.string()
                      .max(15,'Debe de tener 10 caracteres o menos')
                      .required('Requerido'),
        
        email:Yup.string()
                  .email('Email no tiene un formato válido')
                  .required('Requerido'),

        

    })  
  })


  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')}/>
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')}/>
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="firstName">Email Address</label>
            <input type="email" {...getFieldProps('email')}/>
            { touched.email && errors.email && <span>{errors.email}</span>}

            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}


