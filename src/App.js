import React, { Component } from 'react';

import Header from './components/header';
import Job from './jobs'

 import Fotter from './components/fotter';

import Joblisting from './components/joblisting';

 import   JobFilter from './components/jobfilter';


var style={color:'red'}


var style2={color:'yellow'}
class App extends Component{
   render(){
      return(
         <div >
           <Header/>
            <JobFilter/>
           <Joblisting list={Job}/>
           <Fotter/>
        
         
         </div>

    


      );
   }
}
export default App;
