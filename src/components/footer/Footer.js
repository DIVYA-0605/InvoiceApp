import React from "react";

const Footer = ({open}) => {
  
 return (
//     <footer className="bg-white fixed bottom-0 w-full  border-b border-l h-14 flex items-center">
//     <div className="  ml-8 flex  space-x-80">
//         <h4> &copy; Copyright 2023.FLOWNIA All Rights Reserved.</h4>

//         <h4>Version4.0A</h4>
//         <h4>Powered By NIOSYS.NET</h4>
//       </div> 

<footer className= "bg-white fixed bottom-0 w-full border-b border-l h-14 flex items-center transition-all">
<div className={`ml-6 flex ${ open ? 'space-x-80' : 'space-x-[405px]'}`}>
  <h4>&copy; Copyright 2023. FLOWNIA All Rights Reserved.</h4>
  <h4>Version 4.0A</h4>
  <h4>Powered By NIOSYS.NET</h4>
</div>
</footer>
// </footer>
    
   );
 };

 export default Footer;




