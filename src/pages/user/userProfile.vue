<template>
	<q-item class="flex items-center full-width col-12">
		<q-item-section class="q-pa-md q-gutter-sm col-4" side top>
			<q-avatar class="q-mt-none q-ml-none avatar-border" size="64px">
				<img :src="userLoggued.picture" />
			</q-avatar>
		</q-item-section>
		<q-item-section class="col-10">
			<q-item-label class="text-bold q-pb-xs">
				{{ userLoggued.firstName }}  {{ userLoggued.lastName }}
			</q-item-label>
			<div class="q-pb-xs flex items-center">
				<q-icon size="xs" name="call"></q-icon>
				<q-item-label caption class="text-bold text-white q-pl-xs">
					{{ userLoggued.phone }}
				</q-item-label>
			</div>
			<div class="q-pb-xs flex items-center">
				<q-icon size="xs" name="mail_outline"></q-icon>
				<q-item-label caption class="text-bold text-white q-pl-xs">{{ userLoggued.email }}</q-item-label>
			</div>
		</q-item-section>
		
	</q-item>
</template>
<script setup>
	import { userLogguedStore } from "src/stores/userLogguedStore";
	const userLoggued = userLogguedStore();
</script>
