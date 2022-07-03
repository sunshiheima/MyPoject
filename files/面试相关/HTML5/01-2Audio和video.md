Audio 和 Video(HTML5 中的多媒体支持)

# 重点

```html
<audio id="clickSound">
  <source src="a.ogg" />
  <source src="b.mp3" />
</audio>
<button id="toggle" onclick="toggleSound()">play</button>
```

```js
function toggleSound() {
  var music = document.getElementById("clickSound");
  var toggle = document.getElementById("toggle");
  if (music.paused) {
    music.play(); //播放
    toggle.innerHTML = "Pause";
  } else {
    music.pause(); //暂停播放
    toggle.innerHTML = "Play";
  }
}
```
