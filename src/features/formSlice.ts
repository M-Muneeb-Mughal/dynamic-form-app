import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  fields: Record<string, string>;
}

const initialState: FormState = {
  fields: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const { id, value } = action.payload;
      state.fields[id] = value;
    },
    resetForm: (state) => {
      state.fields = initialState.fields;
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;

export const selectFormFields = (state: { form: FormState }) =>
  state.form.fields;

export default formSlice.reducer;
