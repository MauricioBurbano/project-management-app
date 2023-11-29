import { forwardRef, useImperativeHandle, useRef } from "react"

const Dialog = forwardRef (function Dialog(props, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return <dialog 
            className="p-3 rounded-md bg-orange-50"
            ref={dialog}
        >
        <p className="my-3 text-centered">You must provide a project title</p>
        <div className="flex flex-row justify-center">
            <button 
                className="bg-orange-200 px-8 py-1 rounded-full"
                onClick={() => {dialog.current.close()}}
                >Close
            </button>
        </div>
    </dialog>
})

export default Dialog