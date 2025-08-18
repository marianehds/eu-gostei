import { ref, computed } from "vue";

const currencyLocale = ref("pt-BR");
const currencyCode = ref("BRL");

const formatter = computed(
  () =>
    new Intl.NumberFormat(currencyLocale.value, {
      style: "currency",
      currency: currencyCode.value,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
);

export function useCurrency() {
  const formatPrice = (value) => {
    const number = Number(value);
    if (!Number.isFinite(number)) return String(value ?? "");
    return formatter.value.format(number);
  };

  return {
    currencyLocale,
    currencyCode,
    formatPrice,
  };
}


