<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div v-bind:style="activeClass"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
        console.log(this.$router);
        console.log(this.$route);
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.path;
      },
      activeClass() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }

  }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        height: 49px;
        text-align: center;
        font-size: 14px;
        margin-top: 3px;
        /*line-height: 49px;*/
    }
    .tab-bar-item img {
        height: 24px;
        width: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .active {
        color: red;
    }
</style>