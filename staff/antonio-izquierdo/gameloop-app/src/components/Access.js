import './Access.sass'
import logo from "../assets/img/logo.png"

function Access({ onGoToSignIn, onGoToSignUp, onGoToSearch }) {
    return <section className="access">
        <img className="access__img" src={ logo }/>
        <p> PAY LESS <br /> <br /> PLAY MORE</p>
        <div className="access__div">
            <button onClick={onGoToSignUp} className="access__div__signup"> SIGN UP </button>
            <button onClick={onGoToSearch} className="access__div__search"> SEARCH GAMES </button>
            <button onClick={onGoToSignIn} className="access__div__signin"> SIGN IN</button>
        </div>
    </section>
}

export default Access