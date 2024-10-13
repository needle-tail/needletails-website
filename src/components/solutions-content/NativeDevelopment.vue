<template>
  <div class="native-development">
    <header class="header">
      <icon :width="75" :height="75" name="nativeApp" />
      <h1>{{ nativeAppDevelopmentHeader }}</h1>
      <p class="description">
        {{ nativeAppDevelopmentDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ nativeAppDevelopmentOverview }}</p>
    </section>

    <section class="key-areas">
      <h2>Points for Consideration</h2>
      <GridView :items="gridItems" :columns="2" />
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GridView from '../GridView.vue';

export default {
  components: {
    GridView,
  },
  setup() {
    const { t } = useI18n(); // Destructure the t function from useI18n

    // Use t function to translate the keys
    const nativeAppDevelopmentHeader = t('nativeAppDevelopmentHeader');
    const nativeAppDevelopmentDescription = t(
      'nativeAppDevelopmentDescription'
    );
    const nativeAppDevelopmentOverview = t('nativeAppDevelopmentOverview');

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

    const gridItems = computed(() => [
      createGridItem('', 'nativeAppKeyAreaTitle1', 'nativeAppKeyArea1', '', '', ''),
      createGridItem('', 'nativeAppKeyAreaTitle2', 'nativeAppKeyArea2', '', '', ''),
      createGridItem('', 'nativeAppKeyAreaTitle3', 'nativeAppKeyArea3', '', '', ''),
      createGridItem('', 'nativeAppKeyAreaTitle4', 'nativeAppKeyArea4', '', '', ''),
      createGridItem('', 'nativeAppKeyAreaTitle5', 'nativeAppKeyArea5', '', '', ''),
      createGridItem('', 'nativeAppKeyAreaTitle6', 'nativeAppKeyArea6', '', '', ''),
    ]);

    return {
      nativeAppDevelopmentHeader,
      nativeAppDevelopmentDescription,
      nativeAppDevelopmentOverview,
      gridItems,
    };
  },
};
</script>

<style scoped>
.native-development {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  color: #e0e0e0; /* Light text color for dark mode */
  background-color: #000000; /* Dark background color */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.header {
  text-align: center;
  margin-bottom: 20px; /* Reduced margin to avoid overlap */
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #F5F3B5; /* Adjusted color */
}

.header .description {
  font-size: 1.2em;
}

.overview {
  margin-bottom: 20px; /* Space below the overview section */
}

.overview h2,
.key-areas h2 {
  display: inline-block;
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
  border-bottom: 2px solid #33BCE5;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.contact-button {
  display: block;
  margin: 20px auto;
  background-color: #33BCE5;
  color: white;
  font-weight: 600; /* Slightly lighter font weight */
  padding: 12px 24px; /* Increased padding for a more substantial feel */
  border: none;
  border-radius: 12px; /* More rounded corners */
  font-size: 16px; /* Increased font size for better readability */
  text-align: center; /* Center text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s; /* Added transform transition */
}

.contact-button:hover {
  background-color: #0051a8; /* Darker blue on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.contact-button:active {
  transform: translateY(0); /* Reset lift effect on click */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Reduce shadow on click */
}

@media screen and (max-width: 767px) {
  .native-development {
    padding: 20px;
  }
}
</style>
