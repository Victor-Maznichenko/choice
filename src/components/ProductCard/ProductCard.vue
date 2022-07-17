<template>
    <div class="card">
        <div class="card__preview">
            <img class="card__preview-img"
                src="https://w7.pngwing.com/pngs/536/1009/png-transparent-sports-car-sports-car-lamborghini-car.png"
                alt="">
            <span class="card__preview-status"></span>
        </div>

        <h4 class="card__title">Bravado</h4>
        <p class="card__model">Buffalo XS Series</p>
        <div class="card__properties">
            <CarNumber />
            <div class="card__properties-color"></div>
            <div class="card__properties-fuel"></div>
        </div>
        <div class="card__btn-wrapper">
            <DefaultButton class="card__btn" />
        </div>
    </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton.vue'
import CarNumber from './CarNumber.vue'

export default {
    name: 'ProductCard',
    components: {
        DefaultButton,
        CarNumber
    },
    
}
</script>

<style lang="sass">
.card
    max-width: unit(205)
    border-radius: unit(18)
    transition: all .3s
    position: relative
    &::before
        content: ''
        position: absolute
        width: calc(100% + unit(8))
        height: calc(100% + unit(8))
    &:hover
        &::before
            
    &__preview
        margin-bottom: unit(12)
        max-height: unit(118)
        &-img
            border-radius: unit(18) unit(18) 0 0
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