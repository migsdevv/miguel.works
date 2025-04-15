<script setup lang="ts">
import me from '../assets/me.jpeg'
</script>

<template>
  <div class="flex-1 flex flex-col justify-center items-center px-8 gap-3">
    <div class="card bg-base-200 w-96">
      <div class="card-body">
        <div class="avatar mx-auto">
          <div class="w-40 rounded-full border-2 border-accent">
            <img :src="me" />
          </div>
        </div>
        <h1 class="text-3xl font-bold text-center">Who am <span class="text-blue-400">I</span>?</h1>
        <p class="text-justify">Hi there! I'm <span class="text-blue-300">Miguel Buccat</span>! I'm a freelance web developer based in the Philippines.<br/><br/> I've been pursuing programming as a hobby since I was around 11 years old. I've been involved in numerous hobbyist projects over the years since then.<br/><br/>At the present, I'm a Senior High School student of De La Salle University - Dasmariñas, studying under the ICT (Information and Communication Technology) strand.</p>
      </div>
    </div>
  </div>
</template>