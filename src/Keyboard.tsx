import styled from "styled-components"

const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(70px,1fr));
gap:0.3rem;
width: 700px;

`

const Button = styled.button<{isActive:boolean}>`
opacity:${(p)=>(p.isActive ? 'null':'0.3')};
`

interface KeyBoardProps{
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetters: (letter: string) => void
    disabled:boolean

}
export default function Keyboard({activeLetters,disabled=true, inactiveLetters, addGuessedLetters}:KeyBoardProps){
    return (
        <Wrapper>
       {keys.map((letter) => {
        const isActive =  !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
       return (  

       
        <Button onClick={()=> addGuessedLetters(letter)}isActive={isActive && isInactive} key={letter} disabled={ disabled}>
            {letter}
        </Button>
       )})}

        </Wrapper>
    )
}