import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleSidebar: state => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarState = state => state.sidebar;

export default sidebarSlice.reducer;
