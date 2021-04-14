<template >
  <div class="inner-container worker-info pb-5">
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="col-md-12">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-5 d-flex align-items-center">
                <img
                  :src="currentWorkerSkill.serviceProvider.profile_img"
                  class="prof-img m-2"
                  alt="profile-photo"
                />
              </div>
              <div class="col-md-7">
                <div class="d-column pt-2">
                  <h5 class="card-title bold mb-2">
                    {{ currentWorkerSkill.serviceProvider.name }} {{ currentWorkerSkill.serviceProvider.surname }}
                  </h5>
                  <div class="mb-2">
                    <i class=" fa fa-star" style="color:yellow;"></i> Rating : {{currentWorkerSkill.serviceProvider.rating}} / 10 
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
                {{currentWorkerSkill.serviceProvider.bio}}
              </p>

              <hr />
              <div class="d-column">
                  <div><i class="fa fa-check-square"></i> Birth Date : {{currentWorkerSkill.serviceProvider.birth_date}}</div>
                    <div><i class=" fa fa-star"></i> Rating : {{currentWorkerSkill.serviceProvider.rating}} / 10</div>
                    <div>
                        <i class="fas fa-map-marker-alt"></i> 
                        Work Places : <span class="mr-1" v-for="place in currentWorkerSkill.serviceProvider.work_places" :key="place.id">{{place.name}},</span>
                    </div>
                    <div>
                        <i class="fas fa-language"></i>
                        Languages : <span class="mr-1" ></span>
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
              <li class="list-group-item d-flex justify-content-between" v-for="skill in getAllSkills" :key="skill.id">
                <nuxt-link :to="`/workers/${skill.service.slug}/${currentWorkerSkill.serviceProvider.id}`" class="skill-link">
                    <span> {{ skill.service.title }}</span>
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
            <h3 class="bold capitalize">{{service}} </h3>
            <h5 class="bold">{{currentWorkerSkill.price_per_hour}} {{ currentWorkerSkill.price_currency }} / Hr</h5>
        </div>
        <hr />
        <div class="div border-bottom mb-5 pb-2">
          <h5 class="bold capitalize">My Experience in {{service}}</h5>
          {{currentWorkerSkill.about_experience}}
        </div>
        <div  class="mb-5">
            <h5 class="bold capitalize">
                <i class="fas fa-tasks"></i> Task Counts in {{currentWorkerSkill.service.name}} : {{currentWorkerSkill.task_count}}
            </h5>
        </div>
        <SkillComments :service="service"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import gql from "graphql-tag";


export default {
  data() {
    return {
      id: this.$route.params.id,
      service: this.$route.params.service,
    };
  },

  apollo: {
    api_workers: gql`
      query {
        api_workers: allSkills{
          id
          experience
          about_experience
          task_count
          price_per_hour
          price_currency
          service{
            slug
            title
          }
          serviceProvider {
            id
            name
            surname
            profile_img
            birth_date
            rating
            work_places{
              name
            }
          }
        }
      }
    `,
  },

  computed: {
    ...mapState(["workers"]),

    currentWorkerSkill() {
      let result;
      for (let i = 0; i < this.api_workers.length; i++) {
        if (this.api_workers[i].serviceProvider.id == this.id && this.api_workers[i].service.slug == this.service) {
          result = this.api_workers[i];
          break;
        }
      }
      return result;
    },

    getAllSkills(){
      let result = [];
      for (let i = 0; i < this.api_workers.length; i++) {
        if (this.api_workers[i].serviceProvider.id == this.id) {
          result.push(this.api_workers[i]);
        }
      }
      return result;
    }
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