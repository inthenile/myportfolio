import githublogo from "../src/img/github-logo.png"
import linkedinlogo from "../src/img/linkedin-logo.png"
import avatar from "../src/img/avatar.jpg"
export default function Navbar(){

    
    return(
        <div className="navbar">
            <img className="avatar" src={avatar} alt="my github avatar" />
            <h1 className="myName">Hey, I'm Salim.</h1>
            <br/>
            <div className="bio">
                <p>I am a self-taught developer who enjoys creating websites and learning new technologies. </p>
                <p>I am currently studying C# and MySQL to learn more about server-side programming.</p> 
                <p>You can contact me using the form at the bottom of the page.</p> <br/>
                <p> Thank you for visiting my portfolio page.</p>

            </div>
            <div className="socials">
                <div className="github">
                    <a href="https://github.com/inthenile" target="_blank">
                        <img src={githublogo} alt="Github logo" />
                    </a>
                    </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/salim-caliskan-724811273/" target="_blank">
                        <img src={linkedinlogo} alt="Linkedin logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}