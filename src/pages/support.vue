<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const formRef = ref<any>(null)

const subjects = [
  'Проблема с заказом',
  'Проблема с оплатой',
  'Проблема с доставкой',
  'Предложение',
  'Другое',
]

const rules = {
  required: (v: string) => !!v || 'Обязательное поле',
  email: (v: string) => !v || /.+@.+\..+/.test(v) || 'Введите корректный email',
}

const contacts = [
  {
    icon: 'mdi-send',
    title: 'Telegram',
    subtitle: '@matsal_support',
    href: 'https://t.me/matsal_support',
    color: '#229ED9',
    bg: '#E8F5FD',
  },
  {
    icon: 'mdi-email-outline',
    title: 'Email',
    subtitle: 'support@matsal.store',
    href: 'mailto:support@matsal.store',
    color: '#EA004B',
    bg: '#FFF0F3',
  },
  {
    icon: 'mdi-phone-outline',
    title: 'Телефон',
    subtitle: '+7 (917) 041-47-64',
    href: 'tel:+79170414764',
    color: '#4CAF50',
    bg: '#F0F9F0',
  },
]

const submitForm = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  isSubmitting.value = true

  // Имитация отправки
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="position-relative overflow-hidden"
      :style="{
        background: 'linear-gradient(160deg, #fff5f7 0%, #f9f4f0 40%, #fff 100%)',
        paddingTop: '120px',
        paddingBottom: '60px',
      }"
    >
      <div
        class="blob"
        :style="{
          width: '400px',
          height: '400px',
          background: '#D1003F',
          top: '-80px',
          right: '-80px',
          opacity: '0.06',
        }"
      />

      <v-container style="max-width: 900px">
        <v-btn
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="mb-8 text-none"
          to="/"
          color="primary"
        >
          На главную
        </v-btn>

        <div class="text-center">
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
            class="mb-4 font-weight-medium"
            prepend-icon="mdi-headset"
          >
            Мы всегда на связи
          </v-chip>

          <h1
            :style="{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#1c1917',
              letterSpacing: '-0.02em',
            }"
          >
            Служба <span class="text-gradient">поддержки</span>
          </h1>

          <p
            class="mx-auto mt-4"
            :style="{
              fontSize: '1.1rem',
              color: '#78716c',
              lineHeight: '1.7',
              maxWidth: '500px',
            }"
          >
            Столкнулись с проблемой или есть вопрос? Мы поможем разобраться.
          </p>

          <!-- Compact contacts + hours -->
          <div class="d-flex flex-wrap justify-center ga-3 mt-8">
            <v-chip
              v-for="contact in contacts"
              :key="contact.title"
              :href="contact.href"
              target="_blank"
              variant="flat"
              :color="contact.bg"
              size="large"
              class="font-weight-medium contact-chip"
              :style="{ color: contact.color }"
            >
              <v-icon :icon="contact.icon" size="18" start />
              {{ contact.subtitle }}
            </v-chip>
            <v-chip
              variant="flat"
              color="#f5f5f4"
              size="large"
              class="font-weight-medium"
              :style="{ color: '#78716c' }"
            >
              <v-icon icon="mdi-clock-outline" size="18" start />
              09:00 — 23:00, ежедневно
            </v-chip>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Form -->
    <section class="py-12" :style="{ background: '#fafaf9' }">
      <v-container style="max-width: 900px">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <div class="text-center mb-8">
              <h2
                :style="{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#1c1917',
                }"
              >
                Напишите нам
              </h2>
              <p class="text-body-1 mt-2" :style="{ color: '#78716c' }">
                Заполните форму и мы ответим в течение 24 часов
              </p>
            </div>

            <!-- Success state -->
            <v-card
              v-if="isSubmitted"
              variant="outlined"
              rounded="xl"
              class="pa-10 text-center"
              :style="{ borderColor: '#bbf7d0' }"
            >
              <v-avatar color="#DCFCE7" size="64" class="mb-4">
                <v-icon icon="mdi-check" color="success" size="32" />
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-2">Сообщение отправлено</h3>
              <p class="text-body-2" :style="{ color: '#78716c' }">
                Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
              </p>
              <v-btn
                color="primary"
                variant="tonal"
                class="mt-6 text-none"
                @click="isSubmitted = false"
              >
                Отправить ещё
              </v-btn>
            </v-card>

            <!-- Form -->
            <v-card
              v-else
              variant="outlined"
              rounded="xl"
              class="pa-8"
              :style="{ borderColor: '#e7e5e4' }"
            >
              <v-form ref="formRef" @submit.prevent="submitForm">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.name"
                      label="Имя"
                      variant="outlined"
                      rounded="lg"
                      density="comfortable"
                      :rules="[rules.required]"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      rounded="lg"
                      density="comfortable"
                      :rules="[rules.required, rules.email]"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="form.subject"
                      label="Тема обращения"
                      :items="subjects"
                      variant="outlined"
                      rounded="lg"
                      density="comfortable"
                      :rules="[rules.required]"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      label="Сообщение"
                      variant="outlined"
                      rounded="lg"
                      rows="5"
                      :rules="[rules.required]"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      color="primary"
                      size="large"
                      block
                      :loading="isSubmitting"
                      class="text-none font-weight-bold"
                      :style="{ fontSize: '16px' }"
                    >
                      Отправить сообщение
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<style scoped>
.contact-chip:hover {
  opacity: 0.85;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, #EA004B, #ff4081);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>