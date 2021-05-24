<template>
  <v-app>
    <v-main >
      <router-view />
    </v-main>
    <!-- <v-main class="d-none d-md-block">
      <v-container>
        <v-row>
          <v-col>
            <v-card color="#ffc93c">
              <v-container fluid>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="3">
                    <v-img src="@/assets/logo_transparent.png" />
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row class="pb-12">
                  <v-col>
                    <h3 class="text-center">나 안취해써 서비스는 모바일에서 사용 가능합니다.</h3>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
</style>