import { Link } from "react-router-dom";

const userlogin = () => {
    return (
        <div className="logs">
            <div className="sublogs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2gpIYz8uWtJWbJnRFSIkB8tZOIJJr2SJjQ&usqp=CAU" alt="" height="200px" width="180px" />
                <h1>USER LOGIN </h1>

                <div className="mail">
                    <label htmlFor="e-mail">E-MAIL</label><br /> <br />
                    <input type="text" placeholder="enter e-mail" />
                </div>
                <div className="pswrd">
                    <label htmlFor="password">PASSWORD</label> <br /> <br />
                    <input type="text" placeholder="enter password" />
                </div>
                <Link to="/userportal"><button id="butn">login</button> </Link>
            </div>
        </div>
    );
}

export default userlogin;