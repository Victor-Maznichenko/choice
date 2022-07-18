<template>
  <div class="catalog">
    <div class="catalog__inner">
      <div class="catalog__top">
        <TitleH1 class="catalog__title" />
        <SelectBlockList :dataSelects=dataSelects :openSelect="openSelect" :optionSelect="optionSelect" />
        <Search />
      </div>
      <div class="catalog__items">
        <ProductCardList :productCards=productCards />
      </div>
    </div>
    <CloseBtn />
  </div>
</template>

<script>
import SelectBlockList from '@/components/Select/SelectBlockList.vue'
import TitleH1 from '@/components/TitleH1'
import Search from '@/components/Search.vue'
import CloseBtn from '@/components/CloseBtn.vue'
import ProductCardList from '@/components/ProductCard/ProductCardList.vue'

export default {
  name: 'CatalogView',
  components: {
    SelectBlockList,
    TitleH1,
    Search,
    CloseBtn,
    ProductCardList
  },
  data() {
    return {
      dataSelects: [
        {
          id: 0,
          options: ['Мой транспорт', 'Чужой транспорт', 'Весь транспорт'],
          selected: 'Мой транспорт',
          isSelectOpen: false
        },
        {
          id: 1,
          options: ['Любой класс', 'Машина', 'Самолет', 'Вертолет', 'Мотоцикл', 'Квадроцикл'],
          selected: 'Любой класс',
          isSelectOpen: false
        },
        {
          id: 2,
          options: ['Сначала дороже', 'Сначала дешевле', 'По популярности'],
          selected: 'Сначала дороже',
          isSelectOpen: false
        }
      ],
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
          btnInfo: {
            title: 'Забрать',
            icon: ''
          },
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
          btnInfo: {
            title: 'Арендовать',
            icon: '',
            styleWhite: true
          },
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
          btnInfo: {
            title: 'Поставить',
            icon: '',
            styleOutline: true
          },
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
          btnInfo: {
            title: 'Забрать',
            icon: ''
          },
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
          btnInfo: {
            title: 'Поставить',
            icon: ''
          },
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
          btnInfo: {
            title: 'Заправить',
            icon: 'fuel-btn.svg',
            styleYellow: true
          },
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
          btnInfo: {
            title: 'Забрать',
            icon: '',
            styleWhite: true
          },
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
          btnInfo: {
            title: 'Арендовать',
            icon: '',
            styleOutline: true
          },
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
          btnInfo: {
            title: 'Поставить',
            icon: ''
          },
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
          btnInfo: {
            title: 'Забрать',
            icon: '',
            styleWhite: true
          },
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
          btnInfo: {
            title: 'Заправить',
            icon: 'fuel-btn.svg',
            styleYellow: true
          },
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
          btnInfo: {
            title: 'Поставить',
            icon: '',
            styleOutline: true
          },
          lock: false
        }
      ]
    }
  },
  methods: {
    openSelect(id) {
      this.dataSelects.forEach(element => {
        if (element.id != id) {
          element.isSelectOpen = false
        }
      });
      this.dataSelects[id].isSelectOpen = !this.dataSelects[id].isSelectOpen
    },
    optionSelect(option, id) {
      this.dataSelects[id].selected = option
      this.dataSelects[id].isSelectOpen = false
    }
  }
}
</script>

<style lang="sass">

</style>
