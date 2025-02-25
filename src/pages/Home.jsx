import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="home-box">
                <h1>My Diary</h1>
                <p>Write your thoughts in a safe place.</p>
                
                <form className="login-form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                </form>

                <button className="google-login">Continue with Google</button>
                <button className="create-account">Create New Account</button>
            </div>
        </div>
    );
}

export default Home;

