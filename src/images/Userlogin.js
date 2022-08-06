const Userlogin = () => {
    return (
        <div className="useme">
            <div className="plzlogs">
                <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/people-512.png" alt="" height="200px" width="180px" />
                <h1>USER LOGIN </h1>

                <div className="mail">
                    <label htmlFor="e-mail">E-MAIL</label><br /> <br />
                    <input type="text" placeholder="enter e-mail" />
                </div>
                <div className="pswrd">
                    <label htmlFor="password">PASSWORD</label> <br /> <br />
                    <input type="text" placeholder="enter password" />
                </div>
                <button type="login" id="butns">login</button>
            </div>
        </div>
    );
}

export default Userlogin;