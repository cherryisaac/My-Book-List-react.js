import { useState } from "react";
import AddBook from "./AddBook";
import React from 'react';

function Book() {

  const Button = ({ color, text, onClick }) => {
    
  return (<button onClick={onClick} 
    style={{backgroundColor: color}} 
    className={`btn ${isDark ? 'dark' : 'light'}`}  >{text} </button>)
}  
  const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'  >
        <Button  color= {showAdd ? 'black' : 'green'} text = {showAdd ? 'Close' : 'Add Book to List'} onClick = {onAdd}/>
    </header>
  )
}

//Theme Button
const [theme, setTheme] = useState("Dark Theme");
//Prompt to change theme
const [isDark, setIsDark] = useState(true);

const handleThemeChange = () => {
  setIsDark(!isDark);
  // setTheme(theme === 'Dark Theme' ? 'Light Theme' : 'Dark Theme');
}

  //Hide book add by default (useState set to false)
  const [showBook, setShowBook] = useState
  (false)  
  //For changing state such as deleting a book
  const [book, setBook] = useState([{
  id: 1,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkk-L1KiG7ca0hK9_uEefpx3f5KhI2E4h7w&usqp=CAU',
  // img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL604_SR604,400_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',
  description: 'Atomic Habits (2018) provides a practical and proven framework for creating good habits and shedding bad ones. Drawing on scientific research and real-life examples, it shows how tiny changes in behavior can result in the formation of new habits and help you achieve big things.'
}, {
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/41QmmZs4UxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Life Force: How New Breakthroughs in Precision Medicine Can Transform the Quality of Your Life & Those You Love',
  author: 'Tony Robbins',
  description: 'This is a book for everyone, from peak performance athletes, to the average person who wants to increase their energy and strength, to those looking for healing. Life Force provides answers that can transform and even save your life, or that of someone you love.'
},
 {
   id: 3,
  // img: 'https://images-na.ssl-images-amazon.com/images/I/619Gn-+VNQL._AC_UL302_SR302,200_.jpg',
   img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347752011l/12469670.jpg',
  title: 'How to Win Friends & Influence People',
  author: 'Dale Carnegie',
  // description: 'This book teaches you countless principles to become a likable person, handle your relationships well, win others over and help them change their behavior without being intrusive.'
   description: 'In this book summary on How to Win Friends and Influence People in the Digital Age, we’ll review ideas from the original book, with tips on how to apply them in today’s digital age, so you can stand out as a leader and build rich, trusting and lasting relationships.'
}
])

//Main Bookcase background change...not sure how to make it work correctly
const [backgroundImage, setBackgroundImage] = useState("image.png");

  function handleChangeBackground() {
    setIsDark(!isDark);
    setBackgroundImage(backgroundImage ===
      '../src/Images/starts-galaxy.gif' ? '../src/Images/images.png' : '../src/Images/starts-galaxy.gif');
  }

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
    { ...books, descriptionVisible : !books.descriptionVisible } : books))
    // console.log(id)
  }
  
  return (
  <article className={`book ${isDark ? 'dark' : 'light'}`} >
    <Header onAdd={() => setShowBook(!showBook)}
      showAdd={showBook} />
      {showBook && <AddBook onAdd = {addBookkId} />}
      <div className={`theme ${isDark ? "dark" : "white"}`} >
        <p className="slider-text">{}</p>
        <label class="switch">
          <input type="checkbox" name="Dark Theme" onChange={handleThemeChange} checked={isDark}/>
          <span className="slider round"></span>
        </label>
      </div>
        {book.map((booking) => {
          
           const {id, img, title, author, description, descriptionVisible} = booking;
           
            return (
            <React.Fragment >
            <div key={id} id= 'container'>
                <h1>{}</h1>
                {descriptionVisible ? <p className="description flip2" style={{color: !isDark ? "rgb(0, 255, 255, 0.9)" : "black", fontWeight: !isDark ? 'bold' : "inherit",
                borderColor: !isDark ? "white" : "black", backgroundColor: !isDark ? "rgb(0, 0, 0, 0.7)" : "rgb(255, 255, 255, 0.8)"}} 
                onClick={()=>toggleBook(id)}>{description}</p> :
                    <img className="flip" src={img} onClick={() => toggleBook(id)} alt="" style={{
                      color: !isDark ? "dark" : "light"}} />}
                <h1 style={{color: !isDark ? "white" : "black", textShadow: !isDark ? "0 0 3px #FF0000, 0 0 5px #0000FF" : ""}}>{title}</h1>
                <h3 style={{color: !isDark ? "coral" : "black", fontFamily: !isDark ? "fantasy" : "",
              textShadow: !isDark ? "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" : ""}}>{author}</h3>
                <h1>{}</h1>
                 {/* {descriptionVisible && <h1 className="description"><span >{booking.description}</span></h1>} */}
                  <button className={`bttn ${isDark ? 'dark' : 'light'}`} 
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

