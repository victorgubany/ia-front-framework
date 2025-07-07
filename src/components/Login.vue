<template>
  <div class="d-flex justify-content-center bg-dark text-light vh-100 align-items-center">
    <div class="card bg-secondary text-light shadow-lg vh-100 align-items-center justify-content-center" >
      <h3 class="text-center mb-3">Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control bg-dark text-light border-light" id="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control bg-dark text-light border-light" id="password" required />
        </div>
        <div v-if="error" class="alert alert-danger py-2">{{ error }}</div>
        <button :disabled="loading" type="submit" class="btn btn-light w-100">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/services/auth';

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(null);
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  error.value = null;
  try {
    await login(email.value, password.value);
    router.push('/');

  } catch (err) {
    error.value = err.message || 'Invalid credentials';
  } finally {
    loading.value = false;
  }
};
</script>

<style>

</style>
