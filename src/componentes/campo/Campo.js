import styled from "styled-components"
import "@fontsource/lexend-deca";
import Add from "../botao/Add";

const Div = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Input = styled.input`
    width: 85%;
    font-size: 16px;
    border-style: none;
    min-height: 50px;
    margin-right: 10px;
    padding: 10px;
    &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
`




function Campo({adicionar, aoAlterado, descricao}){
    return(
        <Div>
            <Input onChange={evento => aoAlterado(evento.target.value)}></Input>
            <Add adicionar={adicionar} tarefa={descricao} ></Add>
        </Div>
        

    ) 

}


export default Campo