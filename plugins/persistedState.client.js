//Makes sure state in vuex store is persistent between browser refreshes 
//executes only on client side
//Technical documentation:4.1
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState()(store)
}
