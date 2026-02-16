<script lang="ts" setup>
const features = [
  {
    icon: 'mdi-silverware-fork-knife',
    title: 'Рестораны',
    description: 'Сотни ресторанов и кафе с разнообразной кухней на любой вкус',
    color: '#EA004B',
    bg: '#fef2f2',
  },
  {
    icon: 'mdi-basket-outline',
    title: 'Продукты',
    description: 'Свежие продукты из супермаркетов и фермерских магазинов',
    color: '#16a34a',
    bg: '#f0fdf4',
  },
  {
    icon: 'mdi-lightning-bolt-outline',
    title: 'Быстрая доставка',
    description: 'Среднее время доставки — 30 минут. Отслеживайте курьера в реальном времени',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: 'mdi-shield-check-outline',
    title: 'Безопасная оплата',
    description: 'Оплата картой, наличными или через СБП. Полная безопасность данных',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: 'mdi-map-marker-radius-outline',
    title: 'Отслеживание',
    description: 'Следите за заказом на карте в реальном времени от ресторана до вашей двери',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    icon: 'mdi-heart-outline',
    title: 'Избранное',
    description: 'Сохраняйте любимые рестораны и блюда для быстрого повторного заказа',
    color: '#ec4899',
    bg: '#fdf2f8',
  },
]
</script>

<template>
  <section id="features" class="section-padding" :style="{ backgroundColor: '#ffffff' }">
    <v-container>
      <div class="text-center mb-12">
        <v-chip
          color="primary"
          variant="tonal"
          size="small"
          class="mb-4 font-weight-medium"
        >
          Возможности
        </v-chip>
        <h2
          :style="{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '800',
            color: '#1c1917',
            lineHeight: '1.2',
          }"
        >
          Всё что нужно —<br class="d-none d-sm-block" />
          в одном приложении
        </h2>
        <p
          class="mt-4 mx-auto"
          :style="{
            fontSize: '1.05rem',
            color: '#78716c',
            maxWidth: '560px',
            lineHeight: '1.7',
          }"
        >
          От выбора ресторана до доставки к двери — мы позаботились о каждом шаге
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(feature, index) in features"
          :key="feature.title"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            :style="{
              border: '1px solid #f5f5f4',
              padding: '32px',
              height: '100%',
              transition: 'all 0.3s ease',
            }"
            class="hover-lift"
          >
            <div
              :style="{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: feature.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }"
            >
              <v-icon :icon="feature.icon" :color="feature.color" size="28" />
            </div>
            <h3
              class="text-h6 font-weight-bold mb-2"
              :style="{ color: '#1c1917' }"
            >
              {{ feature.title }}
            </h3>
            <p class="text-body-2" :style="{ color: '#78716c', lineHeight: '1.7' }">
              {{ feature.description }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>