<template>
    <header>
        <div class="d-flex justify-content-between">
            <div class="logo-block">
                <nuxt-link exact to="/">
                    <img src="../assets/images/logo.png" alt="">
                </nuxt-link>
            </div>

            <div class="profile-block">
                <button class="register-btn">
                    Sign Up
                </button>
                <a href="#" class="login-btn">
                    Login
                </a>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header{
        padding: 10px 0px;
    }
    .logo-block img{
        width: 150px;
        height: 50px;
        object-fit: cover;
    }

    .register-btn{
        border: 1px solid #3b8070;
        color: #3b8070;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 5px;
        transition: .4s;
    }

    .register-btn:hover{
        background-color: #3b8070;
        color: #fff;
    }

    .login-btn{
        border: 1px solid #56d6b8;
        color: #56d6b8;
        padding: 5px 10px;
        text-decoration: none;
        border-radius: 5px;
        transition: .4s;
    }

    .login-btn:hover{
        background-color: #56d6b8;
        color: #fff;
    }

    .profile-block{
        display: flex;
        align-items: center;
    }

    .logo-link{
        text-decoration: none;
        display: flex;
        color: #000;
        align-items: center;
        justify-content: center;
    }

    .logo-link h3{
        color: #000;
        font-weight: bold;
        margin: 0px;
        margin-left: 5px;
    }

    

</style>