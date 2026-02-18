<script lang="ts" setup>
//
</script>

<template>
  <section
    class="position-relative overflow-hidden"
    :style="{
      background: 'linear-gradient(160deg, #fff5f7 0%, #f9f4f0 40%, #fff 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '0',
    }"
  >
    <!-- Decorative blobs -->
    <div
      class="blob"
      :style="{
        width: '500px',
        height: '500px',
        background: '#D1003F',
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
        background: '#15803d',
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
              <div class="phone-screen">
                <img
                  src="@/assets/images/simulator_screenshot_5416FE7A-3962-427D-BFBE-52990B4F035A.png"
                  alt="Matsal App"
                  :style="{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>