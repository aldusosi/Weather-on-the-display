import './style.css';
function Button({handleClick}){
    return(
        <div><button onClick={ handleClick}>Obter meu clima</button></div>
    )
}

export default Button;