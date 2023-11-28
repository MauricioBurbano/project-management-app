import Start from "./Start"
import AddProject from "./AddProject"
import Project from "./Project"

function Dashboard({
        add, 
        addTask, 
        selectedProject, 
        updateSelectedProject, 
        newProject, 
        updateNewProject, 
        projects,
        tasks, 
        delProject,
        delTask
    }) {
    function delSelectedProject() {
        delProject(selectedProject)
        updateSelectedProject(-1)
    }

    return <div className="flex flex-col justify-center h-full">
        <Start 
            selectedProject={selectedProject} 
            newProject={newProject}
            updateNewProject={updateNewProject}
        />
        <AddProject 
            selectedProject={selectedProject}
            add={add}
            updateSelectedProject={updateSelectedProject}
            newProject={newProject}
            updateNewProject={updateNewProject}
        />
        <Project
            selectedProject={selectedProject}
            newProject={newProject}
            delSelectedProject={delSelectedProject}
            projects={projects}
            addTask={addTask}
            tasks={tasks}
            delTask={delTask}
        />
    </div>
}

export default Dashboard