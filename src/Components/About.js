import React, { useState } from 'react'

export default function About(props) {

 let myStyle = {
  color: props.mode === 'dark' ? 'white' : '#0e0225',
  backgroundColor: props.mode === 'dark' ? '#0e0225' : 'white'
 }
 return (
  <div className='container my-4' style={myStyle}>
   <h2>About Me</h2>
   <div className="accordion" id="accordionExample">
    <div className="accordion-item">
     <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Professional
      </button>
     </h2>
     <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>My name is Hriday Ranjan Paul and I am a frontend developer in React.js </strong> Ability to create innovative, creative, responsive  & interactive web designs to boost customer engagement. Sound knowledge in HTML, CSS, JavaScript, Bootstrap JQuery, React.js, & other UI frameworks. Build reusable code for future use while optimising web performance.
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}


