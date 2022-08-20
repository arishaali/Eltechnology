<template>
    <div
    class="
      flex
      items-center
      fixed
      overflow-hidden
      bg-white
      h-screen
      w-screen
      top-0
      left-0
    "
  >
  <div class="mx-auto bg-white p-1 w-72 rounded-md">
    <form @submit.prevent='HandleSubmit'>
      <div class="">
        <h1 class="mb-4 font-bold text-2xl">Reset Password</h1>
      <label for="Password" class="block text-black text-md font-bold mb-1"
        >Password</label
      >
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        class="shadow appearance-none border lg:mr-8 rounded block sm:w-60 mb-4  md:w-96 lg:w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
     <div class="">
      <label for="ConfirmPassword" class="block text-black text-md font-bold mb-1"
        >Confirm Password</label
      >
      <input
        type="password"
        v-model="Cpassword"
        placeholder="Confirm Password"
        class="shadow appearance-none border lg:mr-8 rounded block sm:w-60  md:w-96 lg:w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <button class="text-white bg-black p-2 w-52 sm:w-60 md:w-96 lg:w-11/12 rounded-md mt-6">
      Submit
    </button>
    </form>
    

  </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            password: '',
            Cpassword: ''
        }
    },
    methods: {
        async HandleSubmit() {
            const response = await axios.post('http://127.0.0.1:8000/create-password/',{
                password: this.password,
                password_confirm: this.Cpassword,
                token: this.$route.params.token
            })
            this.$router.push('/')
        }
    }
  
}
</script>