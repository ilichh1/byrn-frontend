<template>
  <div
    @click="$emit('input', !value)"
    class="switch-container d-inline-block"
    :class="{ 'active': value }">
  </div>
</template>

<style lang="scss">
$size: 2rem;
$padding: 4px;
.switch-container {
  border: 1px solid black;
  position: relative;
  height: $size;
  width: $size * 2;
  border-radius: $size;
  transition: background-color 350ms ease-in-out;
  background-color: #e9f8df;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    height: calc(#{$size} - (#{$padding} * 2));
    width: calc(#{$size} - (#{$padding} * 2));
    background-color: white;
    border-radius: $size;
    top: $padding - 1;
    left: $padding - 1;
    border: .1px solid black;
    transition: left 250ms ease-in-out;
  }

  &.active {
    background-color: #289976;
    &::before {
      left: calc(#{$size} + #{$padding - 1});
    }
  }
}
</style>

<script>
export default {
  name: 'bryn-switch-component',
  props: {
    value: {
      default: () => true,
      type: Boolean
    }
  }
}
</script>
