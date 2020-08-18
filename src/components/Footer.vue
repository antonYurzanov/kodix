<template lang="pug">
  .footer
    .content
      .copy © 2015 CAPTAIN QUACK
        br
        | Десница тысячелетия и моллюск!
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.footer {
  width: 100%;
  height: rem(102px);
  background: #282d30;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.copy {
  font-size: rem(11px);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.2;
  text-align: center;
}
</style>
