const state = {
  token: '',
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  // 存取token
  SetToken(state, payload) {
    state.token = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
