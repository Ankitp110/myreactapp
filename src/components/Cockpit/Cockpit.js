//import classes from '*.module.css';
import React from 'react';
import './Cockpit.css';

const cockpit=(props)=>{
    const assignedClasses=[];
     let btnClass='';
    if(props.showPersons){
        btnClass='red';
    }
   
    if(props.persons.length<=2){
        assignedClasses.push('red');
    }
    if(props.persons.length<=1){
        assignedClasses.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hi, Iam React App -- From Rajesh</h1>
            <p className={assignedClasses.join(' ')}>This is Really Working</p>
        <button
         className={btnClass}
         onClick={props.clicked}>Toggle Persons</button>
    
        </div>
       ); 
};
export default cockpit;