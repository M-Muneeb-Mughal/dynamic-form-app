import { ReactNode } from 'react';

const mockToastify = {
  success: jest.fn(),
  error: jest.fn(),
};

export const ToastContainer = ({ children }: { children: ReactNode }) => ({
  children,
});
export const toast = mockToastify;
