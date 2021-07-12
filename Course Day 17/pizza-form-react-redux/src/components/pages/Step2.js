import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { chooseCrust } from "../../store/rootSlice"
import Button from '../common/Button'

const Step2 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const crust = useSelector(state => state.crust)
  const [input, changeInput] = useState(crust)

  const onSubmit = () => {
    dispatch(chooseCrust(input))
    history.push("./step3")
  }

  return (
    <form>
      <div className="mb-3 col">
        <label htmlFor="crust">Pick crust:</label>
        <select className="form-select" id="crust" name="crust" onChange={ (e) => changeInput(e.target.value) }>
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
          <option value="cheese_burst">Cheese Burst</option>
        </select>
      </div>
      <Button onSubmit={ onSubmit }>Next</Button>
    </form>
  )
}

export default Step2