//css


//valid
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate ,useParams} from 'react-router-dom';

const UpdateContact = ({ stor , onUpdateContact}) =>{
    const { id } = useParams()

    const contact = stor.find( contact =>contact.id === id)

  const initialValues = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar,
    gender: contact.gender,
    status: contact.status,
    favorite: contact.favorite
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.number().max(99,'Max Number Is 99!').min(0,'Please,start with 0').required('Avatar is required'),
    gender: Yup.string().oneOf(['Men', 'Women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends'], 'Invalid status').required('Status is required'),
    favorite: Yup.boolean()
  })

 const navigation = useNavigate()
  const handleSubmit = (values ) => {
    if (contact !== values) {
        onUpdateContact(values)
        
    }
    
    navigation('/contact-list')
  }

  return(
  
      

    <div className="container">
      <div className="modal-content rounded AddPage">
        <div className="modal-header">
          <h1 className='text-center'> Edit Contact</h1>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
              
                <Field type='text' name='name' id='name'/>
                <ErrorMessage name='name' component='p'/>
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <Field type='text' name='phone' id='phone'/>
                <ErrorMessage name='phone'/>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <Field type='email' name='email' id='email'/>
                <ErrorMessage name='email'/>
              </div>
              <div>
                <label htmlFor='avatar'>Avatar</label>
                <Field type='number' name='avatar' id='avatar' min={0} max={99}/>
                <ErrorMessage name='avatar'/>
              </div>
              <div>
                <label htmlFor='gender'>Gender</label>
                <Field as='select' name='gender'>
                  <option value=''>Choose gender</option>
                  <option value='Men'>Men</option>
                  <option value='Women'>Women</option>
                </Field>
                <ErrorMessage name='avatar'/>
              </div>
              <div>
                <label htmlFor='status'>Status</label>
                <Field as='select' name='status'>
                  <option value=''>Choose status</option>
                  <option value='Work'>Work</option>
                  <option value='Family'>Family</option>
                  <option value='Private'>Private</option>
                  <option value='Friends'>Friends</option>
                </Field>
                <ErrorMessage name='avatar'/>
              </div>
              <div className='fav'>
                <label htmlFor='favorite'> *add to Favorite</label>
                <Field  type='checkbox'  name='favorite' id='favorite'/>
                
                <ErrorMessage name='favorite'/>
              </div>
              <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Add</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default UpdateContact
