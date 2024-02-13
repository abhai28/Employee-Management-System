import { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

export default function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          const employee = response.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmail(employee.email);
        })
        .catch((error) => {
          console.error("Error in getting employee: ", error);
          alert("Error in getting employee: " + error);
        });
    }
  }, [id]);

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
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log("Employee updated successfully: ", response.data);
            navigate("/employees");
          })
          .catch((error) => {
            console.error("Error in updating employee: ", error);
            alert("Error in updating employee: " + error);
          });
      } else {
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
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={onChangeFirstName}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={onChangeLastName}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter Email"
                  value={email}
                  onChange={onChangeEmail}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
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
