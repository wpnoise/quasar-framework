<template>
  <div class="quasar-rating" :class="{disabled: disabled}">
    <i
      v-for="index in maxGrade"
      :class="{active: (!mouseModel && model > index) || (mouseModel && mouseModel > index)}"
      @click="set(index + 1)"
      @mouseover="setHoverValue(index + 1)"
      @mouseout="mouseModel = 0"
    >{{icon}}</i>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Number,
      default: 0,
      required: true
    },
    maxGrade: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      default: 'grade'
    },
    disabled: {
      type: Boolean,
      default: false,
      coerce: Boolean
    }
  },
  data () {
    return {
      mouseModel: 0
    }
  },
  methods: {
    set (value) {
      if (!this.disabled) {
        this.model = this.normalize(value)
      }
    },
    setHoverValue (value) {
      if (!this.disabled) {
        this.mouseModel = value
      }
    },
    normalize (value) {
      return Math.min(this.maxGrade, Math.max(1, value))
    }
  }
}
</script>
