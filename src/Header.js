import React from 'react'
import logo from './TrollFace.png'


function Header(){
    return(
        <header>
            <div style={{float:'left',padding:5}}>
                <img style={{width:100, height:75}}
                    src={logo}
                    alt='Problem?'
                />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <h1 id='hh' style={{display:'inline',color:'whitesmoke',fontSize:'5vw'}}>Meme Generator</h1>
            </div>
        </header>
    )
}

export default Header;