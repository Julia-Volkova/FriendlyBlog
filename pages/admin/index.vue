<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
      <AppButton @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-post">
      <h1>Existing Post</h1>
      <PostList :isAdmin="true" :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
  export default {
    name: "index",
    scrollToTop: true,
    middleware: ['auth', 'check-auth'],
    layout: 'admin',
    props: {},
    components: {},
    data() {
      return {}
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/admin/auth');
      },
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
