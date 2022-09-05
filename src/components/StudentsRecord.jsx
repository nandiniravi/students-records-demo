import React from 'react';
// import { useEffect } from 'react';
import data2 from './data';
import './style.css';


const Table = (props) => {
    let allRecords = [...data2];
    //console.log('0 -allRecords: ',allRecords);
    if(props.newRecord)
        allRecords.push(props.newRecord);
    //console.log('1- allRecords: ',allRecords);
    const data = [...new Set(allRecords)];
    //console.log('2 - data: ',data);

    return <table>
        <thead>
            <tr>
                <td>Roll No.</td>
                <td>Student Name</td>
                <td>Grade</td>
                <td>Percentage</td>
                
            </tr>
        </thead>
        <tbody>
            {   data.map(each => {
                return <tr key={each.rollNo}>
                    <td>{each.rollNo}</td>
                    <td>{each.fullName}</td>
                    <td>{each.grade}</td>
                    <td>{each.percentage}</td>
                    
                </tr>
            })}
        </tbody>
    </table>
}

export default Table;