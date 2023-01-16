import { useState } from "react"

const AddBook = ({onAdd}) => {
    const [title, settitle] = useState('')
    const [author, setAuthor] = useState('')
    const [img, setImage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        !title ? alert('Please add a title') :
        !author ? alert('Please add an author') :
        !img ? alert('Please select an img') :

        onAdd({ title, author, img })
 
        settitle('')
        setAuthor('')
        setImage('')
    } 

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Book Name</label>
        <input type = 'title' placeholder="Add book name" 
        value={title} onChange = {(e) => 
        settitle(e.target.value)}/>
        </div>
        <div className="form-control">
        <label>Author</label>
        <input type = 'title' placeholder="Add the author"
          value={author} onChange = {(e) => 
            setAuthor(e.target.value)}/>
        </div>
        <div className="form-control-img">
    <label>Book Image</label>
    <input type="file" placeholder="Upload Image" onChange={e => 
      setImage(URL.createObjectURL(e.target.files[0]))} />
    <img src={img} alt="Uploaded Image" height="200" width="200" />
      </div>
        <input type='submit' value='Save Book' className="bttn2 btttn btttn-dark" />
    </form>
  )
}

export default AddBook