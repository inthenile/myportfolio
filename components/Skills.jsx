import reactlogo from "../src/img/icons8-react.png"
import csslogo from "../src/img/icons8-css3.png"
import jslogo from "../src/img/icons8-javascript.png"
import htmllogo from "../src/img/icons8-html5.png"
import tslogo from "../src/img/icons8-typescript.png"
import gitlogo from "../src/img/icons8-git.png"
import mysqllogo from "../src/img/icons8-mysql.png"
import nextlogo from "../src/img/icons8-nextjs.png"
import tailwindlogo from "../src/img/icons8-tailwind.png"
import timemanagementlogo from "../src/img/icons8-time-management.png"
import adaptivelogo from "../src/img/icons8-adaptive.png"
import quicklearnerlogo from "../src/img/icons8-quicklearner.png"
import teamplayerlogo from "../src/img/icons8-teamplayer.png"
import communicativelogo from "../src/img/icons8-communicative.png"
export default function Skills(){
    const reactLogo = <img src={reactlogo} alt="react logo" />
    const cssLogo = <img src={csslogo} alt="css logo" />
    const jsLogo = <img src={jslogo} alt="javascript logo"  />
    const htmlLogo = <img src={htmllogo} alt="html logo" />
    const tsLogo = <img src={tslogo} alt="typescript logo" />
    const gitLogo = <img src={gitlogo} alt="git logo" />
    const mysqlLogo = <img src={mysqllogo} alt="mySQL logo" />
    const nextLogo = <img src={nextlogo} alt="nextJs logo" />
    const tailwindLogo = <img src={tailwindlogo} alt="tailwind css logo" />

    const languages = [jsLogo, reactLogo, htmlLogo, cssLogo, tsLogo, mysqlLogo] ;
    const technologies = [gitLogo, nextLogo, tailwindLogo];

    const softSkills = [
        {
        icon: <img src={adaptivelogo} alt="adaptive" />,
        description: "Adaptive: I don't get overwhelmed by difficulties in the face of challenges. I adapt to the situation and finish the task at hand ass well as possible."
        },
        {
        icon: <img src={teamplayerlogo} alt="Teamplayer" />,
        description: "Teamplayer: not only am I capable of carrying tasks out individually, I also thrive in a group setting.",
        },
        {
        icon: <img src={communicativelogo} alt="Communicative" />,
        description: "Communicative: I welcome feedback and use language well and effectively.",
        },
        {
        icon: <img src={quicklearnerlogo} alt="Quick-learner" />,
        description: "Quick-learner: with a hands-on approach, I pick new things up fast, and I am always eager to learn.",
        },
        {
        icon: <img src={timemanagementlogo} alt="time management" />,
        description: "Time Management: my previous work experience taught me how to be as efficient as possible while not reducing the quality of my work."
        },
    ]
    
    const languageItems =  languages.map((language, i) => (
        <span key={i}> {language} </span>
    ))
    const technologyItems = technologies.map((tech, i) => (
        <span key={i}> {tech} </span>
    ))
    const softSkillItems = softSkills.map((skill, i) => (
        <div key={i}>
            <span> {skill.icon} </span>
            <p > {skill.description} </p>
        </div>

    ))
    
    return (
        <div className="skills-wrapper">
            <h1>Skills</h1>
            <div className="skills">
                <div className="languageSkills">
                <h4>Languages:</h4>
                    {languageItems}
                </div>
                <div className="technologies">
                    <h4> Technologies:</h4>
                    {technologyItems}
                </div>
                <div className="softSkills" >
                <h4>Soft skills:</h4>
                    {softSkillItems}
                </div>
            </div>
        </div>
    )
}