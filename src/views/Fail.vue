<template>
  <div>
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
              <v-row>
                <v-col>
                  <h3 class="text-center">당신의 상태를 체크해 보세요</h3>
                </v-col>
              </v-row>
              <v-row class="pb-12">
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <v-btn color="info" @click="goToTest">지금 테스트하기</v-btn>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed class="px-0" color="rgb(0,0,0,0)">
      <v-container fluid>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="ml-auto">
            <v-btn block color="success" @click="goToBlog">개발자 블로그 &gt;</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new window.SpeechRecognition();
// recognition.interimResults = true;
// recognition.lang = "ko-KR";

export default {
  name: "Fail",
  components: {},
  methods: {
    goToBlog(){
      window.open("http://jwmsg.kr", "_blank");
    },
    goToTest(){
      this.$router.push('/test')
    }
  },
  data() {
    return {
      
    };
  },
};
</script>