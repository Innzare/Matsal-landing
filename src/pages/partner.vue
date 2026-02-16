<script lang="ts" setup>
const form = ref({
  businessName: '',
  businessType: '',
  contactName: '',
  phone: '',
  email: '',
  address: '',
  description: '',
  agreed: false,
})

const businessTypes = [
  'Ресторан',
  'Кафе',
  'Фастфуд',
  'Кофейня',
  'Супермаркет',
  'Продуктовый магазин',
  'Пекарня',
  'Другое',
]

const submitted = ref(false)
const loading = ref(false)

const isFormValid = computed(() => {
  return (
    form.value.businessName &&
    form.value.businessType &&
    form.value.contactName &&
    form.value.phone &&
    form.value.email &&
    form.value.agreed
  )
})

async function submitForm() {
  if (!isFormValid.value) return
  loading.value = true

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  loading.value = false
  submitted.value = true
}

const advantages = [
  {
    icon: 'mdi-trending-up',
    title: 'Рост продаж до 40%',
    description: 'Наши партнёры увеличивают оборот благодаря потоку онлайн-заказов',
  },
  {
    icon: 'mdi-cash-register',
    title: 'Без начальных вложений',
    description: 'Подключение бесплатно — комиссия только с успешных заказов',
  },
  {
    icon: 'mdi-tablet-dashboard',
    title: 'Партнёрское приложение',
    description: 'Управляйте заказами, меню и статистикой через удобное мобильное приложение',
  },
  {
    icon: 'mdi-truck-fast-outline',
    title: 'Своя служба доставки',
    description: 'Мы берём на себя всю логистику — вам не нужны свои курьеры',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="position-relative overflow-hidden"
      :style="{
        background: 'linear-gradient(160deg, #fff5f7 0%, #f9f4f0 40%, #fff 100%)',
        paddingTop: '40px',
        paddingBottom: '60px',
      }"
    >
      <div
        class="blob"
        :style="{
          width: '400px',
          height: '400px',
          background: '#EA004B',
          top: '-100px',
          right: '-100px',
          opacity: '0.06',
        }"
      />

      <v-container>
        <div class="text-center" :style="{ maxWidth: '680px', margin: '0 auto' }">
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
            class="mb-4 font-weight-medium"
            prepend-icon="mdi-storefront-outline"
          >
            Для ресторанов и магазинов
          </v-chip>

          <h1
            :style="{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              color: '#1c1917',
              lineHeight: '1.15',
            }"
          >
            Подключите ваш бизнес<br />
            <span class="text-gradient">к платформе Matsal</span>
          </h1>

          <p
            class="mt-4"
            :style="{
              fontSize: '1.1rem',
              color: '#78716c',
              lineHeight: '1.7',
            }"
          >
            Получайте заказы от тысяч пользователей, увеличивайте выручку
            и управляйте бизнесом из одного приложения
          </p>
        </div>
      </v-container>
    </section>

    <!-- Advantages -->
    <section class="section-padding" :style="{ backgroundColor: '#ffffff' }">
      <v-container>
        <v-row>
          <v-col
            v-for="adv in advantages"
            :key="adv.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card
              :style="{
                border: '1px solid #f5f5f4',
                padding: '28px',
                height: '100%',
              }"
              class="hover-lift"
            >
              <div
                :style="{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: '#fef2f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }"
              >
                <v-icon :icon="adv.icon" color="primary" size="24" />
              </div>
              <h4
                class="text-subtitle-1 font-weight-bold mb-2"
                :style="{ color: '#1c1917' }"
              >
                {{ adv.title }}
              </h4>
              <p class="text-body-2" :style="{ color: '#78716c', lineHeight: '1.6' }">
                {{ adv.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Form section -->
    <section
      class="section-padding"
      :style="{ backgroundColor: '#f9f4f0' }"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <!-- Success state -->
            <v-card
              v-if="submitted"
              :style="{
                border: '1px solid #f5f5f4',
                padding: '60px 40px',
                textAlign: 'center',
              }"
            >
              <div
                :style="{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#f0fdf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }"
              >
                <v-icon icon="mdi-check-circle" color="success" size="48" />
              </div>
              <h2 class="text-h5 font-weight-bold mb-3" :style="{ color: '#1c1917' }">
                Заявка отправлена!
              </h2>
              <p class="text-body-1" :style="{ color: '#78716c', maxWidth: '400px', margin: '0 auto' }">
                Спасибо за интерес к Matsal! Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей.
              </p>
              <v-btn
                color="primary"
                class="text-none font-weight-bold mt-8"
                to="/"
                prepend-icon="mdi-arrow-left"
              >
                Вернуться на главную
              </v-btn>
            </v-card>

            <!-- Form -->
            <v-card
              v-else
              :style="{
                border: '1px solid #f5f5f4',
                padding: 'clamp(24px, 4vw, 48px)',
              }"
            >
              <h2
                class="text-h5 font-weight-bold mb-2"
                :style="{ color: '#1c1917' }"
              >
                Оставить заявку на подключение
              </h2>
              <p class="text-body-2 mb-8" :style="{ color: '#78716c' }">
                Заполните форму и мы свяжемся с вами для обсуждения деталей
              </p>

              <v-form @submit.prevent="submitForm">
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    v-model="form.businessName"
                    label="Название заведения"
                    placeholder="Например: Кафе «Уют»"
                    prepend-inner-icon="mdi-store-outline"
                    hide-details
                  />

                  <v-select
                    v-model="form.businessType"
                    :items="businessTypes"
                    label="Тип заведения"
                    placeholder="Выберите тип"
                    prepend-inner-icon="mdi-tag-outline"
                    hide-details
                  />

                  <v-text-field
                    v-model="form.contactName"
                    label="Контактное лицо"
                    placeholder="Ваше имя"
                    prepend-inner-icon="mdi-account-outline"
                    hide-details
                  />

                  <v-text-field
                    v-model="form.phone"
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    prepend-inner-icon="mdi-phone-outline"
                    type="tel"
                    hide-details
                  />

                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    placeholder="email@example.com"
                    prepend-inner-icon="mdi-email-outline"
                    type="email"
                    hide-details
                  />

                  <v-text-field
                    v-model="form.address"
                    label="Адрес заведения"
                    placeholder="Город, улица, дом"
                    prepend-inner-icon="mdi-map-marker-outline"
                    hide-details
                  />

                  <v-textarea
                    v-model="form.description"
                    label="Дополнительная информация"
                    placeholder="Расскажите о вашем заведении, количестве позиций в меню и т.д."
                    rows="3"
                    hide-details
                  />

                  <v-checkbox
                    v-model="form.agreed"
                    color="primary"
                    hide-details
                  >
                    <template #label>
                      <span class="text-body-2" :style="{ color: '#78716c' }">
                        Я согласен с
                        <a href="#" class="text-primary text-decoration-none font-weight-medium">
                          условиями обработки данных
                        </a>
                      </span>
                    </template>
                  </v-checkbox>

                  <v-btn
                    type="submit"
                    color="primary"
                    size="x-large"
                    block
                    class="text-none font-weight-bold mt-2"
                    :loading="loading"
                    :disabled="!isFormValid"
                  >
                    Отправить заявку
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>