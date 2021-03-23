<template>
  <div>
    <h1>Sign Up!</h1>
    <form>
      <input
        required
        class="input"
        placeholder="First Name"
        name="firstName"
        v-model="firstName"
        type="text" />
      <input
        required
        class="input"
        placeholder="Last Name"
        name="lastName"
        v-model="lastName"
        type="text" />
      <input
        required
        class="input"
        placeholder="Email"
        name="email"
        v-model="email"
        type="email" />
      <button
        type="submit"
        :disabled="!firstName.length || !lastName.length || !email.length"
        @click="submit">
      Submit</button>
    </form>
  </div>
</template>

<script>
import createPerson from "../api/createPerson"

export default {
  name: 'Registration',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  methods: {
    submit() {
      // alert(`First Name: ${this.$data.firstName} Last Name: ${this.$data.lastName} Email: ${this.$data.email}`)
      createPerson.createPerson(this.$data.firstName, this.$data.lastName, this.$data.email)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  padding: 10px;
  margin: 10px;
}
button {
  padding: 10px;
  background-color: orange
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
