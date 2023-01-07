import './App.css';
import BookList from './components/booklist.js';
import BookForm from './components/bookform.js';
import { getBooks } from './rest';
import React, { useState, useEffect } from 'react';


function App() {
  const [refreshFlag, setRefreshFlag] = useState(0);
  const refresh = function(noChanges=false){
    if(!noChanges){
      setRefreshFlag(refreshFlag +1 );
    }
    setSelectedBook(null);
  }
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  useEffect(() => {
    let promise = getBooks();
    promise.then(
        (text) => {
            let bookArray = JSON.parse(text);
            console.log(bookArray)
            setBooks(bookArray);
        }
    )
  }, [refreshFlag]);
  
  const Conditional = function() {
    if(selectedBook != null) {
      return <BookForm book={selectedBook}
              setSelectedBook={setSelectedBook}
              refresh={refresh}
              />
    }
      return <div/>
  }

  return (
    <div className="App">
        <h3>React Book Project</h3>
          <BookList books={books} 
                    selectedBook={selectedBook} 
                    setSelectedBook={setSelectedBook} />        
          <Conditional />
    </div>
  );
}

export default App;


// old return function
//  <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>