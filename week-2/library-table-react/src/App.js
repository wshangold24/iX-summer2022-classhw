import './App.css';
import Form from './components/form/Form';
import Table from './components/table/Table';

function App() {
  return (
    <div className="App w-50 mx-auto mt-5 p-5">
      <h1>Add Book:</h1>
      <Form />
      <Table />
    </div>
  );
}

export default App;
