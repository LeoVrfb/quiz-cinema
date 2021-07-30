import React, { useRef, useEffect, useState, Fragment } from 'react'
import {Link } from 'react-router-dom'


const Landing = () => {


    const [btn, setBtn] = useState(false);
    const refBiden = useRef(null);
    
    useEffect(() => {
        refBiden.current.classList.add("startingImg");
        setTimeout(() => {
            refBiden.current.classList.remove("startingImg");
            setBtn(true)
    }, 2000);
}, [])

const setLeftImg = () => {
    refBiden.current.classList.add("leftImg");
}

const setRightImg = () => {
    refBiden.current.classList.add("rightImg");
}

const clearImg = () => {
    if(refBiden.current.classList.contains("leftImg")){
        refBiden.current.classList.remove("leftImg")
    } else if (refBiden.current.classList.contains("rightImg")) {
        refBiden.current.classList.remove("rightImg")
    }

    }


        const displayBtn = btn && (
            <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className='leftBox'>
            <Link className='btn-welcome' to="/signup">Inscription</Link>
        </div>
        <div onMouseOver={setRightImg} onMouseOut={clearImg} className='rightBox'>
            <Link className='btn-welcome' to="/login">Connexion</Link>
            
        </div>
        </Fragment>
        )

    return (
        <main ref={refBiden} className='welcomePage'>
            { displayBtn }
        </main>
    )
}

export default Landing
