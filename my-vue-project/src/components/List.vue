<template>
    <ul class="list">
        <li v-for="(item, index) in items" :key="index" 
            class="list-item"
            @click="handleItemClick(item)"
            >
            <!-- Иконка (только если передан массив icons) -->
            <span v-if="icons && icons[index]" class="icon" v-html="icons[index]"></span>
            {{ item }} <!-- Выводим сам элемент (у нас массив строк) -->
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    },
    icons: {
        type: Array,
        default: () => []  // По умолчанию пустой массив
    }
});

const emit = defineEmits(['item-click']);

const handleItemClick = (item) => {
    emit('item-click', item);
};
</script>

<style scoped lang="scss">
.list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: rem(5);
    font-size: fluid(14, 12);
    
}

.list-item {
    display: flex;
    /* Добавим flex для выравнивания иконки и текста */
    align-items: center;
    gap: fluid(8, 5);
    /* Отступ между иконкой и текстом */
    padding: rem(8) rem(12);
    cursor: pointer;
    padding: 0;
    
    
}

.list-item:hover {
    color: #f5f5f5;
}

.icon {
    display: inline-flex;
}
</style>