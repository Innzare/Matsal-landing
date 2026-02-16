<script lang="ts" setup>
//
</script>

<template>
  <section class="section-padding">
    <v-container>
      <div
        class="position-relative overflow-hidden"
        :style="{
          background: 'linear-gradient(135deg, #EA004B 0%, #b0003a 100%)',
          borderRadius: '32px',
          padding: 'clamp(40px, 8vw, 80px)',
        }"
      >
        <!-- Decorative elements -->
        <div
          :style="{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            top: '-80px',
            right: '-80px',
          }"
        />
        <div
          :style="{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            bottom: '-60px',
            left: '20%',
          }"
        />

        <div class="text-center position-relative">
          <h2
            class="text-white"
            :style="{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: '800',
              lineHeight: '1.2',
            }"
          >
            Скачайте приложение<br />
            и закажите прямо сейчас
          </h2>
          <p
            class="mt-4 mx-auto"
            :style="{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.1rem',
              maxWidth: '480px',
              lineHeight: '1.7',
            }"
          >
            Доступно на iOS и Android. Первый заказ — с бесплатной доставкой!
          </p>

          <div class="d-flex flex-wrap justify-center ga-3 mt-8">
            <v-btn
              size="x-large"
              class="text-none font-weight-bold px-8"
              :style="{
                background: 'white',
                color: '#EA004B',
              }"
              prepend-icon="mdi-apple"
            >
              App Store
            </v-btn>
            <v-btn
              size="x-large"
              variant="outlined"
              class="text-none font-weight-bold px-8"
              :style="{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
              }"
              prepend-icon="mdi-google-play"
            >
              Google Play
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>