import React from "react";

export default function NativeSelectDrop() {
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="store-location" className="form-label">
          Store Location
        </label>
        <select className="form-select" id="store-location">
          <option value="Glenfield">Glenfield</option>
          <option value="City">Queen St</option>
          <option value="Manukau">Manukau</option>
        </select>
      </div>
    </div>
  );
}
