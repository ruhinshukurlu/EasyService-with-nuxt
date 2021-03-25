<template>
    <div class="row workers justify-content-center">
            <div class="worker-item">
            <div style="display: flex; justify-content: space-between;" class=" card-body">
                <div class="left-side d-column mr-5">
                    <img :src="worker.profile_img" class="prof-img" alt="profile-photo">
                    <nuxt-link :to="`/workers/${service}/${worker.id}`" class="view-profile-link">
                        View Profile & <br> Reviews
                    </nuxt-link>
                </div>
                <div class="right-side worker-info">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div class="full-name">
                                <nuxt-link :to="`/workers/${service}/${worker.id}`">
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
                    <h5 class="bold capitalize mb-3">My Experience about {{service}}</h5>
                    <p>{{ getSkillDescription(worker) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['worker', 'service'],
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

 .view-profile-link{
     display: flex;
     text-decoration: none;
     color: #56d6b8;
     border: 1px solid #56d6b8;
     padding: 5px 10px;
     margin-top: 20px;
    border-radius: 10px;
    transition: .4s;

 }
 
 .view-profile-link:hover{
     background-color: #56d6b8;
     color: #fff;
 }

 .prof-img{
     width: 150px;
     height: 150px;
     object-fit: cover;
    border: 1px solid #56d6b8;
    border-radius: 5px;
 }

</style>