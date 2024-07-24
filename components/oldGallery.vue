<template lang="pug">
  .card.rounded.text-center
    transition(name="fade" mode="out-in")
      .card-header(
          :key="image")
        img(:src="image"
          @click="nextImage"
          width="100%")
        | {{index + 1}} of {{images.length}}
    .card-body(v-if="info[0]")
      h5.card-title.text-center
        | {{info[0]}}
      p.card-text.text-center(v-if="info[1]")
        | ({{info[1]}})
        br
        | {{info[2]}}
</template>
<script>
export default {
	props: {
		images: {
			type: Array,
			default() {
				return []
			},
		},
		info: {
			type: Array,
			default() {
				return []
			},
		},
		poster: {
			type: String,
			default() {
				return null
			},
		},
	},
	data() {
		return {
			index: 0,
			image: '../../' + this.images[0],
		}
	},
	created() {
		if (this.poster) {
			this.images.unshift('/img/film/' + this.poster)
			this.image = '../../img/film/' + this.poster
		}
	},
	methods: {
		nextImage() {
			if (this.images.length - 1 > this.index) {
				this.index++
			} else {
				this.index = 0
			}
			this.image = '../../' + this.images[this.index]
		},
	},
}
</script>

<style scoped>
.fade-enter {
	opacity: 0;
}
.fade-enter-active {
	transition: opacity 0.5s;
}
.fade-leave {
	opacity: 1;
}
.fade-leave-active {
	transition: opacity 0.5s;
	opacity: 0;
}

.card {
	margin-top: 10px;
}
</style>
