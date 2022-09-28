
import { useState } from "react";
import AddBook from "./AddBook";
import React from 'react'


function Book() {

 const Button = ({color, text, onClick}) => {
  return (<button onClick={onClick} 
    style={{backgroundColor: color}} 
    className="btn">{text} </button>)
}  
  const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
        <Button color= {showAdd ? 'black' : 'green'} text = {showAdd ? 'Close' : 'Add Book to List'} onClick = {onAdd}/>
    </header>
  )
}

  //Hide book add by default (useState set to false)
  const [showBook, setShowBook] = useState
  (false)  
  //For changing state such as deleting a book
  const [book, setBook] = useState([{
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL604_SR604,400_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear'
}, {
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/41QmmZs4UxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Life Force: How New Breakthroughs in Precision Medicine Can Transform the Quality of Your Life & Those You Love',
  author: 'Tony Robbins'
},
 {
   id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/619Gn-+VNQL._AC_UL302_SR302,200_.jpg',
  title: 'How to Win Friends & Influence People',
  author: 'Dale Carnegie'
}
])

//To delete a book
  const removeItem = (id) => {
     setBook(book.filter((someBook) => someBook.id !== id))
  }

//Add Task with random id
const addBookkId = (someBook) => {
  const id =Math.floor(Math.random() * 10000) + 1;
    console.log(someBook)

  const newTask = { id, ...someBook }
  setBook([...book, newTask])
  }

  const toggleBook = (id) => {
     setBook(book.map((books) => books.id === id ?
    { ...books, img : !books.img } : books))
    // console.log(id)
  }
  
  return (
  <article className='book'>
    <Header onAdd={() => setShowBook(!showBook)}
      showAdd={showBook} />
      {showBook && <AddBook onAdd = {addBookkId} />}
        {book.map((booking) => {
          
           const {id, img, title, author} = booking;
           
            return (
            <React.Fragment>
            <div key={id} id= 'container'>
                <h1>{}</h1>
                <img src={img} alt=""/>
                <h1>{title}</h1>
                <h3>{author}</h3>
                <h1>{}</h1>
                    <button className="bttn"
                        onClick={() => removeItem(id)}>
                        Delete
                    </button>
            </div>
            </React.Fragment>
            ) })}
  </article>
  ) 
}

export default Book

