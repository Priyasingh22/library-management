import './style/addbooks.css';
import { useState, useEffect } from "react";


const Booklist = () => {
    let delList = (Id) => {
        fetch('http://localhost:3000/Booklist /$ { Id }', {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                alert('Book Deleted')
                getBooks();
            })
        })
    }
    let getBooks = () => {

        fetch('http://localhost:3000/Booklist')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBooklist(data)
            })
    }

    let [Booklist, setBooklist] = useState()
    useEffect(() => {
        getBooks()
    })

    return (
        <div className="menu1">
            <div class="navlogo">
                <h1>Booklist</h1>
            </div>
            {
                Booklist.map((val) => {
                    return (
                        <div className="collection">
                            <h2>hellozxc</h2>
                            <h2>{val.Booktitle}</h2>
                            <h4>{val.Author}</h4>
                            <h4>{val.Publisher}</h4>
                            <h4>{val.Poster}</h4>

                            <button onClick={() => delList(val.Id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Booklist;