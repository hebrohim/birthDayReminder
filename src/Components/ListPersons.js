import React, { useState } from "react";

import "../index.css";
const ListPersons = ({ people }) => {

    let imageStyling = {
        objectFit:"cover",
        // paddingTop:"20px",
        marginBottom:"20px",
        width:"80px",
        height:"80px",
        borderRadius:"50%",
        border:"2px solid #4d0801",
        boxShadow:" 5px 3px 23px -4px rgba(0,0,0,0.76"

    }
  return (
    <div className="listContainer">
      {/* {console.log(people)} */}
      {people.map((person) => {
        let { id, name, age, image } = person;
        return (
        <div key={id}  className ="userContainer">
            <img src={image} style ={imageStyling}/>
           
                <div style={{marginLeft:"20px"}}>
            <h4 style={{marginBottom:"10px",letterSpacing:"0.3rem",fontSize:"1.5rem"}}>{name}</h4>

            <p style={{fontWeight:"200",marginTop:"-20px"}}>{age} years</p>
        </div>

        </div>
        );
      })}
    </div>
  );
};

export default ListPersons;
