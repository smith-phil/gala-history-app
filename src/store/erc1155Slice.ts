import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HttpGet } from "../services/Fetch";
import { Erc1155Token, TokenDetail } from '../erc/'

export type erc1155Token = {
    id: string,
    identifier: number,
    decimalPlaces: number,
    description: string,
    image: string, 
    name: string,
    category: string,
    game: string,
    tokenRun: string,
    rarityLabel: string,
    supplyLimit: number,
    FetchStatus: FetchStatus
}

type FetchStatus = 'pending' | 'rejected' | 'fetched' | 'notfetched'

type TokenState = {
    [id:string]:TokenDetail,
}

export const fetchErc115Token = createAsyncThunk(
    'erc115/fetch',
    async (token:Erc1155Token)=>{
        let t = await HttpGet<TokenDetail>(token.uri);
        t.id = token.id
        return t;

    }
)

const initialState:TokenState = {}

export const erc1155Slice = createSlice({
    name:'erc1155slice',
    initialState:initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchErc115Token.fulfilled, (state, action)=>{
            state[action.payload.id] = action.payload;
        })
    }

})

export const erc1155Reducer = erc1155Slice.reducer;