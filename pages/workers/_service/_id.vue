<template >
  <div class="inner-container worker-info pb-5">
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="col-md-12">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-5 d-flex align-items-center">
                <img
                  :src="currentWorker.profile_img"
                  class="prof-img m-2"
                  alt="profile-photo"
                />
              </div>
              <div class="col-md-7">
                <div class="d-column pt-2">
                  <h5 class="card-title bold mb-2">
                    {{ currentWorker.name }} {{ currentWorker.surname }}
                  </h5>
                  <div class="mb-2">
                    <i class=" fa fa-star" style="color:yellow;"></i> Rating : {{currentWorker.rating}} / 10 
                    </div>
                    <div  class="mb-2">
                        <i class="fas fa-tasks"></i> All Tasks Count : 213
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card p-2" style="max-width: 540px">
            <div class="card-body">
              <h5 class="card-title bold">About Myself</h5>
              <hr>
              <p class="card-text">
                {{currentWorker.bio}}
              </p>

              <hr />
              <div class="d-column">
                  <div><i class="fa fa-check-square"></i> Birth Date : {{currentWorker.birth_date}}</div>
                    <div><i class=" fa fa-star"></i> Rating : {{currentWorker.rating}} / 10</div>
                    <div>
                        <i class="fas fa-map-marker-alt"></i> 
                        Work Places : <span class="mr-1" v-for="place in currentWorker.work_places" :key="place">{{place}},</span>
                    </div>
                    <div>
                        <i class="fas fa-language"></i>
                        Languages : <span class="mr-1" v-for="lang in currentWorker.languages" :key="lang">{{lang}},</span>
                    </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div class="col-md-12">
          <div class="card mb-3 style=">
            <div class="card-header">
              <h5>All Skills</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between" v-for="skill in currentWorker.skills" :key="skill">
                <nuxt-link :to="`/workers/${skill.name}/${currentWorker.id}`" class="skill-link">
                    <span> {{ skill.name }}</span>
                    <RightArrow />
                </nuxt-link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- right side -->
      <div class="col-md-8">
        <div class="d-flex full justify-content-between">
            <h3 class="bold capitalize">{{currentSkill.name}} </h3>
            <h5 class="bold">{{currentSkill.price_per_hour}} {{ currentSkill.price_currency }} / Hr</h5>
        </div>
        <hr />
        <div class="div border-bottom mb-5 pb-2">
          <h5 class="bold capitalize">My Experience in {{service}}</h5>
          {{currentSkill.experience_description}}
        </div>
        <div  class="mb-5">
            <h5 class="bold capitalize">
                <i class="fas fa-tasks"></i> Task Counts in {{service}} : {{currentSkill.task_count}}
            </h5>
        </div>
        <SkillComments :service="service"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      service: this.$route.params.service,
    };
  },

  computed: {
    ...mapState(["workers"]),

    currentWorker() {
      let result;
      for (let i = 0; i < this.workers.length; i++) {
        const worker = this.workers[i];
        if (worker.id == this.id) {
          result = this.workers[i];
          break;
        }
      }
      return result;
    },

    currentSkill() {
      let result;

      for (let i = 0; i < this.workers.length; i++) {
        const worker = this.workers[i];

        if (worker.id == this.id) {
          for (let j = 0; j < worker.skills.length; j++) {
            const skill = worker.skills[j];

            if (skill.name === this.service) {
              result = worker.skills[j];
              break;
            }
          }
        }
      }

      return result;
    },
  },
};
</script>
<style scoped>

.worker-info i{
    color: #56d6b8;
}

.prof-img{
    width: 100%;
    height: 120px;
    object-fit: cover;
    border: 1px solid #56d6b8;
    border-radius: 5px;
}

.skill-link{
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>