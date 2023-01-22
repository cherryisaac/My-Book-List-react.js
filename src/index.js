import ReactDOM from 'react-dom'
import { useState } from "react";
import './index.css'
import Book from './Book'
//CTRL + SHIFT + P to open simple browser
//My-Book-List-react.js

function BookList() {

  return (
    <body className='contain'>
    <section className='booklist'>
        <Book />
    </section>
    </body>
  )
} 

ReactDOM.render(<BookList/>, document.getElementById('root'))
