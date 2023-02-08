import React, { useState } from 'react'
import './tailwind.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system'

export default function Calculadora() {
    const [num,setNum] = useState(0);
    const [oldnum,setantigoNum] = useState(0);
    const [operador,setOpe] = useState();

    function digitar(e){
        var valor=e.target.value
        if(num===0){
            setNum(valor);
        }else{
        setNum(num + valor);
        }
    }

    function limpar(e){
        setNum(0)
    }

    function calcular(){
        if(operador === "/") {
            setNum(parseFloat(oldnum)/ parseFloat(num));
        }   else if (operador === "x") {
            setNum(parseFloat(oldnum)* parseFloat(num));
        }   else if (operador === "-") {
            setNum(parseFloat(oldnum)- parseFloat(num));
        }   else if (operador === "+") {
            setNum(parseFloat(oldnum)+ parseFloat(num));
        }

    }

    function operacao(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }

    }

    function porcentagem(){
        setNum(num/100)
    }

    function controle(e){
        var operadorinput= e.target.value;
        setOpe (operadorinput);
        setantigoNum (num);
        setNum (0);

    }
    return (
        <div>
            <Box m={7}/>
            <Container maxWidth="xs">
            <div className='Organizaçao'>
            <h1 className="resultado">{num}</h1>
                <button className="vermelho" onClick={limpar}>C</button>
                <button className="verde">( )</button>
                <button className="verde" onClick={porcentagem}>%</button>
                <button className="verde" onClick={controle} value='/'>/</button>
                <button onClick={digitar} value={7}>7</button>
                <button onClick={digitar} value={8}>8</button>
                <button onClick={digitar} value={9}>9</button>
                <button className="verde" onClick={controle} value="x">x</button>
                <button onClick={digitar} value={4}>4</button>
                <button onClick={digitar} value={5}>5</button>
                <button onClick={digitar} value={6}>6</button>
                <button className="verde" onClick={controle} value="-">-</button>
                <button onClick={digitar} value={1}>1</button>
                <button onClick={digitar} value={2}>2</button>
                <button onClick={digitar} value={3}>3</button>
                <button className="verde" onClick={controle} value="+">+</button>
                <button onClick={operacao}>+/-</button>
                <button onClick={digitar} value={0}>0</button>
                <button onClick={digitar} value={"."}>,</button>
                <button className="verdef" onClick={calcular}>=</button>
           
            </div> 
            </Container>
        </div>
    )
}