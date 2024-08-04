<template lang="pug">
.app
  div(v-on:click="toggleModal()")
    img(:src="cover", width="100%")
    | Click to view {{ images.length }} Images
  Modal(
    v-bind="{ closeCallback: toggleModal, show, customClass: 'custom_modal_class' }"
  )
    .imageGallery
      transition(name="fade", mode="out-in")
        img.galleryImage(
          :src="image",
          @click="nextImage"
        )
      .imageDescription
        | {{ index + 1 }} of {{ images.length }}
        h5(v-if="info[0]")
          | {{ info[0] }}
        p(v-if="info[1]")
          | ({{ info[1] }})
          br
          | {{ info[2] }}
</template>

<script>
import Modal from '~/components/Modal.vue'
export default {
	name: 'app',
	components: {
		Modal,
	},
	data() {
		return {
			show: false,
			index: 0,
			image: this.images[0],
		}
	},
	props: {
		name: {
			type: String,
			default() {
				return ''
			},
		},
		images: {
			type: Array,
			default() {
				return []
			},
		},
		cover: {
			type: String,
			default() {
				// return this.images[0]
				return []
			},
		},
		info: {
			type: Array,
			default() {
				return []
			},
		},
	},
	mounted() {},
	methods: {
		nextImage() {
			if (this.images.length - 1 > this.index) {
				this.index++
			} else {
				this.index = 0
			}
			this.image = this.images[this.index]
		},
		toggleModal() {
			if (this.show) {
				this.$gtm.push({
					event: 'gallery-closed',
					name: this.name,
				})
			} else {
				this.$gtm.push({
					event: 'gallery-opened',
					page_path: this.$route.path,
					name: this.name,
				})
			}
			this.show = !this.show
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

.imageGallery {
	max-height: 100vh;
	max-width: 100vw;
	width: 100vw;
	height: 100vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
.galleryImage {
	flex-shrink: 1;
	object-fit: contain;
	height: 60vh;
}
.imageDescription {
	height: 40vh;
	overflow: scroll;
}
</style>
