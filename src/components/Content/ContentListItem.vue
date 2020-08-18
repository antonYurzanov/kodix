<template lang="pug">
  .car
    .car-cell.cell-1 {{ car.title }}
      .car-description {{ car.description }}
    .car-cell.cell-7(
      v-if="car.description"
    ) {{ car.description }}
    .car-cell.cell-2 {{ car.year }}
    .car-cell.cell-3
      .car-color(
        :style="'background: ' + car.color"
      )
    .car-cell.cell-4 {{ status }}
    .car-cell.cell-5 {{ car.price | priceFormat }}
    .car-cell.cell-6
      button.delete(
        @click="deleteItem"
      ) Удалить
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    car: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    status () {
      switch (this.car.status) {
        case 'pednding':
          return 'Ожидается'

        case 'in_stock':
          return 'В наличии'

        default:
          return 'Нет в наличии'
      }
    }
  },
  filters: {
    priceFormat: function (value) {
      if (!value) return ''
      const price = Math.round(value).toString()
      return price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' руб.'
    }
  },
  methods: {
    deleteItem () {
      this.$store.commit('deleteCar', this.index)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.car {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid #e6e9ea;

  &:last-child {
    border-bottom: none;
  }

  @include max(720) {
    flex-wrap: wrap;
    padding-top: rem(20px);
  }
}

.car-cell {
  padding: rem(15px);
  box-sizing: border-box;
  font-size: rem(15px);
  font-weight: 300;
  line-height: 1.2;
  @include max(720) {
    padding: 0 rem(20px) rem(20px) rem(20px);
    font-size: rem(14px);
  }
}

.cell-1 {
  width: 48%;
  @include max(720) {
    order: 1;
    width: 50%;
    padding-right: 0;
  }
}

.cell-2 {
  width: 6%;
  text-align: center;
  @include max(720) {
    order: 4;
    width: 18%;
    padding-right: 0;
    text-align: left;
    align-self: center;
  }
}

.cell-3 {
  width: 6%;
  text-align: center;
  @include max(720) {
    order: 2;
    width: 10%;
    padding-left: 0;
    padding-right: 0;
    align-self: center;
  }
}

.cell-4 {
  width: 14%;
  @include max(720) {
    order: 6;
    width: 34%;
    padding-right: 0;
    padding-left: rem(10px);
    align-self: center;
  }
}

.cell-5 {
  width: 14%;
  @include max(720) {
    order: 3;
    width: 40%;
    padding-left: 0;
    align-self: center;
    text-align: right;
  }
}

.cell-6 {
  width: 12%;
  @include max(720) {
    order: 7;
    align-self: center;
    padding-right: rem(20px);
    padding-left: 0;
    display: flex;
    justify-content: flex-end;
    width: 48%;
  }
}

.cell-7 {
  display: none;
  width: 100%;
  font-size: rem(13px);
  color: #8b9497;
  @include max(720) {
    display: block;
    order: 4;
  }
}

.car-description {
  font-size: rem(13px);
  color: #8b9497;
  padding-top: rem(4px);
  @include max(720) {
    display: none;
  }
}

.car-color {
  width: rem(20px);
  height: rem(20px);
  border-radius: 50%;
  margin: 0 auto;
}

.delete {
  margin: -7px 0;
  font-family: inherit;
  padding: 0 rem(15px);
  line-height: 28px;
  background: none;
  color: #8b9497;
  border: none;
  border-radius: rem(14px);

  &:hover {
    background: #282d30;
    color: #ffffff;
  }

  @include max(720) {
    margin: 0;
    background: #282d30;
    color: #ffffff;
  }
}
</style>
