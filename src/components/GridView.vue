<template>
  <div class="component-wrapper">
    <div class="grid-container">
      <h2
        class="grid-subtitle"
        :style="{ color: subtitleColor, backgroundColor: subtitleBgColor }"
      >
        {{ items.length > 0 ? items[0].subtitle : 'No Items Available' }}
      </h2>
      <div
        class="grid-view"
        :style="{ gridTemplateColumns: `repeat(${newColumns}, 1fr)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="grid-item"
          :style="{ backgroundColor: item.color }"
          @click="() => handleTap(item)"
        >
          <div
            v-if="item.image && item.imagePosition === 'aboveHeader'"
            :class="['image-container', item.imagePosition]"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="grid-image"
              :style="{ maxWidth: item.size || '100%' }"
            />
          </div>

          <h3
            class="grid-header"
            :style="{
              color: item.fontColor,
              backgroundColor: item.headerBgColor || 'transparent',
            }"
          >
            {{ item.header }}
          </h3>

          <div
            v-if="item.image && item.imagePosition === 'betweenText'"
            :class="['image-container', item.imagePosition]"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="grid-image"
              :style="{ maxWidth: item.size || '100%' }"
              />
          </div>

          <p class="grid-text" :style="{ color: item.fontColor }">
            {{ item.text }}
          </p>

          <div
            v-if="item.image && item.imagePosition === 'belowDescription'"
            :class="['image-container', item.imagePosition]"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="grid-image"
              :style="{ maxWidth: item.size || '100%' }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'GridView',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (item) =>
            typeof item === 'object' &&
            item !== null &&
            [
              'subtitle',
              'header',
              'text',
              'color',
              'fontColor',
              'imagePosition',
            ].every((prop) => item.hasOwnProperty(prop)) &&
            typeof item.subtitle === 'string' &&
            typeof item.header === 'string' &&
            typeof item.text === 'string' &&
            typeof item.color === 'string' &&
            typeof item.fontColor === 'string' &&
            (!item.image || typeof item.image === 'string') && // Optional image
            (!item.headerBgColor || typeof item.headerBgColor === 'string') && // Optional header background color
            [
              'aboveHeader',
              'belowDescription',
              'top',
              'bottom',
              'left',
              'right',
              'center',
              'betweenText',
            ].includes(item.imagePosition) // Added 'betweenText'
        );
      },
    },
    columns: {
      type: Number,
      default: 2,
      validator: (value) => value > 0,
    },
    subtitleColor: {
      type: String,
      default: '#000000',
    },
    subtitleBgColor: {
      type: String,
      default: '#00000000',
    }
  },
  setup(props) {
    const handleTap = (item) => {
      if (item.externalUrl != null && item.externalUrl !== '') {
        window.location.replace(item.externalUrl);
      }
    };

    const newColumns = ref(props.columns); // Initialize columns as a reactive reference

    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) {
        newColumns.value = 1; // 1 column for mobile devices
      } else if (width < 1024) {
        newColumns.value = 2; // 2 columns for tablet devices
      } else {
        newColumns.value = props.columns; // Default columns for larger screens
      }
    };
   
    onMounted(() => {
      updateColumns(); // Set initial column count
      window.addEventListener('resize', updateColumns); // Add resize event listener
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateColumns); // Clean up event listener
    });

    return {
      handleTap,
      newColumns, // Return the reactive columns property
      // Do not return subtitleColor, subtitleBgColor, and items to avoid duplicate keys
    };
  },
});
</script>

<style scoped>
.component-wrapper {
  padding: 20px;
}

.grid-container {
  margin-bottom: 16px;
}

.grid-subtitle {
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
}

.grid-view {
  display: grid;
  gap: 16px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  cursor: pointer;
  border: 2px solid rgba(48, 46, 46, 0.2);
}

.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: rgba(60, 59, 59, 0.5);
}

.image-container {
  display: flex;
  justify-content: center;
  margin: 8px 0;
}

.image-container.betweenText {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0;
}

.image-container.left {
  flex-direction: row;
}

.image-container.right {
  flex-direction: row-reverse;
}

.image-container.center {
  flex-direction: column;
  align-items: center;
}

.image-container.top {
  flex-direction: column;
  align-items: center;
}

.image-container.bottom {
  flex-direction: column;
  align-items: center;
}

.image-container.aboveHeader {
  flex-direction: column;
  align-items: center;
}

.image-container.belowDescription {
  flex-direction: column;
  align-items: center;
}

.grid-header {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.grid-image {
  height: auto;
  border-radius: 8px;
}

.grid-text {
  font-size: 1rem;
  color: #333;
}

/* Media query for mobile devices */
@media screen and (max-width: 768px) {
  .grid-view {
    grid-template-columns: 1fr; /* Change to a single column on mobile */
  }
}
</style>
