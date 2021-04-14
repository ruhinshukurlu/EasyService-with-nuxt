<template>
  <div class="pb-5">
    <Slider />
    <AppServices />
    <div class="inner-container">
      <div class="row mb-150">
        <h3 class="full border-bottom pb-2 mb-5 bold">Top Workers</h3>
        <AppTopWorker
          v-for="worker in topWorkers"
          :key="worker.id"
          :worker="worker"
        />
      </div>
      <AppInfo />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gql from "graphql-tag";

export default {
  apollo: {
    services: 
    gql`query {
        services:  allServices {
          title
          description
          image
        }
      }`,
    
    topWorkers : 
      gql`query{
        topWorkers: allServiceProviders(sortBy : rating_DESC ){
          name
          surname
          profile_img
          rating
          bio
        } 
      }`
  }
};
</script>

<style>
</style>
