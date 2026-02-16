<script lang="ts" setup>
const perks = [
  { icon: 'mdi-clock-outline', text: 'Гибкий график — работайте когда удобно' },
  { icon: 'mdi-cash-multiple', text: 'Стабильный доход — ежедневные выплаты' },
  { icon: 'mdi-car-outline', text: 'Любой транспорт — авто, велосипед, пешком' },
  { icon: 'mdi-map-outline', text: 'Удобная навигация — встроенные карты' },
]
</script>

<template>
  <section
    class="section-padding position-relative overflow-hidden"
    :style="{ backgroundColor: '#f9f4f0' }"
  >
    <v-container>
      <v-row align="center" class="flex-column-reverse flex-md-row">
        <!-- Left: Illustration -->
        <v-col cols="12" md="5" class="d-flex justify-center">
          <div
            :style="{
              width: '100%',
              maxWidth: '380px',
              background: 'linear-gradient(135deg, #EA004B 0%, #b0003a 100%)',
              borderRadius: '32px',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden',
            }"
          >
            <!-- Decorative circles -->
            <div
              :style="{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                top: '-60px',
                right: '-60px',
              }"
            />
            <div
              :style="{
                position: 'absolute',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                bottom: '-40px',
                left: '-40px',
              }"
            />

            <div class="position-relative">
              <div class="text-center mb-6">
                <v-icon size="64" color="white" class="mb-4">mdi-motorbike</v-icon>
                <h3 class="text-h5 font-weight-bold text-white">Курьер Matsal</h3>
                <p class="text-body-2 mt-2" :style="{ color: 'rgba(255,255,255,0.7)' }">
                  Зарабатывайте с нами
                </p>
              </div>

              <!-- Earnings card -->
              <div
                :style="{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '20px',
                  padding: '20px',
                  backdropFilter: 'blur(10px)',
                }"
              >
                <div class="text-center">
                  <div class="text-body-2" :style="{ color: 'rgba(255,255,255,0.7)' }">
                    Средний заработок
                  </div>
                  <div class="text-h4 font-weight-black text-white mt-1">
                    67 500 &#8381;
                  </div>
                  <div class="text-body-2" :style="{ color: 'rgba(255,255,255,0.6)' }">
                    в месяц
                  </div>
                </div>

                <v-divider class="my-4" :style="{ borderColor: 'rgba(255,255,255,0.15)' }" />

                <div class="d-flex justify-space-between">
                  <div class="text-center">
                    <div class="text-h6 font-weight-bold text-white">156</div>
                    <div class="text-caption" :style="{ color: 'rgba(255,255,255,0.6)' }">доставок</div>
                  </div>
                  <div class="text-center">
                    <div class="text-h6 font-weight-bold text-white">4.8</div>
                    <div class="text-caption" :style="{ color: 'rgba(255,255,255,0.6)' }">рейтинг</div>
                  </div>
                  <div class="text-center">
                    <div class="text-h6 font-weight-bold text-white">432 &#8381;</div>
                    <div class="text-caption" :style="{ color: 'rgba(255,255,255,0.6)' }">за заказ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Right: Info -->
        <v-col cols="12" md="7" class="pl-md-12 mb-8 mb-md-0">
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
            class="mb-4 font-weight-medium"
          >
            Для курьеров
          </v-chip>
          <h2
            :style="{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#1c1917',
              lineHeight: '1.2',
            }"
          >
            Зарабатывайте<br />
            доставляя заказы
          </h2>
          <p
            class="mt-4 mb-8"
            :style="{
              fontSize: '1.05rem',
              color: '#78716c',
              lineHeight: '1.7',
              maxWidth: '480px',
            }"
          >
            Станьте курьером Matsal — гибкий график, стабильный доход
            и удобное приложение для работы.
          </p>

          <!-- Perks -->
          <div class="d-flex flex-column ga-4 mb-8">
            <div
              v-for="perk in perks"
              :key="perk.text"
              class="d-flex align-center ga-3"
            >
              <div
                :style="{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }"
              >
                <v-icon :icon="perk.icon" color="primary" size="20" />
              </div>
              <span
                class="text-body-1 font-weight-medium"
                :style="{ color: '#44403c' }"
              >
                {{ perk.text }}
              </span>
            </div>
          </div>

          <v-btn
            color="primary"
            size="large"
            class="text-none font-weight-bold px-8"
            to="/courier"
            prepend-icon="mdi-bike"
          >
            Стать курьером
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>