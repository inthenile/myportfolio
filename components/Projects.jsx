import { useEffect, useState } from "react"

export default function Projects(){

    const projects = [
        {index: 0, name: "GW2 API App", url:"https://github.com/inthenile/gw2efficiencyclone", technologies:"TypeScript, React", 
            description:"Gw2efficiency Clone. The user can then select whatever endpoint they want to use and see information about their account with the help of an official API key."},
            {index:1, name: "My Portfolio Page", url:"https://github.com/inthenile/myportfolio", technologies:"React, CSS, HTML", 
                description:" A portfolio showcase I developed using React and Vite."},
        {index: 2, name: "React CRUD Blog", url:"https://github.com/inthenile/React-blog", technologies:"React, CSS, HTML", 
        description:"A simple blog CRUD website. You can create, read, update and delete blogs. There is also a search bar to search blogs by their title."},

        {index: 3, name: "Poetry Platform", url:"https://github.com/inthenile/poetry-React-app", technologies:"React, CSS, HTML", 
        description:"An application that implements a poetry database that makes fetch requests to retrieve poems and poets."}
        
    ]
    const [project, setProject] = useState(projects[0]);


    //use effect to toggle inactive buttons
    useEffect(() => {
        if ( project.index - 1 < 0) {
            document.querySelector(".prevButton").classList.add("inactive-button")
            document.querySelector(".nextButton").classList.remove("inactive-button")
        }
        else {
            document.querySelector(".prevButton").classList.remove("inactive-button")
        }
        if(project.index + 1 >= projects.length){
            document.querySelector(".nextButton").classList.add("inactive-button")
            document.querySelector(".prevButton").classList.remove("inactive-button")
        } else {
            document.querySelector(".nextButton").classList.remove("inactive-button")
        }
    }, [project])
    
    const handleNextClick = () => {
        if ( project.index + 1 < projects.length) {
            setProject(projects[project.index + 1])
        }
    }

    const handlePrevClick = () => {
        if ( project.index - 1 >= 0) {
            setProject(projects[project.index - 1])
        }
    }

    //change buttons to arrows that are on either side of the project window

    return (
        <div className="project-info">

            <h1>My projects</h1>
            <div className="project-wrapper">
                <button onClick={handlePrevClick} className="prevButton"> &lt; </button>
                <div className="projects">
                    <h2>{project.name} - Project {project.index + 1} of {projects.length}</h2>
                    <p>Made with: <em>{project.technologies}</em></p>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank">Read more... =&gt; Github Repo of {project.name}</a>
                </div>

                <button onClick={handleNextClick} className="nextButton"> &gt; </button>
            </div>
        </div>

    )
}