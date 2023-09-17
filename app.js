import React from 'react'
import ReactDOM from 'react-dom/client'


//many apps will have one root and one render method.
// root is the place where React runs.
// {} in createElement is to pass props / attributes like id, class.
const root = ReactDOM.createRoot(document.getElementById('root'))
// render method will override whatever is already existing inside root , as a fallback people write not rendered


// Passing multiple child inside a container
// const heading = React.createElement('h1', {
//   id: 'title',
//   key: 'h1'
// }, 'Heading')

// const heading2 = React.createElement('h2', {
//   id: 'title',
//   key: 'h2'
// }, 'heading 2')

const heading = <h1 key="head">Namaste react</h1>  //JSX

// JSX -> React.createElement -> Object -> HTML DOM
// babel understands JSX and converts the code to React.createElement 

const container = React.createElement('div', {
  id: 'container'
}, [heading])

const DummyComponent = () => (
  <div>
    DummyComponent
  </div>
)
const HeaderComponent = () => {
  return (
    <div>
      <h1>header component</h1>
      { heading }
      <DummyComponent>
        
      </DummyComponent>
      { DummyComponent() }
    </div>
  )
}

root.render(<HeaderComponent></HeaderComponent>) 