import create, { State } from 'zustand';

export type NoteItemData = {
    id: string,
    title: string,
    body?: string,
    timeStamp?: string
}

export interface AppState extends State {
    selectedId: string,
    setSelectedId: (id: string) => void
    notes: NoteItemData[],
    setNotes: (notes: NoteItemData[]) => void
}

export const useStore = create<AppState>((set) => ({
    selectedId: '',
    setSelectedId: (id) => set({ selectedId: id }),
    notes: [],
    setNotes: (notes) => set({ notes: notes })
}))