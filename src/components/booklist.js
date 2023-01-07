import React from 'react';

export default function BookList(props) {
    console.log(props)
    const newBook = { "id":-1, "isbn": "", "title": "", "price": 0};
    const isSelected = function(book) {
        return (props.selectedBook != null && props.selectedBook === book);
    }
    return (<div id={'book-list'}>
        <h4>Book List</h4>
        <ul>
            {props.books.map(
                (book, index) => {
                    console.log ("this one", props)
                    return <li key={index} className={(isSelected(book)) ? 'selected' : ''}
                    onClick={(event) => props.setSelectedBook(book)}>
                        {book.isbn} - {book.title} - ${book.price}
                    </li>
                }
            )}
        </ul>
        <input type={'button'} 
                value="New Book" 
                onClick={()=> props.setSelectedBook(newBook)}
        />
    </div>
    );
}