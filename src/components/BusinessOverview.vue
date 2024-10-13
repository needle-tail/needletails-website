<template>
  <div class="business-details">
    <div class="top-wrapper">
      <div>
        <h1 v-scrollanimation>
          {{ $t('businessOverviewTitle') }}
        </h1>
        <div v-scrollanimation>
          <h3>{{ $t('businessOverviewDescription') }}</h3>
          <h3>{{ $t('businessOverviewDetails') }}</h3>
          <div class="overview-three-wrapper">
            <h3>{{ $t('businessOverviewPlanning') }}</h3>
            <GridView :items="gridItems" :columns="2" />
          </div>
        </div>
        <button class="contact-button" @click="handleGetInTouch">
      {{ getInTouch }}
    </button>
      </div>
    </div>

    <div class="reasons">
      <div v-scrollanimation>
        <GridView :items="openSourceItems" :columns="1" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GridView from './GridView.vue';

export default {
  components: {
    GridView,
  },
  setup() {
    const store = useStore();
    const { t } = useI18n({ useScope: 'global' });
    const getInTouch = t('getInTouch');
    const createGridItem = (
      applicationTitle,
      headerKey,
      descriptionKey,
      imagePosition,
      imagePath,
      externalUrl
    ) => ({
      subtitle: t(applicationTitle),
      header: t(headerKey),
      image: imagePath ? require(`@/assets/${imagePath}`) : null, // Only require the image if imagePath is not empty
      text: t(descriptionKey),
      alt: t(`${applicationTitle} image`),
      color: '#000000',
      fontColor: '#FFFFFF',
      imagePosition,
      externalUrl,
    });

    const handleGetInTouch = () => {
      var mailto_link =
        'mailto:' +
        'support@needletails.com' +
        '?subject=' +
        'Project Inquiry' +
        '&body=' +
        '';
      window.location.href = mailto_link;
    };

    const gridItems = computed(() => [
      createGridItem(
        'applicationTitle',
        'serviceHeaderBackendDevelopment',
        'serviceDescriptionBackendDevelopment',
        'betweenText',
        'backend.png',
        ''
      ),
      createGridItem(
        'applicationTitle',
        'serviceHeaderMobileAppDevelopment',
        'serviceDescriptionMobileAppDevelopment',
        'betweenText',
        'NeedleTailLeftColor.png',
        ''
      ),
      createGridItem(
        'applicationTitle',
        'serviceHeaderTraining',
        'serviceDescriptionTraining',
        'betweenText',
        'StreamStack.png',
        ''
      ),
      createGridItem(
        'applicationTitle',
        'serviceHeaderWebDevelopment',
        'serviceDescriptionWebDevelopment',
        'betweenText',
        'VaporLogo.png',
        ''
      ),
    ]);

    const openSourceItems = computed(() => [
      createGridItem(
        'openSourceHeader',
        'openSourceDescription',
        'supportOpenSourceMessage',
        'betweenText',
        'github-mark-white.svg',
        'https://github.com/sponsors/needle-tail'
      ),
    ]);

    return {
      gridItems,
      openSourceItems,
      getInTouch,
      handleGetInTouch
    };
  },
};
</script>

<style lang="css" scoped>
.business-details {
  position: relative;
  /* background-color: white; */
  background-color: rgb(2, 2, 20);
  margin-top: 320px;
  padding: 100px;
}

h1 {
  text-align: left;
  font-size: 2.5rem;
  color: white;
}

h2,
h3 {
  /* color: darkslategray; */
  color: white;
}

.top-wrapper {
  display: flex;
  justify-content: space-between;
}

.top-wrapper > div:first-child > div {
  transition-delay: 0.3s;
}

.trailing-wrapper {
  margin-bottom: auto;
}

.overview-three-wrapper {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Center the content */
}

.reasons {
  position: relative;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding-top: 100px;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.contact-button {
  display: block;
  margin: 20px auto;
  background-color: #33BCE5;
  color: white;
  font-weight: 600;
  /* Slightly lighter font weight */
  padding: 12px 24px;
  /* Increased padding for a more substantial feel */
  border: none;
  border-radius: 12px;
  /* More rounded corners */
  font-size: 16px;
  /* Increased font size for better readability */
  text-align: center;
  /* Center text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  /* Subtle shadow for depth */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
  /* Added transform transition */
}

.contact-button:hover {
  background-color: #0051a8;
  /* Darker blue on hover */
  transform: translateY(-2px);
  /* Slight lift effect on hover */
}

.contact-button:active {
  transform: translateY(0);
  /* Reset lift effect on click */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Reduce shadow on click */
}

@media screen and (max-width: 768px) {
  .business-details {
    padding: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .business-details {
    margin-top: 320px;
  }

  .top-wrapper {
    flex-direction: column;
  }

  .top-wrapper > div > h1 {
    text-align: center;
  }

  .reasons {
    width: auto;
    padding-bottom: 100px;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .business-details {
    margin-top: 650px;
  }

  h1 {
    font-size: 6rem;
  }

  p,
  article {
    font-size: 2rem;
  }
}
</style>
