<script setup lang="ts">
import me from '../assets/me.jpeg'
</script>

<template>
  <div class="flex-1 flex flex-col justify-center items-center px-8 gap-3">
    <h1 class="text-3xl font-bold">Wanna reach out?</h1>
    <p>Have an inquiry? Wanna chit chat? Feel free to reach out to me through my contacts listed below! ^^</p>
    <div class="flex flex-row flex-wrap gap-4 mt-5">
      <div class="card bg-base-200 w-96">
        <div class="card-body flex flex-col gap-4">
          <i class='bx bxl-telegram text-7xl text-red-400 text-center' ></i>
          <h1 class="text-3xl font-bold text-center">Telegram</h1>
          <a class="btn btn-outline btn-secondary btn-block" href="https://t.me/si_migs_to">t.me/si_migs_to</a>
        </div>
      </div>
      <div class="card bg-base-200 w-96">
        <div class="card-body flex flex-col gap-4">
          <i class='bx bxs-envelope text-7xl text-blue-400 text-center'></i>
          <h1 class="text-3xl font-bold text-center">E-mail</h1>
          <a class="btn btn-outline btn-primary btn-block" href="mailto:contact@miguel.works">contact@miguel.works</a>
        </div>
      </div>
    </div>
  </div>
</template>