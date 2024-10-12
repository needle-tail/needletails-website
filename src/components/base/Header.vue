<template>
  <header class="header">
    <div class="audio-lang-wrapper">
      <alert-modal v-if="!showMusic" v-scrollanimation class="alert" />
      <div class="lang">
        <a @click="englishClicked()">En</a>
      </div>
    </div>
    <div class="header-wrapper">
      <div>
        <div class="logo-title" @click="routeHome()">
          <icon :width="width" :height="height" name="devLogo" />
        </div>
      </div>
      <div class="trailing-wrapper">
        <li @click="routeManagement()">
          {{ $t('menuItemThree') }}
        </li>
        <li @click="routeConsultation()">
          {{ $t('menuItemTwo') }}
        </li>
        <li @click="routeTraining()">
          {{ $t('menuItemOne') }}
        </li>
        <li @click="contactClicked()">
          {{ $t('menuItemFour') }}
        </li>
      </div>
      <burger-menu class="mobile-burger" />
    </div>
  </header>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import BurgerMenu from '../controls/BurgerMenu';

export default {
  components: {
    BurgerMenu,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const lang = ref(localStorage.getItem('lang') || 'en');
    const width = ref(0);
    const height = ref(0);

    if (window.innerWidth <= 3839) {
      width.value = 220;
      height.value = 90;
    } else if (window.innerWidth === 3840) {
      width.value = 220;
      height.value = 90;
    } else if (window.innerWidth === 5120) {
      width.value = 220;
      height.value = 90;
    } else if (window.innerWidth === 6016) {
      width.value = 500;
      height.value = 150;
    }

    function englishClicked() {
      localStorage.setItem('lang', 'en');
      router.go();
    }

    function routeHome() {
      router.push('/');
    }

    function routeConsultation() {
      router.push('/consultation');
    }

    function routeManagement() {
      router.push('/management');
    }

    function routeTraining() {
      router.push('/training');
    }

    function contactClicked() {
      var mailto_link =
        'mailto:' +
        'support@needletails.com' +
        '?subject=' +
        'Project Inquiry' +
        '&body=' +
        '';
      window.location.href = mailto_link;
    }
    return {
      lang,
      englishClicked,
      routeHome,
      routeTraining,
      routeConsultation,
      routeManagement,
      contactClicked,
      width,
      height,
    };
  },
};
</script>

<style lang="css" scoped>
.audio-player {
  height: 50px;
  width: 270px;
}

.logo-title {
  display: flex;
  justify-content: space-around;
  height: 90%;
  cursor: pointer;
}

h1 {
  padding-left: 13px;
  margin-bottom: auto;
  font-size: 2.2rem;
}

a:active {
  color: orange;
}

.audio-player > p {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
}

.header {
  position: fixed;
  width: 100%;
  height: 135px;
  color: #ffffff;
  background-color: rgb(18, 18, 18);
  padding-bottom: 20px;
  z-index: 999;
}

.header-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  top: 20px;
}

.audio-lang-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.lang {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  padding-top: 5px;
}

.lang > a {
  margin: 0 5px 0 5px;
}

.trailing-wrapper {
  display: flex;
  padding-bottom: 20px;
}

li,
a {
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  color: #f2f2f2;
}

li:hover {
  color: white;
  font-weight: 340;
}

.trailing-wrapper > li,
.trailing-wrapper > a {
  margin: auto 10px 0 10px;
}

@media screen and (max-width: 767px) {
  .header {
    height: 95px;
  }

  .header-wrapper {
    top: 0;
  }

  .trailing-wrapper {
    display: none;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .header {
    height: 250px;
  }

  li,
  a {
    font-size: 3.2rem !important;
  }

  .trailing-wrapper > li:last-child {
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
