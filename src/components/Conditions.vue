<template>

  <div class="container">
    <h1 class="title">Conditions</h1>

    <div class="timeline">
      <div v-for="(condition, key) in sortedConditions" :key="condition.id">

        <header v-if="key==0" class="timeline-header">
          <span class="tag is-medium is-primary">{{condition.dateRecorded | getYear}}</span>
        </header>

        <header v-if="key > 0 && yearChange(key)" class="timeline-header">
          <span class="tag is-primary">{{condition.dateRecorded | getYear}}</span>
        </header>

        <timeline-item
          :title="condition.dateRecorded | formatDate"
        >
          <p>{{condition.code.text}}</p>      
        </timeline-item>
        
        <header v-if="key==sortedConditions.length - 1" class="timeline-header">
          <span class="tag is-medium is-primary">First record</span>
        </header>

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
      // slice: return a shallow copy before sorting, sort is in-place algorithm
      return this.conditions.slice().sort((a, b) => {
        var dateA = new Date(a.dateRecorded);
        var dateB = new Date(b.dateRecorded);
        return dateB - dateA;
      });
    }
  },
  filters: {
    getYear(date) {
      return moment(date).format('YYYY');
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    }
  },
  methods: {
    yearChange(key) {
      if (key === 0 || key === this.conditions.length - 1) {
        return false;
      }
      const dateA = new Date(this.sortedConditions[key].dateRecorded);
      const dateB = new Date(this.sortedConditions[key - 1].dateRecorded);
      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return true;
      }
      return false;
    }
  },
  components: {
    TimelineItem
  }
};
</script>
