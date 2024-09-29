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
                <p>Welcome to my humble domain! I'm a self-taught web developer who enjoys learning new technologies, and creating projects using those new technologies.
                Below -as well as in my GitHub account- you can see some of the projects I made using mainly React, TypeScript and JavaScript. Currently I am learning Next.js. </p>
                <p>You can contact me using the form at the bottom of the page.</p> <br/>
                <p>I thank you for visiting my portfolio page. If you are looking to contact me, you can do so by using the contact form at the bottom of th page.
                Make sure you verify after ou send the message so that it reaches me.</p>
            </div>
            <div className="socials" >
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