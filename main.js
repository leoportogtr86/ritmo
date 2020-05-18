var synth = new Tone.MembraneSynth().toDestination()

let n1
let n2
let n3
let n4
let n5
let n6
let n7
let n8
let n9
let n10
let n11
let n12
let n13
let n14
let n15
let n16


let line = document.querySelector('#line')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')




let c1 = document.querySelector('#c1')
let c2 = document.querySelector('#c2')
let c3 = document.querySelector('#c3')
let c4 = document.querySelector('#c4')

let img1 = document.getElementsByTagName('img')[0]

let img2 = document.getElementsByTagName('img')[1]

let img3 = document.getElementsByTagName('img')[2]

let img4 = document.getElementsByTagName('img')[3]

let img5 = document.getElementsByTagName('img')[4]

let img6 = document.getElementsByTagName('img')[5]

let img7 = document.getElementsByTagName('img')[6]

let img8 = document.getElementsByTagName('img')[7]

let img9 = document.getElementsByTagName('img')[8]

let img10 = document.getElementsByTagName('img')[9]

let img11 = document.getElementsByTagName('img')[10]

let img12 = document.getElementsByTagName('img')[11]

let img13 = document.getElementsByTagName('img')[12]

let img14 = document.getElementsByTagName('img')[13]

let img15 = document.getElementsByTagName('img')[14]

let img16 = document.getElementsByTagName('img')[15]

img1.style.display = 'none'
img2.style.display = 'none'
img3.style.display = 'none'
img4.style.display = 'none'
img5.style.display = 'none'
img6.style.display = 'none'
img7.style.display = 'none'
img8.style.display = 'none'
img9.style.display = 'none'
img10.style.display = 'none'
img11.style.display = 'none'
img12.style.display = 'none'
img13.style.display = 'none'
img14.style.display = 'none'
img15.style.display = 'none'
img16.style.display = 'none'

let estado_c1 = 0
let estado_c2 = 0
let estado_c3 = 0
let estado_c4 = 0
let estado_c5 = 0
let estado_c6 = 0
let estado_c7 = 0
let estado_c8 = 0
let estado_c9 = 0
let estado_c10 = 0
let estado_c11 = 0
let estado_c12 = 0
let estado_c13 = 0
let estado_c14 = 0
let estado_c15 = 0
let estado_c16 = 0

c1.onclick = function (){
   
   window.navigator.vibrate(50)
   
   estado_c1++
   
   if (estado_c1 == 0){
      
      c1.style.backgroundColor = '#e9e9e9'
      img1.style.display = 'none'
      
      
   } else if (estado_c1 == 1){
      
      c1.style.backgroundColor = 'greenyellow'
      img1.style.display = 'block'
      img1.style.transform = 'rotateZ(90deg)'
      
      
      
   } else if(estado_c1 == 2){
      
      c1.style.backgroundColor = 'red'
      img1.style.display = 'block'
      img1.style.transform = 'rotateZ(-90deg)'
      
      
   } else {
      
      estado_c1 = 0
      c1.style.backgroundColor = '#e9e9e9'
      img1.style.display = 'none'
      
   }
}

c2.onclick = function() {
   
   window.navigator.vibrate(50)

   estado_c2++

   if (estado_c2 == 0) {

      c2.style.backgroundColor = '#e9e9e9'
      img2.style.display = 'none'
      

   } else if (estado_c2 == 1) {

      c2.style.backgroundColor = 'greenyellow'
      img2.style.display = 'block'
      img2.style.transform = 'rotateZ(90deg)'
      


   } else if (estado_c2 == 2) {

      c2.style.backgroundColor = 'red'
      img2.style.display = 'block'
      img2.style.transform = 'rotateZ(-90deg)'
      

   } else {

      estado_c2 = 0
      c2.style.backgroundColor = '#e9e9e9'
      img2.style.display = 'none'
      
   }
}

c3.onclick = function() {
   
   window.navigator.vibrate(50)

   estado_c3++

   if (estado_c3 == 0) {

      c3.style.backgroundColor = '#e9e9e9'
      img3.style.display = 'none'

   } else if (estado_c3 == 1) {

      c3.style.backgroundColor = 'greenyellow'
      img3.style.display = 'block'
      img3.style.transform = 'rotateZ(90deg)'


   } else if (estado_c3 == 2) {

      c3.style.backgroundColor = 'red'
      img3.style.display = 'block'
      img3.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c3 = 0
      c3.style.backgroundColor = '#e9e9e9'
      img3.style.display = 'none'
   }
}

