import React from 'react'
import { useSelector } from 'react-redux'
import { Contacts } from './Contacts';

export const Contact = () => {

    const contacts =useSelector((state)=>state.contacts);
    console.log(contacts);

    return (
        
        <>
        <div>
        <table class="table small table-hover">
           
         <thead>
            <tr>
                <td >
                    <div className="custom-control custom-checkbox ">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"></label>
                    </div>
                </td>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
            </tr>
        </thead>
            <tbody>
            {contacts.map((contact)=>{
               return (
                    <Contacts contact={contact}/>
               )

            } )}
   
            </tbody>
        
        </table>
        </div>
        </>
    )
}
