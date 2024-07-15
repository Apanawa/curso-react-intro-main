import React from "react";
import "./TodoForm.css"

function TodoForm(){
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Crea tu nuevo ToDo</label>
            <textarea
                placeholder="Escribe algo..."
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancelar</button>
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }