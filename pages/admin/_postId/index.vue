<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from "~/components/Admin/AdminPostForm";

  export default {
    name: "index",
    scrollToTop: true,
    layout: 'admin',
    props: {},
    components: {
      AdminPostForm,
    },
    asyncData(context) {
      return axios.get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
          .then(res => {
            return {
              loadedPost: { ...res.data, id: context.params.postId },
            }
          })
          .catch(e => context.error());
    },
    data() {
//      return {
//        loadedPost: {
//          author: 'Maximilian',
//          title: 'My awesome Post',
//          content: 'Super amazing, thanks for that!',
//          thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
//        },
//      }
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch('editPost', editedPost)
            .then(() => {
              this.$router.push('/admin');
            })
            .catch()
      }
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }
</style>
