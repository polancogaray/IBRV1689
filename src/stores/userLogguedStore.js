import { defineStore } from "pinia";

export const userLogguedStore = defineStore("userLoggued", {
  state: () => ({
    uid: null,
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    picture: null,
    role: null,
    identity_id: null,
    }),
  
  actions: {
    setUserData(userData) {
      console.log("userData store",userData)
      this.uid = userData.id;
      this.firstName = userData.first_name || 'Nombre';
      this.lastName = userData.last_name || 'Apellidos';
      this.phone = userData.phone;
      this.email = userData.email;
      this.picture = userData.picture_data || 'favicon.ico';
      this.role = userData.role;
      this.identity_id = userData.identities[0].identity_id;
     },
    clearUser() {
      this.$reset(); // Restablece el estado a su valor inicial
    },
  },
  persist: true, // Habilita la persistencia
});
