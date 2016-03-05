#三天內學會CSS3 Animation
一直以來我對CSS3 Animation這件事情並沒有特別專注研究(如果需要也是用javascript完成XD)，直到最近因為工作需要才開始練習。以下紀錄一些我在這三天內看的資料和做的小練習(不是教學文)。

一開始先到[W3School](http://www.w3schools.com/css/css3_animations.asp)先把所有指令快速看一次，大概熟悉這些指令和屬性就可以了。  

- @keyframes：放置動畫程式碼的地方。
- animation：總稱，包含animation-delay、animation-direction、animation-duration、animation-fill-mode、animation-iteration-count、animation-name、animation-play-state和animation-timing-function。
- animation-delay：動畫延遲多久才開始。
- animation-direction：動畫進行的方向。
- animation-duration：動畫從開始到結束需要多少時間。
- animation-fill-mode：動畫結束時停留的狀態，維持在初始或結束時等狀態。
- animation-iteration-count：動畫重覆次數，可設定無限次。
- animation-name：@keyframes的名稱。
- animation-play-state：動畫撥放或暫停。
- animation-timing-function：運動曲線函數，例如：ease、linear等。

並做了一個非常簡單樸素的練習。  

![CSS3 Animation](https://goo.gl/S1kVef)  

是不是單純的可愛呢 XD

然後再到[MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Animations/Using_CSS_animations)補一下細節，對指令有較深入的了解，接下來就可以找些較複雜的範例來練習了(照著打就對了)。

第一個範例是[Old School Clock with CSS3 and jQuery](https://css-tricks.com/css3-clock)，文章內會一步一步帶著大家完成。雖然範例中沒有用到`@keyframes`，但如果你跟我一樣習慣用javascript操作物件，這是一個讓人卸下緊張害怕的心防的好練習題噢(其實也沒那麼神祕嘛！)，之後要改寫成純粹的CSS3 Animation也沒問題。  

![CSS3 Animation - Old School Clock with CSS3 and jQuer](https://goo.gl/c1AnKY)

再來，就是來做比較複雜的練習，把在Tutorial學到的都應用上去 - [Solar System animation - Pure CSS](http://codepen.io/kowlor/pen/ZYYQoy)。

![CSS3 Animation - Solar System animation - Pure CSS](https://goo.gl/m9E0CR)

再來個有時序概念的練習...[CSS3 Graph Animation](http://www.alessioatzeni.com/blog/css3-graph-animation)

![CSS3 Graph Animation](https://goo.gl/2rU3Wm)

順便推薦兩個我滿喜歡的範例...[A love for Cats](http://codepen.io/charisseysabel/pen/adXGMe)和[Animated CSS3 Heart](http://codepen.io/N_R_Web_Designer/pen/zxwVKX)。如果有時間的話多練習這兩個也不錯。

![CSS3 Animation - A love for Cats](https://goo.gl/aZIj43)  

![Animated CSS3 Heart](https://goo.gl/SdQbap)  

做完以上範例就提槍上戰場啦。

---
##References
###Tutorial
- [CSS3 Animations | W3School](http://www.w3schools.com/css/css3_animations.asp)：W3School的CSS3 Animations講得非常淺顯易懂，如果想要先快速有個概念，這是一個很好的選擇。
- [CSS 動畫 - CSS | MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Animations/Using_CSS_animations)：對於每個指令有較深入的說明，可以補充和當字典查詢。

###Exmaple
- [Old School Clock with CSS3 and jQuery](https://css-tricks.com/css3-clock)：非常適合第一次接觸CSS3 Animation來做的第一個練習，結構簡單。
- [CSS 3D Solar System](http://codepen.io/juliangarnier/pen/idhuG)：漂亮的太陽系動畫。
- [Solar System animation - Pure CSS](http://codepen.io/kowlor/pen/ZYYQoy)：也是一個漂亮的太陽系動畫，但結構較簡單。
- [CSS3 Graph Animation](http://www.alessioatzeni.com/blog/css3-graph-animation)：有時序概念。
- [A love for Cats](http://codepen.io/charisseysabel/pen/adXGMe)
- [Animated CSS3 Heart](http://codepen.io/N_R_Web_Designer/pen/zxwVKX)