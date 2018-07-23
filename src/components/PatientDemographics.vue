<template>
  <div class="container">
    <h1 class="title">{{fullname}}</h1>
    <h2 class="subtitle"><strong>{{firstname}}</strong> is a
      <span v-if="patient.birthDate"><strong> {{age}}</strong> year old</span> 
      <strong v-if="patient.maritalStatus"> {{patient.maritalStatus.text | lowerCase}}</strong> 
      <strong v-if="patient.gender"> {{patient.gender}}</strong>
      <span v-if="languages"> who speaks <strong>{{languages}}</strong></span>.
    </h2>

    <div class="columns">
      <div v-if="patient.birthDate" class="column">
        birthdate<br />
        <strong>{{patient.birthDate}}</strong>
      </div>
      <div v-if="homeAddress" class="column">
        address<br />
        <strong>{{homeAddress.line.join(' ')}}<br>
        {{homeAddress.city}}, {{homeAddress.state}} {{homeAddress.postalCode}}</strong>
      </div>
      <div v-if="phone" class="column">
        phone<br />
        <strong>{{phone}}</strong>
      </div>
      <div v-if="email" class="column">
        email<br />
        <strong>{{email}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    patient: {
      type: Object
    }
  },
  computed: {
    fullname() {
      return `${this.patient.name[0].given.join(' ')} ${
        this.patient.name[0].family
      }`;
    },
    firstname() {
      return this.patient.name[0].given[0];
    },
    age() {
      return moment().diff(this.patient.birthDate, 'years');
    },
    homeAddress() {
      return (
        this.patient.address && this.patient.address.find(a => a.use === 'home')
      );
    },
    phone() {
      if (this.patient.telecom) {
        return this.patient.telecom
          .filter(t => t.system === 'phone')
          .map(p => {
            if (p.use) {
              return `${p.use}: ${p.value}`;
            }
            return p.value;
          })
          .join(', ');
      } else {
        return null;
      }
    },
    email() {
      if (this.patient.telecom) {
        return this.patient.telecom
          .filter(t => t.system === 'email')
          .map(p => {
            if (p.use) {
              return `${p.use}: ${p.value}`;
            }
            return p.value;
          })
          .join(', ');
      } else {
        return null;
      }
    },
    languages() {
      if (this.patient.communication) {
        return this.patient.communication.map(c => c.language.text).join(', ');
      }
      return null;
    }
  },
  filters: {
    lowerCase(input) {
      return input.toLowerCase();
    }
  }
};
</script>

<style>
</style>
