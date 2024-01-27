import { Draft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import RootState from '@src/features/RootState';

export interface FormField {
  // validation: Validation;
  name: string;
  value: string;
  isValid: boolean;
  error: string;
}
export interface Validation {
  isValid: boolean;
  error: string;
}

export interface FormState {
  fields: Record<string, FormField>;
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
      action: PayloadAction<{
        id: string;
        value: string;
        validation: { isValid: boolean; error: string };
      }>
    ) => {
      const { id, value, validation } = action.payload;

      state.fields[id] = state.fields[id] || {
        value: '',
        isValid: false,
        error: '',
      };

      state.fields[id] = {
        ...state.fields[id],
        name: id,
        value,
        ...validation,
      };
    },
    resetForm: (state: Draft<FormState>) => {
      state.fields = initialState.fields;
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;

export const selectFormFields = (state: RootState) => state.form.fields;
