<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },

    // The idea here is that these methods are spread inside "methods"
    // working as if they where declared here.
    // ...mapActions(['increment', 'increase']),
    // when using namespace
    ...mapActions('numbers', ['increment', 'increase']),

    // can also be written as
    // ...mapActions({
    //   inc: 'increment',
    //   increase: 'increase'
    // })
  },
};
</script>
