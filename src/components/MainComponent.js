import react, { Component } from "react";
import BookList from "./lists/BookList";
import booklist from "../assets/book";
import NewBook from "./representational/NewBook";
import { Route, Routes, Link } from "react-router-dom";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
    };
  }
  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index],
    };

    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({ books: books });
  };

  deleteBookState = (index) => {
    // const books = this.state.books.slice();
    // const books=this.state.books.map(item=>item)
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  render() {
    const books = (
      <BookList
        books={this.state.books}
        deleteBookState={this.deleteBookState}
        changeWithInputState={this.changeWithInputState}
      />
    );

    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <link to="/">{"Home"}</link>
            </li>
            <li>
              <link to="/new-book" >{"New Book"} </link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={books} />
          <Route path="/new-book" element={<NewBook />} />
        </Routes>
      </div>
    );
  }
}
export default MainComponent;
