<template>
	<q-scroll-area class="fit" style="height: 100vh; width: 100%">
		<q-card flat class="transparent">
			<q-card-section>
				<userProfile v-if="userLoggued.email" />
				<loguinSesion v-else />
			</q-card-section>
			<q-separator inset dark/>
			<q-card-section>
				<q-item>
					<q-item-section>
						<q-item-label class="text-h6">Menú</q-item-label>
					</q-item-section>
				</q-item>
			</q-card-section>
		</q-card>
	</q-scroll-area>
</template>

<script setup>
	import userProfile from "../../pages/user/userProfile.vue";
	import loguinSesion from "../../pages/sesion/loguinSesion.vue";
	import { userLogguedStore } from "src/stores/userLogguedStore";
	const userLoggued = userLogguedStore();
</script>
