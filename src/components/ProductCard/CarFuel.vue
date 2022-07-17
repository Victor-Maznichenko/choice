<template>
    <div class="card__properties-fuel">
        <img src="@/assets/images/icons/thereIsNotFuel.svg" alt="" v-if="isSelectOpen == 0">
        <img src="@/assets/images/icons/thereIsFuel.svg" alt="" v-if="isSelectOpen > 0">
    </div>
</template>

<script>
export default {
    name: 'CarFuel',
    props: ['fuel']
}
</script>