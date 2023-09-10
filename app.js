import React from 'react'
import ReactDOM from 'react-dom/client'


//many apps will have one root and one render method.
// root is the place where React runs.
// {} in createElement is to pass props / attributes like id, class.
const heading = React.createElement('h1', {
  id: 'title'
}, 'Namaste all') // it prints an object
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
// render method will override whatever is already existing inside root , as a fallback people write not rendered


// Passing multiple child inside a container
const heading1 = React.createElement('h1', {
  id: 'title',
  key: 'h1'
}, 'Headin 1')

const heading2 = React.createElement('h2', {
  id: 'title',
  key: 'h2'
}, 'heading 2')

const container = React.createElement('div', {
  id: 'container'
}, [heading1, heading2])

root.render(container) 