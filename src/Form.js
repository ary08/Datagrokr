import React from "react";


function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [storage, setStorage] = React.useState("");
  const [userObject, setObject] = React.useState({});
  const [message, setMessage] = React.useState("");

  const submit = (e) => {
    let obj = {};
    console.log(storage);
    if (isNaN(firstName) && isNaN(lastName) && !mobile && !zip) {
      obj = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        zip: zip
      };
      setFirstName("");
      setLastName("");
      setMobile("");
      setZip("");
      setStorage("");
    }
    if (storage == "locale") {
      window.localStorage.setItem(mobile, obj);
    }
    setObject(obj);
  };

  const numberValidation = (e) => {
    setMobile(e.target.value);
    if (isNaN(e.atrget.value)) {
      setMessage("Only Number Allowed");
    }
  };

  const zipValidation = (e) => {
    setZip(e.target.value);
    if (isNaN(e.atrget.value)) {
      setMessage("Only Number Allowed");
    }
  };

  return (
    <div className="formContainer">
      
      <div>Personal Details</div>
      <div>
        <lable>firstname</lable>
        <br />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          className="firstname"
        />
      </div>
      <div>
        <lable>Lastname</lable>
        <br />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          className="lastname"
        />
      </div>
      <div>
        <lable>Mobile</lable>
        <br />
        <input
          type="text"
          onChange={numberValidation}
          className="mobile"
          minLength="10"
          maxLength="10"
        />
      </div>
      <div>
        <lable>Zip</lable>
        <br />
        <input
          type="text"
          onChange={(e) => zipValidation}
          className="zip"
          minLength="6"
          maxLength="6"
        />
        
      </div>
      
      <div>
        <lable>Storage Medium</lable>
        <br />
        <select onChange={(e) => setStorage(e.target.value)}>
          <option value="locale">Local Storage</option>
          <option value="files">Files</option>
        </select>
      </div>
      <button onClick={submit}>Submit</button>
      <p color={{ color: "red" }}>{message}</p>
    </div>
    
  );
}

export default Form;
