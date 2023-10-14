import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }){
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
        onEdit();
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={ book }/>
    }

    return <div className="book-show">
        <div>{content}</div>
        <div className="actions">
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
        </div>
    </div>
}

export default BookShow;