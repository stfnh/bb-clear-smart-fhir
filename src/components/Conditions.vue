<template>

  <div class="container">
    <h1 class="title">Conditions</h1>

    <div class="timeline">
      <div v-for="(condition, key) in sortedConditions" :key="condition.id">

        <header v-if="key==0" class="timeline-header">
          <span class="tag is-medium is-primary">{{condition.onsetDateTime | getYear}}</span>
        </header>

        
        <!-- <header v-if="key > 0 && yearChange(condition.onsetDateTime, sortedConditions[index-1].onsetDateTime)" class="timeline-header">
          <span class="tag is-primary">{{condition.onsetDateTime | getYear}}</span>
        </header> -->

        <timeline-item
          :title="condition.onsetDateTime"
        >
          <p>{{condition.code.text}} {{key}}</p>      
        </timeline-item>
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment';

import TimelineItem from './TimelineItem';
export default {
  props: {
    conditions: {
      type: Array
    }
  },
  computed: {
    sortedConditions() {
      return this.conditions.sort((a, b) => {
        var dateA = new Date(a.onsetDateTime);
        var dateB = new Date(b.onsetDateTime);
        return dateB - dateA;
      })
    }
  },
  filters: {
    getYear(date) {
      return moment(date).format('YYYY');
    }
  },
  methods: {
    yearChange(a, b) {
      if (new Date(a).getFullYear() !== new Date(b).getFullYear()) {
        return true;
      }
      return false;
    }
  },
  components: {
    TimelineItem
  }
}
</script>

<style>

</style>