c4.onclick = function() {
   
   window.navigator.vibrate(50)

   estado_c4++

   if (estado_c4 == 0) {

      c4.style.backgroundColor = '#e9e9e9'
      img4.style.display = 'none'

   } else if (estado_c4 == 1) {

      c4.style.backgroundColor = 'greenyellow'
      img4.style.display = 'block'
      img4.style.transform = 'rotateZ(90deg)'


   } else if (estado_c4 == 2) {

      c4.style.backgroundColor = 'red'
      img4.style.display = 'block'
      img4.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c4 = 0
      c4.style.backgroundColor = '#e9e9e9'
      img4.style.display = 'none'
   }
}

c5.onclick = function() {

   window.navigator.vibrate(50)

   estado_c5++

   if (estado_c5 == 0) {

      c5.style.backgroundColor = '#e9e9e9'
      img5.style.display = 'none'

   } else if (estado_c5 == 1) {

      c5.style.backgroundColor = 'greenyellow'
      img5.style.display = 'block'
      img5.style.transform = 'rotateZ(90deg)'


   } else if (estado_c5 == 2) {

      c5.style.backgroundColor = 'red'
      img5.style.display = 'block'
      img5.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c5 = 0
      c5.style.backgroundColor = '#e9e9e9'
      img5.style.display = 'none'
   }
}

c6.onclick = function() {

   window.navigator.vibrate(50)

   estado_c6++

   if (estado_c6 == 0) {

      c6.style.backgroundColor = '#e9e9e9'
      img6.style.display = 'none'

   } else if (estado_c6 == 1) {

      c6.style.backgroundColor = 'greenyellow'
      img6.style.display = 'block'
      img6.style.transform = 'rotateZ(90deg)'


   } else if (estado_c6 == 2) {

      c6.style.backgroundColor = 'red'
      img6.style.display = 'block'
      img6.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c6 = 0
      c6.style.backgroundColor = '#e9e9e9'
      img6.style.display = 'none'
   }
}

c7.onclick = function() {

   window.navigator.vibrate(50)

   estado_c7++

   if (estado_c7 == 0) {

      c7.style.backgroundColor = '#e9e9e9'
      img7.style.display = 'none'

   } else if (estado_c7 == 1) {

      c7.style.backgroundColor = 'greenyellow'
      img7.style.display = 'block'
      img7.style.transform = 'rotateZ(90deg)'


   } else if (estado_c7 == 2) {

      c7.style.backgroundColor = 'red'
      img7.style.display = 'block'
      img7.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c7 = 0
      c7.style.backgroundColor = '#e9e9e9'
      img7.style.display = 'none'
   }
}

c8.onclick = function() {

   window.navigator.vibrate(50)

   estado_c8++

   if (estado_c8 == 0) {

      c8.style.backgroundColor = '#e9e9e9'
      img8.style.display = 'none'

   } else if (estado_c8 == 1) {

      c8.style.backgroundColor = 'greenyellow'
      img8.style.display = 'block'
      img8.style.transform = 'rotateZ(90deg)'


   } else if (estado_c8 == 2) {

      c8.style.backgroundColor = 'red'
      img8.style.display = 'block'
      img8.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c8 = 0
      c8.style.backgroundColor = '#e9e9e9'
      img8.style.display = 'none'
   }
}

c9.onclick = function() {

   window.navigator.vibrate(50)

   estado_c9++

   if (estado_c9 == 0) {

      c9.style.backgroundColor = '#e9e9e9'
      img9.style.display = 'none'

   } else if (estado_c9 == 1) {

      c9.style.backgroundColor = 'greenyellow'
      img9.style.display = 'block'
      img9.style.transform = 'rotateZ(90deg)'


   } else if (estado_c9 == 2) {

      c9.style.backgroundColor = 'red'
      img9.style.display = 'block'
      img9.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c9 = 0
      c9.style.backgroundColor = '#e9e9e9'
      img9.style.display = 'none'
   }
}

c10.onclick = function() {

   window.navigator.vibrate(50)

   estado_c10++

   if (estado_c10 == 0) {

      c10.style.backgroundColor = '#e9e9e9'
      img10.style.display = 'none'

   } else if (estado_c10 == 1) {

      c10.style.backgroundColor = 'greenyellow'
      img10.style.display = 'block'
      img10.style.transform = 'rotateZ(90deg)'


   } else if (estado_c10 == 2) {

      c10.style.backgroundColor = 'red'
      img10.style.display = 'block'
      img10.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c10 = 0
      c10.style.backgroundColor = '#e9e9e9'
      img10.style.display = 'none'
   }
}

