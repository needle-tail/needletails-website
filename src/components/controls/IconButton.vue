<template>
  <div v-if="isClickable">
    <ul
      class="icon-label"
      :class="getStyleClasses()"
      @click="clicked()"
    >
      <div
        class="flash ripple"
        :class="{ active: clickedStatus }"
      />
      <div v-if="isCustomSVG">
        <icon
          :width="width"
          :height="height"
          :name="icon"
        />
      </div>
      <div v-else>
        <vue-icon
          color="white"
          size="large"
          :name="icon"
        />
      </div>
      <div class="logoTitle">
        <h2
          class="font"
          :class="getTextStyleClasses()"
        >
          {{ title }}
        </h2>
      </div>
    </ul>
  </div>
  <div v-else>
    <ul
      class="icon-label"
      :class="getStyleClasses()"
    >
      <div
        class="flash ripple"
        :class="{ active: clickedStatus }"
      />
      <div v-if="isCustomSVG">
        <icon
          :width="width"
          :height="height"
          :name="icon"
        />
      </div>
      <div v-else>
        <vue-icon
          color="white"
          size="large"
          :name="icon"
        />
      </div>
      <div class="logoTitle">
        <h2
          class="font"
          :class="getTextStyleClasses()"
        >
          {{ title }}
        </h2>
      </div>
    </ul>
  </div>
</template>

<script scoped>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    hover: {
      type: String,
      required: false,
    },
    isCustomSVG: {
      type: Boolean,
      require: false,
    },
    externalPath: {
      type: Boolean,
      require: false,
    },
    textColor: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    isClickable: {
      type: Boolean,
      required: true,
    },
    hasEmailClickHandler: {
      type: Boolean,
      required: false,
    },
  },

  setup(props) {
    const router = useRouter();
    let isClicked = ref(false);
    let clickable = ref(props.isClickable);

    const clickedStatus = computed(() => {
      return isClicked;
    });

    const route = computed(() => {
      return props.to;
    });

    function toggle() {
      if (isClicked.value === false) {
        isClicked.value = true;
      } else {
        isClicked.value = false;
      }
    }

    function clicked() {
      if (props.externalPath === false) {
        // const splitRoute = route.value.split("#");
        toggle();
        router.push({ path: route.value });
        setTimeout(() => {
          toggle();
        }, 1000);
      } else if (props.externalPath === true) {
        window.location.replace(props.to);
      } else if (props.hasEmailClickHandler === true) {
        var mailto_link =
        'mailto:' +
        'support@needletails.com' +
        '?subject=' +
        'Project Inquiry' +
        '&body=' +
        '';
      window.location.href = mailto_link;
      } else {
        console.log('No Handler');
      }
    }

    function getStyleClasses() {
      return [props.size, props.hover].map((val) => val && `is-${val}`);
    }

    function getTextStyleClasses() {
      return [props.size, props.hover, props.textColor].map(
        (val) => val && `is-${val}`
      );
    }
    return {
      clickedStatus,
      route,
      clicked,
      getStyleClasses,
      getTextStyleClasses,
      clickable,
    };
  },
};
</script>

<style scoped>
.icon-label {
  overflow: hidden;
}
/* default */
.icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}
/* sizes */
.icon.is-large {
  width: 2em;
  height: 2em;
}
.icon.is-medium {
  width: 1.6em;
  height: 1.6em;
}
.icon.is-normal {
  width: 1.2em;
  height: 1.2em;
}
.icon.is-small {
  width: 1em;
  height: 1em;
}
.icon.is-tiny {
  width: 0.7em;
  height: 0.7em;
}

.font.is-large {
  font-size: 1.8rem;
}
.font.is-medium {
  font-size: 1.7rem;
}
.font.is-normal {
  font-size: 1.5rem;
}
.font.is-small {
  font-size: 1rem;
}
.font.is-tiny {
  font-size: 1.1rem;
}
.font.is-black {
  color: black;
}
.icon-label.is-hover:hover {
  background-color: rgba(65, 65, 65, 1);
}

ul {
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
}
li {
  margin-bottom: 5px;
}

img {
  display: block;
}
.logo {
  position: relative;
  right: 8px !important;
}

.logoTitle {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.logoTitle > h2 {
  margin: 0;
  color: white;
}
/*ripple Effect */

.flash {
  position: absolute;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  border: 0;
  border-radius: 70px;
}
.flash.active {
  height: 62px;
  animation: ripple 0.4s linear;
}

@-webkit-keyframes ripple {
  0% {
    background-color: rgba(65, 65, 65, 1);
    width: 0;
    height: 0;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes ripple {
  0% {
    background-color: rgb(83, 82, 82);
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.ripple:before {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 50%;
  background-color: currentColor;
  visibility: hidden;
  z-index: 2;
}
.ripple:not(:active):before {
  -webkit-animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
  animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
  -webkit-transition: visibility 0.4s step-end;
  transition: visibility 0.4s step-end;
}
.ripple:active:before {
  visibility: visible;
}

@media screen and (max-width: 834px) {
  .flash.active {
    height: 0;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  h2 {
    font-size: 3.2rem !important;
  }
}
</style>
