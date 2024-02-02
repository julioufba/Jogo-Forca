import styled from "styled-components"

const Wrapper = styled.div `
display: flex;
gap: 0.6rem;
justify-content:center;
font-size: 6rem;
text-transform: uppercase;
font-weight: bold;
font-family: 'Arial';
;
`

interface HangmanWordProps{
    word: string
    GuessedLetters : string[]
    reveal:boolean
}

export default function HangmanWord({word, GuessedLetters,reveal}:HangmanWordProps){
    return (
        
        <Wrapper > {word.split("").map((letra, index) => (
            <span style={{borderBottom:'0.25rem solid black', height:"", minWidth:'70px'}}key = {index}> 
            <span style={{visibility:GuessedLetters.includes(letra)||reveal? 'visible': "hidden", color:!GuessedLetters.includes(letra)? 'red':"black"}}>{letra}</span></span>
            
        ))} </Wrapper>
    )
        }
