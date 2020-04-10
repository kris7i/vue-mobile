<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      name: {
        type: String,
        required: true
      },
    },
    computed: {
      iconName() {
        return `#icon-${this.name}`
      },
    }
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
  }
</style>