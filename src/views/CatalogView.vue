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
        <ProductCard class="catalog__item" v-for="item in productCards" :key="item.id" :productCard="item" />
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
      productCards: [
        {
          id: 0,
          preview: {
            type: 'passenger',
            ImgName: "productCart-1.png"
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
          id: 1,
          preview: {
            type: 'airplane',
            ImgName: "productCart-2.png"
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
          id: 2,
          preview: {
            type: 'passenger',
            ImgName: "productCart-3.png"
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
          id: 3,
          preview: {
            type: 'passenger',
            ImgName: "productCart-4.png"
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
          id: 4,
          preview: {
            type: 'airplane',
            ImgName: "productCart-5.png"
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
          id: 5,
          preview: {
            type: 'passenger',
            ImgName: "productCart-6.png"
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
          id: 6,
          preview: {
            type: 'passenger',
            ImgName: "productCart-1.png"
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
          id: 7,
          preview: {
            type: 'airplane',
            ImgName: "productCart-2.png"
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
          id: 8,
          preview: {
            type: 'passenger',
            ImgName: "productCart-3.png"
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
          id: 9,
          preview: {
            type: 'passenger',
            ImgName: "productCart-4.png"
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
          id: 10,
          preview: {
            type: 'airplane',
            ImgName: "productCart-5.png"
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
          id: 11,
          preview: {
            type: 'passenger',
            ImgName: "productCart-6.png"
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
