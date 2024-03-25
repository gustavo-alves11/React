import { IoIosAddCircleOutline } from "react-icons/io";
import styled from "styled-components";


const Div = styled.div`
    width: 25px;
    height: 25px;
    align-items: center;
    margin-top: 15px;
    margin-right: 10px;
`


function Add({adicionar, tarefa}){
    return(
        <Div>
            <IoIosAddCircleOutline size={25} color={'green'} onClick={() => adicionar(tarefa)}></IoIosAddCircleOutline>
        </Div>
    )
}

export default Add