<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
  import PostPreview from "~/components/Posts/PostPreview";
  import axios from 'axios';

  export default {
    name: "index",
    scrollToTop: true,
    props: {},
    components: {
      PostPreview,
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
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
