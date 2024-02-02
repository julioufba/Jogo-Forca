import styled from "styled-components"

const Wrapper = styled.div `
display: flex;
gap: 1rem;
justify-content:center;
font-size: 6rem;
text-transform: uppercase;
font-weight: bold;
font-family: 'Arial';
width:100%;
@media(max-width:700px){
    gap:0.05rem;
    font-size:3rem;
    width    :100%;
    margin-left:15px;
    
}

`

interface HangmanWordProps{
    word: string
    GuessedLetters : string[]
    reveal:boolean
}

export default function HangmanWord({word, GuessedLetters,reveal}:HangmanWordProps){
    return (
        
        <Wrapper > {word.split("").map((letra, index) => (
            <span style={{borderBottom:'0.25rem solid black', height:"", minWidth:'50px'}}key = {index}> 
            <span style={{visibility:GuessedLetters.includes(letra)||reveal? 'visible': "hidden", color:!GuessedLetters.includes(letra)? 'red':"black"}}>{letra}</span></span>
            
        ))} </Wrapper>
    )
        }
