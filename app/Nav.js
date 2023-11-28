const buttonStyle = ' w-full mt-3'

function Nav({projects, selectedProject, updateSelectedProject, newProject, updateNewProject}) {
    function handleClick() {
        if (!newProject) updateNewProject()
        updateSelectedProject(-1)
    }

    function selectProject(id) {
        if (newProject) updateNewProject()

        if (selectedProject === id) {
            updateSelectedProject(-1)
        } else updateSelectedProject(id)
    }

    return <>
        <p className="font-bold text-center my-3">Your Projects</p>
        <div className="flex flex-row justify-center">
            <button 
                onClick={handleClick} 
                className="basi-1/3 bg-orange-200 hover:bg-orange-300 rounded-full px-8 py-1"
                >Add Project
            </button>
        </div>
        {projects.map(project => <button
                className={selectedProject === project.id ? 'bg-orange-200' + buttonStyle : 'bg-orange-100 hover:bg-orange-300' + buttonStyle}
                onClick={() => {selectProject(project.id)}}
                key={project.id}>{project.title}
        </button>)}
    </>
}

export default Nav