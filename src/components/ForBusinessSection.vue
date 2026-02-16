<script lang="ts" setup>
const benefits = [
  {
    icon: 'mdi-chart-line',
    title: 'Увеличьте продажи',
    description: 'Получайте заказы от тысяч пользователей приложения',
  },
  {
    icon: 'mdi-cellphone-check',
    title: 'Удобное управление',
    description: 'Управляйте заказами, меню и статистикой через мобильное приложение',
  },
  {
    icon: 'mdi-account-group-outline',
    title: 'Новые клиенты',
    description: 'Расширяйте аудиторию благодаря нашей платформе и маркетингу',
  },
  {
    icon: 'mdi-headset',
    title: 'Поддержка 24/7',
    description: 'Персональный менеджер и техподдержка для решения любых вопросов',
  },
]
</script>

<template>
  <section class="section-padding" :style="{ backgroundColor: '#ffffff' }">
    <v-container>
      <v-row align="center">
        <!-- Left: Info -->
        <v-col cols="12" md="6" class="pr-md-12">
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
            class="mb-4 font-weight-medium"
          >
            Для бизнеса
          </v-chip>
          <h2
            :style="{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#1c1917',
              lineHeight: '1.2',
            }"
          >
            Подключите ваш<br />
            ресторан или магазин
          </h2>
          <p
            class="mt-4"
            :style="{
              fontSize: '1.05rem',
              color: '#78716c',
              lineHeight: '1.7',
              maxWidth: '480px',
            }"
          >
            Присоединяйтесь к Matsal и получайте новых клиентов через наше приложение.
            Мы берём на себя доставку, а вы занимаетесь тем, что любите.
          </p>

          <v-btn
            color="primary"
            size="large"
            class="text-none font-weight-bold mt-8 px-8"
            to="/partner"
            prepend-icon="mdi-storefront-outline"
          >
            Оставить заявку
          </v-btn>
        </v-col>

        <!-- Right: Benefits grid -->
        <v-col cols="12" md="6">
          <v-row>
            <v-col
              v-for="benefit in benefits"
              :key="benefit.title"
              cols="12"
              sm="6"
            >
              <v-card
                :style="{
                  border: '1px solid #f5f5f4',
                  padding: '24px',
                  height: '100%',
                }"
                class="hover-lift"
              >
                <div
                  :style="{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }"
                >
                  <v-icon :icon="benefit.icon" color="primary" size="22" />
                </div>
                <h4
                  class="text-subtitle-1 font-weight-bold mb-1"
                  :style="{ color: '#1c1917' }"
                >
                  {{ benefit.title }}
                </h4>
                <p class="text-body-2" :style="{ color: '#78716c', lineHeight: '1.6' }">
                  {{ benefit.description }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>