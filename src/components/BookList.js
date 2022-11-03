import React from "react";

const BooksList = (props) => {
    console.log("props : ",props)
    const { BooksList } = props
    console.log("books: ",BooksList)
    const bookList = BooksList.map( book => {
        return(
            <div className="book-list" key={book.id}>
                <div className="book-info">
                    <span className="book-genre">{book.genre}</span>
                    <h3 className="book-name">{book.name}</h3>
                    <span>{book.author}</span>
                    <div className="button-container">
                        <button className="button-item">Comments</button>
                        <button className="button-item">Remove</button>
                        <button className="button-item">Edit</button>
                    </div>
                </div>
                <p>{book.complete}</p>
                <div className="book-chapter-info">
                    <span className="current-chapter-header">CURRENT CHAPTER</span>
                    <p>{book.currentChapter}</p>
                    <button className="btn chapter-btn">UPDATE PROGRESS</button>
                </div>
            </div>
        )
    })
    return(
        <div className="book-list-container">
            {bookList}
        </div>
    )
}

export default BooksList