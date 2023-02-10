import React, { useState } from 'react';
import styled from 'styled-components'
import {BsPersonCircle} from 'react-icons/bs';
import Alert from '../Alert';
import { useDispatch, useSelector } from 'react-redux/es/exports';


//STYLES 

const StyledInicio=styled.section`
    width:100%;
    height:auto;
    display:flex;
   @media all and (max-width:900px){
            flex-direction:column;
   }
`;
const StyledContainer=styled.div`
    width:48%;
    height:auto;
    padding:20px;
    padding-top:10px;
    padding-right:25px;
    border-right:2px solid rgba(0,0,0,0.1);
    @media all and (max-width:900px){
        width:100%;
        border:none;
        }
    h3{
        font-weight: 400;
        font-size: 32px;
    }
    p{
        font-size: 16px;
        color: #606060;
    }
    span{
        cursor:pointer;
        color:#FF7528;
        text-decoration:underline;
    }
`;
const StyledContainer2=styled.div`
    width:50%;
    height:auto;
    padding:20px;
    padding-top:10px;
    padding-left:25px;
    h3{
        font-weight: 400;
        font-size: 20px;
    }
    p{
        color: #606060;
        font-size: 14px;
        margin-bottom:15px;
    }
    @media all and (max-width:900px){
        width:100%;
        
   }
`;
const StyledCardPerson=styled.div`
   padding-left:7%;
   display:flex;
   flex-direction:column; 
   justify-content:center;
   margin-bottom:12px;
   border-radius:8px;
   box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
   height:130px;
   svg{
        margin-right:10px;
        margin-left:0px;
        width:75px;
        height:75px;
        color:${({color})=>color};  
   }
   
   .cardPerson{
                display:flex;
                margin:0px;
   }
   .contact{
            margin:0px;
            margin-bottom:10px;
            font-size: 18px;
            color:black;
   }
   .countPerson{
                margin-left:15px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                transition:all 0.5s ease;
   }
   .number{
                color:${({color})=>color};
                 margin:0;
                 font-size: 30px;
                 margin-bottom:3px;
   }
   .nextNumber{
                margin:0;
                font-size: 14px;
                color:#9F9F9F;
   }
   span{
         color:${({color})=>color};
   }
`;



export default function Inicio(){
    const stateLogin= useSelector(stateLogin=>stateLogin)

    const [agregado,setAgregado]=useState(false)
    
       const setAgrega =()=>{
        setAgregado(true)}
       const exit =()=>{
            setAgregado(false)
        }
        
    return(
            <>
            <StyledInicio>
                                <StyledContainer>
                                <h3 onClick={setAgrega}>Hola {stateLogin.login.user.vendors.name}</h3>
                                <br/>
                                <p >Bienvenido a AutoSi, en esta nueva versión vas a tener tu propio listado de contactos, vas a poder programar entrevistas, así como también acceder a los formularios de cada cliente y concretar la venta mediante la carga del contrato.</p>
                                <br/>
                                <p>
                                        En la siguiente tabla podes tomar alguno de estos clientes para continuar el proceso de venta, una vez lo tomes va a parecer en tu lista de contactos (los contactos de esta lista pueden ya tener algunos datos cargados).</p>
                                </StyledContainer>
                                <StyledContainer2>
                                <h3>Tus datos</h3>
                                <br/>
                                <p>Acá podés observar tu trayectoria como vendedor de AutoSi. Podés ingresar una fecha anterior para ver como estabas desde que comenzaste hasta la fecha.</p>
                                <StyledCardPerson color="#4CAF50"  >
                                        <p className="contact">Contactos - <span>"Veterano"</span></p>
                                        <div className="cardPerson">
                                        <BsPersonCircle/>
                                                <div className="countPerson">
                                                    <p className="number">545</p>
                                                    <p className='nextNumber'>¡Próximo nivel en los 800!</p>
                                                </div>
                                        </div>
                                </StyledCardPerson>
                                <StyledCardPerson color="#FFC107"  >
                                        <p className="contact">Entrevistas - <span>"Negociante"</span></p>
                                        <div className="cardPerson">
                                                <BsPersonCircle/>
                                                <div className="countPerson">
                                                    <p className="number">121</p>
                                                    <p className='nextNumber'>¡Próximo nivel en los 800!</p>
                                                </div>
                                        </div>
                                </StyledCardPerson>
                                <StyledCardPerson color="#F02849"  >
                                        <p className="contact">Ventas - <span>"Principiante"</span></p>
                                        <div className="cardPerson">
                                                <BsPersonCircle/>
                                                <div className="countPerson">
                                                    <p className="number">13</p>
                                                    <p className='nextNumber'>¡Próximo nivel en los 50!</p>
                                                </div>
                                        </div>
                                        
                                </StyledCardPerson>

                                </StyledContainer2>
                                
            </StyledInicio>
          <Alert alert={{action:agregado,type:"add",exit:exit,title:"¡Agregado!",text:"Ahora podés ver este cliente en tu lista de contactos y realizar acciones como: llamarlo, cargar datos y editarlo en caso de ser necesario.",button:"Volver a contactarnos"}} />
            </>
    );

}