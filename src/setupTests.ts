import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import type { Action } from 'redux';
import type {
  UnknownAction,
  EnhancedStore,
  StoreEnhancer,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { store } from '@src/app/store';

// Define the ProviderProps type
type ProviderProps<A extends Action<string> = UnknownAction, S = unknown> = {
  store: EnhancedStore<S, A, [StoreEnhancer<ThunkDispatch<S, undefined, A>>]>;
  children?: React.ReactNode;
  serverState?: S;
  stabilityCheck?: boolean;
  identityFunctionCheck?: boolean;
};

// Use ProviderProps in the customRender function
const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions<ProviderProps>
) => {
  return render(<Provider store={store}>{ui}</Provider>, options);
};

export * from '@testing-library/react';

export { customRender as render };
