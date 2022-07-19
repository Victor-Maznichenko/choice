<template>
    <div class="choose-color _double" :style="cssProps">
        <i></i>
        <i></i>
    </div>
</template>

<script>
export default {
    name: 'CarColour',
    props: {
        colors: {
            type: Object,
        }
    },
    computed: {
        cssProps() {
            return {
                '--color_one': this.colors[0],
                '--color_two': this.colors[1]
            }
        }
    }
}
</script>

<style lang="sass">
@function sqrt($r)
    $x0: 1
    $x1: $x0
    @for $i from 1 through 10 
        $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0)
        $x0: $x1


    @return $x1 + px

.choose-color
    width: 14px
    height: 14px
    border-radius: 2px
    position: relative
    overflow: hidden
    i
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%    
        border-radius: 2px
        background-color: var(--color_one)
    &._double
        i:last-child
            background-color: var(--color_two)
            width: calc(sqrt(3) * 14)
            left: 100%
            top: 35%
            transform: translateX(-60%) rotate(-45deg)
</style>