<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <TitleH1 class="catalog__title" />
        <div class="catalog__selects">
          <Select class="catalog__selects-item" />
          <Select class="catalog__selects-item" />
          <Select class="catalog__selects-item" />
        </div>
        <Search />
      </div>
    </div>
    <button class="close-btn">
      <img src="@/assets/images/icons/close.svg" alt="">
    </button>
  </div>
</template>

<script>
import Select from '@/components/Select/index'
import TitleH1 from '@/components/TitleH1'
import Search from '../components/Search.vue'

export default {
  name: 'CatalogView',
  components: {
    Select,
    TitleH1,
    Search
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
