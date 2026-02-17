<script lang="ts" setup>
const form = ref({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  vehicleType: "",
  experience: "",
  agreed: false,
});

const vehicleTypes = ["Автомобиль", "Мотоцикл / Скутер", "Велосипед", "Пешком"];

const cities = [
  "Грозный",
  "Аргун",
  "Гудермес",
  "Урус-Мартан",
  "Шали",
  "Другой",
];

const submitted = ref(false);
const loading = ref(false);

const isFormValid = computed(() => {
  return (
    form.value.fullName &&
    form.value.phone &&
    form.value.city &&
    form.value.vehicleType &&
    form.value.agreed
  );
});

async function submitForm() {
  if (!isFormValid.value) return;
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  loading.value = false;
  submitted.value = true;
}

const benefits = [
  {
    icon: "mdi-calendar-clock",
    title: "Гибкий график",
    description: "Работайте когда хотите — вы сами выбираете часы и дни",
    color: "#EA004B",
    bg: "#fef2f2",
  },
  {
    icon: "mdi-wallet-outline",
    title: "Ежедневные выплаты",
    description: "Получайте заработанные деньги каждый день на карту",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: "mdi-cellphone-link",
    title: "Удобное приложение",
    description: "Принимайте заказы, стройте маршруты и отслеживайте заработок",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: "mdi-shield-star-outline",
    title: "Бонусы и поддержка",
    description: "Система бонусов за качественную работу и поддержка 24/7",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

const requirements = [
  "Возраст от 18 лет",
  "Смартфон на iOS или Android",
  "Знание города",
  "Ответственность и пунктуальность",
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="position-relative overflow-hidden"
      :style="{
        background:
          'linear-gradient(160deg, #fff5f7 0%, #f9f4f0 40%, #fff 100%)',
        paddingTop: '200px',
        paddingBottom: '150px',
      }"
    >
      <div
        class="blob"
        :style="{
          width: '400px',
          height: '400px',
          background: '#EA004B',
          top: '-100px',
          left: '-100px',
          opacity: '0.06',
        }"
      />

      <v-container>
        <div
          class="text-center"
          :style="{ maxWidth: '680px', margin: '0 auto' }"
        >
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
            class="mb-4 font-weight-medium"
            prepend-icon="mdi-bike"
          >
            Стань курьером
          </v-chip>

          <h1
            :style="{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              color: '#1c1917',
              lineHeight: '1.15',
            }"
          >
            Зарабатывай с Matsal —<br />
            <span class="text-gradient">доставляй заказы</span>
          </h1>

          <p
            class="mt-4"
            :style="{
              fontSize: '1.1rem',
              color: '#78716c',
              lineHeight: '1.7',
            }"
          >
            Гибкий график, стабильный доход и удобное приложение. Начните
            зарабатывать уже сегодня!
          </p>
        </div>
      </v-container>
    </section>

    <!-- Benefits -->
    <section class="section-padding" :style="{ backgroundColor: '#ffffff' }">
      <v-container>
        <v-row>
          <v-col
            v-for="benefit in benefits"
            :key="benefit.title"
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
                  background: benefit.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }"
              >
                <v-icon :icon="benefit.icon" :color="benefit.color" size="24" />
              </div>
              <h4
                class="text-subtitle-1 font-weight-bold mb-2"
                :style="{ color: '#1c1917' }"
              >
                {{ benefit.title }}
              </h4>
              <p
                class="text-body-2"
                :style="{ color: '#78716c', lineHeight: '1.6' }"
              >
                {{ benefit.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Form section -->
    <section class="section-padding" :style="{ backgroundColor: '#f9f4f0' }">
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
              <h2
                class="text-h5 font-weight-bold mb-3"
                :style="{ color: '#1c1917' }"
              >
                Заявка отправлена!
              </h2>
              <p
                class="text-body-1"
                :style="{
                  color: '#78716c',
                  maxWidth: '400px',
                  margin: '0 auto',
                }"
              >
                Спасибо за интерес к работе в Matsal! Мы свяжемся с вами в
                ближайшее время для уточнения деталей и начала сотрудничества.
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
                Заявка на работу курьером
              </h2>
              <p class="text-body-2 mb-8" :style="{ color: '#78716c' }">
                Заполните форму и начните зарабатывать с Matsal
              </p>

              <v-form @submit.prevent="submitForm">
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    v-model="form.fullName"
                    label="ФИО"
                    placeholder="Иванов Иван Иванович"
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
                    label="Email (необязательно)"
                    placeholder="email@example.com"
                    prepend-inner-icon="mdi-email-outline"
                    type="email"
                    hide-details
                  />

                  <v-select
                    v-model="form.city"
                    :items="cities"
                    label="Город"
                    placeholder="Выберите город"
                    prepend-inner-icon="mdi-city-variant-outline"
                    hide-details
                  />

                  <v-select
                    v-model="form.vehicleType"
                    :items="vehicleTypes"
                    label="Тип транспорта"
                    placeholder="Выберите транспорт"
                    prepend-inner-icon="mdi-car-outline"
                    hide-details
                  />

                  <v-textarea
                    v-model="form.experience"
                    label="Опыт работы (необязательно)"
                    placeholder="Расскажите о вашем опыте доставки, если есть"
                    rows="3"
                    hide-details
                  />

                  <!-- Requirements -->
                  <div
                    :style="{
                      background: '#f9f4f0',
                      borderRadius: '16px',
                      padding: '20px',
                    }"
                  >
                    <h4
                      class="text-subtitle-2 font-weight-bold mb-3"
                      :style="{ color: '#1c1917' }"
                    >
                      Требования:
                    </h4>
                    <div class="d-flex flex-column ga-2">
                      <div
                        v-for="req in requirements"
                        :key="req"
                        class="d-flex align-center ga-2"
                      >
                        <v-icon
                          icon="mdi-check-circle"
                          color="success"
                          size="18"
                        />
                        <span
                          class="text-body-2"
                          :style="{ color: '#57534e' }"
                          >{{ req }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <v-checkbox
                    v-model="form.agreed"
                    color="primary"
                    hide-details
                  >
                    <template #label>
                      <span class="text-body-2" :style="{ color: '#78716c' }">
                        Я согласен с
                        <a
                          href="#"
                          class="text-primary text-decoration-none font-weight-medium"
                        >
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
