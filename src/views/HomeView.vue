<script setup lang="ts">
import me from '../assets/me.jpeg'
</script>

<template>
  <div class="hero flex-1">
    <div class="hero-content flex-col md:flex-row items-center justify-between w-full px-4">
      <div class="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
        <h1 class="text-4xl font-bold">Hi there, I'm <span class="text-blue-400">Miguel Buccat</span>!</h1>
        <p>I'm a freelance <span class="text-blue-300">web developer</span> based in the <span class="text-blue-300">Philippines</span>. I create modern and quality web solutions for businesses and my personal projects.</p>
        <div class="flex flex-row gap-2 pt-2 flex-wrap justify-center">
          <router-link class="btn btn-secondary btn-sm" to="/about">About Me</router-link>
          <router-link class="btn btn-secondary btn-sm" to="/contact">Contact</router-link>
          <a class="btn btn-secondary btn-sm">Blog</a>
        </div>
        <div class="flex flex-row gap-2 pt-2 flex-wrap justify-center">
          <a class="btn btn-sm" href="https://github.com/migsdevv"><i class='bx bxl-github'></i></a>
          <a class="btn btn-sm" href="https://x.com/si_migs_to"><i class='bx bxl-twitter'></i></a>
          <a class="btn btn-sm" href="https://www.facebook.com/buccat.miguel1"><i class='bx bxl-facebook-circle'></i></a>
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