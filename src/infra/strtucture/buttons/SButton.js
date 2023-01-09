import { useState } from "react";

const SButton = (props) => {

    const { callback, tipoDoBotao } = props; 
    
    const [isHover, setIsHover] = useState(false);
    const [corDoFundo, setCorDoFundo] = useState('red');

    const handleMouseEnter = () => {
       setIsHover(true);
    };

    return <button
        style={{
        backgroundColor: tipoDoBotao == 'primario' ? 'red' : 'blue',
        color: isHover ? 'black' : 'white',
        cursor: 'pointer',
        border: 'none',
        width: '9rem',
        height: '3rem',
        borderRadius: '0.2rem',
        }}
        onClick={(e) => callback(e)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
    >
        {props.children}
    </button>
}

export default SButton;