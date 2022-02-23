import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    /*     <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />         
        </form>   */


      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5"></Form.Label>
        <Form.Control
          type="text"
          onChange={handleInputChange}
          placeholder="Type your awesome Gif!"
        />
      </form>
  

  );
};

AddCategory.protoTypes = {
  setCategories: PropTypes.func.isRequired,
};

//NUEVA CONSTANTE

/* const [ShowCategoriAlert, inputValue, setInputValue, setShowCategoriAlert] = useState(false); */

//VALIDACION

/*  if (inputValue.trim().length > 2) {
            setCategories((categories) => [...categories, inputValue]);
            setShowCategoriAlert(false);
       
            setInputValue("");
          } else {
            setShowCategoriAlert(true);
          }  */

// RETORNA
/* return (
        <form onSubmit={handleSubmit}>
          {" "}
          {ShowCategoriAlert && <p>Ingresa una categoria valida</p>}
          <input
            type="text"
            name="categories"
            id="categories"
            placeholder="Search Categories"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      ); */
