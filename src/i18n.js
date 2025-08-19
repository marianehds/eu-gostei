import { ref } from "vue";
import pt from "./locales/pt-br/index.js";

const messages = {
  "pt-BR": pt,
};

const locale = ref("pt-BR");

function t(path) {
  const parts = String(path).split(".");
  let node = messages[locale.value];
  for (const part of parts) {
    if (node && Object.prototype.hasOwnProperty.call(node, part)) {
      node = node[part];
    } else {
      node = undefined;
      break;
    }
  }
  return node ?? path;
}

export function useI18n() {
  return { locale, t };
}


