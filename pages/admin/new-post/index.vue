<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted"/>
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
    middleware: ['auth', 'check-auth'],
    props: {},
    components: {
      AdminPostForm,
    },
    data() {
      return {}
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('addPost', postData)
            .then(() => {
              this.$router.push('/admin');
            })
      },
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>
    .new-post-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .new-post-form {
            width: 500px;
        }
    }
</style>
