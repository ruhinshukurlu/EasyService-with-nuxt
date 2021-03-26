<template>
  <div class="pb-5">
    <Slider />
    <AppServices />
    <div class="inner-container">
      <div class="row mb-150">
        <h3 class="full border-bottom pb-2 mb-5 bold">Top Workers</h3>
        <AppTopWorker v-for="worker in topWorkers" :key="worker.id" :worker="worker" />
      </div>
      <AppInfo />
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["workers"]),
    topWorkers() {
      var len = this.workers.length;
      var arr = this.workers
      for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
          if (arr[j - 1].rating > arr[j].rating) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr.slice(Math.max(arr.length - 4, 0))
    },
  },
};
</script>

<style>
</style>
