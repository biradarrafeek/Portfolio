
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';

const Contact = () => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow p-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          message: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Field name="name" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
            <Field name="email" type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">Message</label>
            <Field name="message" as="textarea" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />

            <button type="submit" disabled={isSubmitting} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
    <Footer className="mt-auto" />
  </div>
);

export default Contact;
