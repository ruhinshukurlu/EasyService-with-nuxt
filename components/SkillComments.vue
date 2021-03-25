<template>
    <div>
        <div class="div mt-3 mb-5">
          <h3 class="bold capitalize">Reviews for {{service}}</h3>
          <hr>
        </div>
        <!-- User -->
        <div class="container mb-5">
          <div class="row comment-border-bottom mb-5 pb-2" v-for="i in 5" :key="i">
            <div class="col-md-2">
              <img
                src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
                alt="photo"
                class="author-img"/>
            </div>
            <div class="col-md-10">
                <div class="d-column">
                    <div class="d-flex justify-content-between mb-2">
                        <div class="d-column">
                             <b>Carrie D. says</b>
                            <small><b>April 25, 2020</b></small>
                        </div>
                        <div class="d-flex stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi minima dolorum quo autem 
                        nisi reiciendis a, quidem nihil placeat sint debitis eius repellat quae. Eos culpa sapiente quidem repudiandae quo! <br />
                        
                    </p>
                </div>
            </div>
          </div>
          
        </div>
    </div>
</template>
<script>
export default {
    props : ['service']
}
</script>
<style scoped>
    .author-img{
        width: 80px;
        border-radius: 50%;
        height: 80px;   
    }

    .comment-border-bottom{
        border-bottom: 1px solid rgb(233, 231, 231);
    }

    .stars span{
        color: rgb(243, 247, 14);
    }
</style>