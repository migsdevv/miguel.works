<script setup lang="ts">
import me from '../assets/me.jpeg'
</script>

<template>
  <div class="hero flex-1">
    <div class="hero-content flex-col md:flex-row items-center justify-between w-full px-8">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold">Hi there, I'm <span class="text-blue-400">Miguel Buccat</span>!</h1>
        <p>I'm a freelance <span class="text-blue-300">web developer</span> based in the <span class="text-blue-300">Philippines</span>. I create modern and quality web solutions for businesses and my personal projects.</p>
        <div class="flex flex-row gap-2 pt-2">
          <a class="btn btn-secondary btn-sm">About Me</a>
          <a class="btn btn-secondary btn-sm">Contact</a>
          <a class="btn btn-secondary btn-sm">Blog</a>
          <a class="btn btn-sm"><i class='bx bxl-github'></i></a>
          <a class="btn btn-sm"><i class='bx bxl-twitter'></i></a>
          <a class="btn btn-sm"><i class='bx bxl-facebook-circle'></i></a>
        </div>
      </div>
      <div class="avatar hidden md:block">
        <div class="w-72 rounded-full border-2 border-accent">
          <img :src="me" />
        </div>
      </div>
    </div>
  </div>
</template>