import React, { useState } from "react";

import "../index.css";
const ListPersons = ({ people }) => {

   
  return (
    <div className="listContainer">
      {/* {console.log(people)} */}
      {people.map((person) => {
        let { id, name, age, image } = person;
        return (
        <div key={id}  className ="userContainer">
            <img id = "userImg"src={image} />
           
                <div style={{marginLeft:"20px"}}>
            <h4 id = "userName">{name}</h4>

            <p style={{fontWeight:"200",marginTop:"-20px"}}>{age} years</p>
        </div>

        </div>
        );
      })}
    </div>
  );
};

export default ListPersons;
