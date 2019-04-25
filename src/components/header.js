import React,{Component} from 'react'
import './headerstyle.css'

class header extends Component
{


    render()
    {


        return(


 <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Jobs</a>
  <a href="#contact">Contact</a>
  <a href="#about">SignIn</a>
  <a href="#about">SignOut</a>

</div>
        );
    }
}

export default header;