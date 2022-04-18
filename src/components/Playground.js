/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
  -State = data, current state of your program, state is data that lives in the component itself
  -Props is data that is passed from parent to child.
  -NEVER MUTATE STATE DIRECTLY
  -NEVER MUTATE STATE DIRECTLY
  -NEVER MUTATE STATE DIRECTLY
  -NEVER MUTATE STATE DIRECTLY
  -NEVER MUTATE STATE DIRECTLY
*/

import React, { useState } from 'react'

function Playground(props) {
  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)

  const updateCount = (num) => {
    if (count + num > 10 || count + num < 0) {
      return
    }
    setCount(count + num)
  }

  if (spinnerOn) {
    return <div>LOADING PLEASE WAIT, COMING SOON</div>
  }
  return (
    <div className='container'>
      <h1>Hello world!</h1>
      {props.happy ? "I'm so happy!" : 'Ugh, why are Mondays the worst?!'}
      {count}
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={() => setSpinnerOn(true)}>LOAD SOME DATA WOOOOO!</button>
    </div>
  )
}

export default Playground

/**
 * if (props.happy) {
 * return "I'm so happy!"
 * } else {
 * return "Ugh, why are Mondays the worst?!"}}
 */
