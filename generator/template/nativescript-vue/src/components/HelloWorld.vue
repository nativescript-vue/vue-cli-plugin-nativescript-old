<template>
  <StackLayout>
    <Label :text="msg" />
  </StackLayout>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
Label {
  color: #53BA82;
}
</style>
