<template>
  <div class="flex justify-center items-center h-screen w-full">
    <HelloWorld @click="() => (show = true)" />
  </div>

  <Dialog
    header="Dialog"
    v-model:visible="show"
    :draggable="false"
    :modal="true"
    :breakpoints="{ '960px': '100vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
  >
    <p>Dialog is a container to display content in an overlay window.</p>
    <p class="mt-3 text-2xl font-bold text-red-300">
      This button has been clicked!!!
    </p>
  </Dialog>
</template>

<script lang="ts">
import { Auth } from "../../utils/auth.util";
import { defineComponent } from "vue";
export default defineComponent({
  name: "initialView",
  computed: {
    auth(): Auth {
      return new Auth();
    },
  },
  data() {
    return {
      show: false as boolean,
    };
  },
});
</script>
