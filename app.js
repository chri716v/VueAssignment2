new Vue({
    el: '#app',
    data: {
        title: 'Using Vue Basic',
        bandName: "Your band name goes here",
        showDrums: false,
        classes: "coolOverskrift"
    },
    //methods
    methods: {
        playCrash() {
          console.log('playing')
          this.audio.play();
          
        },
        playKick() {
            console.log('playing')
            this.audio1.play();
            
        },
        playSnare() {
            console.log('playing')
            this.audio2.play();
            
        },
        playTom1() {
            console.log('playing')
            this.audio3.play();
            
        },
        playTom2() {
            console.log('playing')
            this.audio4.play();
            
        },
        playTom3() {
            console.log('playing')
            this.audio5.play();
            
        },
        playTom4() {
            console.log('playing')
            this.audio6.play();
            
        },
        toggleDrums(){
            this.showDrums = !this.showDrums;
        },
      },
      created() {
        this.audio = document.getElementById('crash');
        this.audio1 = document.getElementById('kick-base');
        this.audio2 = document.getElementById('snare');
        this.audio3 = document.getElementById('tom-1');
        this.audio4 = document.getElementById('tom-2');
        this.audio5 = document.getElementById('tom-3');
        this.audio6 = document.getElementById('tom-4');
      }
    })