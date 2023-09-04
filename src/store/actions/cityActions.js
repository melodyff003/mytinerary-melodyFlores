import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities', async () => {
    try{
        const response = await axios.get('http://localhost:8000/api/cities')
        return {
            cities: response.data.city
        }
    }catch(error){
        console.log(error);
    }
}) 

export const filter = createAsyncThunk('filter', async (obj) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/cities?city=${obj.name}`)
        return {
            cities: response.data.city
        }
    }catch(error){
        return {
            cities: []
        }
    }
}) 