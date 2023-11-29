'use client'

import { useState } from "react"
import Nav from "./Nav"
import Dashboard from "./Dashboard"

export default function Page() {
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])
    const [selectedProject, setSelectedProject] = useState(-1)
    const [newProject, setNewProject] = useState(false)
    
    function delTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    function addTask(id, task, projectId) {
        setTasks(prev => [...prev, {
            id: id,
            task: task,
            projectId: projectId
        }])
    }

    function updateNewProject() {
        setNewProject(prev => !prev)
    }

    function updateSelectedProject(id) {
        setSelectedProject(id)
    }

    function addProject(id, title, description, dueDate) {
        setProjects(prev => [... prev, {
            id: id,
            title: title,
            description: description,
            dueDate: dueDate
        }])
    }

    function delProject(id) {
        setProjects(prev => prev.filter(project => project.id !== id))
    }

    return <>
        <div className="bg-orange-100">
            <div style={{height: '95vh'}} className="inline-block bg-orange-50 rounded-tr-3xl align-bottom w-1/3">
                <Nav 
                    updateNewProject={updateNewProject} 
                    updateSelectedProject={updateSelectedProject} 
                    selectedProject={selectedProject} 
                    projects={projects}
                    newProject={newProject}
                />
            </div>

            <div className="inline-block h-screen w-2/3">
                <Dashboard 
                    updateNewProject={updateNewProject} 
                    add={addProject} 
                    selectedProject={selectedProject} 
                    updateSelectedProject={updateSelectedProject} 
                    newProject={newProject}
                    projects={projects}
                    delProject={delProject}
                    addTask={addTask}
                    tasks={tasks}
                    delTask={delTask}
                />
            </div>
        </div>
    </>
  }