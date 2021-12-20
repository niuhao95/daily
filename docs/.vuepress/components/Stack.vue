<script>
export default {
  render(h) {
    const slot = (this.$slots.default ?? []).filter(i => i.tag)

    return h('div', {
      attrs: {
        class: 'stack'
      }
    }, slot.map(child => {
      return h('div', {
        attrs: {
          class: 'mt-4'
        }
      }, [child])
    }))
  }
}
</script>

<style scoped>
.stack{
  background-color: #3eaf7c;
  overflow: hidden;
}
.mt-4 {
  margin:6px;
  padding: 4px;
  background-color: #eee;
}
</style>