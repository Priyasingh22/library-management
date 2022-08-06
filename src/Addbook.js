import './style/addbooks.css'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Addbook = () => {

    let history = useHistory();

    let [Booktitle, setBookTitle] = useState();
    let [author, setAuthor] = useState();
    let [Id, setid] = useState();
    let [Publisher, setPublisher] = useState();
    // let [Poster, setPoster] = useState();


    let submitFn = (a) => {
        a.preventDefault();
        let data = { Booktitle, author, Publisher, Id }
        fetch('http://localhost:4000/booklist', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            alert('Book added successfully')
            history.push('./booklist')
        })
    }

    return (
        <div className="ad">
            <h1>Add Books </h1>

            <form onSubmit={submitFn}>
                <div className="ser">
                    <label htmlFor="name"><b>Id</b></label>
                    <input type="text" value={Id} onChange={(a) => setid(a.target.value)} required placeholder="book series" />
                </div>

                <div className="tit">
                    <label htmlFor="name"><b> Book Title</b></label>
                    <input type="text" value={Booktitle} onChange={(a) => setBookTitle(a.target.value)} required placeholder="book title" />
                </div>

                <div className="aut">
                    <label htmlFor="name"><b> Author</b></label>
                    <input type="text" value={author} onChange={(a) => setAuthor(a.target.value)} required placeholder="Author Name" />
                </div>

                <div className="pub">
                    <label htmlFor="name"><b> Publisher</b></label>
                    <input type="text" value={Publisher} onChange={(a) => setPublisher(a.target.value)} required placeholder="publisher name" />
                </div>
                {/* <div className="pos">
                    <label htmlFor="name"><b> Poster</b></label>
                    <input type="text" value={Poster} onChange={(a) => setPoster(a.target.value)} required placeholder="select file" />
                </div> */}

                <div className="ab">
                    <Link to="/Booklist"> <button id="oly" type="submit"> Add Book </button> </Link>
                </div>
            </form >
        </div >
    );
}

export default Addbook; 