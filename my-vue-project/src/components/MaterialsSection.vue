<template>
<section class="materials" id="materials" aria-label="materials-title">
            <div class="materials__main">
                <h2 class="materials__title h1" id="materials-title">{{ materialsTitle }}</h2>
            </div>
</section>
</template>

<script setup>
const materialsTitle = 'Полезные материалы'

</script>

<style scoped lang="scss">
.materials {
    &__main {
        margin-top: fluid(100, 50);
    }
}
</style>