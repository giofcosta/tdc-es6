<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Nome Completo</th>
                    <th width="20%">Nome</th>
                    <th width="20%">Sobrenome</th>
                    <th width="100">Actions</th>
                </tr>
            </thead>
            <tbody v-for="(user, index) of users" :style="editUser == user ? {backgroundColor: '#f6f6f6'} : null">
                <tr v-if="editUser != user">
                    <td>{{user | tofullname}}</td>
                    <td>{{user.firstname}}</td>
                    <td>{{user.lastname}}</td>
                    <td>
                        <button type="button" class="btn btn-primary" @click="editUser = user"><i class="glyphicon glyphicon-pencil"></i></button>
                        <button type="button" class="btn btn-danger" @click="remove(index)"><i class="glyphicon glyphicon glyphicon-remove"></i></button>
                    </td>
                </tr>
                <tr v-else>
                    <td>{{user | tofullname}}</td>
                    <td><input type="text" class="form-control" v-model="user.firstname"></td>
                    <td><input type="text" class="form-control" v-model="user.lastname"></td>
                    <td>
                        <button type="button" class="btn btn-success" @click="editUser = null"><i class="glyphicon glyphicon-ok"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-right">
            Total de {{ users.length }} registros.
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                editUser: null
            }
        },
        watch: {
            firstname() {
                console.log(this.firstname);
            }
        },
        computed: {
            fullname() {
                return this.firstname + " " + this.lastname
            },
            users() {
                return this.$store.getters.users;
            }
        },
        filters: {
            tofullname(val) {
                return val.firstname + " " + val.lastname;
            }
        },
        methods: {
            remove(index) {
                this.users.splice(index, 1);
            }
        },
        mounted() {
            //alert("Hello TDC!!!");
        }
    }
</script>

<style scoped>

</style>