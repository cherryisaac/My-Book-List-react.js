import ReactDOM from 'react-dom'
import './index.css'
import Book from './Book'
//CTRL + SHIFT + P to open simple browser
//My-Book-List-react.js-

function BookList() {
  return (
    <section className='booklist'>
     <Book />
    </section>
  )
} 

 
BookList.defaultProps = {
  color: 'orange'
}

ReactDOM.render(<BookList/>, document.getElementById('root'))