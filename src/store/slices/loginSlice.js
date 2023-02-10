import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Url} from '../../util/rutas'
const URL_LOGIN=Url('auth/signin')

export const get_login= createAsyncThunk('posts/get_login',async(user)=>{
    try{
        const response= await fetch(URL_LOGIN,{
            body:JSON.stringify(user),
            method:'post',
            headers:{"Content-Type":"application/json","Accept-Encoding":"gzip, deflate, br","Accept":"*/*"}
        });
        const data= await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }

})

export const loginSlice=createSlice({
    name:'login',
    initialState:{
        user:{
            vendors:null,
            token:'UNLOGED'
        },
        loading:false
    },
    reducers:
    {
        logOut:(state,action)=>{
               state.user.token='UNLOGED'

        } }
    ,
    extraReducers:{
        [get_login.pending]: (state)=>{
            console.log('pending')
            state.loading=true
        },
        [get_login.fulfilled]: (state,{payload})=>{
            if(payload.vendors){
                     state.user.vendors=payload.vendors;
                     state.user.token=payload.token;
            }else{
                state.user.vendors=null;
                state.user.token='ERROR';
            }
     
            state.loading=false;
        },
        [get_login.rejected]: (state,action)=>{
            state.loading=false;
        },
    }

})
export const {logOut}=loginSlice.actions

export default loginSlice.reducer