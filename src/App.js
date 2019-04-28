
import React, { Component } from 'react';

import Header from './components/header';
  import Datajob from './mockdata/jobs';
import Content from './components/content';
import Filter from './components/filter'


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      data:Datajob
    };
  }

  filteredData = (data) => {
    console.log(data);
    this.setState({
      data: data
    })
  }

  render(){
     return(
        <div  >
        
           {/* <h1>Hello World</h1>
           <h2>Hello sanjay</h2>
           <h2>{4+5}</h2> */}
           <Header/>
           <Filter  name={Datajob} filteredData={this.filteredData}/>
           <Content  name={this.state.data}/>
        </div>
     );
  }
}
export default App;