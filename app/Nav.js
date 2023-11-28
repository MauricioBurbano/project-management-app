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
                className="basi-1/3 bg-orange-200 hover:bg-orange-300 rounded-full px-8 py-1 mb-4"
                >Add Project
            </button>
        </div>
        <div className="flex flex-col gap-3">
            {projects.map(project => <div className="flex flex-row justify-center" key={project.id}>
                <button
                    className={'w-3/4 text-left px-3 py-1 rounded-md' + ' ' + (selectedProject === project.id ? 
                        'bg-orange-200' : 
                        'bg-orange-100 hover:bg-orange-300')}
                    onClick={() => {selectProject(project.id)}}
                    >{project.title}
                </button>
            </div>)}
        </div>
    </>
}

export default Nav