<template>
	<div class="row">
		<div class="col-6">
			<Bio />
		</div>
		<div class="col-6">
			<div class="col-12">
				<input type="file" />
			</div>
			<div class="col-12" col>
				<textarea></textarea>
			</div>
			<div class="col-12">
				<button class="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia'
import { useGeneralStore } from '~/stores/general'
import Bio from '~/pages/Bio'

export default {
	components: { Bio },
	computed: {
		...mapState(useGeneralStore, ['general']),
	},
	watch: {
		general() {
			console.log('this.general', this.general)
		},
	},
	mounted() {
		console.log('this.general', this.general)
		console.log("this.general['bio']", this.general['bio'])
	},
}
</script>

<style></style>
