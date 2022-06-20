import React from "react";
import logo from "./logo.svg";
import "./App.css";
import First from "./components/First";
import Class from "./components/Class";
import { useState } from "react";
import Book from "./components/Book";
import { Component } from "react";

class App extends Component {
  state = {
    books: [
      {
        bookName: "Islami Aqida",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
      {
        bookName: "Rahe Belayet",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
      {
        bookName: "Hadiser Nam A Jaliyati",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
      {
        bookName: "Yeahus Sunan",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
      {
        bookName: "Proda Poshak O Dehosojja",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
      {
        bookName: "Salat Doya O Jikir",
        writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
      },
    ],
    otherProp: "I am other prop",
  };
  changeBookState = (newBookName) => {
    this.setState({
      books: [
        {
          bookName: newBookName,
          writer: "Arif Azad",
        },

        {
          bookName: "Rahe Belayet",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Hadiser Nam A Jaliyati",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Yeahus Sunan",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Proda Poshak O Dehosojja",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Salat Doya O Jikir",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
      ],
    });
  };
  changeWithInputState = (event) => {
    this.setState({
      books: [
        {
          bookName: event.target.value,
          writer: "Arif Azad",
        },

        {
          bookName: "Rahe Belayet",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Hadiser Nam A Jaliyati",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Yeahus Sunan",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: event.target.value,
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
        {
          bookName: "Salat Doya O Jikir",
          writer: "Dr. Khandokar Abdullah Mohammod Jahangir",
        },
      ],
    });
  };
  render() {
    const style = {
      border: "1px solid red",
      borderRedious: "5px",
      backgroundColor: "black",
      color: "white",
    };
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("Fera")}>
          Change state
        </button>
        <input type={"text"} onChange={this.changeWithInputState}></input>
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
          text={this.state.otherProp}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
        />
        <Book
          bookName={this.state.books[3].bookName}
          writer={this.state.books[3].writer}
          change={this.changeBookState.bind(this, "fera 2")}
        />
        <Book
          bookName={this.state.books[4].bookName}
          writer={this.state.books[4].writer}
          inputName={this.changeWithInputState}
        />
        <Book
          bookName={this.state.books[5].bookName}
          writer={this.state.books[5].writer}
        />
      </div>
    );
  }
}

export default App;
