<template lang="pug">
div
	.splash(v-if="getGeneral[0]?.cover" :style="{backgroundImage: 'url(' + getGeneral[0]?.cover + ')'}")
	.splash.splash2(v-else)
</template>

<script>
import { mapState } from 'pinia'
import { useGeneralStore } from '~/stores/general'
export default {
	data() {},
	computed: {
		...mapState(useGeneralStore, ['getGeneral']),
	},
	mounted() {},
}
</script>
<style scoped>
.splash {
	position: fixed;
	top: 20px;
	bottom: 100px;
	left: 0px;
	right: 0px;
	z-index: -1;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-color: #000;
}
.splash2 {
	background-image: url('~/assets/JIMMY_CLAWS.jpg');
}
</style>
