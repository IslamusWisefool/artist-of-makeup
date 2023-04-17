window.addEventListener("load", () => {
  const input1 = document.querySelector("#beaf-input-1");
  const before1 = document.querySelector("#beaf-before-1");
  const input2 = document.querySelector("#beaf-input-2");
  const before2 = document.querySelector("#beaf-before-2");
  const input3 = document.querySelector("#beaf-input-3");
  const before3 = document.querySelector("#beaf-before-3");

  class beafHandler {
    constructor(input, before) {
      this.input = input;
      this.before = before;
      this.input.addEventListener("mousemove", () => {
        this.before.style.setProperty(
          "--clip-position",
          "polygon(0px 0px, 0px 100%," +
            this.input.value +
            "% " +
            "100%, " +
            this.input.value +
            "%" +
            " 0%)"
        );
      });
    }
  }

  const beafHandler1 = new beafHandler(input1, before1);
  const beafHandler2 = new beafHandler(input2, before2);
  const beafHandler3 = new beafHandler(input3, before3);
});
