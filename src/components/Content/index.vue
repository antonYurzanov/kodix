<template lang="pug">
  .content
    h1.title ¡Ay caramba!
    Form
    List
</template>

<script>
import Form from '@/components/Content/ContentForm'
import List from '@/components/Content/ContentList'

export default {
  name: 'TheContent',
  components: {
    Form,
    List
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.content {
  padding-top: rem(60px);
  padding-bottom: rem(60px);
}

.title {
  padding: 0;
  margin: 0 0 rem(48px) 0;
  text-align: center;
  font-size: rem(42px);
  color: rgb(40, 45, 48);
  font-weight: bold;
  line-height: 1;
}
</style>
