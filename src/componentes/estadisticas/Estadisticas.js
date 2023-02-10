import React, { useState } from 'react';
import styled from 'styled-components'
import ButtonMenu from '../ButtonMenu';
import DatosPersonales from './../perfil/DatosPersonales';

//STYLES 

const StyledContainer=styled.main`
    
    overflow-x: hidden;
    padding:20px;
    background-color:white;
    width:calc(100% - 42px);
    margin:0px;
    height:100%;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 14px 0px 0px;
    @media all and (max-width:700px){
        width:100%;
        border-radius: 14px 14px 0px 0px;
    }
   
    
`;
const StyledContainer2=styled.div`
background-color:rgba(0,0,0,0.4);
backdrop-filter:blur(2px);
   position:fixed;
   width:100vw;
   height:100vh;
   display:none;
`;
const StyledContainMenu=styled.div`
  display:flex;
  margin:0px;
  @media all and (max-width:700px){
    margin-left:10px;

}
`;


export default function Estadisticas(){

    const [disabled,setDisabled]=useState(false)
    

    const handleClickMenuButtom=(e)=>{
          
    }    
    return(
            <>
            <StyledContainMenu>
             <ButtonMenu handleClickMenuButtom={handleClickMenuButtom} text="Generales" disabledd={disabled}></ButtonMenu>
            
            </StyledContainMenu>
            <StyledContainer  >
                <h2>¡Próximamente!</h2>
            </StyledContainer>
            <StyledContainer2  >
            </StyledContainer2>
            </>
    );

}