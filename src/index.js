import React from 'react'
import { render } from 'react-dom'

import Playground from './components/Playground'

/**
 * two ways to export?!
 * 1.) Default Export
 * 2.) Named Export
 */

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  //JSX -> JavaScript Markup Language
  //HTML
  const { track, instructor, numStudents, favStudent, foo } = props
  const fun = true

  return (
    <div className='container'>
      {/* 
      const divElem = document.createElement('div)};
      divElem.classList.add('container);
  */}
      <h1>
        Welcome to React, {props.track} rockstars!! {instructor} is the BEST!
      </h1>
      <p>Current number of Students: {numStudents}</p>
      <h2>Favorite student is......{favStudent}!</h2>
      <Playground happy={fun} />
    </div>
  )
}

render(
  <App
    track='Web'
    instructor='Name'
    numStudents='31'
    favStudent='Olivia'
    foo='bar'
  />,
  document.querySelector('#root')
)

/**
 * *props are data passed from a parent to a child
 *
 * const props = {
 * track : 'Web',
 * intructor: 'Instructor name',
 * numStudents: 'number'
 * favStudent : 'name'
 * foo: bar
 * }
 *
 *  App(props)
 *
 * render(
 * <app track='web' instructor='name'
 * numStudents='31' faveStudent='Olivia' foo='bar' />,
 * document.querySelector('#root'))
 *
 * child component: App is the child component, parent is the render
 * Component name has to be capitalized
 * Component has to return something
 * explicitly close all tags
 */
