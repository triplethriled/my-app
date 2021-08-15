export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'

export const ADD_TICKBOX = 'ADD_TICKBOX'
export const ADD_OPTIONS = 'ADD_OPTIONS'
export const DELETE_OPTIONS = 'DELETE_OPTIONS'
export const UPDATE_REALTITLE = 'UPDATE_REALTITLE'

export const updateRealTitle = (text,idx) => ({
    type : UPDATE_REALTITLE,
    payload:{
        text: text,
        idx: idx
    }
})

export const deleteOptions = (idx) => ({
    type : DELETE_OPTIONS,
    payload:{
        idx:idx
    }
})
export const addOptions = (idx) =>({
    type : ADD_OPTIONS,
    payload:{
        
        idx: idx
    }
    
})
export const addTickbox = (idx) =>({
    type: ADD_TICKBOX,
    payload:{
        
        idx: idx
    }
    
})

export const addQuestion = () => ({
    type: ADD_QUESTION,
   
})
export const removeQuestion = (idx) =>({
    type: REMOVE_QUESTION,
    payload:{
        idx: idx,

    }
})
export const updateQuestion = (text, idx) => ({
    type: UPDATE_QUESTION,
    payload:{
        text: text,
        idx:idx
    }
})
const initialState = {
  realTitle: [{realtitle:""}],
  questions: [{title: ""}],
  titles: [{name : ""}],
  options: [[{content:""}]]
}

const googleForm = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:{
      return {
        ...state,
        questions: [...state.questions, {title: ""}],
        realTitle: [...state.realTitle, {realTitle:""}]
        
        
      }
    }
    case DELETE_OPTIONS:{
        const idx = action.payload.idx
        const coopy = [...state.options]
        coopy[idx].splice(idx,1)
        return{
            ...state,
            options: coopy
        }
    }
    case ADD_OPTIONS:{
        const idx = action.payload.idx
        const a = [...state.options]
        a[idx].push({content:""})
        console.log("-----------")
        console.log(state.options[idx])
        
        return {
            ...state,
            
            options: a
            
        }
    }
    
    case UPDATE_QUESTION: {
        
        console.log(action.payload.idx);
        console.log("-----------")
        //state.questions[action.payload.idx].title
        const idx = action.payload.idx
        const copiedQuestions = [...state.questions]
        copiedQuestions[idx].title = action.payload.text
        
        return {
            ...state,
            questions: copiedQuestions


        }
    
    }
    case UPDATE_REALTITLE: {
        const idx = action.payload.idx
        const copiedTitle = [...state.realTitle]
        copiedTitle[idx].realtitle = action.payload.text
        return {
            ...state,
            realTitle: copiedTitle
            
        }
    }
    case REMOVE_QUESTION: {
        const idx = action.payload.idx
        const copycopy = [...state.questions]
        copycopy.splice(idx,1)
        
        return {
            ...state,
            questions: copycopy
            
        }
    }
    case ADD_TICKBOX:{
        const idx = action.payload.idx
        console.log(state.options)
        return {
            ...state,
            options: [...state.options, [{content: ""}]]
            
            
        }
    }
    default:
      return state;
  }
};

export default googleForm;