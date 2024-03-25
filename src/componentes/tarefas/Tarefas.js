import styled from "styled-components"
import "@fontsource/lexend-deca";
import Delete from "../botao/Delete";

const Div = styled.div`
    background-color: aliceblue;
    width: 80%;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const DivColor = styled.div`
    background-color:  ${props => props.color || 'red' };
    height: 100%;
    width: 15px;
`

const Text = styled.p`
    font-family: lexen-deca;
    margin-left: 10px;
    font-size: 16px;
`
const Input = styled.input`
    min-height: 50px;
    width: 15px;
    border: none;
    outline: 0;

    &:focus {
        border: none;
        outline: none;
    }
    `

function Tarefas({tarefa, deletar, mudacor}){
    return(
        <Div>
            <Input type="color" value={tarefa.cor} onChange={(event) => mudacor(tarefa.id, event.target.value)}></Input>
            <Text>{tarefa.descricao}</Text>
            <Delete deletar={deletar} id={tarefa.id}></Delete>
        </Div>
        

    ) 

}


export default Tarefas