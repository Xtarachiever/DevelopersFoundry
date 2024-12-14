<template>
  <div
    class="main_div -mt-[80px] bg-[url('/concert-stage.jpg')] bg-cover bg-center w-full max-h-[800px] h-[500px] sm:h-[600px] relative z-0 min-w-[250px]"
  >
    <div class="bg-black opacity-40 z-1 w-full h-full absolute top-0 block"></div>
    <div class="main_div_content relative">
      <div class="mobile text-right">
        <a href="#">Discover</a>
        <a href="#">About us</a>
        <a href="#">FAQs</a>
        <a href="#">Contact us</a>
      </div>
      <p class="text-white text-[16px] leading-8 sm:text-[25px] w-full max-w-[400px] font-bold">
        Ready to Rock? Discover the Hottest Events Here - Your Calendar's New Best Friend!
      </p>
      <div
        class="filter_options flex items-center justify-between relative text-center rounded-xl bg-white px-4 md:px-6 py-4"
      >
        <div class="input_div flex items-center">
          <i class="bi bi-search text-[12px] mb-1 mt-1 text-purple-text"></i>
          <input
            class="text-black border-none outline-none p-3"
            name="Search"
            placeholder="Search for an event"
          />
        </div>
        <div class="categories_section flex items-center gap-[20px] sm:gap-[30px]">
          <div class="relative">
            <select class="border-none outline-none text-gray appearance-none pl-3 pr-5">
              <option selected value="categories">Categories</option>
            </select>
            <img
              src="/chevron-down.jpg"
              alt="select_icon"
              class="absolute top-[5px] -right-[20px]"
            />
          </div>
          <button
            class="bg-purple-button border-0 ml-2 py-[12px] px-[25px] rounded-xl text-white hover:bg-button-hover transition-all"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
