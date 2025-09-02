<template>
  <main class="login-page">
    <div class="login-page__container">
      <div class="login-page__header">
        <h1>{{ t('app.auth.login.title') }}</h1>
        <p>{{ t('app.auth.login.subtitle') }}</p>
      </div>

      <div class="login-page__tabs">
        <button 
          :class="['tab', { 'is-active': activeTab === 'login' }]"
          @click="activeTab = 'login'"
        >
          {{ t('app.auth.login.tab') }}
        </button>
        <button 
          :class="['tab', { 'is-active': activeTab === 'register' }]"
          @click="activeTab = 'register'"
        >
          {{ t('app.auth.register.tab') }}
        </button>
      </div>

      <!-- Formulário de Login -->
      <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="login-email">{{ t('app.auth.login.email') }}</label>
          <input
            id="login-email"
            v-model="loginForm.email"
            type="email"
            required
            :placeholder="t('app.auth.login.emailPlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="login-password">{{ t('app.auth.login.password') }}</label>
          <input
            id="login-password"
            v-model="loginForm.password"
            type="password"
            required
            :placeholder="t('app.auth.login.passwordPlaceholder')"
          />
        </div>

        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>

        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          {{ isLoading ? t('app.auth.login.loading') : t('app.auth.login.submit') }}
        </button>

        <div class="form-footer">
          <a href="#" class="forgot-password">
            {{ t('app.auth.login.forgotPassword') }}
          </a>
        </div>
      </form>

      <!-- Formulário de Registro -->
      <form v-else @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="register-name">{{ t('app.auth.register.name') }}</label>
          <input
            id="register-name"
            v-model="registerForm.name"
            type="text"
            required
            :placeholder="t('app.auth.register.namePlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="register-email">{{ t('app.auth.register.email') }}</label>
          <input
            id="register-email"
            v-model="registerForm.email"
            type="email"
            required
            :placeholder="t('app.auth.register.emailPlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="register-password">{{ t('app.auth.register.password') }}</label>
          <input
            id="register-password"
            v-model="registerForm.password"
            type="password"
            required
            :placeholder="t('app.auth.register.passwordPlaceholder')"
          />
        </div>

        <div class="form-group">
          <label for="register-confirm-password">{{ t('app.auth.register.confirmPassword') }}</label>
          <input
            id="register-confirm-password"
            v-model="registerForm.confirmPassword"
            type="password"
            required
            :placeholder="t('app.auth.register.confirmPasswordPlaceholder')"
          />
        </div>

        <div v-if="registerError" class="error-message">
          {{ registerError }}
        </div>

        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          {{ isLoading ? t('app.auth.register.loading') : t('app.auth.register.submit') }}
        </button>

        <div class="form-footer">
          <p>{{ t('app.auth.register.terms') }}</p>
        </div>
      </form>

      <div class="login-page__footer">
        <button @click="goBack" class="btn btn-link">
          {{ t('app.auth.back') }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '../../i18n.js';
import { useAuth } from '../../store/auth.js';

const router = useRouter();
const { t } = useI18n();
const { login, register } = useAuth();

const activeTab = ref('login');
const isLoading = ref(false);
const loginError = ref('');
const registerError = ref('');

const loginForm = reactive({
  email: '',
  password: ''
});

const registerForm = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleLogin = async () => {
  isLoading.value = true;
  loginError.value = '';

  try {
    const result = await login(loginForm.email, loginForm.password);
    if (result.success) {
      router.push('/vender');
    } else {
      loginError.value = result.error;
    }
  } catch (error) {
    loginError.value = 'Erro ao fazer login. Tente novamente.';
  } finally {
    isLoading.value = false;
  }
};

const handleRegister = async () => {
  if (registerForm.password !== registerForm.confirmPassword) {
    registerError.value = 'As senhas não coincidem';
    return;
  }

  isLoading.value = true;
  registerError.value = '';

  try {
    const result = await register(registerForm.email, registerForm.password, registerForm.name);
    if (result.success) {
      router.push('/vender');
    } else {
      registerError.value = result.error;
    }
  } catch (error) {
    registerError.value = 'Erro ao fazer registro. Tente novamente.';
  } finally {
    isLoading.value = false;
  }
};

const goBack = () => {
  router.back();
};
</script>

<style lang="scss">
@use './LoginPage.scss';
</style>
