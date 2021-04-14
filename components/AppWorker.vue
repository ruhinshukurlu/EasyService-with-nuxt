<template>
  <div class="row workers justify-content-center full">
    <div class="worker-item full">
      <div style="display: flex; justify-content: space-between" class="card-body">
        <div class="left-side d-column mr-5">
          <img :src="skill.serviceProvider.profile_img" class="prof-img" alt="profile-photo" />
          <nuxt-link
            :to="`/workers/${service}/${skill.serviceProvider.id}`"
            class="view-profile-link"
          >
            View Profile & <br />
            Reviews
          </nuxt-link>
        </div>
        <div class="right-side worker-info full">
          <div style="display: flex; justify-content: space-between">
            <div>
              <div class="full-name">
                <nuxt-link :to="`/workers/${service}/${skill.serviceProvider.id}`">
                  {{ skill.serviceProvider.name }} {{ skill.serviceProvider.surname }}
                </nuxt-link>
              </div>
              <div>
                <i class="fa fa-check-square"></i> Birth Date :
                {{ skill.serviceProvider.birth_date }}
              </div>
              <div>
                <i class="fa fa-star"></i> Rating : {{ skill.serviceProvider.rating }} / 10
              </div>
              <div>
                <i class="fas fa-map-marker-alt"></i>
                Work Places :
                <span
                  class="mr-1"
                  v-for="place in skill.serviceProvider.work_places"
                  :key="place.id"
                  >{{ place.name }},</span
                >
              </div>
              <div>
                <i class="fas fa-language"></i>
                Languages :
                
              </div>
            </div>
            <div>
              <h5 class="bold">{{skill.price_per_hour}} / hr</h5>
            </div>
          </div>
          <hr />
          <h5 class="bold capitalize mb-3">
            My Experience about {{ service }}
          </h5>
          <p>
              {{skill.about_experience}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["skill", "service"],
};
</script>
<style scoped>
.worker-item {
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.worker-info i {
  color: #56d6b8;
}

.full-name a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
}

.view-profile-link {
  display: flex;
  text-decoration: none;
  color: #56d6b8;
  border: 1px solid #56d6b8;
  padding: 5px 10px;
  margin-top: 20px;
  border-radius: 10px;
  transition: 0.4s;
}

.view-profile-link:hover {
  background-color: #56d6b8;
  color: #fff;
}

.prof-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #56d6b8;
  border-radius: 5px;
}
</style>