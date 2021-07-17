import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { chooseCheese } from "../../store/pizzaSlice"
import Button from '../common/Button'

const Step3 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const cheese = useSelector(state => state.pizza.cheese)
  const [input, changeInput] = useState(cheese)

  const onSubmit = () => {
    dispatch(chooseCheese(input))
    history.push("./step4")
  }

  return (
    <form>
      <div className="mb-3 col">
        <label htmlFor="cheese">Pick cheese:</label>
        <select className="form-select" id="cheese" name="cheese" onChange={(e) => changeInput(e.target.value)}>
          <option value="no_cheese">No Cheese</option>
          <option value="mozarella">Mozarella</option>
          <option value="parmigiano">Parmigiano</option>
        </select>
      </div>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  )
}

export default Step3