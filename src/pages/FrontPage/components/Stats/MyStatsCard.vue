<template>
  <div class="m-4">
    <div class="text-xl font-bold text-zinc-800">
      <slot name="title"></slot>
    </div>
    <div
      class="drop-shadow-2xl bg-zinc-800 text-zinc-50 h-80 w-80 rounded-2xl p-8 space-y-4"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
