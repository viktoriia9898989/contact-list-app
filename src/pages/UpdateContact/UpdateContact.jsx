import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from '../../redux/actions';
import '../NewContact/NewContact.css'
import {FaCheck, FaEnvelope, FaImage, FaPhone, FaUser, } from "react-icons/fa";


const UpdateContact = () => {
  const contacts = useSelector((state) => state.contacts);
  const { id } = useParams();
  const dispatch = useDispatch();

  const contact = contacts.find((contact) => contact.id === id);

  const initialValues = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar,
    gender: contact.gender,
    status: contact.status,
    favorite: contact.favorite,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.number()
      .max(99, 'Max Number Is 99!')
      .min(0, 'Please, start with 0')
      .required('Avatar is required'),
    gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string()
      .oneOf(['Work', 'Family', 'Private', 'Friends'], 'Invalid status')
      .required('Status is required'),
    favorite: Yup.boolean(),
  });

  const navigation = useNavigate();

  const handleUpdateContact = (updatedContact) => {
    dispatch(updateContact(updatedContact));
    navigation('/');
  };

  return (
    <div className='new-contact-container'>
      <div>
        <div>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdateContact}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="p" />
              
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <Field type="text" name="phone" id="phone" />
                <ErrorMessage name="phone" component="p" />
              
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="p"/>
            
              </div>
              <div>
                <label htmlFor="avatar">Avatar</label>
                <Field type="number" name="avatar" id="avatar" min={0} max={99} />
                <ErrorMessage name="avatar"  component="p"/>
              
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="">Choose gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </Field>
                <ErrorMessage name="gender" component="p" />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <Field as="select" name="status">
                  <option value="">Choose status</option>
                  <option value="Work">Work</option>
                  <option value="Family">Family</option>
                  <option value="Private">Private</option>
                  <option value="Friends">Friends</option>
                </Field>
                <ErrorMessage name="status" component="p" />
              </div>
              <div className="fav">
                <label htmlFor="favorite">* Add to Favorite</label>
                <Field type="checkbox" name="favorite" id="favorite" />
                <ErrorMessage name="favorite" component="p" />
              </div>
              <button type="submit" className='add-btn' disabled={isSubmitting}>
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateContact;
