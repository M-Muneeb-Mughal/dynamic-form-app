/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="@testing-library/user-event" />

interface Window {
  showToast: (message: string, type: string) => void;
}
