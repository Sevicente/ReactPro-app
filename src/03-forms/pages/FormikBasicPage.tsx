import { FormikErrors, useFormik } from 'formik'


import '../styles/styles.css'
import { error } from 'console';

export const FormikBasicPage = () => {
//Campos y tipos de el formulario
  interface FormValues{ 
    firstName: string;
    lastName: string;
    email: string;
  }  


//Función que valida los campos de el formulario y envia un error si no cumplen las condiciones
  const validate = ({firstName, lastName, email}: FormValues) => {

    const errors: FormikErrors<FormValues> = {};

    if(!firstName){
        errors.firstName ='Required'
    }else if(firstName.length > 15){
        errors.firstName='Must be 15 caracters or less'
    }

    if(!lastName){
        errors.lastName ='Required'
    }else if(lastName.length > 10){
        errors.lastName='Must be 10 caracters or less'
    }

    if (!email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
      }

    return errors;
  }
    
  const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:''
    },
    onSubmit: (values) => { //Función que se ejecutara´cuando nuestro formulario sea validado y enviado 
        console.log(values)
    },
    validate //Función para validar los campos 
  })


  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' onBlur={handleBlur} onChange={handleChange} value={values.firstName}/>
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' onBlur={handleBlur} onChange={handleChange} value={values.lastName}/>
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="firstName">Email Address</label>
            <input type="email" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email}/>
            { touched.email && errors.email && <span>{errors.email}</span>}

            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}


