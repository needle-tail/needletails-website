<template>
  <needletails-header />
  <needletails-sidebar />
  <router-view v-slot="slotProps" class="router-view" :class="{ active: openMenu }">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
  <needletails-footer />
  <snack-bar />
</template>

<script>
import NeedletailsSidebar from './components/base/Sidebar.vue';
import NeedletailsHeader from './components/base/Header.vue';
import NeedletailsFooter from './components/base/Footer.vue';
import Banner from './components/controls/Banner.vue';
import SnackBar from './components/controls/SnackBar.vue';
import LoaderComponent from './components/LoaderComponent.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'NeedleTails',
  components: {
    NeedletailsSidebar,
    NeedletailsHeader,
    NeedletailsFooter,
    Banner,
    SnackBar,
    LoaderComponent,
  },
  setup() {
    const clipped = ref(false);
    const drawer = ref(false);
    const fixed = ref(false);
    const sheet = ref(true);
    const width = ref(250);
    const miniWidth = ref(56);
    const miniVariant = ref(false);
    const right = ref(true);
    const rightDrawer = ref(false);
    const title = ref('Needletails');
    const toggleCat = ref(false);
    const profileOpen = ref(false);
    const snackbar = ref(false);
    const timeout = ref(5000);
    let loaded = ref(false);
    const store = useStore();
    const openMenu = computed(() => store.getters.openMenu);
    const fetchData = async () => {
      try {
        loaded.value = false;
        //Load data on appear
        // await store.dispatch("").then(
        //   await store.dispatch("")
        // )
        loaded.value = true;
      } catch (e) {
        loaded.value = false;
        console.log(e, 'Error Fetching Data');
      }
    };
    fetchData();

    return {
      clipped,
      drawer,
      fixed,
      sheet,
      width,
      miniWidth,
      miniVariant,
      right,
      rightDrawer,
      title,
      toggleCat,
      profileOpen,
      snackbar,
      timeout,
      loaded,
      openMenu,
    };
  },
};
</script>

<style>
body,
html {
  background-color: #000000;
  padding: 0;
  margin: 0;
}

a:hover {
  color: #fff;
}

ul {
  padding: 0;
}

img {
  pointer-events: none;
}

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}

p {
    color: #ffffff; /* White text color for contrast */
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    padding: 15px; /* Add some padding around the text */
    border-radius: 5px; /* Rounded corners */
    line-height: 1.6; /* Improved line spacing for readability */
    margin: 20px 0; /* Margin above and below the paragraph */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
}

h1 {
  font-weight: bolder;
}

h2 {
  font-weight: 400;
}

h3 {
  margin-left: 10px;
  line-height: 2rem;
  font-size: 1.3rem;
  font-weight: 300;
}

/*Start Animations*/
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/*End Animations*/

a {
  cursor: pointer;
}

ul,
li {
  list-style-type: none;
}

.page-layout-2 {
  position: relative;
  top: 150px;
  background-color: white;
  padding-bottom: 100px;
  overflow: clip;
  min-height: calc(100vh - 0px);
}

.page-layout-2-top {
  padding-top: 100px;
  background-color: rgb(26, 26, 26);
}

.page-layout-2-flex-box {
  display: flex;
  justify-content: space-around;
}

.page-layout-2-top h1 {
  font-weight: bolder;
  transition-delay: 0.1s;
  color: white;
  font-size: 2.9rem;
  padding-bottom: 40px;
  margin-left: 40px;
}

.page-layout-2-flex-box>div>h2 {
  font-weight: bold;
  font-style: italic;
  text-align: center;
}

.page-layout-2-info>p {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  text-indent: 10px;
  color: darkslategray;
  transition-delay: 0.3s;
}

.page-layout-2-info {
  padding: 100px;
  width: 70%;
}

.stretch-height {
  margin: 100px;
}

@media screen and (max-width: 768px) {
  .page-layout-2-info {
    padding: 20px !important;
    width: auto;
    margin: 0 auto;
  }

  .stretch-height {
    margin: 20px;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 4rem;
    line-height: 5.7rem;
  }

  h4 {
    font-size: 3rem;
  }

  p,
  article {
    font-size: 2rem;
  }

  .page-layout-2-top {
    padding-top: 300px;
  }

  .stretch-height {
    padding: 300px;
  }
}
</style>
