<template lang="pug">
  #app
    Header
    Content
    Footer
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>
