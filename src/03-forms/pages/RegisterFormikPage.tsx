
import { Form, Formik, FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css'



export const RegisterFormikPage = ()=>{

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
      initialValues={{
        name: '',
        email:'',
        password1:'',
        password2:'',
      }}

      onSubmit={(values)=>{
        console.log(values)
      }}
      validationSchema={
        Yup.object({
          name:Yup.string()
                    .min(2,'El nombre debe de ser de 3 caracteres o más')
                    .max(15,'El nombre debe de ser menor de 15 caracteres')
                    .required('Requerido'),
          email:Yup.string()
                    .email('Revise el formato del correo')
                    .required('Requerido'),
          password1: Yup.string()
                        .min(6,'Mínimo 6 letras')
                        .required('Requerido'),
          password2:Yup.string()
                        .oneOf([Yup.ref('password1')],'Las contraseñas no son iguales')
                        .required('Requerido'),
          
                        

        })
      }
      
      >
        {({handleReset} )=>(
          <Form>
            <MyTextInput label='Nombre' name='name' placeholder='Sergio'/>
            <MyTextInput label='Email' name='email' type='email' placeholder='Sergio@google.com'/>
            <MyTextInput label='Password' name='password1' type='password' placeholder='*******'/>
            <MyTextInput label='Password2' name='password2' type='password' placeholder='*******'/>

            <button type="submit">Create</button>
            
            <button type='button' onClick={handleReset}>Reset</button>

          </Form>
        )}


      </Formik>

      
    </div>
  )
}

