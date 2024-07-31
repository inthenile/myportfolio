import reactlogo from "../src/img/icons8-react.png"
import csslogo from "../src/img/icons8-css3.png"
import jslogo from "../src/img/icons8-javascript.png"
import htmllogo from "../src/img/icons8-html5.png"
import tslogo from "../src/img/icons8-typescript.png"
import gitlogo from "../src/img/icons8-git.png"

export default function Skills(){

    const reactLogo = <img src={reactlogo} alt="react logo" />
    const cssLogo = <img src={csslogo} alt="css logo" />
    const jsLogo = <img src={jslogo} alt="javascript logo"  />
    const htmlLogo = <img src={htmllogo} alt="html logo" />
    const tsLogo = <img src={tslogo} alt="typescript logo" />
    const gitLogo = <img src={gitlogo} alt="git logo" />

    const languages = [jsLogo, reactLogo, htmlLogo, cssLogo, tsLogo];
    const technologies = [gitLogo];
    const softSkills = ["Creative", "Communicative", "Teamplayer", "Fast-learner", "Time Management"]
    let keyCount = 1;
    
    const languageItems =  languages.map((language) => (
        <span key={keyCount++}> {language} </span>
    ))
    const technologyItems = technologies.map((tech) => (
        <span key={keyCount++}> {tech} </span>
    ))
    const softSkillItems = softSkills.map((skill) => (
        <span key={keyCount++}> {skill} </span>
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