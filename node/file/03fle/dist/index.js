
    (function () {
      const dom = document.getElementById("timeText");
      const dom2 = document.getElementById("timeText2");
      getTime();

      (function timeRun () {
        setTimeout(() => {
          getTime();
          timeRun();
        }, 1000)
      })();

      function getTime () {
        const time = new Date();
        const newTimeStr = `${filterNum(time.getHours())} : ${filterNum(time.getMinutes())} : ${filterNum(time.getSeconds())
          }`
        dom.firstChild.nodeValue = newTimeStr;
        dom2.firstChild.nodeValue = newTimeStr;
      }
      function filterNum (num) {
        if (num > 9) return num;
        return "0" + num;
      }
    })()
  