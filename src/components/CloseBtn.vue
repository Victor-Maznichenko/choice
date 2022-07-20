<template>
    <button class="close-btn">
        <CloseIcon class="close-btn__icon" />
    </button>
</template>

<script>
import CloseIcon from '@/assets/images/icons/close.svg';

export default {
    components: {
        CloseIcon
    },
};
</script>

<style lang="sass">
.close-btn
    position: absolute
    top: unit(18)
    right: unit(18)
    font-size: 0
    border: none
    padding: unit(8) unit(7)
    outline: none
    &::before
        content: ''
        z-index: -1
        position: absolute
        background-color: rgba(18, 20, 52, 0.98)
        border: unit(1) solid #26294C
        border-radius: unit(6)
        transform: skewX(-8deg)
        width: 100%
        height: 100%
        top: 0
        left: 0

    &__icon
        display: block
        width: unit(12)
        height: unit(12)
</style>