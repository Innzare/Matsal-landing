<script lang="ts" setup>
const drawer = ref(false)

const navItems = [
  { title: 'Главная', to: '/' },
  { title: 'Для ресторанов', to: '/partner' },
  { title: 'Для курьеров', to: '/courier' },
]
</script>

<template>
  <v-app-bar
    flat
    :style="{ backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }"
    :height="72"
  >
    <v-container class="d-flex align-center">
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
      <div class="d-none d-md-flex align-center ga-1">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          variant="text"
          class="text-none font-weight-medium"
          :style="{ color: '#57534e', fontSize: '15px' }"
        >
          {{ item.title }}
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
    </v-container>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :title="item.title"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>