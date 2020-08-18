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
</template>

<script>
export default {
  name: 'TheList'
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
}

.cars {
  box-sizing: border-box;
  width: 100%;
  background: #f5f6f6;
  border-radius: 4px 4px 0 0;
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
}
.cars-title-cell {
  color: #ffffff;
  padding: 0 rem(15px);
  box-sizing: border-box;
    font-size: rem(15px);
    line-height: 1.2;
}
.cell-1 {
  width: 46%;
}
.cell-2 {
  width: 7%;
}
.cell-3 {
  width: 7%;
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
