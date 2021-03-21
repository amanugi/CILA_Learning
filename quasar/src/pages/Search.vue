<template>
  <q-page>
    <div class="row q-ma-md">
      <div class="col col-1 q-pt-sm q-pr-md">
        <q-btn
         icon="arrow_back"
         v-go-back.single 
         flat
         dense
         label="" />
      </div>
      <div class="col col-11">
        <q-input
         class="full-width"
         outlined 
         v-model="text" 
         label="Search" />
      </div>
    </div>
  <hr>
  <!-- Questions Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Questions
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col col-5.5">
      <q-btn  no-caps class="full-width" outline  label="Open" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-5.5">
      <q-btn no-caps class="full-width" outline label="Archived" />
    </div>
  </div>

  <!-- Select Expert Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Select Expert
    </div>
  </div>
  <div class="row q-ma-md">
    <q-select class="full-width" outlined v-model="model" :options="options" label="Select Expert" />
  </div>

  <!-- Topic Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Topics
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Real Estate" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Income Tax" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Graphic Design" />
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="UX Design" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Covid-19" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Accounts" />
    </div>
  </div>

  <!-- Budget Range Section -->
   <div class="row q-ma-md">
    <div class="text-h6">
      Budget Range
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col col-5.5">
      <q-input
         class="full-width"
         outlined 
         v-model="text" 
         label="$ Min" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-5.5">
      <q-input
         class="full-width"
         outlined 
         v-model="text" 
         label="$ Max" />
    </div>
  </div>

  <!-- Rating Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Ratings
    </div>
  </div>
  <div class="row q-ma-lg"> 
    <q-slider v-model="rating" :min="0" :max="5" color="blue"/>
    <div class="rating">
      {{ rating }} Star
    </div>
  </div>

  <!-- Deadline Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Deadline
    </div>
  </div>
  <div class="row q-ma-lg">
    <q-slider v-model="deadline" :min="0" :max="10" color="blue"/>
    <div class="deadline">
      {{ deadline }} Days
    </div>
  </div>

   <!-- Bids Section -->
  <div class="row q-ma-md">
    <div class="text-h5">
      Bids
    </div>
  </div>
  <div class="row q-ma-lg">
    <q-slider v-model="bid" :min="0" :max="20" color="blue"/>
    <div class="bid">
      {{ bid }} Bids
    </div>
  </div>

  <!-- Answer format Section -->
  <div class="row q-ma-md">
    <div class="text-h6">
      Answer Format
    </div>
  </div>
  <div class="row q-ma-md">
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Text" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-3.5">
      <q-btn  no-caps class="full-width" outline label="Video" />
    </div>
    &nbsp;&nbsp;&nbsp;
    <div class="col col-4">
      <q-btn  no-caps class="full-width" outline label="Audio" />
    </div>
  </div>
  </q-page>
    
</template>

<script>
export default {
  data () {
    return {
      rating: "",
      deadline: "",
      bid: ""
    }
  }
}
</script>

<style scoped>
  .rating, .deadline, .bid {
    font-size: 16px;
    margin-left: 50%;
    color: darkcyan;
  }
</style>