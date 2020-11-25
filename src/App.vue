<template>
    <div id="app">
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
    // import TabBar from "./components/tabbar/TabBar.vue";
    // import TabBarItem from "./components/tabbar/TabBarItem.vue";
    import MainTabBar from "./components/MainTabBar.vue";

    export default {
      name: 'App',
      components: {
        MainTabBar
      }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
