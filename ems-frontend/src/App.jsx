import Header from "./components/Header/Header";
import EmployeeTable from "./components/Table/Table";

function App() {
  return (
    <div className="container">
      <Header />
      <h2>List of Employees</h2>
      <EmployeeTable />
    </div>
  );
}

export default App;
