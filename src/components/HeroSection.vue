<script lang="ts" setup>
//
</script>

<template>
  <section
    class="position-relative overflow-hidden"
    :style="{
      background: 'linear-gradient(160deg, #fff5f7 0%, #f9f4f0 40%, #fff 100%)',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
    }"
  >
    <!-- Decorative blobs -->
    <div
      class="blob"
      :style="{
        width: '500px',
        height: '500px',
        background: '#EA004B',
        top: '-100px',
        right: '-100px',
        opacity: '0.08',
      }"
    />
    <div
      class="blob"
      :style="{
        width: '400px',
        height: '400px',
        background: '#16a34a',
        bottom: '-50px',
        left: '-100px',
        opacity: '0.06',
      }"
    />

    <v-container class="py-16">
      <v-row align="center" class="flex-column-reverse flex-md-row">
        <!-- Text content -->
        <v-col cols="12" md="6" class="pr-md-12">
          <div class="animate-fade-in-up">
            <v-chip
              color="primary"
              variant="tonal"
              size="small"
              class="mb-6 font-weight-medium"
              prepend-icon="mdi-rocket-launch-outline"
            >
              Доставка еды и продуктов
            </v-chip>
          </div>

          <h1
            class="animate-fade-in-up delay-1"
            :style="{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              color: '#1c1917',
              letterSpacing: '-0.02em',
            }"
          >
            Вкусная еда и<br />
            свежие продукты —<br />
            <span class="text-gradient">у вашей двери</span>
          </h1>

          <p
            class="mt-6 animate-fade-in-up delay-2"
            :style="{
              fontSize: '1.15rem',
              color: '#78716c',
              lineHeight: '1.7',
              maxWidth: '480px',
            }"
          >
            Заказывайте любимые блюда из ресторанов и свежие продукты
            из магазинов с быстрой доставкой. Всё в одном приложении.
          </p>

          <div class="d-flex flex-wrap ga-3 mt-8 animate-fade-in-up delay-3">
            <v-btn
              color="primary"
              size="x-large"
              class="text-none font-weight-bold px-8"
              :style="{ fontSize: '16px' }"
              prepend-icon="mdi-download"
            >
              Скачать приложение
            </v-btn>
            <v-btn
              variant="outlined"
              size="x-large"
              class="text-none font-weight-medium px-6"
              :style="{ fontSize: '16px', borderColor: '#d6d3d1', color: '#57534e' }"
              prepend-icon="mdi-play-circle-outline"
              href="#how-it-works"
            >
              Как это работает
            </v-btn>
          </div>

          <!-- Stats -->
          <div class="d-flex flex-wrap ga-8 mt-12 animate-fade-in-up delay-4">
            <div>
              <div class="text-h4 font-weight-black" :style="{ color: '#EA004B' }">500+</div>
              <div class="text-body-2 mt-1" :style="{ color: '#a8a29e' }">Ресторанов</div>
            </div>
            <div>
              <div class="text-h4 font-weight-black" :style="{ color: '#EA004B' }">50K+</div>
              <div class="text-body-2 mt-1" :style="{ color: '#a8a29e' }">Пользователей</div>
            </div>
            <div>
              <div class="text-h4 font-weight-black" :style="{ color: '#EA004B' }">30 мин</div>
              <div class="text-body-2 mt-1" :style="{ color: '#a8a29e' }">Среднее время доставки</div>
            </div>
          </div>
        </v-col>

        <!-- Phone mockup -->
        <v-col cols="12" md="6" class="d-flex justify-center mb-8 mb-md-0">
          <div class="animate-scale-in delay-2 position-relative">
            <!-- Floating elements around phone -->
            <div
              class="animate-float position-absolute d-none d-md-flex"
              :style="{
                top: '10%',
                left: '-60px',
                background: 'white',
                borderRadius: '16px',
                padding: '12px 16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                zIndex: 3,
                animationDelay: '0.5s',
              }"
            >
              <div class="d-flex align-center ga-2">
                <v-icon color="success" size="20">mdi-check-circle</v-icon>
                <span class="text-body-2 font-weight-medium">Заказ доставлен!</span>
              </div>
            </div>

            <div
              class="animate-float position-absolute d-none d-md-flex"
              :style="{
                bottom: '20%',
                right: '-50px',
                background: 'white',
                borderRadius: '16px',
                padding: '12px 16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                zIndex: 3,
                animationDelay: '1.5s',
              }"
            >
              <div class="d-flex align-center ga-2">
                <span :style="{ fontSize: '20px' }">&#127829;</span>
                <div>
                  <div class="text-body-2 font-weight-medium">Маргарита</div>
                  <div class="text-caption" :style="{ color: '#a8a29e' }">490 &#8381;</div>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="phone-mockup" :style="{ width: '280px' }">
              <div
                class="phone-screen d-flex flex-column"
                :style="{ background: '#f9f4f0' }"
              >
                <!-- Mock app screen -->
                <div :style="{ padding: '40px 16px 16px' }">
                  <div class="d-flex align-center justify-space-between mb-4">
                    <div>
                      <div class="text-caption" :style="{ color: '#a8a29e' }">Доставка по адресу</div>
                      <div class="text-body-2 font-weight-bold">Магаданская 14</div>
                    </div>
                    <v-avatar size="32" color="primary">
                      <v-icon size="16" color="white">mdi-account</v-icon>
                    </v-avatar>
                  </div>

                  <!-- Search -->
                  <div
                    :style="{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      marginBottom: '16px',
                      border: '1px solid #e7e5e4',
                    }"
                  >
                    <div class="d-flex align-center ga-2">
                      <v-icon size="18" color="#a8a29e">mdi-magnify</v-icon>
                      <span class="text-body-2" :style="{ color: '#a8a29e' }">Найти ресторан или блюдо</span>
                    </div>
                  </div>

                  <!-- Categories -->
                  <div class="d-flex ga-2 mb-4" :style="{ overflow: 'hidden' }">
                    <div
                      v-for="cat in ['🍕 Пицца', '🍔 Бургеры', '🌯 Шаурма']"
                      :key="cat"
                      :style="{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '8px 10px',
                        fontSize: '11px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        border: '1px solid #e7e5e4',
                      }"
                    >
                      {{ cat }}
                    </div>
                  </div>

                  <!-- Restaurant cards -->
                  <div
                    v-for="(r, i) in [
                      { name: 'Tbiliso', rating: '4.8', time: '25-35 мин', emoji: '🍲' },
                      { name: 'Burger King', rating: '4.5', time: '20-30 мин', emoji: '🍔' },
                    ]"
                    :key="i"
                    :style="{
                      background: 'white',
                      borderRadius: '14px',
                      padding: '12px',
                      marginBottom: '8px',
                      border: '1px solid #e7e5e4',
                    }"
                  >
                    <div class="d-flex ga-3">
                      <div
                        :style="{
                          width: '56px',
                          height: '56px',
                          borderRadius: '12px',
                          background: i === 0 ? '#fef2f2' : '#fff7ed',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          flexShrink: '0',
                        }"
                      >
                        {{ r.emoji }}
                      </div>
                      <div>
                        <div class="text-body-2 font-weight-bold">{{ r.name }}</div>
                        <div class="d-flex align-center ga-2 mt-1">
                          <div class="d-flex align-center ga-1">
                            <v-icon size="12" color="amber">mdi-star</v-icon>
                            <span class="text-caption font-weight-medium">{{ r.rating }}</span>
                          </div>
                          <span class="text-caption" :style="{ color: '#a8a29e' }">{{ r.time }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>