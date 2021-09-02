
import { Barra, ContainerCabecalho } from './styled'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { ChatButton } from '../outros/inputs'

export default function Cabecalho() {
    const navigation = useHistory();
    const logoof = () => {Cookies.remove('usuario-logado'); navigation.push("/")}
    return (
        <ContainerCabecalho>
            <div className="logotipo">
                <img src="/assets/images/logo-monkchat.png" alt="" />
                <Barra />
                <div className="titulo"> MonkChat </div>
            </div>
            < ChatButton  onClick={logoof}> SAIR </ChatButton>
        </ContainerCabecalho>
    )
}
