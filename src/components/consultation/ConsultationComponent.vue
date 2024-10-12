<template>
  <div class="consulting-solutions">
    <header class="header">
      <h1>{{ consultingTitle }}</h1>
      <p class="description">
        {{ consultingOverview }}
      </p>
    </header>
    <section class="overview">
      <h2>Consult with Us</h2>
      <p>
        {{ consultingWithUsMessage }}
      </p>
    </section>

    <section class="key-competencies">
      <h2>What to Consult About</h2>
      <GridView :items="consultingData" :columns="2" />
    </section>

    <button class="contact-button" @click="handleGetInTouch">
      {{ getInTouch }}
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GridView from '../GridView.vue';

export default {
  components: {
    GridView,
  },
  setup() {
    const { t } = useI18n();

    // Use t function to translate the keys
    const consultingTitle = t('consultingTitle');
    const consultingOverview = t('consultingOverview');
    const consultingWithUsMessage = t('consultingWithUsMessage');
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
      image: imagePath ? require(`@/assets/${imagePath}`) : null,
      text: t(descriptionKey),
      alt: t(`${applicationTitle} image`),
      color: '#000000',
      fontColor: '#FFFFFF',
      imagePosition,
      externalUrl,
    });

    const consultingData = computed(() => [
      createGridItem(
        '',
        'consultingHeader1',
        'consultingDescription1',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader2',
        'consultingDescription2',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader3',
        'consultingDescription3',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader4',
        'consultingDescription4',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader5',
        'consultingDescription5',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader6',
        'consultingDescription6',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader7',
        'consultingDescription7',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader8',
        'consultingDescription8',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader9',
        'consultingDescription9',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader10',
        'consultingDescription10',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader11',
        'consultingDescription11',
        '',
        '',
        ''
      ),
      createGridItem(
        '',
        'consultingHeader12',
        'consultingDescription12',
        '',
        '',
        ''
      ),
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
      consultingTitle,
      consultingOverview,
      consultingWithUsMessage,
      consultingData,
      getInTouch,
      handleGetInTouch,
    };
  },
};
</script>

<style scoped>
.consulting-solutions {
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

.overview {
  margin-bottom: 20px;
  /* Space below the overview section */
}

.overview h2,
.key-competencies h2 {
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
}

.key-competencies {
  margin-bottom: 20px;
  /* Space below the key competencies section */
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

@media screen and (max-width: 767px) {
  .consulting-solutions {
    padding-top: 200px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
