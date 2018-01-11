import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    showSearchPage: PropTypes.bool.isRequired
  }
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    return (
           <div className="list-books">
             <div className="list-books-title">
               <h1>MyReads</h1>
             </div>
             <div className="list-books-content">
               <div>
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Currently Reading</h2>
                 </div>
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Want to Read</h2>
                 </div>
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Read</h2>
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                       <li>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?                        id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-                   1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                             <div className="book-shelf-changer">
                               <select>
                                 <option value="none" disabled>Move to...</option>
                                 <option value="currentlyReading">Currently Reading</option>
                                 <option value="wantToRead">Want to Read</option>
                                 <option value="read">Read</option>
                                 <option value="none">None</option>
                               </select>
                             </div>
                           </div>
                           <div className="book-title">The Adventures of Tom Sawyer</div>
                           <div className="book-authors">Mark Twain</div>
                         </div>
                       </li>
                     </ol>
                   </div>
                 </div>
               </div>
             </div>
             <div className="open-search">
               <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
             </div>
           </div>
         )}
}

export default ListBooks

