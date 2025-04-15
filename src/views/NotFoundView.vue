<template>
  <div class="flex-1 flex flex-col gap-2 justify-center items-center">
    <div class="card bg-primary w-96">
      <div class="card-body text-center">
        <i class='bx bx-bug text-7xl text-blue-400'></i>
        <h1 class="text-4xl font-bold"><span class="text-red-400">404</span>, oh no!</h1>
        <p>uh oh! i think that page does not exist :(</p>
        <router-link class="btn btn-ghost btn-sm btn-primary btn-block mt-2" to="/">go home?</router-link>
      </div>
    </div>
  </div>
</template>