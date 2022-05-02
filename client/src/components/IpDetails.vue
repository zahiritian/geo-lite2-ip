<template>
  <div>
    <input type="text" v-model="ip" multiple /> <input @click="getDetails" type="button" value="Get IP Details">
    <hr>
    <p v-if="error">{{ error }}</p>

    <h2>IP Details</h2>
    <table>
      <tr>
        <th>Country Code</th>
        <th>Postal Code</th>
        <th>City Name</th>
        <th>Time Zone</th>
        <th>Accuracy Radius</th>
      </tr>
      <tr v-for="info in details" :key="info">
        <td>{{ info.country.isoCode }}</td>
        <td>{{ info.postal.code }}</td>
        <td>{{ info.city.names.en }}</td>
        <td>{{ info.location.timeZone }}</td>
        <td>Latitude: {{ info.location.latitude }}, Longitude: {{ info.location.longitude }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import IpServices from '../IpServices';

export default {
  name: 'IpDetails',
  
  data() {
    return {
      details: [],
      error: '',
      ip: '50.100.255.190'
    }
  },

  created() {
    //
  },

  methods: {
    getDetails() {
      try {
        IpServices.search(this.ip)
          .then(res => {
            console.log(res.data);
            this.details = res.data;
          });
      } catch (error) {
        this.error = error.message;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 80%;
  position: relative;
  margin: auto;
}

th, td {
  padding: 15px;
}
input[type=text] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=button], input[type=submit], input[type=reset] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
