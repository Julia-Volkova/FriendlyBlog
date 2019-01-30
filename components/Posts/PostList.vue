<template>
  <section class="post-lists">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :isAdmin="isAdmin"
      :thumbnail="post.thumbnailLink"
      :title="post.title"/>
  </section>
</template>

<script>
  import PostPreview from "~/components/Posts/PostPreview";
  export default {
    name: "PostList",
    scrollToTop: true,
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
      posts: {
        type: Array,
        required: true,
      },
    },
    components: {
      PostPreview,
    },
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {
    }
  }
</script>


<style scoped>
  .post-lists {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
