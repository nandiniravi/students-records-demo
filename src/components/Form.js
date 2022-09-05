import React from "react";
import {useState} from "react";
//import data from './data';

const Form = (props) => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [grade, setGrade] = useState(1);
  const [percentage, setPercentage] = useState(100);

  
  const submitForm = (event) => {
    event.preventDefault();
    let newStudent = {};
    newStudent.fullName = name;
    newStudent.rollNo = rollNo;
    newStudent.grade = grade;
    newStudent.percentage = percentage;
    //console.log(newStudent);   
    props.appendRecordHandler(newStudent);
    setName('');
    setRollNo('');
    setGrade(1);
    setPercentage(100);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Student Roll No"
        value={rollNo}
        onChange={(event) => setRollNo(event.target.value)}
      />
      <input
        type="number"
        placeholder="Student Grade"
        value={grade}
        onChange={(event) => setGrade(event.target.value)}
      />
      <input
        type="number"
        placeholder="Percentage"
        value={percentage}
        onChange={(event) => setPercentage(event.target.value)}
      />
      <button onClick={event => submitForm(event)}>Submit</button>
    </form>
  );
};

export default Form;
