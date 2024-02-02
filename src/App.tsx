import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Keyboard from './Keyboard';
import HangmanDrawing from './hangman-drawing';
import HangmanWord from './hangman-word';

const HangmanParts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 350px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const words = ["naruto", "sasuke", "sakura", "kakashi", "gaara", "rock lee", "hinata", "neji", "shikamaru", "ino", "choji", "tsunade", "jiraiya", "orochimaru", "itachi", "kisame", "deidara", "sasori", "pain", "konan", "madara", "hashirama", "tobirama", "minato", "kushina", "obito", "rin", "hiruzen", "tsunade", "kabuto", "sai", "yamato", "kurenai", "asuma", "shino", "tenten", "temari", "kankuro", "sai", "karin", "suigetsu", "jugu", "mifune", "darui", "ao", "kurotsuchi", "chojuro", "hanabi", "karui", "kiba", "inoichi", "shizune", "anko", "iruka", "tonton"];

function App() {
    const [isTrue, setIsTrue] = useState(false);
    const [wordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    const [GuessedLetters, SetGuessedLetters] = useState<string[]>([]);
    const incorrectGuesses = GuessedLetters.filter((letter) => !wordToGuess.includes(letter));

    function addGuessedLetters(letter: string) {
        if (GuessedLetters.includes(letter) || isLoser||isWinner) return;
        SetGuessedLetters(GuessedLetters => [...GuessedLetters, letter]);
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase(); 
            if (!key.match(/^[a-z]$/)) return;
            e.preventDefault();
            addGuessedLetters(key);
        };

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [GuessedLetters]);


    const isLoser = incorrectGuesses.length >=6;
    const isWinner = wordToGuess.split('').every((letter)=>GuessedLetters.includes(letter))
  return (
        <Wrapper>
            {!isTrue && (
              <button onClick={() => setIsTrue(true)} style={{ backgroundColor: "red", borderRadius: '10%', padding: "10px 20px", boxShadow: '2px 2px 4px rgba(0, 0, 0, 01)' }}>
              
               Iniciar
           </button>
           
            )}

            {isTrue && (
                <HangmanParts>
                    {isLoser && <h2 style={{color:"red"}}>Errou feio, leia 700 mangás de Naruto</h2> }
                    {isWinner && (
  <h2 style={{ }}>
    {'Parabens, mas um emprego faria bem'.split('').map((letra, index) => (
      <span key={index} style={{
        color: 'black',
        borderBottom: '0.25rem solid black',
        padding: ' 2px', 
        
      }}>
        {letra}
      </span>
    ))}
  </h2>
)}
                    {(isTrue && !isWinner && !isLoser )&&<h2>Jogo da Forca</h2>}
                    <HangmanDrawing NumberOfGuesses={incorrectGuesses.length}/>
                    <HangmanWord GuessedLetters={GuessedLetters} word={wordToGuess} reveal={isLoser} />
                </HangmanParts>
            )}

            {isTrue && <div style={{}}>
                <Keyboard 
                activeLetters = {GuessedLetters}
                inactiveLetters = {incorrectGuesses}
                addGuessedLetters={addGuessedLetters}
                disabled = {isLoser || isWinner}
                />
            </div>}
        </Wrapper>
    );
}

export default App;
