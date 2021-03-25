<template>
    <div class="p-relative">
        <div class="overlay">
            <div class="overlay-text">
                <h1 class="bold cover-name">Find Service that you need</h1>
            </div>
        </div>
        <img src="../assets/images/home-service.jpg" class="header-img" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-img{
        width: 100%;
        height: 500px;
        object-fit: cover;
    }

    .overlay{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background: radial-gradient(ellipse at center,rgba(0,0,0,.1) 0,transparent 100%) rgba(0,0,0,.2);
    }

    .overlay-text{
        width: 60%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        background: radial-gradient(ellipse at center,rgba(0,0,0,.1) 0,transparent 100%) rgba(0,0,0,.3);
    }

    .cover-name{
        color: #fff;
        font-weight: bold;
        padding: 15px;
    }
</style>