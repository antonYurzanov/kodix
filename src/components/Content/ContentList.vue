<template lang="pug">
  .list
    .title Автомобили в наличии
    .cars
      .cars-title
        .cars-title-cell.cell-1 Название
        .cars-title-cell.cell-2 Год
        .cars-title-cell.cell-3 Цвет
        .cars-title-cell.cell-4 Статус
        .cars-title-cell.cell-5 Цена
        .cars-title-cell.cell-6
      .cars-list
        transition-group(
          name="fade"
          mode="out-in"
        )
          ListItem(
            v-for="(car, index) of cars"
            :car="car"
            :index="index"
            :key="car.id"
          )
</template>

<script>
import ListItem from '@/components/Content/ContentListItem'

export default {
  name: 'TheList',
  computed: {
    cars () {
      return this.$store.getters.allCars
    }
  },
  components: {
    ListItem
  },
  mounted () {
    this.$store.dispatch('loadCars')
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.title {
  margin-bottom: rem(28px);
  font-size: rem(20px);
  color: rgb(40, 45, 48);
  font-weight: bold;
  text-transform: uppercase;
  line-height: rem(18px);
  padding-left: rem(10px);
  border-left: 3px solid #8b9497;
  @include max(720) {
    margin-left: rem(10px);
  }
}

.cars {
  box-sizing: border-box;
  width: 100%;
  background: #f5f6f6;
  border-radius: 4px;
  padding-left: rem(1px);
}

.cars-title {
  background: #c4092f;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px 4px 0 0;
  height: rem(45px);
  @include max(720) {
    display: none;
  }
}

.cars-title-cell {
  color: #ffffff;
  padding: 0 rem(15px);
  box-sizing: border-box;
  font-size: rem(15px);
  line-height: 1.2;
}

.cell-1 {
  width: 48%;
}

.cell-2 {
  width: 6%;
  text-align: center;
}

.cell-3 {
  width: 6%;
  text-align: center;
}

.cell-4 {
  width: 14%;
}

.cell-5 {
  width: 14%;
}

.cell-6 {
  width: 12%;
}
</style>
