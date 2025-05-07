import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup';

const initialValues:{ [key:string]:any } = {};
const requiredFields:{ [key:string]:any } = {};

for(const input of formJson){
    initialValues[input.name] = input.value;//Capturamos el valor inicial del input

    if(!input.validations) continue;//Comporbar si tiene o no validaciones

    let schema = Yup.string()//Crear esquema de validaciones

    for (const rule of input.validations) {//Incluir validaciones dentro del schema según el tipo de validación que sea
      if(rule.type === 'required'){
        schema = schema.required('Este campo es requerido')//Incluimos validaciones en el esquema de validaciones
      }

      if(rule.type === 'minLength'){
        schema = schema.min((rule as any).value|| 1,`Mínimo de ${(rule as any).value|| 1} caracteres` )//Incluimos validaciones en el esquema de validaciones
      }

      if(rule.type === 'email'){
        schema = schema.email('Formato del correo incorrecto' )//Incluimos validaciones en el esquema de validaciones
      }


      //...otras reglas
    }

    requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values)
        }}
      
      >

        {(formik)=>(
            <Form>

                {formJson.map(({type, name, label, placeholder, options})=>{

                    if(type === 'input' || type === 'password' || type === 'email'){

                      return <MyTextInput key={name} type={(type as any)} label={label} name={name} placeholder={placeholder}/>

                    }else if(type === 'select'){
                      return (
                        <MySelect key={name} label={label} name={name}>
                            <option value="">Select an option</option>
                            {
                              options?.map(({id,label}) => (
                                <option key={id} value={label}>{label}</option>
                              ))
                            }

                        </MySelect>
                      )
                    }

                  throw new Error(`El tipo ${type} no es soportado`)
                })}

                <button type='submit'>Submit</button>

            </Form>
            
        )}

      </Formik>
    </div>
  )
}


