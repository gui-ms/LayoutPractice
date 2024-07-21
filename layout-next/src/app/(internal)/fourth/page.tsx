'use client'
import { IconMessage, IconSend, IconTrash } from "@tabler/icons-react"
import { useState } from "react"

export default function Page() {
    const [name, setName] = useState<string> ('')
    const [tasks, setTasks] = useState<string[]> ([])

    function addTask() {
        if(name) {
            setTasks([...tasks, name])
            setName('')
        }
    }

    function removeTask(index: number) {
        setTasks(tasks.filter((_,i) => i != index))
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <label htmlFor="task">Tarefa</label>
                <div className="flex items-center justify-center gap-2">
                    <input 
                        id="task" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        onKeyUp={(e) => {
                            if(e.key == "Enter"){
                                addTask()
                            }
                        }}
                        className="bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl flex-grow text-zinc-500"
                    />
                    <button onClick={addTask} className="rounded-md bg-blue-800 p-2">
                        <IconSend />
                    </button>
                    
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-black"> Tarefas: </h2>
                <ul className="flex flex-col gap-3">
                    {tasks.map((task, index) => {
                        return (
                            <li key={index} className="flex bg-zinc-800 rounded-md px-4 py-2">
                                <span className="flex-grow">{task}</span>
                                <IconTrash 
                                    size={18}
                                    onClick={() => removeTask(index)} 
                                    className="text-red-500 cursor-pointer"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}