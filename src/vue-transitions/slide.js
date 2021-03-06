export default {
  css: false,

  enter (el, done) {
    Velocity(el, 'stop')
    Velocity(el, 'slideDown', done)
  },
  enterCancelled (el) {
    Velocity(el, 'stop')
  },

  leave (el, done) {
    Velocity(el, 'stop')
    Velocity(el, 'slideUp', done)
  },
  leaveCancelled (el) {
    Velocity(el, 'stop')
  }
}
