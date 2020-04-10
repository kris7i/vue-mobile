<template>
  <div class="root-wrapper">
    <div class="root-content">
      <div class="root-scroll" ref="rootScroll">
        <router-view/>
      </div>
    </div>
    <layout-tabbar />
  </div>
</template>

<script>
  import LayoutTabbar from '../../components/layout/layout-tabbar'
  export default {
    name: 'root',
    components: {
      LayoutTabbar,
    },
    watch: {
      $route: {
        handler: function() {
          this.$nextTick(() => {
            this.$refs.rootScroll.scrollTop = 0;
          });
        },
        immediate:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .root-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .root-content {
    flex: 1;
    position: relative;
  }
  .root-scroll {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 1;
  }
</style>
