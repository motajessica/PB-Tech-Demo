import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const Step2 = ({ formState, updateFormState }) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="custom-search-title fw-bold mt-5">
        <h1 className="filter-border"> Find your perfect laptop</h1>
      </div>

      <Formik
        initialValues={{
          
        }}
        onSubmit={(values) => {
          updateFormState({ ...formState, ...values});
          // Trigger search submission here. To be implemented at the end
        }}
      >
        <Form className="form">
          {/* Implement fields here */}
          <button type="submit">Find your perfect laptop</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2;
