//import users from '../../data/users';
import Vue from 'vue'
const state = {
    users: []
};

const mutations = {
    'LOAD_USERS' (state, users) {
        state.users = users;
    }
};

const actions = {
    setUser: ({ commit }, user) => {
        state.users.push(user);
    },
    loadUsers: ({ commit }) => {
        Vue.http.get('data.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    commit('LOAD_USERS', resultArray);
                }
            })
    }
};

const getters = {
    users: state => {
        return state.users;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};