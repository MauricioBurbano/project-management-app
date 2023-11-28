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

        return <div className="flex flex-row justify-center">
            <div 
                style={{
                    display: selectedProject !== -1 && !newProject ? 'block' : 'none',
                    height: '90vh',
                    width: '90%'
                }}>
                <div className="flex flex-row justify-between">
                    <p className="font-medium text-2xl">{project.title}</p>
                    <button 
                        style={{width: '75px'}}
                        className="bg-orange-200 hover:bg-orange-300 rounded-full"
                        onClick={delSelectedProject}
                        >Delete
                    </button>
                </div>
                <p>{project.dueDate}</p>
                <p>{project.description}</p>
                <div className="border-t-4 mt-2 border-orange-300 pt-1">
                    <p className="font-medium text-lg">Tasks</p>
                    <form className="flex flex-row mb-3 mt-1" onSubmit={handleForm}>
                        <div className="basis-full mr-3 flex flex-col justify-center">
                            <input className="w-full rounded-md py-1 px-2" ref={task} type="text" placeholder="Task"/>
                        </div>
                        <button
                            style={{width: '75px'}}
                            type="submit"
                            className="bg-orange-200 hover:bg-orange-300 rounded-full"
                            >Add
                        </button>
                    </form>
                    {tasks.filter(task => task.projectId === selectedProject).map(task => 
                        <div className="flex flex-row justify-between my-2 px-2 rounded-md bg-orange-50" key={task.id}>
                            <div className="flex flex-col justify-center">    
                                <p>{task.task}</p>
                            </div>
                            <button 
                                style={{
                                    width: '29px',
                                    height: '29px'
                                }}
                                className="relative bg-orange-200 hover:bg-orange-300 my-1 mx-1 rounded-full" 
                                onClick={() => {delTask(task.id)}}
                                ><div className="absolute bottom-0 left-1 text-3xl">{String.fromCharCode(0x00D7)}</div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div> 
}

export default Project
