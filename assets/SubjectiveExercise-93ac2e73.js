import {
  D as p,
  E as g,
  F as i,
  m as s,
  M as c,
  L as h,
  N as m,
  O as v,
  G as d,
} from "./index-9eb7bfc9.js";
import { _ as Q } from "./plugin-vue_export-helper-c27b6911.js";
import { V as w, a as o, b as y, c as L } from "./VSheet-91b5a94c.js";
import { t as V, p as f, v as _ } from "./VMenu-b799b891.js";
const b = {
    name: "SubjectExercise",
    watch: {
      selectedLevel: function () {
        this.loadJsonAndGenerateQuiz();
      },
    },
    data: () => ({
      vocabularyList: [],
      currentQuestionKor: null,
      currentQuestion: null,
      selectedLevel: ["초급"],
      levels: ["초급", "중급", "고급"],
      answer: "",
      hint: "",
      placeholder: "",
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
              for (let n = 0; n < e.length; n++)
                this.selectedLevel[t] === e[n].type &&
                  this.vocabularyList.push(e[n]);
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
          this.displayQuestion(this.currentQuestion);
      },
      displayQuestion(e) {
        (this.currentQuestionKor = e.kor),
          (this.currentQuestion = e),
          (this.questionType = this.currentQuestion.type),
          this.updateHint(),
          this.updatePlaceholder(),
          this.$refs.answer.focus();
      },
      checkAnswer() {
        this.$refs.answer.blur();
        const e = this.answer.toLowerCase().replace(/\s/g, ""),
          t = this.currentQuestion.eng.toLowerCase().replace(/\s/g, "");
        e === t
          ? this.$swal.fire({
              title: "정답입니다!",
              showConfirmButton: !1,
              timer: 1e3,
              icon: "success",
            })
          : this.$swal.fire({
              title: "틀렸습니다.",
              text: "정답 : " + this.currentQuestion.eng,
              showConfirmButton: !1,
              timer: 1e3,
              icon: "error",
            }),
          (this.answer = ""),
          this.generateQuiz();
      },
      isViewHint() {
        this.showHint();
      },
      showHint() {
        this.$swal.fire({
          title: "힌트",
          html: `<p>${this.hint}</p>`,
          showConfirmButton: !0,
          icon: "info",
        });
      },
      updateHint() {
        this.currentQuestion.eng.length === 1
          ? (this.hint = "_")
          : this.currentQuestion.eng.length > 3
          ? (this.hint =
              this.currentQuestion.eng[0] +
              " _ ".repeat(this.currentQuestion.eng.length - 2) +
              this.currentQuestion.eng[this.currentQuestion.eng.length - 1])
          : (this.hint =
              this.currentQuestion.eng[0] +
              " _ ".repeat(this.currentQuestion.eng.length - 1)),
          (this.hint += ` (${this.currentQuestion.eng.length}글자)`);
      },
      updatePlaceholder() {
        this.placeholder =
          "_ ".repeat(this.currentQuestion.eng.length - 1) + "_";
      },
      calculateFontSize(e) {
        if (e === "" || e === null || e === void 0) return !1;
        console.log(e);
        const t = 6,
          n = 3,
          a = e.length;
        if (a > t) {
          const u = t / a;
          return `${n * u}rem`;
        }
        return `${n}rem`;
      },
    },
  },
  C = { class: "questionTypeStyle" };
function S(e, t, n, a, u, r) {
  return (
    p(),
    g(
      w,
      { class: "fill-height" },
      {
        default: i(() => [
          s(
            _,
            { class: "align-center text-center fill-height" },
            {
              default: i(() => [
                s(o, null, {
                  default: i(() => [
                    s(
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
                        onChange: r.loadJsonAndGenerateQuiz,
                      },
                      null,
                      8,
                      ["modelValue", "items", "onChange"]
                    ),
                  ]),
                  _: 1,
                }),
                s(V),
                s(
                  o,
                  { class: "questionWrapper" },
                  {
                    default: i(() => [
                      c(
                        "p",
                        {
                          class: "questionStyle",
                          ref: "question",
                          style: m({
                            fontSize: r.calculateFontSize(e.currentQuestionKor),
                          }),
                        },
                        h(e.currentQuestionKor),
                        5
                      ),
                      c("p", C, "[ " + h(e.questionType) + " ] ", 1),
                    ]),
                    _: 1,
                  }
                ),
                s(
                  L,
                  {
                    ref: "answer",
                    modelValue: e.answer,
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (l) => (e.answer = l)),
                    placeholder: e.placeholder,
                    dense: "",
                    variant: "outlined",
                    "hide-details": "",
                    onKeyup: v(r.checkAnswer, ["enter"]),
                    color: "fontColor",
                  },
                  null,
                  8,
                  ["modelValue", "placeholder", "onKeyup"]
                ),
                s(
                  o,
                  { class: "btnWrapper" },
                  {
                    default: i(() => [
                      s(
                        f,
                        {
                          class: "btn",
                          onClick: r.isViewHint,
                          color: "mainColor",
                        },
                        { default: i(() => [d("힌트")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      s(
                        f,
                        {
                          class: "btn",
                          onClick: t[2] || (t[2] = (l) => r.checkAnswer()),
                          color: "mainColor",
                        },
                        { default: i(() => [d("확인")]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                s(o, { style: { height: "10vh" } }),
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
const q = Q(b, [
  ["render", S],
  ["__scopeId", "data-v-35236ab9"],
]);
export { q as default };
