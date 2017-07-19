<template>
        <form v-on:submit.prevent="add">
                <table class="table">
                    <tr>
                        <td>
                            <h4>
                                <i class="glyphicon glyphicon-user "></i> {{ fullname }}
                            </h4>
                        </td>
                        <td width="20%"><input id="firstname" class="form-control" type="text" v-model="firstname" placeholder="Nome" /></td>
                        <td width="20%"><input class="form-control" type="text" v-model="lastname" placeholder="Sobrenome" /></td>
                        <td width="100">
                            <button type="submit" class="btn btn-success"><i class="glyphicon glyphicon-plus"></i>  Add</button>
                        </td>
                    </tr>
                </table>
            </form>
</template>

<script>
    export default {
        data() {
            return {
                firstname: "",
                lastname: ""
            }
        },
        computed: {
            fullname() {
                return this.firstname + " " + this.lastname;
            }
        },
        methods: {
            add() {
                const data = {
                    firstname: this.firstname,
                    lastname: this.lastname
                };

                this.$http.post('data.json', data);
                this.$store.dispatch("setUser", data);
                this.firstname = "";
                this.lastname = "";
                document.getElementById("firstname").focus();
            }
        }
    }
</script>

<style>
    td {
        padding: 5px;
    }
</style>