import React, { Component } from 'react'
var styles={padding:'10px'};



export default class filter extends Component {
    constructor(props)
    {

        super(props);

        this.state={
            companyName: '',
            location:'',
            designation:''

        };
    }
    
    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
        console.log(this.state.companyName)
        console.log(this.state.designation)
        console.log(this.state.location)
    }

    changeOnClick=(e)=>
    {   
        e.preventDefault()
        let filteredData = []
        let actualData = this.props.name;
        console.log('hello on click');

        
        if(this.state.companyName || this.state.location||this.state.designation ) {
            //conditions
            actualData.forEach((data,index)=> {
                if(this.state.companyName === data.company_name) {
                    filteredData.push(data)
                }
                if(this.state.designation === data.designation)
                {
                    filteredData.push(data)
                }

                if(this.state.location === data.location)
                {

                    filteredData.push(data)
                }
            })


            console.log(actualData)

            this.props.filteredData(filteredData)
        }

    }
 
  render() {
    return (
      <div>

        <form style={styles}>

            <input type="text" name='companyName' onChange={this.changeValue} value={this.state.companyName} placeholder="COMPANYNAME"/>
            <input type="text" name='location'  onChange={this.changeValue} placeholder="LOCATION"/>
            <input type="text" name='designation' onChange={this.changeValue} placeholder="DESIGNATION"/>

            <button onClick={this.changeOnClick} >FINDJOB</button>
            </form>
        
      </div>




    )
  }
}
