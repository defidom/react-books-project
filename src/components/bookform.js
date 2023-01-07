import React, { useState } from 'react';
import { addBook, updateBook, deleteBook } from '../rest/index';

export default function BookForm(props) {
    const [ book, setBook ] = useState(props.book);
    const usage = (props.book.id < 0 )?'add' : 'edit';
    const handleChange = function (event) {
        const name = event.target.name;
        const value = event.target.value;
        book[name] = value;
        setBook({ ...book });
    }
    const handleSaveBook = function (){
        if(usage === 'add') {
            let promise = addBook(book);
            promise.then(function (text){
                console.log('handleSaveBook.add');
                props.refresh();
            });
        }

        if(usage === 'edit') {
            let promise = updateBook(book);
            promise.then(function (text) {
                console.log('handleSaveBook.edit');
                props.refresh();
            });
        }
    }
    const handleDeleteBook = function () {
        if(usage === 'add') {
            props.refresh(true);
        }

        if(usage === 'edit') {
            let promise = deleteBook(book);
            promise.then(function (text) {
                props.refresh();
            });
        }
    }

    return (
        <div id='book-form' >
            <h4>Book Form {usage} </h4>
            <form >
                <table><tbody>
                    <tr>
                        <td>Isbn:</td>
                        <td><input type={'text'} name={'isbn'}
                        onChange={(e)=>handleChange(e)}
                        value={props.isbn} /></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input type={'text'} name={'title'}
                        onChange={(e)=>handleChange(e)}
                        value={props.book.title} /></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type={'number'} name={'price'}
                        onChange={(e)=>handleChange(e)}
                        value={props.book.price} /> </td>
                </tr>
                </tbody></table>
                <input type={'button'} 
                        onClick={()=>props.refresh(true)}
                        value="Cancel" />
                <input type={'button'} 
                        onClick={()=>handleSaveBook()}
                        value="Save" />
                <input type={'button'} 
                        onClick={()=>handleDeleteBook()}
                        value='Delete' />
            </form>
        </div>
    )
}