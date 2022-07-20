<template>
    <div class="card__preview">
        <i class="card__preview-lock" v-if="lock"><img src="@/assets/images/icons/lock.svg" alt=""></i>
        <img class="card__preview-img" :src="imageSrc(imgName)" alt="">
        <WidgetMini class="card__preview-status" :iconName="iconName" :transparency="true" :disabled="true" />
        <div class="card__preview-options">
        </div>
    </div>
</template>

<script>
import WidgetMini from '@/components/WidgetMini.vue'

export default {
    name: "CardPreview",
    props: {
        lock: {
            type: Boolean
        },
        imgName: {
            type: String
        },
        iconName: {
            type: String
        }
    },
    components: {WidgetMini},
    methods: {
        imageSrc(imgName) {
            return(new URL(`../../assets/images/${imgName}`, import.meta.url).href)
        }
    }
}
</script>

<style lang="sass" scoped>
.card__preview
    max-height: unit(118)
    overflow: hidden
    border-radius: unit(18) unit(18) 0 0
    position: relative
    &-img
        width: 100%
        height: 100%
    &-lock
        position: absolute
        width: 100%
        height: 100%
        display: flex
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))
        align-items: center
        justify-content: center
        img
            display: block 
            height: unit(40)
    &-status
        position: absolute
        top: unit(8)
        right: unit(9)
    &-options
        position: absolute
        z-index: 1
        bottom: 0
        left: 0
        width: 100%
        height: auto
        display: flex
        align-items: center
        justify-content: space-between
        padding: 0 unit(14) unit(9)
    &-option
        &+&
            margin-left: unit(4)

</style>