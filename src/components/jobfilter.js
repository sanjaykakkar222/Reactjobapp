import React,{Component} from 'react'

class jobfilter extends Component
{


    render()
    {


        return(



            <div>
              
               <form>
               <input type="text" placeholder="Company" ></input>
               <input type="text" placeholder="Location" style={{margin: 10}}></input>
               <input type="text" placeholder="Role"></input>
               <button>Filter</button>
                </form>
            </div>
        );
    }
}

export default jobfilter;