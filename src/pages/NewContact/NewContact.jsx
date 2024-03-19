//css
import './NewContact.css'

import {FaCheck, FaEnvelope, FaImage, FaPhone, FaUser, } from "react-icons/fa";

import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';


import { useNavigate } from 'react-router-dom';

const NewContact = () =>{
  const dispatch = useDispatch()

  const initialValues = {
    id: uuidv4(),
    name: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.number().max(99,'Max Number Is 99!').min(0,'Please,start with 0').required('Avatar is required'),
    gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends'], 'Invalid status').required('Status is required'),
    favorite: Yup.boolean()
  })

 const navigation = useNavigate()
  const handleSubmit = (values) => {
    dispatch(addContact(values))

  
    navigation('/')
  }

  return(
  
      

    <div className='new-contact-container'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>

             <div className="border-right"></div>
             <div className="border-left"></div>
              <div>
                <Field type='text' name='name' id='name' placeholder='Name' />
                 <FaUser/>
                <ErrorMessage name='name' component='p'/>
              </div>
              <div>
                <Field type='text' name='phone' id='phone'placeholder='Phone' />
                <FaPhone/>
                <ErrorMessage name='phone' component='p'/>
              </div>
              <div>
                <Field type='email' name='email' id='email' placeholder='Email'/>
                <FaEnvelope/>
                <ErrorMessage name='email'/>
              </div>
              <div>
                <Field  type='number' name='avatar' id='avatar' min={0} max={99} placeholder='Enter number 0-99'/>
                <FaImage/>
                <ErrorMessage name='avatar' component='p'/>
              </div>
              <div>
                <Field as='select' name='gender'>
                  <option value=''>Choose gender</option>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>

                </Field>
                <ErrorMessage name='gender' component='p'/>
              </div>
              <div>
            
                <Field as='select' name='status'>
                  <option value=''>Choose status</option>
                  <option value='Work'>Work</option>
                  <option value='Family'>Family</option>
                  <option value='Private'>Private</option>
                  <option value='Friends'>Friends</option>
                </Field>
                <ErrorMessage name='avatar' component='p'/>
              </div>
          


              <div className='fav'>
                <label htmlFor='favorite'> *add to Favorite</label>
                <Field  type='checkbox'  name='favorite' id='favorite'/>
                
                <ErrorMessage name='favorite'/>
              </div>
            
              <button className='add-btn' type='submit' disabled={isSubmitting}>Add New Contact</button>
            </Form>

            
          )}
        </Formik>
    

      

     
    </div>
  )
}

export default NewContact