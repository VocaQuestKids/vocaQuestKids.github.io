import { _ as m } from "./plugin-vue_export-helper-c27b6911.js";
import { V as v, a as c, b as y } from "./VSheet-91b5a94c.js";
import { t as g, v as L, p as _ } from "./VMenu-b799b891.js";
import {
  D as h,
  E as p,
  F as r,
  m as i,
  M as f,
  L as d,
  N as Q,
  H as S,
  J as b,
  I as w,
  G as V,
} from "./index-9eb7bfc9.js";
const k = {
    name: "ObjectiveExercise",
    watch: {
      selectedLevel: function () {
        this.loadJsonAndGenerateQuiz();
      },
    },
    data: () => ({
      vocabularyList: [],
      currentQuestionEng: null,
      currentQuestion: null,
      options: [],
      selectedLevel: ["초급"],
      levels: ["초급", "중급", "고급"],
      questionType: "",
    }),
    mounted() {
      this.loadJsonAndGenerateQuiz();
    },
    methods: {
      loadJsonAndGenerateQuiz() {
        fetch("/voca.json")
          .then((e) => e.json())
          .then((e) => {
            this.vocabularyList = [];
            for (let t = 0; t < this.selectedLevel.length; t++)
              for (let s = 0; s < e.length; s++)
                this.selectedLevel[t] === e[s].type &&
                  this.vocabularyList.push(e[s]);
            this.generateQuiz();
          })
          .catch((e) => {
            console.error("JSON 파일을 로드하는 중 오류가 발생했습니다:", e);
          });
      },
      generateQuiz() {
        if (this.vocabularyList.length === 0) {
          console.error("JSON 파일 로드 오류.");
          return;
        }
        (this.currentQuestion =
          this.vocabularyList[
            Math.floor(Math.random() * this.vocabularyList.length)
          ]),
          (this.options = this.generateOptions(this.currentQuestion)),
          this.displayQuestionAndOptions(this.currentQuestion, this.options);
      },
      generateOptions(e) {
        const t = [],
          s = this.vocabularyList.filter((n) => n !== e);
        for (let n = 0; n < 4; n++) {
          const o = s.splice(Math.floor(Math.random() * s.length), 1)[0];
          t.push(o);
        }
        t.push(e);
        for (let n = t.length - 1; n > 0; n--) {
          const o = Math.floor(Math.random() * (n + 1));
          [t[n], t[o]] = [t[o], t[n]];
        }
        return t;
      },
      displayQuestionAndOptions(e, t) {
        (this.currentQuestionEng = e.eng),
          (this.questionType = this.currentQuestion.type),
          (this.currentQuestion = e),
          (this.options = t);
      },
      checkAnswer(e) {
        this.options[e].eng === this.currentQuestionEng
          ? this.$swal.fire({
              title: "정답입니다!",
              showConfirmButton: !1,
              timer: 1e3,
              icon: "success",
            })
          : this.$swal.fire({
              title: "틀렸습니다.",
              text: "정답 : " + this.currentQuestion.kor,
              showConfirmButton: !1,
              timer: 1e3,
              icon: "error",
            }),
          this.generateQuiz();
      },
      speakText(e) {
        if ("speechSynthesis" in window) {
          const t = window.speechSynthesis,
            s = new SpeechSynthesisUtterance();
          (s.text = e), t.speak(s);
        } else
          console.error("Web Speech API is not supported in this browser.");
      },
      calculateFontSize(e) {
        if (e === "" || e === null || e === void 0) return !1;
        const t = 6,
          s = 3,
          n = e.length;
        if (n > t) {
          const o = t / n;
          return `${s * o}rem`;
        }
        return `${s}rem`;
      },
    },
  },
  z = { class: "questionTypeStyle" };
function O(e, t, s, n, o, u) {
  return (
    h(),
    p(
      v,
      { class: "fill-height" },
      {
        default: r(() => [
          i(
            L,
            { class: "align-center text-center fill-height" },
            {
              default: r(() => [
                i(c, null, {
                  default: r(() => [
                    i(
                      y,
                      {
                        modelValue: e.selectedLevel,
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (l) => (e.selectedLevel = l)),
                        id: "selectedLevel",
                        name: "selectedLevel",
                        ref: "selectedLevel",
                        items: e.levels,
                        label: "레벨 선택",
                        dense: "",
                        outlined: "",
                        chips: "",
                        multiple: "",
                        "hide-details": "",
                        color: "fontColor",
                        onChange:
                          t[1] || (t[1] = (l) => u.loadJsonAndGenerateQuiz()),
                      },
                      null,
                      8,
                      ["modelValue", "items"]
                    ),
                  ]),
                  _: 1,
                }),
                i(g),
                i(
                  c,
                  { class: "questionWrapper" },
                  {
                    default: r(() => [
                      f(
                        "p",
                        {
                          class: "questionStyle",
                          ref: "question",
                          style: Q({
                            fontSize: u.calculateFontSize(e.currentQuestionEng),
                          }),
                        },
                        d(e.currentQuestionEng),
                        5
                      ),
                      f("p", z, "[ " + d(e.questionType) + " ] ", 1),
                    ]),
                    _: 1,
                  }
                ),
                i(
                  c,
                  { style: { display: "flex", flexDirection: "column" } },
                  {
                    default: r(() => [
                      (h(!0),
                      S(
                        w,
                        null,
                        b(
                          e.options,
                          (l, a) => (
                            h(),
                            p(
                              _,
                              {
                                flat: "",
                                class: "optionsStyle",
                                id: "option_" + a,
                                ref_for: !0,
                                ref: "option_" + a,
                                variant: "plain",
                                key: a,
                                onClick: (E) => u.checkAnswer(a),
                              },
                              { default: r(() => [V(d(l.kor), 1)]), _: 2 },
                              1032,
                              ["id", "onClick"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
                i(c, { style: { height: "10vh" } }),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      }
    )
  );
}
const B = m(k, [
  ["render", O],
  ["__scopeId", "data-v-e877267b"],
]);
export { B as default };
