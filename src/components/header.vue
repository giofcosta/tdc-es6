<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">TDC</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/users" tag="li" activeClass="active"><a>Users</a></router-link>
                    <router-link to="/About" tag="li" activeClass="active"><a>About</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style>

</style>