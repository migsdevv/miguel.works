<script setup lang="ts">
import logo from '../assets/logo.png'
</script>

<template>
  <div class="navbar shadow-sm px-4 md:px-48">
    <div class="navbar-start gap-2">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <i class='bx bx-menu-alt-right'></i>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
        </ul>
      </div>
      <img class="h-5 mr-4" :src="logo" />
      <div class="hidden lg:flex gap-2">
        <router-link to="/" class="btn">Home</router-link>
        <router-link to="/about" class="btn">About Me</router-link>
      </div>
    </div>
    <div class="navbar-end gap-2">
      <a class="btn btn-primary btn-sm"><i class='bx bxl-github'></i></a>
      <a class="btn btn-primary btn-sm"><i class='bx bxl-twitter'></i></a>
      <a class="btn btn-primary btn-sm"><i class='bx bxl-facebook-circle'></i></a>
    </div>
  </div>
</template>