import { useRef } from "react"
import Dialog from "./Dialog"

function AddProject({
        selectedProject, 
        updateSelectedProject, 
        add, 
        newProject, 
        updateNewProject
    }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const dialog = useRef()

    function handleForm(event) {
        event.preventDefault()

        if (title.current.value.trim() === '') {
            openDialog()
        } else {
            add(Math.random(), title.current.value, description.current.value, dueDate.current.value)

            title.current.value = ''
            description.current.value = ''
            dueDate.current.value = ''

            updateSelectedProject(-1)
            updateNewProject()
        }
    }

    function openDialog() {
        dialog.current.open()
    }

    return <>
        <Dialog ref={dialog} />

        <div style={{display: selectedProject === -1 && newProject ? 'block' : 'none'}}>
            <form className="flex flex-col" onSubmit={handleForm}>
                <div className="flex flex-row justify-center mb-5 h-10">
                    <div className="flex flex-row justify-start w-2/3">
                        <div className="bg-white flex flex-col justify-center rounded-l-full">
                            <label className="px-2">Due:</label>
                        </div>
                        <input className="pr-2 rounded-r-full" ref={dueDate} type="date" />
                    </div>
                </div>
                <div className="flex flex-row justify-center mb-5">
                    <input className="w-2/3 h-10 pl-2" ref={title} type="text" placeholder="Title" />
                </div>
                <div className="flex flex-row justify-center mb-5">
                    <textarea className="w-2/3 pl-2 pt-1" ref={description} rows={4} cols={50} placeholder="Description"></textarea>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="w-2/3 flex flex-row justify-start">
                        <button 
                            className="bg-orange-200 hover:bg-orange-300 rounded-full w-1/3 py-1 mr-2"
                            type="button"
                            onClick={updateNewProject}
                            >Cancel
                        </button>
                        <button className="bg-orange-200 hover:bg-orange-300 rounded-full w-1/3 py-1" type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}

export default AddProject