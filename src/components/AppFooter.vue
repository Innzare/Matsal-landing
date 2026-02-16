<script lang="ts" setup>
const year = new Date().getFullYear()

const links = [
  { title: 'Для ресторанов', to: '/partner' },
  { title: 'Для курьеров', to: '/courier' },
]

const contacts = [
  { icon: 'mdi-email-outline', text: 'info@matsal.ru' },
  { icon: 'mdi-phone-outline', text: '+7 (800) 000-00-00' },
]
</script>

<template>
  <v-footer class="bg-gradient-dark pa-0">
    <v-container class="py-12">
      <v-row>
        <!-- Brand -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <div class="d-flex align-center mb-4">
            <img
              src="@/assets/images/logo.svg"
              alt="Matsal"
              :style="{ height: '32px', filter: 'brightness(10)' }"
            />
            <span class="text-h5 font-weight-bold ml-3 text-white">
              Matsal
            </span>
          </div>
          <p class="text-body-2" :style="{ color: '#a8a29e', maxWidth: '320px', lineHeight: '1.7' }">
            Сервис доставки еды из ресторанов и продуктов из магазинов. Быстро, удобно, надёжно.
          </p>
        </v-col>

        <!-- Links -->
        <v-col cols="6" md="3">
          <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Навигация</h4>
          <div class="d-flex flex-column ga-2">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-body-2 text-decoration-none"
              :style="{ color: '#a8a29e', transition: 'color 0.2s' }"
            >
              {{ link.title }}
            </router-link>
          </div>
        </v-col>

        <!-- Contacts -->
        <v-col cols="6" md="3">
          <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Контакты</h4>
          <div class="d-flex flex-column ga-3">
            <div
              v-for="contact in contacts"
              :key="contact.text"
              class="d-flex align-center ga-2"
            >
              <v-icon :icon="contact.icon" size="18" :style="{ color: '#a8a29e' }" />
              <span class="text-body-2" :style="{ color: '#a8a29e' }">
                {{ contact.text }}
              </span>
            </div>
          </div>
        </v-col>

        <!-- Download -->
        <v-col cols="12" md="2">
          <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Приложение</h4>
          <div class="d-flex flex-column ga-2">
            <v-btn
              variant="outlined"
              size="small"
              class="text-none justify-start"
              :style="{ borderColor: '#44403c', color: '#d6d3d1' }"
              prepend-icon="mdi-apple"
            >
              App Store
            </v-btn>
            <v-btn
              variant="outlined"
              size="small"
              class="text-none justify-start"
              :style="{ borderColor: '#44403c', color: '#d6d3d1' }"
              prepend-icon="mdi-google-play"
            >
              Google Play
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8" :style="{ borderColor: '#292524' }" />

      <div class="d-flex flex-column flex-sm-row align-center justify-space-between ga-2">
        <p class="text-body-2" :style="{ color: '#78716c' }">
          &copy; {{ year }} Matsal. Все права защищены.
        </p>
        <div class="d-flex ga-4">
          <a href="#" class="text-body-2 text-decoration-none" :style="{ color: '#78716c' }">
            Политика конфиденциальности
          </a>
          <a href="#" class="text-body-2 text-decoration-none" :style="{ color: '#78716c' }">
            Условия использования
          </a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>