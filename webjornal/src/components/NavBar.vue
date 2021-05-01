<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="ml-5">
        <router-link
          to="/"
          tag="img"
          :src="require('@/assets/img/logo.png')"
          style="width: 250px; height: 50px"
          title="Página principal"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-item>ANIMAIS</b-nav-item
          ><!-- :to="{ name: 'animals' }" :disabled="!isUserLoggedIn" -->
          <b-nav-item>QUIZZES</b-nav-item
          ><!--:to="{ name: 'quizzes' }"  :disabled="!isUserLoggedIn" -->
          <b-nav-item>CONTACTOS</b-nav-item>
          <!-- to="#contacts" -->
          <!--<div v-if="isUserLoggedIn">
            <div v-if="getUserType === 'user'">
              <b-nav-item :to="{ name: 'profile' }">
                <img
                  class="avatar"
                  :src="
                    require(`@/assets/avatars/${
                      this.getUserLevelByPoints(
                        this.getProfile.gamification.points
                      ).avatar
                    }.png`)
                  "
                  :title="getProfileName"
                />
              </b-nav-item>
            </div>
            <div v-else>
              <b-nav-item :to="{ name: 'admin' }">ADMIN</b-nav-item>
            </div>
          </div>-->
          <div>
            <b-nav-item :to="{ name: 'login' }">LOGIN</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>
