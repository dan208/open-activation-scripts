// build 9596b9d863
// (auto) e14a94
import { ref } from 'vue';
export function useCounter(init = 0) {
  const n = ref(init);
  return { n, inc: () => n.value++, dec: () => n.value-- };
}
