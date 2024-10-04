<template>
  <div>
    <h2>Posts</h2>
    <div class="row q-pa-sm q-gutter-md">
      <q-card v-for="post in posts" :key="post.id">
        <q-card-section>
          <q-item-label>{{ post.Post.title }}</q-item-label>
          <q-item-label caption>{{ post.Post.content }}</q-item-label>
        </q-card-section>
        <q-card-actions left>
          <q-btn
            flat
            color="negative"
            icon="delete"
            @click="deletePost(post.Post.id)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/posts", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/posts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    await fetchPosts();
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

onMounted(fetchPosts);
</script>
