import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


import moment from "moment";


export const getQuoteOfTheDay = createAsyncThunk(
  'data/getQuoteOfTheDay',
  async () => {
    const response = await fetch("https://zenquotes.io/api/today")
    const result =await response.json();
    console.log("mani111112121", result);
    return {result:result[0]};
  }
)


 
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isDarkMode : true,
    deviceInformation:[],
    selectedDeviceForEdit:{},
    selectedDeviceIndex:-1,
    loader:false,
    quoteInformation:{a:"",q:""}

  },
  reducers: {
    toggleThemeModeInLocalStorage: (state, action) => {

      state.isDarkMode = !state.isDarkMode;
    },
    addDeviceInformation: (state, action) => {

      state.deviceInformation = [...state.deviceInformation,action.payload];
    },
    setSelectedDeviceForEdit: (state, action) => {

      state.selectedDeviceForEdit = action.payload.item;
      state.selectedDeviceIndex = action.payload.index;
    },
    updateDeviceInformation: (state, action) => {

      state.deviceInformation[action.payload.index] = action.payload.item;
    },
    removeDevice : (state, action) => {

     state.deviceInformation.splice(action.payload.index,1); 
    }

   

  },
  extraReducers: (builder) => {
    builder.addCase(getQuoteOfTheDay.pending, (state) => {
      state.loader = true;
      
    });
    builder.addCase(getQuoteOfTheDay.fulfilled, (state, action) => {

      state.loader = true;
    state.quoteInformation = action.payload.result;

    });
    builder.addCase(getQuoteOfTheDay.rejected, (state, action) => {
      state.loader = true;
    });

   
  },
});
export const {
  toggleThemeModeInLocalStorage,
  addDeviceInformation,
  setSelectedDeviceForEdit,
  updateDeviceInformation,
  removeDevice
} = dataSlice.actions;
export default dataSlice.reducer;
