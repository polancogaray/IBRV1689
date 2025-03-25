import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token; // Solo almacena el token en el estado
    },
    clearToken() {
      this.token = null; // Limpiar solo el estado
    },
  },
  persist: true, // Habilita la persistencia
});
