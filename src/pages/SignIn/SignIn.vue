<template>
  <!-- Sign In Page -->
  <div class="flex justify-center py-40">
    <div>
      <div class="rounded-3xl bg-zinc-200 p-10 w-96 shadow-xl space-y-8">
        <div class="text-2xl font-bold mb-4">Sign In!</div>
        {{ errorMessage }}
        <div>
          <div class="font-bold">Username</div>
          <input v-model="username" class="bg-zinc-50 p-2 w-full" type="text" />
        </div>
        <div>
          <div class="font-bold">Password</div>
          <input
            v-model="password"
            class="bg-zinc-50 p-2 w-full"
            type="password"
          />
        </div>
        <button
          class="bg-zinc-800 text-zinc-50 p-2 rounded-md w-full"
          @click="signIn"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

const password = ref("");
const username = ref("");
let errorMessage = ref("");

function signIn() {
  console.log("Signing in...");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, username.value, password.value)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      errorMessage = error.message;
    });
}
</script>

<style scoped></style>
