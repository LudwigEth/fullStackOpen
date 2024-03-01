import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ({anecdote}) => {
  return (
    <div>{anecdote}</div>
  )
}

const HasVotes = ({votes}) => {
  return (
    <p>has {votes} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomIndex = (length) => Math.floor(Math.random() * length)
  const [index, setIndex] = useState(getRandomIndex(anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(null)
  const [mostVotes, setMostVotes] = useState(0)
 
  const handleClick = () => {
    const randomIndex = getRandomIndex(anecdotes.length)
    setIndex(randomIndex)
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[index]++
    if (newVotes[index] >= mostVotes) {
      setMostVoted(anecdotes[index])
      setMostVotes(newVotes[index])
    }
    setVotes(newVotes)
  }
  if (mostVotes === 0) {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdote={anecdotes[index]} />
        <HasVotes votes={votes[index]} />
        <Button handleClick={handleVote} text='vote' />
        <Button handleClick={handleClick} text='new anecdote' />
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[index]} />
      <HasVotes votes={votes[index]} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleClick} text='new anecdote' />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={mostVoted} />
      <HasVotes votes={mostVotes} />
    </div>
  )
}

export default App