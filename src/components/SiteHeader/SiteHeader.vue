<script setup>
import { ref } from "vue";
import { useI18n } from "../../i18n.js";

const searchQuery = ref("");
const onSubmit = () => {};

const { t } = useI18n();
</script>

<template>
  <header class="site-header">
    <div class="site-header__topnote">
      {{ t('app.header.topnote') }}
    </div>
    <div class="site-header__bar">
      <a class="site-header__brand" href="#">
        <span class="site-header__brand-icon">&</span>
      </a>
      <form class="site-header__search" @submit.prevent="onSubmit">
        <input
          class="site-header__search-input"
          v-model="searchQuery"
          :placeholder="t('app.header.searchPlaceholder')"
        />
        <span class="site-header__search-icon">
          <svg
            width="20"
            height="20"
            data-v-2005eb22=""
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="search-input__search-icon"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m22.108 19.758-4.769-4.769q.751-1.08 1.136-2.284v-.002q.635-2.047.12-4.05c-.343-1.357-1.057-2.573-2.132-3.648l-.65-.65c-1.074-1.074-2.285-1.784-3.632-2.117q-2.017-.53-4.051.12c-1.366.424-2.62 1.212-3.763 2.355-1.122 1.122-1.899 2.365-2.322 3.73a7.14 7.14 0 0 0-.103 4.036c.344 1.336 1.06 2.54 2.133 3.615l.65.649c1.074 1.074 2.284 1.794 3.629 2.149h.001q2.002.515 4.05-.12h.004a8.6 8.6 0 0 0 2.44-1.249l4.747 4.747zM16.562 9.176c.242.938.22 1.892-.09 2.897-.32.994-.906 1.947-1.819 2.86-.926.926-1.885 1.517-2.877 1.836-1.003.31-1.955.331-2.892.09-.947-.25-1.836-.763-2.674-1.601l-.65-.65c-.84-.84-1.345-1.723-1.585-2.655l-.002-.009a5.05 5.05 0 0 1 .076-2.872l.002-.006c.31-1.002.89-1.957 1.8-2.868.938-.937 1.906-1.526 2.901-1.834l.015-.005h.002c.985-.315 1.931-.34 2.879-.09l.011.003.016.004c.937.232 1.819.73 2.653 1.564l.65.65c.834.834 1.34 1.725 1.582 2.679z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </form>
      <nav class="site-header__nav">
        <a class="site-header__nav-link" href="#">{{ t('app.header.nav.clothes') }}</a>
        <a class="site-header__nav-link" href="#">{{ t('app.header.nav.shoes') }}</a>
        <a class="site-header__nav-link" href="#">{{ t('app.header.nav.accessories') }}</a>
        <a class="site-header__nav-link" href="#">{{ t('app.header.nav.others') }}</a>
      </nav>
      <span class="site-header__icon">
        <svg
          data-v-ac5bf930=""
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          class="color-enjoei"
          data-v-a6791c81=""
        >
          <path
            fill="currentColor"
            d="M10.95 13.645v.323h2.1v-.3c0-.265.009-.325.063-.403.074-.109.248-.255.716-.553l.002-.001c.427-.277.861-.605 1.187-1.07.33-.47.533-1.063.533-1.849 0-1.968-1.478-3.383-3.509-3.383-1.222 0-2.217.457-2.85 1.211-.631.754-.877 1.777-.652 2.859l.062.297 2.09-.464-.065-.293c-.11-.498-.019-.859.192-1.095.215-.242.607-.415 1.223-.415.433 0 .783.143 1.023.37s.386.553.386.955c0 .278-.046.453-.143.6-.103.157-.286.316-.626.517l-.003.001c-.814.493-1.264.935-1.498 1.398-.23.455-.23.892-.23 1.295M11.876 14.451c-.483 0-.908.158-1.212.463-.305.305-.463.73-.463 1.212 0 .501.157.921.47 1.214.31.29.735.42 1.205.42h.25c.452 0 .874-.132 1.187-.418.316-.29.488-.708.488-1.216 0-.49-.173-.913-.48-1.214-.308-.3-.73-.461-1.195-.461z"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11.334 1.7C5.73 1.7 1.7 6.107 1.7 12.084c0 5.941 4.035 10.218 9.634 10.218h1.334c5.556 0 9.634-4.276 9.634-10.218 0-5.978-4.072-10.384-9.634-10.384zm0 18.502c-2.235 0-4.112-.824-5.432-2.239S3.8 14.52 3.8 12.084c0-2.479.782-4.549 2.104-5.996C7.224 4.643 9.101 3.8 11.334 3.8h1.334c2.233 0 4.11.843 5.43 2.288C19.42 7.535 20.2 9.605 20.2 12.084c0 2.436-.78 4.463-2.101 5.88-1.32 1.414-3.197 2.238-5.433 2.238z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <nav class="site-header__actions">
        <button class="site-header__action site-header__action--link">
          {{ t('app.header.actions.login') }}
        </button>
        <button class="site-header__action site-header__action--primary">
          {{ t('app.header.actions.sell') }}
        </button>
      </nav>
    </div>
  </header>
</template>
<style src="./SiteHeader.scss" lang="scss" scoped></style>
