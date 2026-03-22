<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <v-container class="py-12" style="max-width: 800px">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="mb-6 text-none"
      to="/"
      color="primary"
    >
      На главную
    </v-btn>

    <h1 class="text-h4 font-weight-bold mb-2">Политика конфиденциальности</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">Последнее обновление: 22 марта {{ year }} г.</p>

    <div class="privacy-content">
      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">1. Общие положения</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">
          Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей мобильного приложения «Matsal» (далее — «Приложение»), разработанного и администрируемого ИП/ООО «Matsal» (далее — «Оператор»).
        </p>
        <p class="text-body-1 text-medium-emphasis">
          Используя Приложение, вы соглашаетесь с условиями данной Политики. Если вы не согласны с условиями, пожалуйста, не используйте Приложение.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">2. Какие данные мы собираем</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">При использовании Приложения мы можем собирать следующие данные:</p>
        <ul class="text-body-1 text-medium-emphasis ml-6 mb-3">
          <li class="mb-2"><strong>Регистрационные данные:</strong> имя, номер телефона</li>
          <li class="mb-2"><strong>Данные доставки:</strong> адрес доставки, геолокация (при вашем согласии)</li>
          <li class="mb-2"><strong>Данные заказов:</strong> история заказов, содержимое корзины, способ оплаты</li>
          <li class="mb-2"><strong>Технические данные:</strong> тип устройства, версия ОС, push-токен для уведомлений</li>
          <li class="mb-2"><strong>Данные об использовании:</strong> избранные заведения, поисковые запросы</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">3. Цели обработки данных</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">Мы используем ваши данные для:</p>
        <ul class="text-body-1 text-medium-emphasis ml-6">
          <li class="mb-2">Регистрации и аутентификации в Приложении</li>
          <li class="mb-2">Оформления и доставки заказов</li>
          <li class="mb-2">Отправки уведомлений о статусе заказа</li>
          <li class="mb-2">Улучшения качества обслуживания и работы Приложения</li>
          <li class="mb-2">Связи с вами по вопросам поддержки</li>
          <li class="mb-2">Выполнения требований законодательства</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">4. Передача данных третьим лицам</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">
          Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением следующих случаев:
        </p>
        <ul class="text-body-1 text-medium-emphasis ml-6">
          <li class="mb-2"><strong>Рестораны и магазины:</strong> получают информацию, необходимую для выполнения вашего заказа (имя, адрес доставки, состав заказа)</li>
          <li class="mb-2"><strong>Курьеры:</strong> получают адрес доставки и контактные данные для доставки заказа</li>
          <li class="mb-2"><strong>Платёжные системы:</strong> обработка платежей осуществляется через защищённые сервисы (данные карт не хранятся на наших серверах)</li>
          <li class="mb-2"><strong>По требованию закона:</strong> в случаях, предусмотренных законодательством РФ</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">5. Хранение и защита данных</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">
          Мы принимаем необходимые организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения:
        </p>
        <ul class="text-body-1 text-medium-emphasis ml-6">
          <li class="mb-2">Шифрование данных при передаче (HTTPS/TLS)</li>
          <li class="mb-2">Безопасное хранение паролей (хеширование)</li>
          <li class="mb-2">Ограниченный доступ к персональным данным</li>
          <li class="mb-2">Регулярное обновление систем безопасности</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">6. Геолокация</h2>
        <p class="text-body-1 text-medium-emphasis">
          Приложение может запрашивать доступ к вашему местоположению для определения ближайших заведений и расчёта доставки. Вы можете отключить доступ к геолокации в настройках вашего устройства в любое время. Данные о местоположении не сохраняются и используются только в момент запроса.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">7. Push-уведомления</h2>
        <p class="text-body-1 text-medium-emphasis">
          С вашего согласия мы отправляем push-уведомления о статусе заказа и важных обновлениях. Вы можете отключить уведомления в настройках вашего устройства.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">8. Ваши права</h2>
        <p class="text-body-1 text-medium-emphasis mb-3">Вы имеете право:</p>
        <ul class="text-body-1 text-medium-emphasis ml-6">
          <li class="mb-2">Запросить информацию о хранимых персональных данных</li>
          <li class="mb-2">Потребовать исправления неточных данных</li>
          <li class="mb-2">Потребовать удаления ваших данных (удаление аккаунта)</li>
          <li class="mb-2">Отозвать согласие на обработку данных</li>
          <li class="mb-2">Подать жалобу в Роскомнадзор</li>
        </ul>
        <p class="text-body-1 text-medium-emphasis mt-3">
          Для реализации своих прав обратитесь по адресу: <a href="mailto:support@matsal.ru" class="text-primary">support@matsal.ru</a>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">9. Файлы cookie и аналитика</h2>
        <p class="text-body-1 text-medium-emphasis">
          Мобильное приложение не использует файлы cookie. Мы можем использовать анонимную аналитику для улучшения работы сервиса. Аналитические данные не содержат персональной информации.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-3">10. Изменения в Политике</h2>
        <p class="text-body-1 text-medium-emphasis">
          Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна по данному адресу. При существенных изменениях мы уведомим вас через Приложение.
        </p>
      </section>

      <section>
        <h2 class="text-h6 font-weight-bold mb-3">11. Контакты</h2>
        <p class="text-body-1 text-medium-emphasis">
          По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
        </p>
        <ul class="text-body-1 text-medium-emphasis ml-6 mt-3">
          <li class="mb-2">Email: <a href="mailto:support@matsal.ru" class="text-primary">support@matsal.ru</a></li>
          <li class="mb-2">Сайт: <a href="https://matsal.ru" class="text-primary">matsal.ru</a></li>
        </ul>
      </section>
    </div>
  </v-container>
</template>