import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {MyCheckbox, MyTextInput,  MySelect} from '../components'
import '../styles/styles.css'
// import { MyTextInput } from '../components/MyTextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';


export const FormikAbstractation = () => {
//Campos y tipos de el formulario
  interface FormValues{ 
    firstName: string;
    lastName: string;
    email: string;
  }  



  return (
    <div>
        <h1>Formik Abstractation</h1>
        <Formik
          initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            terms: false,
            jobType:'',
          }}
          onSubmit={(values)=>{
            console.log(values)

          }}
          validationSchema={Yup.object({
            firstName:Yup.string()
                          .max(15,'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
    
            lastName:Yup.string()
                          .max(15,'Debe de tener 10 caracteres o menos')
                          .required('Requerido'),
            
            email:Yup.string()
                      .email('Email no tiene un formato válido')
                      .required('Requerido'),

            terms:Yup.boolean()
                      .oneOf([true], 'Debe de aceptar las condiciones'), //Condicion para que acepte las condiciones
                    
            jobType:Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
                    })
                  }
        >
          {
            (formik)=>(
                  <Form>
                    <MyTextInput label="First Name" name="firstName" placeholder='Sergio'/>
                    <MyTextInput label="Lats Name" name="lastName" placeholder='Vicente'/>
                    <MyTextInput label="Email" name="email" placeholder='sergio@google.com' type="email"/>

                    <MySelect label="job Type" name="jobType">
                        <option value="">Pick Something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT Junior</option>
                    </MySelect>
                      
                    <MyCheckbox label='Terms & Conditions' name="terms"/>

                    <button type='submit'>Submit</button>

                  </Form>
                )
          }

        </Formik>

        
      
    </div>
  )
}


