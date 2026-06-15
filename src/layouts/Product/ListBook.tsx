import React from "react";
import BookProps from "./Components/BookProps";
import Book from "../../Models/Book";
const List: React.FC = () => {

    const books: Book[] = [
        {
            id: 1,
            title: "book1",
            description: "22222",
            orginalPrice: 5000,
            price: 49000,
            imageUrl: "images/books/1",
        },
        {
            id: 2,
            title: "book2",
            description: "22222",
            orginalPrice: 5000,
            price: 49000,
            imageUrl: "images/books/1",
        },
    ];

    return (
        <div className="container">
            <div className="row mt-4">
                {books.map((book) => (
                    <BookProps
                        key={book.id}
                        book={book}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;