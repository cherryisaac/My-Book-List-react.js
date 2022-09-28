import { useState } from "react"

const AddBook = ({onAdd}) => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        !text ? alert('Please add a title') :
        !author ? alert('Please add an author') :
        !image ? alert('Please select an image') :

        onAdd({ text, image, author })
 
        setText('')
        setAuthor('')
        setImage('')
    } 

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Book Name</label>
        <input type = 'text' placeholder="Add book name" 
        value={text} onChange = {(e) => 
        setText(e.target.value)}/>
        </div>
        <div className="form-control">
        <label>Author</label>
        <input type = 'text' placeholder="Add the author"
          value={author} onChange = {(e) => 
            setAuthor(e.target.value)}/>
        </div>
        <div className="form-control-image">
        <label>Book Image</label>
        <input type = 'file'  placeholder="Upload Image" value={image} 
        onChange = {(e) => 
        setImage(e.target.value)}/>
        </div>

        <input type='submit' value='Save Book' className="bttn2 btttn btttn-dark" />
    </form>
  )
}

export default AddBook