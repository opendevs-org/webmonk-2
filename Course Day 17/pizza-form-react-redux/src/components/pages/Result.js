import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Result = () => {
  const state = useSelector(state => state)

  return (
    <>
      <pre>{JSON.stringify(state.pizza, null, 2)}</pre>
      <Link to="/" className="btn btn-link">Start over</Link>
    </>
  )
}

export default Result