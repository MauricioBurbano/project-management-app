import { useRef } from "react"

function Project({
        selectedProject, 
        newProject, 
        delSelectedProject, 
        addTask, 
        projects, 
        tasks, 
        delTask
    }) {
    const task = useRef()
    const project = projects.find(project => project.id === selectedProject) ?? ''

    function handleForm(event) {
        event.preventDefault()
        addTask(Math.random(), task.current.value, selectedProject)
        task.current.value = ''
    }

    return <div style={{display: selectedProject !== -1 && !newProject ? 'block' : 'none'}}>
        <button 
            className="bg-orange-200 hover:bg-orange-300 px-8 py-1 rounded-full"
            onClick={delSelectedProject}
            >Delete
        </button>
        <p className="font-bold">{project.title}</p>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
        <p className="font-bold">Tasks</p>
        <form onSubmit={handleForm}>
            <input ref={task} type="text" placeholder="Task"/>
            <button
                type="submit"
                className="bg-orange-200 hover:bg-orange-300 px-8 py-1 rounded-full"
                >Add
            </button>
        </form>
        {tasks.filter(task => task.projectId === selectedProject).map(task => <div key={task.id}>
            <p className="inline-block">{task.task}</p>
            <button className="bg-orange-200 hover:bg-orange-300 py-1 px-8 rounded-full" onClick={() => {delTask(task.id)}}>Clear</button>
        </div>)}
    </div>
}

export default Project
