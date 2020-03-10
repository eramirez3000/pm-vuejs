<template lang="pug">
#app
  img(src='https://eramirez3000.github.io/pm-vuejs/dist/logo.png')
  hr
  h1 pangolin-Music
  select(v-model="selectedCountry")
    option( v-for = "country in countries" :value="country.value") {{country.name}}
  spinner(v-show="loading")
  ul
    artist(v-for = "artist in artists" :artist="artist" :key="artist.mbid" )
  //  li(v-for="art in artists") {{art.name}}
</template>

<script>
import Spinner from "./components/Spinner.vue";
import Artist from "./components/Artist.vue";
import getArtists from "./api";

export default {
  components: {
    Artist,
    Spinner
  }, //Componentes externos

  name: "app",
  data() {
    return {
      //le pasaremos la lista de todos los artistas en la etiqueta li recorriendola con el v-for
      artists: [],
      countries: [
        { name: "Nicaragua", value: "Nicaragua" },
        { name: "Argentina", value: "Argentina" },
        { name: "Panama", value: "Panama" },
        { name: "España", value: "spain" }
      ], //Countries
      selectedCountry: "spain",
      loading: true
    }; //return data
  },

  methods: {
    refreshArtists() {
      const self = this;
      this.loading = true;
      //Cuando llamemos al getArtists pasarle el pais seleccionado
      getArtists(this.selectedCountry).then(function(artists) {
        self.loading = false;
        self.artists = artists;
      }); //getArtists
    }
  },
  //cuando se monte el componente  llmar a la funcion refreshArtists
  mounted() {
    this.refreshArtists();
  }, // mounted

  // es este es otro objeto que nos sirve para que chequee cuando cambie el selectedCountry
  //cuando cambie el pais llmar a la funcion refreshArtists
  watch: {
    selectedCountry() {
      this.refreshArtists();
    }
  }
}; //export default
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
  color: #004d66;
}
</style>
