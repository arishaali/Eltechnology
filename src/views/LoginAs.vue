<template>
  <div>
    <Mainbar />
    <div class="flex justify-center">
      <div
        class="w-full m-4 bg-white md:w-8/12 lg:w-7/12 h-144 my-12 rounded-md flex flex-row justify-between"
      >
        <div class="w-96 my-auto p-3 md:ml-4 lg:ml-auto lg:mr-auto">
          <h1 class="font-bold text-2xl mb-12">Login As,</h1>
          <div
           v-for="pro in profile"
            :key="pro"
            @click="Page(pro)"
            class="px-2 text-sm text-white bg-black py-3 lg:px-6 w-11/12 rounded-md mt-6 flex justify-between cursor-pointer"
          >
            <div class="capitalize">
              <i class="fas fa-user mr-1"></i>
              {{ pro }}
            </div>
            <i class="fas fa-chevron-right mt-1"></i>
          </div>
        </div>
        <div class="h-144 w-80 p-2">
          <img src="..\assets\Signup.png" class="w-full h-full" alt="Pattern" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mainbar from "@/components/Mainbar.vue";
export default {
  components: {
    Mainbar,
  },
  props: {
    profile : Array
  },
  methods: {
    Page(name) {
      localStorage.setItem('status', name)
      if (name == "user") {
        this.$router.push("/create");
      }
      if (name == "Demand Manager") {
        this.$router.push("/evaluate");
      }
      if (name == "Solution Designer") {
        this.$router.push("/mapRequest");
      }
      if (name == "Manager") {
        this.$router.push("/manager");
      }
    },
}
}
</script>

