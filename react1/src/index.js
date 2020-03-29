import React from 'react'
import ReactDOM from 'react-dom'
/* Import Components */
import Demo1 from './Component/ClassBase'
import Demo2 from './Component/FunctionBase'

ReactDOM.render(<Demo1 name="from Class Component"/>, document.getElementById('root'));
ReactDOM.render(<Demo2 name="from Function Component"/>, document.getElementById('root'));