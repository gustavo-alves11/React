
import "@fontsource/lexend-deca";
import styled from "styled-components";

const TituloStyle = styled.h1`
    font-family: lexen-deca;

`

function Titulo({text}){
    return(
        <TituloStyle>{text}</TituloStyle>
    )
}

export default Titulo