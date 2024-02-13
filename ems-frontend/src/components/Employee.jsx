import { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function saveEmployee(event) {
    event.preventDefault();
    const employee = { firstName, lastName, email };
    createEmployee(employee)
      .then((response) => {
        console.log("Employee created successfully: ", response.data);
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error in creating employee: ", error);
        alert("Error in creating employee: " + error);
      });
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={onChangeFirstName}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={onChangeLastName}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
