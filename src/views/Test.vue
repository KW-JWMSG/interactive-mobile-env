<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card color="#ffc93c">
            <v-container fluid>
              <v-row class="pt-12">
                <v-col>
                  <h2 class="text-center">당신의 취한 정도를 검사합니다</h2>
                  <h3 class="text-center">아래에 보이는 문장을 읽어 주세요!</h3>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="mb-1 pb-0">
                  <v-card
                    class="pa-4 text-center font-weight-bold"
                    style="font-size: 1.2rem; min-height: 3.8rem"
                  >
                    간장 공장 공장장
                  </v-card>
                </v-col>
                <v-col cols="12" class="mt-1 pt-0">
                  <v-card
                    class="pa-4 text-center font-weight-bold"
                    style="font-size: 1.2rem; min-height: 3.8rem"
                  >
                    {{ readedData }}
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="mt-0 pt-0 pb-12">
                <v-col class="text-center font-weight-bold red--text">
                  남은 기회 (3 of 5)
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed class="px-0" color="rgb(0,0,0,0)">
      <v-container fluid>
        <v-row>
          <v-col cols="auto" class="ml-auto">
            <v-btn block color="info" @click="goToMain"
              >&lt; 메인으로 가기</v-btn
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="ml-auto">
            <v-btn block color="success" @click="goToBlog"
              >개발자 블로그 &gt;</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
let recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

export default {
  name: "Home",
  components: {},
  mounted() {
    recognition.interimResults = true;
    recognition.lang = "ko-KR";
    recognition.interimResults = false;
    recognition.start();
    recognition.onstart = this.OnStartSpeak;
    recognition.onend = this.OnStopSpeak;
    recognition.onresult = this.OnParseData;
  },
  destroyed() {
    recognition.stop();
  },
  deactivated() {
    recognition.stop();
  },
  methods: {
    OnStartSpeak() {
      this.readedData = "듣는중";
    },
    OnStopSpeak() {
      recognition.start();
    },
    OnParseData(RS) {
      this.readedData = Array.from(RS.results)
        .map((results) => results[0].transcript)
        .join("");
    },

    goToBlog() {
      window.open("http://jwmsg.kr", "_blank");
    },
    goToMain() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      readedData: "",
    };
  },
};
</script>