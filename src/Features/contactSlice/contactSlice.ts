import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  id: number,
  firstName: string,
  lastName :string,
  isActive : boolean
}
export interface ContactState {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [],
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state,action : PayloadAction <Contact>) => {
      state.contacts.push(action.payload)
      console.log(action.payload)
      console.log(state.contacts)
    },
    editContact:(state,action:PayloadAction<Contact>) =>{
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id)
      if(index !== -1){
        state.contacts[index] = action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addContact,editContact } = contactSlice.actions

export default contactSlice.reducer 