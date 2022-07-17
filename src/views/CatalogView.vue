<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <TitleH1 class="catalog__title" />
        <div class="catalog__selects">
          <SelectBlock class="catalog__selects-item" />
          <SelectBlock class="catalog__selects-item" />
          <SelectBlock class="catalog__selects-item" />
        </div>
        <Search />
      </div>
      <div class="catalog__items">
        <div class="catalog__item cart">
          <div class="cart__preview">
            <img class="cart__preview-img"
              src="https://w7.pngwing.com/pngs/536/1009/png-transparent-sports-car-sports-car-lamborghini-car.png"
              alt="">
            <span class="cart__preview-status"></span>
          </div>

          <h4 class="cart__title">Bravado</h4>
          <p class="cart__model">Buffalo XS Series</p>
          <div class="cart__properties">
            <div class="cart__properties-number"></div>
            <div class="cart__properties-color"></div>
            <div class="cart__properties-fuel"></div>
          </div>
        </div>
      </div>
    </div>
    <CloseBtn />
  </div>
</template>

<script>
import SelectBlock from '@/components/Select/SelectBlock.vue'
import TitleH1 from '@/components/TitleH1'
import Search from '../components/Search.vue'
import CloseBtn from '../components/CloseBtn.vue'

export default {
  name: 'CatalogView',
  components: {
    SelectBlock,
    TitleH1,
    Search,
    CloseBtn
  }
}
</script>

<style lang="sass">
.catalog
  position: relative
  z-index: 1
  color: white
  border-radius: unit(24)
  max-width: unit(790)
  width: 100%
  height: unit(640)
  &::before
    content: ''
    position: absolute
    z-index: -1
    width: 100%
    height: 100%
    left: 0
    top: 0
    backdrop-filter: blur(unit(24))
    background-color: rgba(18, 20, 52, 0.98)
    border-radius: unit(24)
  &__inner
      padding: unit(25) unit(17) unit(37)
  &__title
    text-align: center
    margin-bottom: unit(19)
  &__selects
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: unit(18)
    &-item+&-item
      margin-left: unit(25)
</style>
