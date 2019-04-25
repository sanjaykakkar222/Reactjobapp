

import React, { Component } from 'react'
// import "./center.css"



class joblisting extends Component {

     //style={float:'right'};
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
return (
this.props.list.map((value, index ) => {  return (

            
             
      
        <div >
          <div class="card bg-secondary text-white">


       <div class="card-body" > <h3>{this.props.list[index].companyName}</h3></div>
        

       <div class="card-body"><img src={require('../company.jpeg')} height="" width="" alt="" ></img></div>
     <div class="card-body">ID:{this.props.list[index].id}</div>
    < div class="card-body">DESIGNATION:{this.props.list[index].designation}</div>
    < div class="card-body" >LOCATION:{this.props.list[index].location}</div>
    < div class="card-body"  >SALARY:{this.props.list[index].salary}</div>
    <button>ApplyJob</button>
  </div>
 
 
</div>

                )
            })
        )
    }
}

export default joblisting;