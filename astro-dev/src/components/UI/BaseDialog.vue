<template>
  <teleport to="body">
    <dialog class="fixed top-0 left-0 p-0 m-0 z-10" open>
      <div
        class="
          bg-gray-900 bg-opacity-25
          backdrop-filter backdrop-blur-md
          p-10
          fixed
          h-screen
          text-gray-200
        "
      >
        <slot></slot>
      </div>
    </dialog>
  </teleport>
</template>
