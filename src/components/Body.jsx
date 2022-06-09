import React, { Fragment, useState } from "react";

export const Body = () => {
  const [contador, setContador] = useState("")
  return (
    <>
      <div className="hola">Hola ñiña JohannaUwu♡</div>
      <div className="content">
        <p className="pe">Toca el botón que quieras</p>
        <button className="btn" onClick={()=>setContador("| ♡ Sos lo mejor  | ")}> 1</button>
        <button className="btn" onClick={()=>setContador("| ♡ Te quiero ver | ")}> 2</button>
        <a href="https://www.youtube.com/watch?v=HJllxBL1w5g"> <button className="btn btn-1">3</button> </a>
        
      <p>{contador}</p>
      </div>
    </>
  );
};
