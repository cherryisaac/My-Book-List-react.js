import { FaTimes } from 'react-icons/fa'

const ToggleBook = ({ book, onToggle }) => {
    return (
        <div className= {`task ${book.reminder ? 'reminder' : ''}`}
        > {book.text}</div>
    )
}