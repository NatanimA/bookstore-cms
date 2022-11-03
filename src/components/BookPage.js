import React from "react";
import AddBook from "./AddBook";
import BooksList from "./BookList";

export default class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            book:[
                {name:"Game of thrones",author:"Natanim",genre:"Adventure",complete:"60%",currentChapter:"Chapter:8",id:0},
                { name: "Hunger Games", author: "Natanim", genre: "Romance", complete: "10%", currentChapter: "Introduction",id:1 },
                { name: "The Secret", author: "Natanim", genre: "Drama", complete: "40%", currentChapter: "Going with the wind" ,id:2},
                { name: "Gone with the wind", author: "Natanim", genre: "Action", complete: "90%", currentChapter: "Chapter:10" , id:3},
            ]
        }
    }

    render(){
        return(
            <div className="book-page-container">
                <BooksList BooksList={this.state.book} />
                <AddBook />
            </div>
        )
    }
}