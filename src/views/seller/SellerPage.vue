<template>
  <main class="seller-page">
    <div class="seller-page__container">
      <div class="seller-page__header">
        <h1>{{ t('app.seller.welcome') }}, {{ user?.name }}!</h1>
        <p>{{ t('app.seller.subtitle') }}</p>
      </div>

      <div class="seller-page__content">
        <div class="seller-card">
          <h3>{{ t('app.seller.quickActions.title') }}</h3>
          <div class="actions-grid">
            <button class="action-btn" @click="showComingSoon('newProduct')">
              <span class="action-icon">➕</span>
              {{ t('app.seller.quickActions.newProduct') }}
            </button>
            <button class="action-btn" @click="showComingSoon('myProducts')">
              <span class="action-icon">📦</span>
              {{ t('app.seller.quickActions.myProducts') }}
            </button>
            <button class="action-btn" @click="showComingSoon('sales')">
              <span class="action-icon">💰</span>
              {{ t('app.seller.quickActions.sales') }}
            </button>
            <button class="action-btn" @click="showComingSoon('analytics')">
              <span class="action-icon">📊</span>
              {{ t('app.seller.quickActions.analytics') }}
            </button>
          </div>
        </div>

        <div class="seller-card">
          <h3>{{ t('app.seller.stats.title') }}</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">0</span>
              <span class="stat-label">{{ t('app.seller.stats.products') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">0</span>
              <span class="stat-label">{{ t('app.seller.stats.sales') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">R$ 0,00</span>
              <span class="stat-label">{{ t('app.seller.stats.revenue') }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="seller-page__footer">
        <button @click="logout" class="btn btn-secondary">
          {{ t('app.seller.logout') }}
        </button>
        <button @click="goHome" class="btn btn-primary">
          {{ t('app.seller.goHome') }}
        </button>
      </div>
    </div>

    <!-- Modal de funcionalidade em desenvolvimento -->
    <div v-if="showModal" class="coming-soon-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ t('app.seller.comingSoon.title') }}</h3>
        <p>{{ modalMessage }}</p>
        <button @click="closeModal" class="btn btn-primary">
          {{ t('app.seller.comingSoon.close') }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '../../i18n.js';
import { useAuth } from '../../store/auth.js';

const router = useRouter();
const { t } = useI18n();
const { user, logout: logoutAuth } = useAuth();

const showModal = ref(false);
const modalMessage = ref('');

const showComingSoon = (feature) => {
  modalMessage.value = t(`app.seller.comingSoon.${feature}`);
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const logout = () => {
  logoutAuth();
  router.push('/');
};

const goHome = () => {
  router.push('/');
};
</script>

<style lang="scss">
@use './SellerPage.scss';
</style>
