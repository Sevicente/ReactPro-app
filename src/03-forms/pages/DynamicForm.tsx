import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

const initialValues:{ [key:string]:any } = {};

for(const input of formJson){
    initialValues[input.name] = input.value
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            console.log(values)
        }}
      
      >

        {(formik)=>(
            <Form>

                {formJson.map(({type, name, label, placeholder})=>{

                    return <MyTextInput key={name} type={(type as any)} label={label} name={name} placeholder={placeholder}/>
                })}

                <button type='submit'>Submit</button>

            </Form>
            
        )}

      </Formik>
    </div>
  )
}


