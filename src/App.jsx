
import './App.css'
import Question from "./components/Question"
import { useContext, useEffect } from 'react'
import Welcome from './components/Welcome'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'


function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
dispatch({type: "REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Conhecimento Gerais</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
   
  )
}

export default App
