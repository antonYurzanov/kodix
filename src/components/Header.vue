<template lang="pug">
  .header
    .content
      img.logo(
        src="@/assets/images/logo.png"
        alt=""
      )
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.header {
  width: 100%;
  height: rem(102px);
  background: #282d30;

  .content {
    height: 100%;
  }

  @include max(480) {
    height: rem(80px);
  }
}

.logo {
  position: relative;
  top: rem(6px);
  display: block;
  margin: 0 auto;
  max-height: 100%;
}
</style>
