import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemsSlice';
import fatchStatusSlice from './fachStatusSlice';
import bagSlice from './bagSlice';



const myntraStore = configureStore({
    reducer:{
        items : itemSlice.reducer,
        fachStatus : fatchStatusSlice.reducer,
        bag :bagSlice.reducer,
    }
})

export default myntraStore;