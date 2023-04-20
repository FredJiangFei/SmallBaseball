<template>
  <div class="tw-bg-black tw-overflow-hidden">
    <div class="tw-container tw-relative tw-mx-auto">
      <div class="tw-pb-20 tw-relative tw-z-10 tw-px-6 lg:tw-px-16">
        <div class="tw-py-4 home-hero tw-px-6 lg:tw-px-16 tw-text-center">
          <div
            class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
          >
            <p class="tw-pb-3 tw-text-center tw-text-lg mx-auto tw-text-white">
              NBA CourtOptix tracks and analyzes action on the court and
              generates insights behind every shot, pass and play.
            </p>
          </div>
        </div>

        <section
          class="tw-mt-4 tw-text-white tw-w-full tw-font-segoe tw-text-sm tw-font-normal"
        >
          <h2 class="tw-text-xl tw-font-bold">{{ title }}</h2>
          <p class="tw-mt-2">{{ description }}</p>
        </section>
        <section class="tw-mt-4 tw-w-full">
          <slot />
        </section>
      </div>

      <div
        class="tw-text-white tw-p-4 tw-capitalize tw-underline tw-font-segoe tw-text-lg italic tw-font-bold tw-flex tw-justify-between tw-relative tw-z-20"
      >
        <router-link v-if="routeButtons[0]" :to="routeButtons[0]">{{
          routeButtons[0].replace('-', ' ')
        }}</router-link>
        <router-link v-if="routeButtons[1]" :to="routeButtons[1]">{{
          routeButtons[1].replace('-', ' ')
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tabName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tabs = [
      'home',
      'ball-screens',
      'double-teams',
      'defensive-scores',
      'passing',
      'shooting',
      'passing-network',
    ];
    const routeButtons = computed<(string | null)[]>(() => {
      const index = tabs.indexOf(props.tabName);

      return [
        index < 1 ? null : tabs[index - 1],
        index > tabs.length - 1 ? null : tabs[index + 1],
      ];
    });

    return {
      routeButtons,
    };
  },
});
</script>
