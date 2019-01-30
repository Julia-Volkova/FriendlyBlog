<template>
<div class="admin-page">
  <section class="new-post">
    <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
  </section>
  <section class="existing-post">
    <h1>Existing Post</h1>
    <PostList :isAdmin="true" :posts="loadedPosts"/>
  </section>
</div>
</template>

<script>
  import PostList from "~/components/Posts/PostList";
  import AppButton from "~/components/UI/AppButton";
  export default {
    name: "index",
    scrollToTop: true,
    layout: 'admin',
    props: {},
    components: {
      AppButton,
      PostList,
    },
    data() {
      return {}
    },
    methods: {},
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
