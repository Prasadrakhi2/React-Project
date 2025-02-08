import { createSlice} from "@reduxjs/toolkit";


const fatchStatusSlice = createSlice({
    name : "fachStatus",
    initialState :{
        fatchDone : false,
        currentlyFaching : false,
    },
    reducers :{
        markFachDone : (state) =>{
            return {...state , fatchDone : true};
        },
        fatchingStarted : (state) =>{
           return  {...state ,currentlyFaching: true};
        },
        fatchingEnded : (state) =>{
            return  {...state ,currentlyFaching: false};
        }
    }
});


export const fachStatusActions = fatchStatusSlice.actions;

export default fatchStatusSlice;
