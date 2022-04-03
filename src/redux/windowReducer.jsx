import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    brightness: {
        isOpen: false,
        level: 100
    },
    notes: {
        isOpen: false
    },
    safari: {
        isOpen: false
    },
    mail: {
        isOpen: false
    },
    draw: {
        isOpen: false
    },
    app: ""
}

export const openBrightness = createAction('openBrightness')
export const setLevel = createAction('setLevel')
export const openNotes = createAction('openNotes')
export const openSafari = createAction('openSafari')
export const openMail = createAction('openMail')
export const openDraw = createAction('openDraw')
export const setApp = createAction('setApp')


const windowReducer = createReducer(initialState, {
    [openBrightness] : (state, action) => {state.brightness.isOpen = action.payload},
    [openNotes] : (state, action) => {state.notes.isOpen = action.payload},
    [openSafari] : (state, action) => {state.safari.isOpen = action.payload},
    [openMail] : (state, action) => {state.mail.isOpen = action.payload},
    [openDraw] : (state, action) => {state.draw.isOpen = action.payload},
    [setLevel] : (state, action) => {state.brightness.level = action.payload},
    [setApp] : (state, action) => {state.app = action.payload}
})

export default windowReducer;