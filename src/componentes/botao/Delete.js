import { TiDelete } from "react-icons/ti";
import styled from "styled-components";


const Div = styled.div`
    width: 25px;
    height: 25px;
    align-items: center;
    margin-top: 15px;
    margin-right: 10px;
`


function Delete({deletar, id}){
    return(
        <Div>
            <TiDelete size={25} color={'red'} onClick={() => deletar(id) }></TiDelete>
        </Div>
    )
}

export default Delete