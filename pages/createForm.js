import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  addQuestion,
  updateQuestion,
  updateRealTitle,
  removeQuestion,
  addTickbox,
  addOptions,
  deleteOptions,
} from "../src/reducers/googleForm";
import axios from "axios";
import InputBox from "../src/components/InputBox";

const CreateForm = () => {
  
  const [title, setTitle] = useState("");
  const [isAgreeInfo, setIsAgreeInfo] = useState(false);
  const googleForm = useSelector((state) => state.googleForm);
  const a = [0, 1, 2];
  const [arr, setArr] = useState([]);
  const item = a[Math.floor(Math.random() * a.length)];
  const dispatch = useDispatch();
  const createQuestion = () => {
    const copied = [...arr];
    setArr(copied);
    
    dispatch(addQuestion());
  };
  const submit = async () => {
    console.log("ontext");
    console.log(googleForm);
    // const res = fetch("http://18.118.157.181")
    // console.log(res);
    //const url = 'http://18.118.157.181/form/create'
    const url = 'http://localhost:3001/form/create'

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({googleForm, title})
    });
    const content = await rawResponse.json()

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'x-access-token': null
    //     },
    //     url,
    //     data: {
    //         googleForm: googleForm,
    //     }
    // }
    // const res = await axios(options);
    
    
    alert('good')
  };

  const onTextChange = (value, idx) => {
    dispatch(updateQuestion(value, idx));
  };
  const removeRemove = (idx) => {
    dispatch(removeQuestion(idx));
  };
  const onTitleChange = (value, idx) => {
    dispatch(updateRealTitle(value, idx));
  };
  const updateIsAgreeInfo = () => {
    setIsAgreeInfo((prev) => !prev);
  };
  const newTickbox = () => {
    dispatch(addTickbox());
  };
  const newOption = (idx) => {
    dispatch(addOptions(idx));
  };
  const deleteOption = (idx) => {
    dispatch(deleteOptions(idx));
  };
  return (
    <div>
        
      <header style={{ fontSize: 25, fontWeight: 600 }}>
        GOOGLE FORM DEMO
      </header>
      <br />
      <div> Questions Section: </div>
      <br />
      
      <InputBox text={"title"} value ={title} onTextChange={e => setTitle(e.target.value)}/>
      {googleForm.questions.map((question, idx) => (
        <div>
          Question{idx + 1}:
          <br />
          <input
            placeholder="Title"
            onChange={(e) => onTitleChange(e.target.value, idx)}
          />
          <br />
          <textarea
            placeholder="Question Here"
            value={question.title}
            onChange={(e) => onTextChange(e.target.value, idx)}
          />
          <br />
          <button
            onClick={() => {
              removeRemove(idx);
            }}
          >
            Delete
          </button>
          <br />
          <br />
        </div>
      ))}
      <button onClick={() => createQuestion()}>Add Questions</button>
      <div>-------------------------------- </div>
      <br />
      <div> Questions Section: </div>
      <br />

      {googleForm.options.map((tickbox, idx) => (
        <div>
          Tickbox {idx + 1}:
          <br />
          <input
            placeholder="Title"
            onChange={(e) => onTitleChange(e.target.value, idx)}
          />
          <br />
          {googleForm.options[idx].map((option) => (
            <div>
              <input
                checked={isAgreeInfo}
                type="checkbox"
                onClick={(e) => updateIsAgreeInfo()}
              />
              <input
                placeholder="Options"
                onChange={(e) => onTitleChange(e.target.value)}
              />
            </div>
          ))}
          <button
            onClick={() => {
              newOption(idx);
            }}
          >
            Add Options
          </button>
          <button
            onClick={() => {
              deleteOption(idx);
            }}
          >
            Delete Options
          </button>
        </div>
      ))}
      <br />
      <button onClick={() => newTickbox()}>Add Tickboxes</button>
      <button onClick={() => newTickbox()}>Delete Tickboxes</button>

      <button onClick={(e) => submit()}>Submit</button>
      <div>{googleForm.title}</div>
    </div>
  );
};

export default CreateForm;
