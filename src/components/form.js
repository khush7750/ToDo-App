import React, { useState } from "react"
import {
    FormGroup,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
} from "reactstrap";

import {v4} from 'uuid';



// form handler
const TodoForm = ({addTodos}) =>{

    const [todoString , setTodoString] = useState("");

    const handelSubmit = e =>{
        e.preventDefault();

        if (todoString === "") {
            return alert("please enter a todo")
        }
        const todo = {
            todoString,
            id: v4()
        }

        // todo
        addTodos(todo)
       
        setTodoString("")
    };



    return(
        <Form onSubmit={handelSubmit}>
            <FormGroup>  
                <InputGroup>
                    <Input 
                    type= "text"
                    name= "todo"
                    id= "todo"
                    placeholder= "your next todo"
                    value ={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                    
                    <InputGroupAddon addonType="prepend">
                       <Button color="sucess"> ADD-TODO </Button>

                    </InputGroupAddon>
                 </InputGroup>

            </FormGroup>
        </Form>
    );

};

export default TodoForm