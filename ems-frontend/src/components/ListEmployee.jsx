export default function ListEmployee() {
  const dummyData = [
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 2,
      firstname: "Jane",
      lastname: "Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: 3,
      firstname: "John Smith",
      lastname: "Smith",
      email: "johnsmith@gmail.com",
    },
  ];

  return (
    <div>
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
