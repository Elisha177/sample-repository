import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class ClickCounter  {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
}

ReactDOM.render(
    const {count} = this.state;
    <div className = "container">
       <h1 className = "heading">The Button has been clicked {count} times</h1>
       <p className = "paragraph">Click the button to increase the count</p>
       <button className = "clickButton" onClick = {this.onIncrement}>Click Me</button>
    </div>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
