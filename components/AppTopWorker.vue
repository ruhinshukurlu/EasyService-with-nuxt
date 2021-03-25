<template>
  <div class="col-3 mb-4">
    <div class="worker-item">
      <div class="card" >
        <div class="d-flex card-top">
          <img :src="worker.profile_img" class="card-img-top" alt="..." />
          <div class="d-column ml-3 full">
            <h5 class="bold border-bottom pb-2 mb-3 full">{{ worker.name }} {{ worker.surname }}</h5>
            <div class="d-flex align-items-center rating-box">
                <span>Rating : </span>
                <span class="ml-1">{{ worker.rating }} / 10</span>
                <RatingStar />
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="d-column">
            <span class="featured-skills-header border-bottom bold pb-1 mb-3">Featured Skills</span>
            <div class="d-flex tasker-category full justify-content-between" v-for="skill in worker.skills" :key='skill.name'>
              <label class="category-name">{{skill.name}}</label>
              <span class="category-price bold">{{skill.price_per_hour}} {{skill.price_currency}} / hr</span>
            </div>
          </div>
          <div class="card-text d-column mt-3">
            <span class="full border-bottom pb-1 mb-2 bold"
              >I'm the right person for the job:</span
            >
            <p class="m-0">{{ worker.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RatingStar from "@/components/RatingStar";
export default {
  components: {
    RatingStar,
  },
  props: ["worker"],
};
</script>


<style scoped>

.card-top, 
.card-body{
    padding: 10px;
}
.worker-item img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  object-fit: cover;
}

.card-img-top{
    border: 1px solid rgb(39, 241, 208);
}

.card-title {
  font-weight: bold;
}

.worker-item{
    /* box-shadow: 0px 0px 30px -11px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 30px -11px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 30px -11px rgba(0,0,0,0.75); */
height: 100%;
}

.card{
    height: 100%;
    border: 1px solid rgb(39, 241, 208);
    border-radius: 10px;
}

.rating-box span {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.category-name{
    border: 1px solid rgb(44, 236, 204);
    padding: 5px 10px;
    border-radius: 5px;
}
</style>