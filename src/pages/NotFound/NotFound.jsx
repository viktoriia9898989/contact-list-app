import React from "react";
import CatsBlock from "../../components/CatsBlock";




const NotFound = () => {
    return (
      <CatsBlock
        
      message={
        <h2>
          Please don't cry <br /> It's just <span className="error">404 error</span> <br /> Try to find the page you're looking for again.
          <br /> You can do it, I believe in you.
        </h2>
      }
      
      />
    );
  };
  
  export default NotFound;