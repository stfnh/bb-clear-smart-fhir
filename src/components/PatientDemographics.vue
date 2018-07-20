<template>
  <div class="container">
    <h1 class="title">{{fullname}}</h1>
    <h2 class="subtitle"><strong>{{firstname}}</strong> is a <strong>{{age}}</strong> year old <strong>{{patient.gender}}</strong>.</h2>
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
        <strong>{{phone.value}}</strong>
      </div>
      <div v-if="email" class="column">
        email<br />
        <strong>{{email.value}}</strong>
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
      return (
        this.patient.telecom &&
        this.patient.telecom.find(t => t.system === 'phone')
      );
    },
    email() {
      return (
        this.patient.telecom &&
        this.patient.telecom.find(t => t.system === 'email')
      );
    }
  }
};
</script>

<style>
</style>
