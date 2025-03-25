<template>
    <q-header elevated>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
            <q-toolbar-title> Iglesia Bautista Reformada del Vedado </q-toolbar-title>
            
                
            <q-btn flat round icon="more_vert" @click="toggleRightDrawer" />
        </q-toolbar>
    </q-header>
</template>

<script setup>

defineProps({
    leftDrawerOpen: Boolean,
    rightDrawerOpen: Boolean,
});


const emit = defineEmits(["toggle-left-drawer", "toggle-right-drawer"]);

function toggleLeftDrawer() {
    emit("toggle-left-drawer");
}

function toggleRightDrawer() {
    emit("toggle-right-drawer");
}
</script>
