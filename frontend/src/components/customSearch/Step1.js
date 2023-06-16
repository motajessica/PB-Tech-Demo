import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import CustomSearchHeader from './CustomSearchHeader';
import CustomRadioButton from '../CustomRadioButton';
import Sidebar from "../layout/SideBar";

const Step1 = ({ formState, updateFormState }) => {
  const navigate = useNavigate();

  const laptopTypesOptions = [
    { label: 'Business laptop', value: 'business' },
    { label: '2 in 1 Laptop', value: '2_in_1' },
    { label: 'Chromebook', value: 'chromebook' },
  ];

  const screenSizeOptions = [
    '11 inches',
    '12 inches',
    '13 inches',
    '14 inches',
    '15 inches',
    '16 inches',
    '17 inches',
  ];

  const usageOptions = [
    'General use',
    'Home use',
    'School use',
    'Office work',
    'Gaming',
    'Heavy Work',
    'Programming',
  ];

  return (
    <div>
      <div className="p-4">
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Computers & Tablets</BreadcrumbItem>
          <BreadcrumbItem href="/laptops_types">Laptop Types</BreadcrumbItem>
          <BreadcrumbItem href="/custom_search/step1" active>
            Find your Perfect Laptop
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12">
            <CustomSearchHeader />
            <p className="">
              With all different specs and extras added to Laptops, it can get confusing when trying to decide which
              fits you best. Get started by answering the questions below.
            </p>

            <Formik
              initialValues={{
                laptopType: formState.laptopType || '',
                screenSize: formState.screenSize || [],
                purposes: formState.purposes || [],
              }}
              onSubmit={(values) => {
                updateFormState({ ...formState, ...values });
                navigate('/custom_search/step2');
              }}
            >
              <Form className="form">
                <div className="form-group mb-3 mt-5">
                  <span className="filter-category-title">What type of laptop are you looking for?</span>
                  <div>
                    {laptopTypesOptions.map((option) => (
                      <Field
                        key={option.value}
                        component={CustomRadioButton}
                        name="laptopType"
                        id={`laptopType_${option.value}`}
                        value={option.value}
                        label={option.label}
                      />
                    ))}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label className="filter-category-title">Screen size</label>
                  <div className="form-check mt-3">
                    {screenSizeOptions.map((option) => (
                      <div key={option}>
                        <Field
                          type="checkbox"
                          name="screenSize"
                          value={option}
                          className="form-check-input checkboxes "
                        />
                        <label className="form-check-label mb-3">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label className="filter-category-title">What kind of work will you do with this laptop?</label>
                  <div className="form-check mt-3">
                    {usageOptions.map((option) => (
                      <div key={option}>
                        <Field
                          type="checkbox"
                          name="purposes"
                          value={option}
                          className="form-check-input"
                        />
                        <label className="form-check-label mb-3">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <button
                    type="submit"
                    className="navigation"
                  >
                    Next
                    <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
