import React, { useState, useEffect } from "react";
import AddBook from "./AddBook";
import Books from './Books';

function Book() {
  //Prompt to change theme
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = () => {
    setIsDark(!isDark);
  }

  //Chamge background when dark
  useEffect(() => {
    if (isDark !== null) {
      document.body.classList.toggle("darkmode", !isDark);
    }
  }, [!isDark, isDark]);

  const isLoading = true;

  useEffect(() => {
    if (isLoading) {
      document.body.classList.toggle("library-load");
    }
  }, [isLoading]);

  //Button to reveal option to add a book
  const Button = ({ color, text, onClick }) => {
  return (<button onClick={onClick} 
    style={{backgroundColor: color}} 
    className={`btn ${isDark ? 'dark' : 'light'}`}  >{text} </button>)
}  
  const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'  >
        <Button  color= {showAdd ? 'black' : 'green'} 
        text = {showAdd ? 'Close' : 'Add Book to List'} onClick = {onAdd}/>
    </header>
  )
}

  //Hide book add by default (useState set to false)
  const [showBook, setShowBook] = useState
  (false)  
  //For changing state such as deleting a book
  const [book, setBook] = useState(Books)


  //To delete a book
  const removeItem = (id) => {
     setBook(book.filter((someBook) => someBook.id !== id))
  }

  //Add book with random id
  const addBookkId = (someBook) => {
  const id =Math.floor(Math.random() * 10000) + 1;
    console.log(someBook)

  const newBook = { id, ...someBook }
  setBook([...book, newBook])
  }

  const toggleBook = (id) => {
     setBook(book.map((books) => books.id === id ?
    { ...books, descriptionVisible : !books.descriptionVisible } : books))
    // console.log(id)
  }
  
  return (
  <div className='booklist' key={book.id}>
    <article className={`book ${isDark ? 'dark' : 'light'}`}>
    <Header onAdd={() => setShowBook(!showBook)}
      showAdd={showBook} />
      {showBook && <AddBook onAdd = {addBookkId} />}
      <div className={`theme ${isDark ? "dark" : "white"}`} >
        <p className="slider-text">{}</p>
        <label className="switch">
          <input type="checkbox" name="Dark Theme" onChange={handleThemeChange} checked={isDark}/>
          <span className="slider round"></span>
        </label>
      </div>
        {book.length === 0 ? (
          <div className="btttn">
          <h2 className="txt" style={{backgroundColor: !isDark ? "black" : "white"}}>No books left</h2>
            <button className={` btn2 reset ${!isDark ? 'dark' : 'light'}`} 
            // style={{color: !isDark ? "cyan" : "black", backgroundColor: !isDark ? "black" : "gray"}} 
          onClick={() => setBook(Books)}>refresh</button>
          </div>
        ) : (
        book.map((booking) => {
           const {id, img, title, author, description, descriptionVisible} = booking;
           
            return (
            <React.Fragment >
            <div id= 'container' key={id}>
                <h1>{}</h1>
                {descriptionVisible ? <p className="description flip2" style={{color: !isDark ? "rgb(0, 255, 255, 0.9)" : "black", fontWeight: !isDark ? 'bold' : "inherit",
                borderColor: !isDark ? "white" : "black", backgroundColor: !isDark ? "rgb(0, 0, 0, 0.7)" : "rgb(255, 255, 255, 0.8)"}} 
                onClick={()=>toggleBook(id)}>{description}</p> :
                    <img className="flip book-image" src={img} onClick={() => toggleBook(id)} alt="" style={{
                      color: !isDark ? "dark" : "light"}} />}
                <h1 style={{color: !isDark ? "white" : "black", textShadow: !isDark ? "0 0 3px #FF0000, 0 0 5px #0000FF" : "",
                    fontWeight: !isDark ? '' : "bold",}}>{title}</h1>
                  <h3 className="author" style={{
                    color: !isDark ? "coral" : "black", fontFamily: !isDark ? "fantasy" : "bold",
                    textShadow: !isDark ? "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" :
                     ""}}>{author}</h3>
                <h1>{}</h1>
                  <button className={`bttn ${isDark ? 'dark' : 'light'}`} 
                        onClick={() => removeItem(id)}>
                        Delete
                  </button>
            </div>
            </React.Fragment>
            ) }))}
    </article>
      <footer style={{ color: !isDark ? "white" : "white", fontWeight: !isDark ? 'inherit' : "lighter",
        textShadow: !isDark ? "" : "-0.5px 0 green, 0 0.5px green, 0.5px 0 green, 0 -0.5px green"
        }}>
        &copy; Copyright. All rights reserved. Created by Isaac Cherry
    </footer>
  </div>
  ) 
}

export default Book