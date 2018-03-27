import React from "react";
import { BeatLoader } from "halogenium";

const Input = ({ address, onAddressChange, callAPI, isLoading }) => (
  <form className="form">
    <input
      className="form__input"
      type="text"
      placeholder="Enter Address (ex. 2538 Hoard Street)"
      value={address}
      onChange={onAddressChange}
      autoFocus
    />
    <div className="form__bottom-box">
      {isLoading ? (
        <BeatLoader color="#78e3fd" size="2rem" margin="0.5rem" />
      ) : (
        <button className="form__btn" onClick={callAPI}>
          Get Weather &rarr;
        </button>
      )}
    </div>
  </form>
);

export default Input;
