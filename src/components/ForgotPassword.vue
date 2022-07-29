<template>
    <div
    class="
      flex
      items-center
      fixed
      overflow-hidden
      bg-black bg-opacity-25
      h-screen
      w-screen
      top-0
      left-0
    "
  >
  <div class="mx-auto bg-white mt-0 md:-mt-96 lg:mt-0 rounded-md py-2 px-4">

      <a href="#"
          ><i
            @click="toggle"
            class="fas fa-times text-PrimaryColor -mt-2"
          ></i
        ></a>
    
      <div class="flex flex-col justify-center items-center text-center p-5">
         <img src="../assets/forgot.png" class=" w-20 h-20 mb-2" alt="">
        <h1 class="font-semibold text-xl">Reset Password</h1>
        <h1 class="text-xs font-medium mb-6">You will receive instructions for reseting password.</h1> 
        <input
        type="text"
        v-model="email"
        placeholder="Your email address"
        class="appearance-none border rounded sm:w-60 md:w-96 lg:w-full mx-auto p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <button class="text-white bg-black p-2 w-52 sm:w-60 md:w-96 lg:w-full rounded-md ">
      Send
    </button>
      </div>
    

  </div>

    </div>
</template>

<script>
export default {
    props: ["toggle"],
   
}
</script>