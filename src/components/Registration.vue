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
    {{people}}
  </div>
</template>

<script>
import { createPerson, listPersons } from "../api/createPerson"

export default {
  name: 'Registration',
   async created() {
    this.getPeople();
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      people: []
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      const { firstName, lastName, email } = this;
      const input = { firstName, lastName, email }
      const person = await createPerson(input)
      console.log(person)
    },
    async getPeople() {
      const people = await listPersons()

      this.people = people.data.listPersons.items;
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
