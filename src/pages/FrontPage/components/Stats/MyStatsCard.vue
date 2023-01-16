<template>
  <div class="mx-auto">
    <div class="text-xl font-bold">
      <slot name="title"></slot>
    </div>
    <div class="drop-shadow-2xl bg-zinc-800 text-zinc-50 h-80 w-80 rounded-2xl p-8 space-y-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>
