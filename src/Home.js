import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="sweethome">
            <h1>welcome to our library</h1>
            <h3>we stand behind your success</h3>
            <div className="main">
                <div className="container">
                    <h3>Admin login</h3>
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/11/10/admin-icon-male-person-profile-avatar-with-gear-vector-25811110.jpg" alt="" height="250px" width="230px" />
                    <Link to="/adminlogin"><button id="btn1">login</button></Link>
                </div>
                <div className="subcnt">
                    <h3>User login</h3>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="" height="250px" width="230px" />
                    <Link to="/userlogin"> <button id="btn2">login</button></Link>
                </div>
            </div>


        </div>




    );
}

export default Home;