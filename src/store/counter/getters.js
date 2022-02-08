export default {
  finalCounter(state) {
    return state.counter * 3;
  },
  // getters can be passed down to other getters
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;

    if (finalCounter < 0) return 0;

    if (finalCounter > 100) return 100;

    return finalCounter;
  },
};