c11.onclick = function() {

   window.navigator.vibrate(50)

   estado_c11++

   if (estado_c11 == 0) {

      c11.style.backgroundColor = '#e9e9e9'
      img11.style.display = 'none'

   } else if (estado_c11 == 1) {

      c11.style.backgroundColor = 'greenyellow'
      img11.style.display = 'block'
      img11.style.transform = 'rotateZ(90deg)'


   } else if (estado_c11 == 2) {

      c11.style.backgroundColor = 'red'
      img11.style.display = 'block'
      img11.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c11 = 0
      c11.style.backgroundColor = '#e9e9e9'
      img11.style.display = 'none'
   }
}

c12.onclick = function() {

   window.navigator.vibrate(50)

   estado_c12++

   if (estado_c12 == 0) {

      c12.style.backgroundColor = '#e9e9e9'
      img12.style.display = 'none'

   } else if (estado_c12 == 1) {

      c12.style.backgroundColor = 'greenyellow'
      img12.style.display = 'block'
      img12.style.transform = 'rotateZ(90deg)'


   } else if (estado_c12 == 2) {

      c12.style.backgroundColor = 'red'
      img12.style.display = 'block'
      img12.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c12 = 0
      c12.style.backgroundColor = '#e9e9e9'
      img12.style.display = 'none'
   }
}

c13.onclick = function() {

   window.navigator.vibrate(50)

   estado_c13++

   if (estado_c13 == 0) {

      c13.style.backgroundColor = '#e9e9e9'
      img13.style.display = 'none'

   } else if (estado_c13 == 1) {

      c13.style.backgroundColor = 'greenyellow'
      img13.style.display = 'block'
      img13.style.transform = 'rotateZ(90deg)'


   } else if (estado_c13 == 2) {

      c13.style.backgroundColor = 'red'
      img13.style.display = 'block'
      img13.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c13 = 0
      c13.style.backgroundColor = '#e9e9e9'
      img13.style.display = 'none'
   }
}

c14.onclick = function() {

   window.navigator.vibrate(50)

   estado_c14++

   if (estado_c14 == 0) {

      c14.style.backgroundColor = '#e9e9e9'
      img14.style.display = 'none'

   } else if (estado_c14 == 1) {

      c14.style.backgroundColor = 'greenyellow'
      img14.style.display = 'block'
      img14.style.transform = 'rotateZ(90deg)'


   } else if (estado_c14 == 2) {

      c14.style.backgroundColor = 'red'
      img14.style.display = 'block'
      img14.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c14 = 0
      c14.style.backgroundColor = '#e9e9e9'
      img14.style.display = 'none'
   }
}

c15.onclick = function() {

   window.navigator.vibrate(50)

   estado_c15++

   if (estado_c15 == 0) {

      c15.style.backgroundColor = '#e9e9e9'
      img15.style.display = 'none'

   } else if (estado_c15 == 1) {

      c15.style.backgroundColor = 'greenyellow'
      img15.style.display = 'block'
      img15.style.transform = 'rotateZ(90deg)'


   } else if (estado_c15 == 2) {

      c15.style.backgroundColor = 'red'
      img15.style.display = 'block'
      img15.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c15 = 0
      c15.style.backgroundColor = '#e9e9e9'
      img15.style.display = 'none'
   }
}

c16.onclick = function() {

   window.navigator.vibrate(50)

   estado_c16++

   if (estado_c16 == 0) {

      c16.style.backgroundColor = '#e9e9e9'
      img16.style.display = 'none'

   } else if (estado_c16 == 1) {

      c16.style.backgroundColor = 'greenyellow'
      img16.style.display = 'block'
      img16.style.transform = 'rotateZ(90deg)'


   } else if (estado_c16 == 2) {

      c16.style.backgroundColor = 'red'
      img16.style.display = 'block'
      img16.style.transform = 'rotateZ(-90deg)'

   } else {

      estado_c16 = 0
      c16.style.backgroundColor = '#e9e9e9'
      img16.style.display = 'none'
   }
}

let batida = document.querySelector('#batida')



start.onclick = function () {

   line.style.animation = 'play 4s linear infinite'
   batida.play()

   

   
}


stop.onclick = function () {
   
   line.style.animation = ''
   batida.pause()
   batida.currentTime = 0
}