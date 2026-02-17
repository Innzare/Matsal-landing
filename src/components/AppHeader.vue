<script lang="ts" setup>
const route = useRoute();
const drawer = ref(false);
const scrolled = ref(false);

const navItems = [
  { title: "Главная", to: "/", icon: "mdi-home-outline" },
  { title: "Для ресторанов", to: "/partner", icon: "mdi-storefront-outline" },
  { title: "Для курьеров", to: "/courier", icon: "mdi-bike" },
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

function isActive(to: string) {
  return route.path === to;
}
</script>

<template>
  <div
    :style="{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 16px' : '20px 16px',
      transition: 'padding 0.3s ease',
    }"
  >
    <v-container :style="{ maxWidth: '1200px' }">
      <div
        :style="{
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '28px',
          padding: '24px 28px',
          border: scrolled ? '1px solid #e7e5e4' : '1px solid #f5f5f4',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.08)'
            : '0 4px 16px rgba(0,0,0,0.04)',
          transition: 'all 0.3s ease',
        }"
      >
        <div class="d-flex align-center">
          <router-link to="/" class="d-flex align-center text-decoration-none">
            <img
              src="@/assets/images/logo.svg"
              alt="Matsal"
              :style="{ height: '36px' }"
            />
            <span
              class="text-h5 font-weight-bold ml-3"
              :style="{ color: '#1c1917' }"
            >
              Matsal
            </span>
          </router-link>

          <v-spacer />

          <!-- Desktop nav -->
          <div class="d-none d-md-flex align-center ga-2">
            <v-btn
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              :variant="isActive(item.to) ? 'tonal' : 'text'"
              :color="isActive(item.to) ? 'primary' : undefined"
              class="text-none font-weight-medium"
              :style="{
                color: isActive(item.to) ? undefined : '#57534e',
                fontSize: '15px',
              }"
              :prepend-icon="item.icon"
            >
              {{ item.title }}
            </v-btn>

            <v-btn
              color="primary"
              variant="flat"
              class="text-none font-weight-bold ml-2"
              prepend-icon="mdi-download"
              :style="{
                boxShadow: scrolled
                  ? '0 4px 12px rgba(209, 0, 63, 0.25)'
                  : 'none',
                transition: 'box-shadow 0.3s ease',
              }"
            >
              Скачать
            </v-btn>
          </div>

          <!-- Mobile hamburger -->
          <v-btn
            icon
            variant="text"
            class="d-md-none"
            @click="drawer = !drawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>

  <!-- Spacer to prevent content from going under fixed header -->
  <!-- <div :style="{ height: scrolled ? '92px' : '104px', transition: 'height 0.3s ease' }" /> -->

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary width="280">
    <div class="pa-4">
      <div class="d-flex align-center mb-6">
        <img
          src="@/assets/images/logo.svg"
          alt="Matsal"
          :style="{ height: '32px' }"
        />
        <span
          class="text-h6 font-weight-bold ml-2"
          :style="{ color: '#1c1917' }"
        >
          Matsal
        </span>
      </div>
    </div>

    <v-divider />

    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :title="item.title"
        :prepend-icon="item.icon"
        @click="drawer = false"
      />
    </v-list>

    <v-divider class="my-2" />

    <div class="pa-4">
      <v-btn
        color="primary"
        block
        class="text-none font-weight-bold"
        prepend-icon="mdi-download"
      >
        Скачать приложение
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>
