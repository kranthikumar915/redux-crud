import { createAsyncThunk } from "@reduxjs/toolkit";
import ContactApi from '../API/ContactApi';
//createAsyncThunk(actuon const,action method)
//create action 
export const createContact = createAsyncThunk("contact/create",async (contact)=>{
    console.log(`action output =`,contact);
    const res = await ContactApi.create(contact)
    return res.data;
})

//read all action 
export const retriveContacts = createAsyncThunk("contact/retrive",async()=>{

})
//read single action 
export const retriveSingle = createAsyncThunk("contact/retrive/single",async({id})=>{
    console.log(`contact id =`,id)
})

//updatte action
export const updateContact = createAsyncThunk("contact/update",async ({id,contact})=>{
    console.log('id=',id, "and data = ", contact)
})
//delete action
export const deleteContact = createAsyncThunk("contact/delete",async({id})=>{
    console.log('delete id =',id)
})