import './style.css'

const Greeting = ({tchubaruba}) => {

    const greetingText = () => {
        if(tchubaruba.lastName) {
            return `${tchubaruba.firstName} ${tchubaruba.lastName}`;
        }
        return 'Turma desconhecida';
    }

    return(
        <h1>Olá, {greetingText()}!</h1>
    )
}

export default Greeting;