<template lang="pug">
  .container-fluid.col-lg-12
    .card.rounded.text-center
      .card-header
        | Portfolio - Movies and Television
      .card-body
        .row
          .col-lg-12(v-if="!films.length")
            .card
              .card-header
                | Loading
          .col-md-4(v-for="film in films")
            .card
              .card-header(v-if="film.Photos && film.Photos.length > 0")
                appGallery(:images="film.Photos", :cover="baseThumbnailUrl + film.Image")
              .card-header(v-else)
                img.card-img-top(:src="baseThumbnailUrl + film.Image")
              .card-body
                h5.card-title.text-center
                  | {{film.Year}}
                  br
                  | {{film.Name}}
                p.card-text.text-center
                  | ({{film.Field}})
                  br
                  | ({{film.Description}})
</template>

<style scoped>
  .card {
    margin-bottom: 10px;
  }
</style>


<script>
import Gallery from '~/components/Gallery.vue'
import axios from 'axios';
export default {
  data() {
    return {
      films: [],
      baseThumbnailUrl: "/img/film/thumbnail/"
    }
  },
  created() {

    axios.defaults.baseURL = 'http://whosjimmy.com/app.php';
    // axios.defaults.headers.get['Accepts'] =  'application/json';

    const reqInterceptor = axios.interceptors.request.use(config => {
      console.log('Request Interceptor', config);
      return config;
    });

    const resInterceptor = axios.interceptors.response.use(res => {
      console.log('Response Interceptor', res);
      return res;
    });

    axios.interceptors.request.eject(reqInterceptor);
    axios.interceptors.response.eject(resInterceptor);
    axios.get('')
      .then(res => {
        // console.log(res)
        const data = res.data;
        const resultArray = [];
        for (let key in data) {
            resultArray.push(data[key]);
        }
        this.films = resultArray;
        // console.log("films",this.films.Photos)
      })
      .catch(error => console.log(error));
      // .finally(
      //   this.films.forEach(element => {
          
      //   });
      // );

    const customActions = {
      getData: {method: 'GET'}
    };
  },
  components: {
    appGallery: Gallery
  },
//   computed: {
//     withPoster(evn, film){
//       // newPhotos = Photos;
// // /img/film/rise_of_the_planet_of_the_apes.jpg
//       film.Photos.unshift("/img/film/" + film.Poster) 
//       console.log("newPhotos", film)

//       return(film.Photos)
//     }
//   },
}
</script>
