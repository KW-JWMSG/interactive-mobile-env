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
                    :color="indicate_color"
                  >
                    {{ originData }}
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

              <v-row class="mt-0 pt-0">
                <v-col class="text-center font-weight-bold red--text">
                  틀린 개수 : {{ failCnt }}개 / 5개
                </v-col>
                <v-col class="text-center font-weight-bold green--text">
                  맞춘 개수 : {{ winCnt }}개
                </v-col>
              </v-row>
              <v-row class="pb-12">
                <v-col class="text-center font-weight-bold">
                  <h3>총점수 : {{ winCnt - failCnt }}점 / 5점</h3>
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
import { getMessage } from "@/api/getsockdam.js";
export default {
  name: "Home",
  components: {},
  mounted() {
    recognition.interimResults = true;
    recognition.lang = "ko-KR";
    recognition.start();
    recognition.onstart = this.OnStartSpeak;
    recognition.onend = this.OnStopSpeak;
    recognition.onresult = this.OnParseData;
  },
  destroyed() {
    recognition.onstart = null;
    recognition.onend = null;
    recognition.onresult = null;
    recognition.stop();
  },
  deactivated() {
    recognition.onstart = null;
    recognition.onend = null;
    recognition.onresult = null;
    recognition.stop();
  },
  methods: {
    async OnStartSpeak() {
      this.tryCnt++;
      const resData = await getMessage();
      if (resData[0].idx == this.originDataIdx) {
        this.OnStartSpeak();
        return;
      }
      this.originData = resData[0].message;
      this.originDataIdx = resData[0].idx;
      this.readedData = "듣는중";
      this.indicate_color = "#ffffff";
    },
    OnStopSpeak() {
      if (
        this.readedData.replaceAll(" ", "") ==
        this.originData.replaceAll(" ", "")
      ) {
        this.winCnt++;
        this.indicate_color = "#00ff00";
        if (this.failCnt - this.failCnt > 5) {
          //성공
        }
      } else {
        this.failCnt++;
        if (this.failCnt > 5) {
          this.$router.push('/fail')
        }
      }
      recognition.start();
    },
    OnParseData(RS) {
      this.readedData = Array.from(RS.results)
        .map((results) => results[0].transcript)
        .join("");
      if (
        this.readedData.replaceAll(" ", "") ==
        this.originData.replaceAll(" ", "")
      ) {
        recognition.stop();
      }
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
      tryCnt: 0,
      winCnt: 0,
      failCnt: 0,
      originDataIdx: null,
      originData: "",
      readedData: "",
      indicate_color: "#ffffff",
    };
  },
};
</script>