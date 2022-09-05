import './App.css';
import Header from './components/Header';
import Table from './components/StudentsRecord';
import Form from './components/Form';
import {useState} from 'react';

const App = () => {
  const [showRecords, setShowRecords] = useState(false);
  const [addRecord, setAddRecord] = useState(false);
  const [newRecord, setNewRecord] = useState(null);
 
  console.log(newRecord);
  const appendRecord = (data) => {
    setNewRecord(data);
    setAddRecord(false);
    setShowRecords(true);
  }
  return (
    <div className="App">
      <Header></Header>
      <button onClick={() => setShowRecords(true)}>Show Students' Info</button>
      <button onClick={() => setAddRecord(true)}>Add a new Student</button>
      {/* <button>Delete a Student</button> */}
      {showRecords ? <Table newRecord={newRecord}></Table> : null}
      {addRecord ? <Form appendRecordHandler={(data) => appendRecord(data)}></Form> : null}
    </div>
  );
}

export default App;
