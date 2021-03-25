<template>
  <div class="inner-container">
    <div class="services row mt-5 mb-150 justify-content-center">
      <h3 class="border-bottom pb-2 mb-5 bold full">Services</h3>
      <div class="col-12 col-lg-4 col-xl-3 col-sm-6 card-box mb-3"
        v-for="service in services"
        :key="service.slug">
        <div class="card">
          <nuxt-link :to="`services/${service.slug}`">
            <div class="card-img">
              <img
                :src="service.img"
                class="card-img-self"
                alt="Service image"
              />
            </div>
            <div class="card-body align-center p-3">
              <div class="d-flex full justify-content-between align-center">
                <h5 class="m-0">{{service.name}}</h5>
                <RightArrow />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["services"]),
  }
};
</script>
<style>
.card-img {
    position: relative;
    height: 200px;
    padding: 10px 0px;
}

.card a{
  text-decoration: none;
}

.card h5{
  color: #000;
  font-weight: 300;
}

.card-img img {
  width: 100%;
  height: 90%;
  /* object-fit: cover; */
}

.card{
  transition: .4s;
  border-color: #56d6b8;
}

.card:hover {
  -webkit-box-shadow: 0px 3px 17px -9px rgb(0 0 0 / 75%);
  -moz-box-shadow: 0px 3px 17px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 17px -9px rgb(0 0 0 / 75%);
  transform: scale(1.03);
}
</style>