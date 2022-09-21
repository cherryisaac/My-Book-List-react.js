import { useState } from "react"

const AddBook = ({onAdd}) => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [reminder, setReminder] = useState(false)
    

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add a title')
            return
        }

         onAdd({ text, author, reminder })
 
        setText('')
        setAuthor('')
        setReminder(false)
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
        <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type = 'checkbox'  checked={reminder} value={reminder} 
        onChange = {(e) => 
        setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default AddBook