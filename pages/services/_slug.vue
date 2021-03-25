<template>
  <div class="inner-container">
    <div class="row mt-5">
      <div class="col-6">
        <img class="service-img" :src="currentService.img" alt="" />
      </div>
      <div class="col-6 d-column justify-content-center">
        <h4 class="border-bottom pb-2 mb-3">{{ currentService.name }}</h4>
        <p>{{ currentService.desc }}</p>
      </div>
    </div>

    <div class="row pb-5 mt-150">
      <h3 class="bold full border-bottom pb-2 mb-5">
        Found Workers for {{ currentService.name }}
      </h3>
      <div class="row justify-content-center full mb-5">
        <div class="col-6 address">
          <h5 class="full mb-3">
            <i class="fas fa-map-marker-alt mr-1"></i> Filter by Address
          </h5>
          <select name="address" id="address">
            <option value>Select Address</option>
            <option v-for="place in workplaces" :key="place" :value="place">
              {{ place }}
            </option>
          </select>
        </div>
        <div class="col-6 d-column">
          <h5 class="border-bottom pb-2 mb-3">Sort By Rating</h5>
          <button class="sort-btn" @click="sortByAscending">
            Lowets-Highest
          </button>
          <button class="sort-btn" @click="sortByDescending">
            Highest-Lowets
          </button>
        </div>
      </div>
      <AppWorkers :workers="filteredWorkers" :service="service" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      service: this.$route.params.slug,
    };
  },
  computed: {
    ...mapState(["services", "workers", "workplaces"]),

    currentService() {
      let result;

      for (let i = 0; i < this.services.length; i++) {
        if (this.services[i].slug === this.service) {
          result = this.services[i];
          break;
        }
      }
      return result;
    },

    filteredWorkers() {
      return this.workers.filter((el) => {
        let skills = el.skills;

        for (let i = 0; i < skills.length; i++) {
          const skill = skills[i];
          if (skill.name === this.service) {
            return el;
          }
        }
      });
    },
  },

  methods: {
    sortByAscending() {
        console.log(this.filteredWorkers.rating);
        this.filteredWorkers.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortByDescending() {
        this.filteredWorkers.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    },
  },
};
</script>
<style>


.service-img {
  width: 100%;
  height: 400px;
  /* object-fit: cover; */
}

#address {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  transition: 0.4s;
  background-color: #fff;
  width: 80%;
}

.sort-btn {
  border: 1px solid #ccc;
  padding: 5px 20px;
  margin-bottom: 10px;
}

.search-input:focus {
  border-color: #3b8070;
}

.search-box {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.search-box label {
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.address i {
  color: #3b8070;
}
</style>