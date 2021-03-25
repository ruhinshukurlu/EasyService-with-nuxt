<template>
    <div class="row workers justify-content-center">
        <transition-group>
            <div class="worker-item" v-for='worker in workers' :key='worker.id'>
            <div style="display: flex; justify-content: space-between;" class=" card-body">
                <div class="left-side d-column ">
                    <img :src="worker.profile_img" style="width: 120px; height: 120px; object-fit: cover;" alt="profile-photo">
                    <a style="color: darkgreen; margin-top: 8px; width: 180px;" class="card-title" href="/account/worker/5">View Profile &amp; Reviews</a>
                </div>
                <div class="right-side worker-info">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div class="full-name">
                                <nuxt-link :to="`/workers/${worker.id}`">
                                    {{worker.name}} {{worker.surname}}
                                </nuxt-link>
                            </div>
                            <div><i class="fa fa-check-square"></i> Birth Date : {{worker.birth_date}}</div>
                            <div><i class=" fa fa-star"></i> Rating : {{worker.rating}} / 10</div>
                            <div>
                                <i class="fas fa-map-marker-alt"></i> 
                                Work Places : <span class="mr-1" v-for="place in worker.work_places" :key="place">{{place}},</span>
                            </div>
                            <div>
                                <i class="fas fa-language"></i>
                                Languages : <span class="mr-1" v-for="lang in worker.languages" :key="lang">{{lang}},</span>
                            </div>
                        </div>
                        <div>
                            <h5 class="bold">{{getCurrentSkillPrice(worker)}} / hr </h5>
                        </div>
                    </div>

                    <hr>
                    <h5 class="bold">My Experience about {{service}}</h5>
                    <p>{{ getSkillDescription(worker) }}</p>
                    
                </div>

            </div>
        </div>

        </transition-group>
    </div>
</template>
<script>
export default {
    props : ['workers', 'service'],
    methods : {
        getCurrentSkillPrice(worker){
            for (let i = 0; i < worker.skills.length; i++) {
                if(worker.skills[i].name === this.service){
                    return  worker.skills[i].price_per_hour + ' ' +  worker.skills[i].price_currency
                    break
                }                
            }
        },
        getSkillDescription(worker){
            for (let i = 0; i < worker.skills.length; i++) {
                if(worker.skills[i].name === this.service){
                    return  worker.skills[i].experience_description
                    break
                }                
            }
        }
    }
}
</script>
<style scoped>

.worker-item{
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.worker-info i{
    color: #56d6b8;
}

.full-name a{
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
}
    
</style>