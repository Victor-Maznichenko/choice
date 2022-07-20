<template>
    <div class="fuel">
        <ThereIsNotFuel class="fuel__img" v-if="fuel == 0" />
        <ThereIsHalfFuel class="fuel__img" v-if="650 > fuel && fuel > 0" />
        <ThereIsFuel class="fuel__img" v-if="fuel > 650" />
        <span class="fuel__count"><b>{{fuel}}</b>/999</span>
    </div>
</template>

<script>
import ThereIsNotFuel from '@/assets/images/icons/thereIsNotFuel.svg?component'
import ThereIsHalfFuel from '@/assets/images/icons/thereIsHalfFuel.svg?component'
import ThereIsFuel from '@/assets/images/icons/thereIsFuel.svg?component'


export default {
    name: 'CardFuel',
    components: {ThereIsNotFuel, ThereIsHalfFuel, ThereIsFuel},
    props: {
        fuel: {
            type: Number
        }
    }
}
</script>

<style lang="sass">
.fuel
    display: flex
    align-items: center
    &__img
        display: block
        width: unit(14)
        height: unit(14)
        margin-right: unit(6)
    &__count
        line-height: 100%
        font-size: unit(11)
        color: #8285B4
        b
            font-size: unit(12)
            font-weight: 500
            color: #FFFFFF
            
</style>