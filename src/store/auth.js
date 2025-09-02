import { ref, computed } from "vue";

const user = ref(null);
const isAuthenticated = computed(() => !!user.value);

export function useAuth() {
  const login = (email, password) => {
    // Simulação de login - em produção seria uma chamada API
    if (email && password) {
      user.value = {
        id: 1,
        email,
        name: email.split('@')[0],
        isSeller: true
      };
      return { success: true };
    }
    return { success: false, error: 'Credenciais inválidas' };
  };

  const logout = () => {
    user.value = null;
  };

  const register = (email, password, name) => {
    // Simulação de registro - em produção seria uma chamada API
    if (email && password && name) {
      user.value = {
        id: Date.now(),
        email,
        name,
        isSeller: true
      };
      return { success: true };
    }
    return { success: false, error: 'Dados inválidos' };
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register
  };
}
