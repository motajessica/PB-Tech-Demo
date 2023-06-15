import React from 'react';

const CustomRadioButton = ({ field, form, ...props }) => {
  const handleClick = () => {
    form.setFieldValue(field.name, props.value);
  };

  return (
    <button
      type="button"
      className={`btn ${field.value === props.value ? 'btn-primary active' : 'btn-secondary'} me-5 my-4`}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
};

export default CustomRadioButton;
