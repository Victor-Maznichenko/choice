<template>
    <div class="catalog__selects">
        <SelectBlock class="catalog__selects-item" v-for="select in dataSelects" :key="select.id" :dataSelect=select
            v-on:open_select="openSelect" />
    </div>
</template>



<script>
import SelectBlock from '@/components/Select/SelectBlock.vue'

export default {
    name: 'SelectBlockList',
    components: {
        SelectBlock
    },
    props: {
        dataSelects: {
            type: Object
        },
        openSelect: {
            type: Function
        }
    }
}
</script>