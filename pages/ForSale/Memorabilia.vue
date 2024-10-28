<template lang="pug">
  .container-fluid
    .row.text-center
      .col-lg-12
        .card-header
          | For Sale - Movie Memorabilia
    .card-body
      .col-lg-12.text-center
        img(:src="memorabilia.image" style="width: 100%;" :info="[memorabilia.name, memorabilia.availability, memorabilia.notes]")
</template>

<script>
import Gallery from '~/components/Gallery.vue'
export default {
	components: {
		appGallery: Gallery,
	},
	data() {
		return {
			memorabilia: {
				name: 'Wolverine Claws - X-men',
				availability: 'coming soon',
				image: ['/film/x-men/IMG_0678.JPG'],
				notes: "Jimmy's personal set from x-men 1, check back often for more information.",
			},
		}
	},
}
</script>
