import { useSelector, useDispatch } from "react-redux"
import React, {useState } from "react";
import { addQuestion, updateQuestion,updateRealTitle, removeQuestion, addTickbox, addOptions, deleteOptions } from "../src/reducers/googleForm";

const CreateForm = () => {
    
    const [inputList, setInputList] = useState([{ firstName: "" }]);
    const [isAgreeInfo, setIsAgreeInfo] = useState(false)
    const googleForm = useSelector(state => state.googleForm);
    const a = [0,1,2]
    const item = a[Math.floor(Math.random()*a.length)];
    const dispatch  = useDispatch();
    const createQuestion = () => {
        
        dispatch(addQuestion());

    }
    
   
    const onTextChange = (value, idx) =>{
        dispatch(updateQuestion(value, idx));

    }
    const removeRemove = (idx) => {
        dispatch(removeQuestion(idx));
    }
    const onTitleChange = (value, idx) => {
        dispatch(updateRealTitle(value, idx));
    }
    const updateIsAgreeInfo = () => {
        setIsAgreeInfo(prev => !prev)
    }
    const newTickbox = () => {
        dispatch(addTickbox());
    }
    const newOption = (idx) => {
        dispatch(addOptions(idx));
    }
    const deleteOption = (idx) => {
        dispatch(deleteOptions(idx))
    }
    return (
        
        <div>
            <header style={{fontSize:25, fontWeight: 600}}>GOOGLE FORM DEMO</header>
            <br/>
            <div> Questions Section: </div>
            <br/>
        {googleForm.questions.map((question,idx) => 
                <div>Question{idx +1}:
                <br/>
                <input placeholder="Title"  onChange={e => onTitleChange(e.target.value, idx)}/>
                <br/>
                    <textarea placeholder="Question Here"  value={question.title} 
                    onChange={e => onTextChange(e.target.value, idx)}
                    /> 
                <br/>
                    <button onClick={() => {removeRemove(idx)}}>Delete</button>
                <br/>
                <br/>
            </div>
                    
            )}
        <button onClick={() => createQuestion()} > 
            Add Questions
        </button>
        <div>-------------------------------- </div>
        <br/>
        <div> Questions Section: </div>
        <br/>

        {googleForm.options.map((tickbox, idx) =>
                <div>Tickbox {idx + 1}:
                <br/>
                <input placeholder="Title"   onChange={e => onTitleChange(e.target.value, idx)}/>
                <br/>

                
                {googleForm.options[idx].map((option) => 
                    <div>
                    
                    
                    <input checked={isAgreeInfo} type="checkbox" onClick={e => updateIsAgreeInfo()}/>
                    <input placeholder="Options"  onChange={e => onTitleChange(e.target.value)}/>
                    
                    </div>
                    

                )}
                <button onClick ={() => {newOption(idx)}}>Add Options</button>
                <button onClick ={() => {deleteOption(idx)}}>Delete Options</button>
                

            </div>



            )}
        <br/>
        <button onClick={() => newTickbox()} > 
            Add Tickboxes
        </button>
        <button onClick={() => newTickbox()} > 
            Delete Tickboxes
        </button>

        
        <button onClick={() => alert()}>Submit</button>
        <div>{googleForm.title}</div>
        
        
        </div>
    )
}

export default CreateForm
