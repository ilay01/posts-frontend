// JokerTab.vue
<template>
  <div class="joker-tab">
    <h2>Joker Tab</h2>
    <p>Hello Joker</p>
    <p>What is my name?</p>

    <div class="row">
      <div class="col-4">
        <q-input v-model="input"></q-input>
      </div>
      <q-btn label="submit" @click="input = ''"></q-btn>
    </div>
    <q-space></q-space>
    <p>Your name is {{ input }}</p>
  </div>

  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section> Wanna really leave? </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const input = ref("");
const router = useRouter();
const showDialog = ref(false);
const inputTouched = ref(false);

// Watch for route changes
router.beforeEach((to, from, next) => {
  if (inputTouched.value) {
    showDialog.value = true;
    // Prevent navigation until the user makes a decision
    return;
  }
  next();
});

watch(input, (newValue) => {
  inputTouched.value = newValue !== "";
});
</script>

<style scoped>
.joker-tab {
  background-color: yellow;
  color: black;
  padding: 20px;
}
</style>
