<script setup>

defineProps({
    error: String,
})


</script>

<template>
    <div class="alert alert-danger" role="alert">
        {{ error }}
    </div>
</template>
