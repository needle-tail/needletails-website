<template>
  <div class="projects">
    <header class="header">
      <h1>{{ projectsHeader }}</h1>
      <p class="description">
        {{ projectsDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ projectsOverview }}</p>
    </section>

    <section class="project-items">
      <GridView :items="gridItems" :columns="3" />
    </section>
  </div>
</template>

<script>
import GridView from './GridView.vue'; // Import the GridView component
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  components: {
    GridView,
  },

  setup() {
    const { t } = useI18n(); // Destructure the t function from useI18n

    // Use t function to translate the keys
    const projectsHeader = t('projectsHeader');
    const projectsDescription = t('projectsDescription');
    const projectsOverview = t('projectsOverview');
    const getInTouch = t('getInTouch'); // Assuming you have this key in your translations

    const createGridItem = (
      applicationTitle,
      headerKey,
      descriptionKey,
      imagePosition,
      imagePath,
      externalUrl,
      size
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
      size
    });

    const gridItems = computed(() => [
      createGridItem(
        '',
        'spinetailedKitProjectTitle',
        'spinetailedKitProject',
        'betweenText',
        'SpineTailedKit.png',
        'https://github.com/needle-tail',
        ''
      ),
      createGridItem(
        'projectTitle_2',
        'needletailKitProjectTitle',
        'needletailKitProject',
        'betweenText',
        'NeedleTailKit.png',
        'https://github.com/needle-tail',
        ''
      ),
      createGridItem(
        'projectTitle_3',
        'whiteTippedSocketsProjectTitle',
        'whiteTippedSocketsProject',
        'betweenText',
        'WhiteTipped.png',
        'https://github.com/needle-tail/white-tipped-sockets',
        ''
      ),
      createGridItem(
        'projectTitle_5',
        'projectHeader_5',
        'swiftHlsProject',
        'betweenText',
        'HLSLogo.png',
        'https://github.com/needle-tail',
        '80%'
      ),
      createGridItem(
        'projectTitle_4',
        'projectHeader_4',
        'swiftStompProject',
        'betweenText',
        'Stomp.png',
        'https://github.com/needle-tail',
        '80%'
      ),
      createGridItem(
        'projectTitle_6',
        'projectHeader_6',
        'iapEntitlementEngineProject',
        'betweenText',
        'IAPLogo.png',
        'https://github.com/Cartisim/iap-entitlement-engine',
        '80%'
      ),
    ]);

    return {
      projectsHeader,
      projectsDescription,
      projectsOverview,
      gridItems,
    };
  },
};
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #e0e0e0;
  /* Light text color for dark mode */
  background-color: rgb(8, 8, 8);
  /* Dark background color */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.header {
  text-align: center;
  margin-bottom: 20px;
  /* Reduced margin to avoid overlap */
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #F5F3B5;
}

.header .description {
  font-size: 1.2em;
}

.overview {
  margin-bottom: 20px;
  /* Space below the overview section */
}

.overview h2 {
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
}

.project-items {
  margin-bottom: 20px;
  /* Space below the project items section */
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
</style>
