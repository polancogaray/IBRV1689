<template>
	<q-layout view="hHh Lpr lff">
		<HeaderContent
			:leftDrawerOpen="leftDrawerOpen"
			:rightDrawerOpen="rightDrawerOpen"
			@toggle-left-drawer="toggleLeftDrawer"
			@toggle-right-drawer="toggleRightDrawer" />

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			elevated
			overlay
			:width="310"
			:breakpoint="700"
			class="bg-primary text-white">
			<LeftMenuDrawer />
		</q-drawer>

		<q-drawer
			side="right"
			v-model="rightDrawerOpen"
			show-if-above
			bordered
			overlay
			:width="310"
			:breakpoint="700"
			class="bg-primary text-white">
			<RightMenuDrawer />
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>

		<q-footer class="transparent">
			<FooterContent class="flex flex-center full-width" />
		</q-footer>
	</q-layout>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import FooterContent from "./contents/FooterContent.vue";
	import HeaderContent from "./contents/HeaderContent.vue";
	import LeftMenuDrawer from "./contents/LeftMenuDrawer.vue";
	import RightMenuDrawer from "./contents/RightMenuDrawer.vue";

	const leftDrawerOpen = ref(false);
	const rightDrawerOpen = ref(false);

	function toggleLeftDrawer() {
		leftDrawerOpen.value = !leftDrawerOpen.value;
	}

	function toggleRightDrawer() {
		rightDrawerOpen.value = !rightDrawerOpen.value;
	}
	// Usa onMounted para asegurarte de que los drawers estén cerrados al iniciar
	onMounted(() => {
		leftDrawerOpen.value = false;
		rightDrawerOpen.value = false;
	});
</script>
