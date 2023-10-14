import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }){
    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} id={book.id} book={book} />
    })

    return <div className="book-list">{ renderedBooks }</div>
}

export default BookList;