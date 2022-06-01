import { configureStore } from '@reduxjs/toolkit'
import { erc1155Reducer } from './erc1155Slice'
// ...

export const store = configureStore({
  reducer: {
    erc115Tokens: erc1155Reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch