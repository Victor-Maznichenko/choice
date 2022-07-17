<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="card">
        <div class="card__preview">
            <img class="card__preview-img"
                src="https://w7.pngwing.com/pngs/536/1009/png-transparent-sports-car-sports-car-lamborghini-car.png"
                alt="">
            <span class="card__preview-status"></span>
        </div>

        <div class="card__info">
            <h4 class="card__title">{{ productCard.info.brand }}</h4>
            <p class="card__model">{{ productCard.info.model }}</p>
            <div class="card__properties">
                <CarNumber :number="productCard.info.number" />
                <div class="card__properties-color"></div>
                <CarFuel :fuel="productCard.info.fuel"/>
            </div>
            <div class="card__btn-wrapper">
                <DefaultButton class="card__btn" />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton.vue'
import CarNumber from './CarNumber.vue'
import CarFuel from './CarFuel.vue'

export default {
    name: 'ProductCard',
    components: {
    DefaultButton,
    CarNumber,
    CarFuel
},
    props: ['productCard']
}
</script>

<style lang="sass">
.card
    max-width: unit(205)
    border-radius: unit(18)
    transition: all .3s
    background-color: #191B41
    position: relative
    &::before
        content: ''
        position: absolute
        transition: all .3s
        z-index: -1
        width: calc(100% + unit(8))
        height: calc(100% + unit(8))
        top: 50%
        left: 50%
        background: linear-gradient(138.15deg, #246BFD 24.85%, #454CF4 52.03%, #5956FF 77.6%)
        border-radius: unit(18)
        transform: translateX(-50%) translateY(-50%)
        opacity: 0
    &:hover
        &::before
            opacity: 1
    &__info
        position: relative
        z-index: 2
        padding: unit(12) unit(12) unit(16) unit(12)
    &__preview
        max-height: unit(118)
        overflow: hidden
        border-radius: unit(18) unit(18) 0 0
        &-img
            width: 100%
    &__title
        margin-bottom: unit(6)
        text-transform: uppercase
    &__model
        margin-bottom: unit(5)
    &__properties
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: unit(12)
    &__btn
        &-wrapper
            width: 100%
            text-align: center
</style>