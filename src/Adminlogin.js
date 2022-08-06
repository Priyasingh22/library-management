import { Link } from "react-router-dom";

const Adminlogin = () => {
    return (
        <div className="logs">
            <div className="sublogs">
                <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" height="200px" width="180px" />
                <h1>ADMIN LOGIN </h1>

                <div className="mail">
                    <label htmlFor="e-mail">E-MAIL</label><br /> <br />
                    <input type="text" placeholder="enter e-mail" />
                </div>
                
                <div className="pswrd">
                    <label htmlFor="password">PASSWORD</label> <br /> <br />
                    <input type="text" placeholder="enter password" />
                </div>
                <Link to="/adminportal"><button id="butn">login</button></Link>
            </div>
        </div>
    );
}

export default Adminlogin;