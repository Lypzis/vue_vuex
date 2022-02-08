<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // use getters to avoid repeating code
      // return this.$store.getters.normalizedCounter;
      // case of using "namespace"
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
