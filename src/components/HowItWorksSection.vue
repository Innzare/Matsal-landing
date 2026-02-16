<script lang="ts" setup>
const steps = [
  {
    number: '01',
    icon: 'mdi-map-marker-outline',
    title: 'Укажите адрес',
    description: 'Введите адрес доставки или выберите из сохранённых',
  },
  {
    number: '02',
    icon: 'mdi-food-outline',
    title: 'Выберите блюда',
    description: 'Просматривайте меню ресторанов и добавляйте блюда в корзину',
  },
  {
    number: '03',
    icon: 'mdi-credit-card-outline',
    title: 'Оплатите заказ',
    description: 'Оплатите удобным способом — картой, наличными или через СБП',
  },
  {
    number: '04',
    icon: 'mdi-truck-delivery-outline',
    title: 'Получите доставку',
    description: 'Отслеживайте курьера на карте и получите заказ у двери',
  },
]
</script>

<template>
  <section
    id="how-it-works"
    class="section-padding position-relative"
    :style="{ backgroundColor: '#f9f4f0' }"
  >
    <v-container>
      <div class="text-center mb-12">
        <v-chip
          color="primary"
          variant="tonal"
          size="small"
          class="mb-4 font-weight-medium"
        >
          Как это работает
        </v-chip>
        <h2
          :style="{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '800',
            color: '#1c1917',
            lineHeight: '1.2',
          }"
        >
          Заказ за 4 простых шага
        </h2>
      </div>

      <v-row>
        <v-col
          v-for="(step, index) in steps"
          :key="step.number"
          cols="12"
          sm="6"
          md="3"
        >
          <div class="text-center">
            <!-- Number circle -->
            <div class="d-flex justify-center mb-6 position-relative">
              <div
                :style="{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 30px rgba(234, 0, 75, 0.08)',
                  position: 'relative',
                  zIndex: 1,
                }"
              >
                <v-icon :icon="step.icon" color="primary" size="32" />
              </div>
              <!-- Connector line -->
              <div
                v-if="index < steps.length - 1"
                class="d-none d-md-block"
                :style="{
                  position: 'absolute',
                  top: '50%',
                  left: 'calc(50% + 50px)',
                  width: 'calc(100% - 60px)',
                  height: '2px',
                  background: 'linear-gradient(90deg, #EA004B33, #EA004B11)',
                  transform: 'translateY(-50%)',
                }"
              />
            </div>

            <div
              class="text-overline font-weight-black mb-2"
              :style="{ color: '#EA004B', letterSpacing: '0.05em' }"
            >
              Шаг {{ step.number }}
            </div>
            <h3 class="text-h6 font-weight-bold mb-2" :style="{ color: '#1c1917' }">
              {{ step.title }}
            </h3>
            <p class="text-body-2" :style="{ color: '#78716c', lineHeight: '1.7' }">
              {{ step.description }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>