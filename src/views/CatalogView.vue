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
        <ProductCard class="catalog__item" />
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
import ProductCard from '@/components/ProductCard/ProductCard.vue'

export default {
  name: 'CatalogView',
  components: {
    SelectBlock,
    TitleH1,
    Search,
    CloseBtn,
    ProductCard
  },
  data() {
    return {
      productCarts: [
        {
          preview: {
            type: 'passenger',
            ImgUrl: '@/assets/images/productCart-1.png'
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          textBtn: 'Забрать',
          lock: false
        },
        {
          preview: {
            type: 'airplane',
            ImgUrl: '@/assets/images/productCart-2.png'
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          textBtn: 'Арендовать',
          lock: false
        },
        {
          preview: {
            type: 'passenger',
            ImgUrl: '@/assets/images/productCart-3.png'
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          textBtn: 'Поставить',
          lock: false
        },
        {
          preview: {
            type: 'passenger',
            ImgUrl: '@/assets/images/productCart-4.png'
          },
          info: {
            brand: 'Bravado',
            model: 'Buffalo XS Series',
            fuel: 832,
            number: '55DOC720',
            colors: ['#FF2F2F', '#2B2D49'],
          },
          textBtn: 'Забрать',
          lock: false
        },
        {
          preview: {
            type: 'airplane',
            ImgUrl: '@/assets/images/productCart-5.png'
          },
          info: {
            brand: 'Western',
            model: 'Cargobob 2000',
            fuel: 0,
            number: '55DOC720',
            colors: ['#FFCA0D', '#2B2D49'],
          },
          textBtn: 'Заправить',
          lock: false
        },
        {
          preview: {
            type: 'passenger',
            ImgUrl: '@/assets/images/productCart-6.png'
          },
          info: {
            brand: 'Nagasaki',
            model: 'Buzzard Attack Chopper',
            fuel: 279,
            number: '55DOC720',
            colors: ['#50FF33', '#2B2D49'],
          },
          textBtn: 'Поставить',
          lock: false
        }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
