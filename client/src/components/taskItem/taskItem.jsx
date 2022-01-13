import React from "react";
import Tasks from "../Tasks";


import './taskItem.css';


 class TaskItem extends Tasks{
    // state = { tasks: [], currentTask: this.props.taskInput, id: this.props.id};


    onFocus(e) {e.currentTarget.classList.add("to-do__text-active")}
    onBlur = (e) => {e.currentTarget.classList.remove("to-do__text-active")}

    handleKeyDown = (e) => {
        if(e.keyCode === 13){
            this.handleUpdateInput(e)
            e.currentTarget.setAttribute("readonly", "true")
            e.currentTarget.classList.remove("to-do__text-active");
            console.log(!this.state.currentTask.length)
        }    
    }
      
    removeAttribute = (e) => {
        e.currentTarget.classList.add("to-do__text-active");
        e.currentTarget.removeAttribute("readonly", "true")
    }

    render() {
        let classDone, classCheck, classActive;
        
        const {handleUpdate, handleDelete, task, id } = this.props;
        const {currentTask} = this.state

        if(task.done){
          classDone = "to-do__text to-do__done";
          classCheck = "to-do__checkbox to-do__checkbox-actve";
          classActive = "to-do__checkbox-check to-do__checkbox-check-active";
        } else {
            classDone = "to-do__text";
            classCheck = "to-do__checkbox";
            classActive = "to-do__checkbox-check";
        }          

        return (
            <li className="to-do__list-li">
                <label className={classCheck} htmlFor="checkItem"></label>
                    <input 
                        id="checkItem"
                        className="to-do__checkbox-input" 
                        onClick={handleUpdate}
                        type="checkbox"
                    />                  
                    <img className={classActive} src="/img/check.svg" alt="check"/>                              
                        <input            
                            type="text" 
                            className={classDone}
                            // onKeyDown={this.handleKeyDown}
                            // onFocus={this.onFocus}
                            // onBlur={this.onBlur}      
                            // onClick={this.removeAttribute}                  
                            // onChange={this.handleChange}
                            value={task}
                            id={id} 
                        />
                <button className="to-do__checkbox-btn" onClick={handleDelete}>
                    <img className="to-do__checkbox-cross" src="/img/cross.svg" alt="delete"/>
                </button>
            </li>           
        );
    }    
}



export default TaskItem;



