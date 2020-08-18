<template lang="pug">
  form.form(
    @submit.prevent="addItem"
  )
    ul.form-items
      li.form-item.w100--mob
        input.form-input(
          type="text"
          size="30"
          name="title"
          v-model="title"
          placeholder="Название"
          :class="{ error: $v.title.$error }"
          @blur="$v.title.$touch()"
        )
      li.form-item
        input.form-input(
          type="text"
          size="30"
          name="year"
          v-model="year"
          placeholder="Год"
          :class="{ error: $v.year.$error }"
          @blur="$v.year.$touch()"
        )
      li.form-item
        input.form-input(
          type="text"
          size="30"
          name="price"
          v-model="price"
          :class="{ error: $v.price.$error }"
          @blur="$v.price.$touch()"
          placeholder="Цена"
        )
      li.form-item.w100
        input.form-input(
          type="text"
          size="30"
          name="description"
          v-model="description"
          placeholder="Описание"
        )
      li.form-item.w100--mob
        .form-title Цвет:
        ul.form-radios
          li.form-radio(
            v-for="item of colors"
          )
            input.radio-input(
              type="radio"
              name="color"
              :value="item"
              v-model="color"
              :id="item"
            )
            label.radio-label(
              :for="item"
              :style="'background: ' + item"
            ) {{ item }}
      li.form-item
        .form-select
          .select(
            @click="showSelect(true)"
            :class="{ isActive: select, error: $v.status.$error }"
            @blur="$v.status.$touch()"
          )
            input(
              type="hidden"
              name="status"
              v-model="status"
            )
            .select-title {{ selectedStatus }}
            img.select-arrow(
              src="@/assets/images/arrow-down.png"
              alt="V"
            )
          ul.select-items(
            v-show="select"
          )
            li.select-item(
              v-for="select of statuses"
              @click="setSelect(select)"
            ) {{ getStatus(select) }}
      li.form-item
        button.button(
          type="submit"
          title="Отправить"
          :disabled="$v.$invalid"
        )
          span Отправить
          img.button-icon(
            src="@/assets/images/arrow-right.png"
            alt=">"
          )
</template>

<script>
import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'TheForm',
  data () {
    return {
      color: null,
      status: '',
      title: '',
      year: '',
      price: '',
      description: '',
      colors: ['red', 'white', 'black', 'gray', 'blue'],
      statuses: ['pednding', 'in_stock', 'out_of_stock'],
      select: false
    }
  },
  validations: {
    color: {
      required
    },
    status: {
      required
    },
    title: {
      required
    },
    year: {
      required,
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(4)
    },
    price: {
      required,
      numeric
    }
  },
  computed: {
    selectedStatus () {
      switch (this.status) {
        case 'pednding':
          return 'Ожидается'

        case 'in_stock':
          return 'В наличии'

        case 'out_of_stock':
          return 'Нет в наличии'

        default:
          return 'Статус'
      }
    }
  },
  methods: {
    showSelect (status) {
      this.select = status
    },
    setSelect (select) {
      this.status = select
      this.showSelect(false)
    },
    getStatus (status) {
      switch (status) {
        case 'pednding':
          return 'Ожидается'

        case 'in_stock':
          return 'В наличии'

        default:
          return 'Нет в наличии'
      }
    },
    addItem () {
      const form = {
        id: `f${(+new Date()).toString(16)}`,
        title: this.title.trim(),
        description: this.description.trim(),
        color: this.color.trim(),
        price: this.price.trim(),
        year: this.year.trim(),
        status: this.status.trim()
      }
      this.$store.commit('addCar', form)
      this.title = this.description = this.color = this.price = this.year = this.status = ''
      this.$v.$reset()
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/functions.scss';

.form {
  @include max(720) {
    padding-left: rem(10px);
    padding-right: rem(10px);
  }
}

.form-items {
  padding: 0;
  margin: 0 0 rem(120px) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  @include max(720) {
    margin-bottom: rem(60px);
  }
}

.form-item {
  padding: 0;
  margin: 0 0 rem(30px) 0;
  width: 32%;
  @include max(720) {
    width: 48%;
  }

  &.w100 {
    width: 100%;
  }

  &.w100--mob {
    @include max(720) {
      width: 100%;
    }
  }
}

.form-input {
  width: 100%;
  border: 1px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
  box-sizing: border-box;
  font-family: inherit;
  font-size: rem(12px);
  color: #111111;
  padding: rem(12px) rem(8px);
  transition: all linear 0.2s;

  &::placeholder {
    color: #999999;
  }

  &.error {
    border-color: #c4092f;
  }

  &:focus {
    border-bottom: 2px solid #c4092f;
  }
}

.form-select {
  position: relative;

  &:hover {
    .select {
      border-bottom: 2px solid #000;
    }
  }
}

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  border: 1px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
  box-sizing: border-box;
  font-size: rem(12px);
  color: #111111;
  padding: rem(12px) rem(8px);
  transition: all linear 0.2s;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #000;
  }

  &.isActive {
    border-bottom: 2px solid #000;
  }

  &.error {
    border-color: #c4092f;
  }
}

.select-items {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  margin: 0;
  padding: 0;
  list-style: none;
  border: solid #dcdcdc;
  box-sizing: border-box;
  border-width: 0 1px 1px 1px;
}

.select-item {
  padding: rem(12px) rem(8px);
  margin: 0;
  font-size: rem(12px);
  cursor: pointer;
  color: #999999;
  transition: all linear 0.2s;

  &:hover {
    color: #111;
  }
}

.select-title {
}

.select-arrow {
  display: block;
}

.form-title {
  font-size: rem(12px);
  color: #999999;
  margin-bottom: rem(8px);
}

.form-radios {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.form-radio {
  padding: 0;
  margin: 0 rem(16px) 0 0;

  &:last-child {
    margin-right: 0;
  }
}

.radio-input {
  display: none;

  &:checked + label {
    position: relative;

    &::after {
      opacity: 1;
    }
  }
}

.radio-label {
  position: relative;
  display: block;
  width: rem(20px);
  height: rem(20px);
  text-indent: -9999px;
  border-radius: 50%;
  transition: all linear 0.2s;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

  &::after {
    position: absolute;
    top: -5px;
    left: -5px;
    opacity: 0;
    width: rem(20px);
    height: rem(20px);
    border-radius: 50%;
    border: rgba(196, 9, 47, 1) solid 5px;
    display: block;
    content: '';
    transition: all linear 0.2s;
  }
}

.button {
  width: 100%;
  height: rem(41px);
  border-radius: rem(4px);
  border: none;
  font-size: rem(16px);
  font-family: inherit;
  font-weight: bold;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #ffffff;
  background: #c4092f;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  }
}

.button-icon {
  display: block;
  margin-left: rem(8px);
}
</style>
