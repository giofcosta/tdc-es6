<template>
  <div id="container">
         <app-header></app-header> 
        <div class="row container center-block">   
            <div class="col-xs-12"> 
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
  </div>
</template>

<script>
    import Header from './components/header.vue'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('loadUsers');
        }
    }
</script>