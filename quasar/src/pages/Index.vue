<template>
  <q-page class="bg-deep-purple-1">
    <div class="row bg-primary">
      <div class="col">
        <div style="text-align:center; max-width:650px; margin-left:auto; margin-right:auto">
          <div class="text-h4 text-bold text-white q-mt-xl q-pl-lg q-pb-lg">Learn Quasar framework from Industry Experts</div>
          <div class="text-white text-h6 q-pl-lg q-pr-lg q-pb-sm"> Join our community today to get started</div>
          <q-input
            color="black"
            bg-color="white"
            filled
            placeholder="Your Email"
            class="q-pl-lg q-pr-lg q-pb-lg"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
          <template v-slot:append>
            <q-btn color="purple">Start Learning</q-btn>
          </template>
          </q-input>
        </div>
      </div>
      <div class="col gt-sm">
        <q-img src="../statics/imagee.jpg" alt="img" class="q-mx-sm q-my-sm"></q-img>
      </div>
    </div>

    <div class="row">
      <div class="text-h5 text-bold q-px-md q-pt-sm">Latest Chapters</div>
    </div>
    <div class="row">
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
          <q-video src="https://www.youtube.com/embed/BK66mQTSl7U" />

          <q-card-section>
            <div class="text-h6">Quasar Basics</div>
            <div class="text-subtitle2">by Codeguru</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
          <q-video src="https://www.youtube.com/embed/As5lzor2NQ8" />

          <q-card-section>
            <div class="text-h6">Quasar setup</div>
            <div class="text-subtitle2">by Codeguru</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
          <q-video src="https://www.youtube.com/embed/GV-D85D9KJQ" />

          <q-card-section>
            <div class="text-h6">Qusar-Todo</div>
            <div class="text-subtitle2">by Danny Connell</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="text-h5 text-bold q-px-md q-pt-sm">Featured Lessons</div>
    </div>
  <div class="row">
    <div class="col-12 col-md">
      <div class="q-pa-md">
        <q-card class="my-card">
          <div class="row">
            <div class="col-12 col-md-4 q-pa-sm">
              <q-img  src="../statics/image.jpeg"></q-img>
            </div>
            <div class="col-12 col-md-8">
              <div style="color:grey" class="text-h5 text-bold q-pa-sm">Getting started with Quasar framework</div>
              <div class="text-h6 text-italic q-pa-sm">Using Quasar framework we can create multi-platform-websites 
                such as :
                <ul>
                  <li>Web</li>
                  <li>Desktop</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
