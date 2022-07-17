<template>
    <label class="select__container-item">
        <span>Сначала дороже</span>
        <input type="checkbox">
        <CheckBox class="select__container-checkbox active"/>
    </label>
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'

export default {
  name: 'SelectItem',
  components: {
    CheckBox
  }
}
</script>
