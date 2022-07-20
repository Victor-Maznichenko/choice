<template>
    <div class="checkbox">
        <CheckBoxSuccsess class="checkbox__img" />
    </div>
</template>

<script>
import CheckBoxSuccsess from '@/assets/images/icons/success.svg?component'


export default {
    name: 'SelectBlock',
    components: {
        CheckBoxSuccsess
    }
}
</script>

<style lang="sass" scoped>
.checkbox
    display: flex
    align-items: center
    justify-content: center
    border: unit(1) solid #2F355D
    border-radius: 50%
    padding: unit(6) unit(5)
    transition: all .3s
    &__img
        display: block
        transition: all .3s
        opacity: 0
        pointer-events: none
        width: unit(10)
        height: unit(7)
    &._active
        background: rgb(36,107,253)
        background: -moz-linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        background: -webkit-linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        background: linear-gradient(101deg, rgba(36,107,253,1) 0%, rgba(69,76,244,1) 53%, rgba(89,86,255,1) 100%)
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#246bfd",endColorstr="#5956ff",GradientType=1)
        .checkbox__img
            opacity: 1
</style>