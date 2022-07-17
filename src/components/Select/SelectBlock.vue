<template>
    <div class="select">
        <div class="select__top" v-on:click="isSelectOpen = !isSelectOpen">
            <span>НАЗВАНИЕ</span>
            <img src="@/assets/images/icons/arrow-bottom.svg" alt="">
        </div>
        <div class="select__container" v-if="isSelectOpen">
            <div class="select__container-list">
                <SelectItem />
                <SelectItem />
            </div>
        </div>
    </div>
</template>
<script>
import SelectItem from './SelectItem.vue'


export default {
    name: 'SelectBlock',
    components: {
        SelectItem,
    },
    data() {
        return {
            isSelectOpen: false
        }
    }
}
</script>
<style lang="sass">
.select
    position: relative
    z-index: 3
    &__top
        font-size: unit(12)
        color: #8285B4
        cursor: pointer
        font-weight: 400
        display: flex
        align-items: center
        span
            margin-right: unit(4)
        img
            width: unit(10)
            height: unit(10)
    &__container
        position: absolute
        background: #191B41
        box-shadow: 0 unit(32) unit(32) rgba(0, 0, 0, 0.12)
        border-radius: unit(12)
        padding: unit(18)
        width: unit(200)
        &-item
            display: flex
            font-size: unit(14)
            align-items: center
            &+&
                margin-top: unit(20)
            input
                width: 0
                opacity: 0
                appearance: none
        &-checkbox
            margin-left: unit(12)
</style>
