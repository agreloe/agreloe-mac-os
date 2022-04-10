import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    brightness: {
        isOpen: false,
        level: 100
    },
    notes: {
        isOpen: false,
        isSelected: false,
    },
    safari: {
        isOpen: false,
        isSelected: false,
    },
    mail: {
        isOpen: false,
        isSelected: false,
    },
    draw: {
        isOpen: false,
        isSelected: false,
    },
    app: "",
    index: 1
}

export const openBrightness = createAction('openBrightness')
export const setLevel = createAction('setLevel')
export const setApp = createAction('setApp')
export const openNotes = createAction('openNotes')
export const openSafari = createAction('openSafari')
export const openMail = createAction('openMail')
export const openDraw = createAction('openDraw')
export const selectNotes = createAction('selectNotes')
export const selectSafari = createAction('selectSafari')
export const selectMail = createAction('selectMail')
export const selectDraw = createAction('selectDraw')
export const setIndex = createAction('setIndex')



const windowReducer = createReducer(initialState, {
    [openBrightness] : (state, action) => {state.brightness.isOpen = action.payload},
    [setLevel] : (state, action) => {state.brightness.level = action.payload},
    [setApp] : (state, action) => {state.app = action.payload},
    [openNotes] : (state, action) => {state.notes.isOpen = action.payload},
    [openSafari] : (state, action) => {state.safari.isOpen = action.payload},
    [openMail] : (state, action) => {state.mail.isOpen = action.payload},
    [openDraw] : (state, action) => {state.draw.isOpen = action.payload},
    [selectNotes] : (state, action) => {state.notes.isSelected = action.payload},
    [selectSafari] : (state, action) => {state.safari.isSelected = action.payload},
    [selectMail] : (state, action) => {state.mail.isSelected = action.payload},
    [selectDraw] : (state, action) => {state.draw.isSelected = action.payload},
    [setIndex] : (state, action) => {state.index = action.payload},
})

export default windowReducer;