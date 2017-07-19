<template>
    <div>
        <h1>Users</h1>
        <tdc-user-add></tdc-user-add>
        <tdc-grid></tdc-grid>
    </div>
</template>

<script>
    import TdcGrid from './grid/grid.vue'
    import TdcUserAdd from './user/add.vue'

    export default {
        components: {
            tdcUserAdd: TdcUserAdd,
            tdcGrid: TdcGrid
        }
    }
</script>