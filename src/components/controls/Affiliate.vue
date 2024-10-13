<template>
  <div v-for="(affiliate, i) in contactInfo()" :key="i">
    <div
      class="contact-img"
      @mouseover="showMessage()"
      @mouseleave="hideMessage()"
      @click="routeToPath(affiliate.path)"
    >
      <icon
        :height="affiliate.height"
        :width="affiliate.width"
        :name="affiliate.name"
      />
      <p class="message">
        {{ affiliate.message }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let isVisible = ref(false);

    function contactInfo() {
      return [
        {
          name: 'doLogo',
          height: 160,
          width: 160,
          path: 'https://m.do.co/c/9186a24b57b1',
          message:
            'Get Started on Digital Ocean with a $100, 60-day credit for new users',
        },
        {
          name: 'github',
          height: 130,
          width: 130,
          path: 'https://github.com/sponsors/needle-tail',
          message: 'Become a Sponsor',
        },
      ];
    }

    function routeToPath(path) {
      window.open(path);
    }

    function showMessage() {
      isVisible.value = true;
    }

    function hideMessage() {
      isVisible.value = false;
    }
    return {
      contactInfo,
      routeToPath,
      showMessage,
      hideMessage,
      isVisible,
    };
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.contact-card {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
h2 {
  font-weight: bold;
  margin: 0 auto;
}

p {
  margin-left: 10px;
  line-height: 1.5rem;
  font-weight: 300;
  box-shadow: none;
  background-color: transparent !important;
}

.contact-img {
  position: relative;
  width: 220px;
  height: auto;
  margin: 0 auto;
  color: white;
  margin: 100px 150px 100px 150px;
}

.contact-img:hover {
  cursor: pointer;
}

.message {
  margin: 10px 0 0 0;
}
.contact-info {
  position: relative;
  width: 300px;
  background-color: rgb(26, 26, 26);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px black;
  margin-left: 20px;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}

.mouseoverMessage {
  position: absolute;
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
}
@media screen and (max-width: 767px) {
  .contact-card {
    flex-direction: column;
  }
  .contact-info {
    margin: 0 auto;
    width: 250px;
    min-width: 250px;
  }

  .contact-img {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .contact-info {
    width: 1000px;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .contact-img {
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
  }

  p {
    margin-left: 10px;
    line-height: 4.5rem;
    font-size: 3.5rem;
  }
}
</style>
