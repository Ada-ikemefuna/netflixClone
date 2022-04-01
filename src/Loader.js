import { useState } from "react";

const Loader = () => {

    return ( 
        <div className="preload" style= {{
            background: "#000",
            textAlign: "center",
            height: "100vh",
            width: "100%",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",        
            }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" style={{
                height: "300px",
                width: "300px",
            }}  />
        </div>
     );
}
 
export default Loader;

