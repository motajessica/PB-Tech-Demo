import React from 'react';

const CustomRadioButton = ({ field, form, ...props }) => {
  return (
    <div className="btn-group" role="group" aria-label={props.name}>
      <input
        type="radio"
        className="btn-check"
        name={props.name}
        id={props.id}
        autoComplete="off"
        value={props.value}
        checked={field.value === props.value}
        onChange={field.onChange}
      />
      <label className={`btn ${props.checked ? 'btn-secondary active' : 'btn-secondary'}`} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
