import React,{Component} from 'react';
import  './App.css';

import Persons from '../components/Persons/Persons';
//import classes from '*.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium from 'radium';

class App extends Component{

  state={
    persons:[
      {id:1,name:'Raj',age:22},
      {id:2,name:'Gbs',age:23},
      {id:3,name:'Pradeep',age:21}
    ],
    otherState:'Some other value',
    showPersons:false
  }

  namechangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={
      ...this.state.persons[personIndex]
    };

    person.name=event.target.value;
    const persons=[ ...this.state.persons];
    persons[personIndex]=person;

     
    


    this.setState({
     persons:persons
    })
  }

  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  // switchNameHandler=(newName)=>{
  //  // console.log('Was Clicked!');
  //  this.setState({
  //    Persons:[
  //     {name:newName,age:22},
  //     {name:'Gbs',age:23},
  //     {name:'Pradeep',age:24}
  //    ]
  //  })
  // }

  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.Persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }


  render(){
    

    let persons=null;
    if(this.state.showPersons){
      persons=(
      <div>
        <Persons
         persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.namechangeHandler}/>
        



          
                                                            {/* {this.state.Persons.map((p,index)=>{
                                                              return <Person 
                                                              click={()=>this.deletePersonHandler(index)}
                                                              name={p.name}
                                                              age={p.age}
                                                              key={p.id}
                                                              changed={(event)=>this.namechangeHandler(event,p.id)}
                                                              />
                                                            })} */}

                                                            

                                                            {/* <Person 
                                                              name={this.state.Persons[0].name} 
                                                              age={this.state.Persons[0].age}/>
                                                            <Person 
                                                              name={this.state.Persons[1].name} 
                                                              age={this.state.Persons[1].age}
                                                              click={this.switchNameHandler.bind(this,'Raj!')}
                                                              changed={this.namechangeHandler}
                                                            > My Hobbies: Cricket </Person>
                                                            <Person 
                                                                name={this.state.Persons[2].name} 
                                                                age={this.state.Persons[2].age}/> */}
      </div>
      );
      

    }

  

    return(
      <div className="App">
        
                                          {/* {
                                            this.state.showPersons===true?

                                              <div>
                                                  <Person 
                                                    name={this.state.Persons[0].name} 
                                                    age={this.state.Persons[0].age}/>
                                                  <Person 
                                                    name={this.state.Persons[1].name} 
                                                    age={this.state.Persons[1].age}
                                                    click={this.switchNameHandler.bind(this,'Raj!')}
                                                    changed={this.namechangeHandler}
                                                  > My Hobbies: Cricket </Person>
                                                  <Person 
                                                      name={this.state.Persons[2].name} 
                                                      age={this.state.Persons[2].age}/>
                                              </div>:null
                                          }
                                          */}
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
        {persons}
      
      </div>
    );
  }
}


export default App;
