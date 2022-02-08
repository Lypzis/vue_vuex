<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   // use getters to avoid repeating code
    //   return this.$store.getters.finalCounter;
    // },

    // If there are multiple getters, this is an alternative
    // instead of accessing the store getters
    // ...mapGetters(['finalCounter']),
    // when using namespace
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
