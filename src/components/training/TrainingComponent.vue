<template>
  <div class="training-programs">
    <header class="header">
      <h1>{{ trainingProgramsHeader }}</h1>
      <p class="description">
        {{ trainingProgramsDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ trainingOverview }}</p>
    </section>

    <section class="key-competencies">
      <h2>Key Competencies in Training Courses</h2>
      <GridView :items="trainingData" :columns="2" />
    </section>

    <button class="contact-button" @click="handleGetInTouch">
      {{ getInTouch }}
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'; // Importing Vue's ref and computed functions
import { useI18n } from 'vue-i18n';
import GridView from '../GridView.vue';

export default {
  components: {
    GridView,
  },
  setup() {
    const { t } = useI18n(); // Destructure the t function from useI18n

    // Use t function to translate the keys
    const trainingProgramsHeader = t('trainingProgramsHeader');
    const trainingProgramsDescription = t('trainingProgramsDescription');
    const trainingOverview = t('trainingOverview');
    const getInTouch = t('getInTouch'); // Assuming you have this key in your translations

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

    const trainingData = computed(() => [
      createGridItem('', 'trainingKeyCompetency1', '', '', '', ''),
      createGridItem('', 'trainingKeyCompetency2', '', '', '', ''),
      createGridItem('', 'trainingKeyCompetency3', '', '', '', ''),
      createGridItem('', 'trainingKeyCompetency4', '', '', '', ''),
      createGridItem('', 'trainingKeyCompetency5', '', '', '', ''),
      createGridItem('', 'trainingKeyCompetency6', '', '', '', ''),
    ]);

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

    return {
      trainingProgramsHeader,
      trainingProgramsDescription,
      trainingOverview,
      trainingData,
      getInTouch,
      handleGetInTouch,
    };
  },
};
</script>

<style scoped>
.training-programs {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  color: #e0e0e0;
  /* Light text color for dark mode */
  background-color: #000000;
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

.overview,
.key-competencies {
  margin-bottom: 20px;
  /* Space below the sections */
}

.overview h2,
.key-competencies h2 {
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
}

.contact-button {
  display: block;
  margin: 20px auto;
  background-color: #33BCE5;
  /* Apple blue */
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
    transform 0.2;
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

@media screen and (max-width: 767px) {
  .training-programs {
    padding-top: 200px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
