function Start({selectedProject, newProject, updateNewProject}) {
    function handleClick() {
        updateNewProject()
    }

    return <div style={{display: selectedProject === -1 && !newProject ? 'block' : 'none'}} className="h-1/2">
        <p className="font-bold my-3 text-center">No Project Selected</p>
        <p className="mb-5 text-center">Select a project or get started with a new one</p>
        <div className="flex flex-row justify-center">
            <button 
                className="bg-orange-200 hover:bg-orange-300 rounded-full px-8 py-1"
                onClick={handleClick}
                >Create New Project
            </button>
        </div>
    </div>
}

export default Start