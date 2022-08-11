
import React from 'react';

const myStyle= {
    backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.SrNMNlAjYmuQ1FfiI0gKjgHaE8&pid=Api&P=0')",
    height : '50vh',
    breath : '100vh',
    fontSize: '80px',
    backgrondSize :'cover',
    
}


export default function HeaderComponent() {

    
    return (
    
        <div>
            <div style ={myStyle}>
                <div className="text-center" >
                    <h1 style={{ color: 'white',fontWeight: 'bold',justifyContent: 'center', alignItems:"center", lineHeight:"250px"}}className=" text-100000xl"> PAISA VAYAPAR</h1>

                    <h1 style={{ color: 'white' }}className="text-4xl">Being in control of your finances.</h1>
                    
                    
                </div>
            </div>
        </div>
        
    )
}