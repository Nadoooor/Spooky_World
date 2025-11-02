AFRAME.registerComponent('music', {

    init: function () {
         this.sound = document.querySelector('#curs');
         current = this.sound.getAttribute('sound').src;
        musiclist = ["creepy-halloween-bell-trap-melody-247720.mp3", "creepy-halloween-bells-loop-408748.mp3", "cinematic-halloween-bells-loop-421592.mp3"];
         counter = 0;
      this.el.addEventListener('click', (e) => {
       counter += 1;
       if (counter >= 3){
            counter = 0;
       }
       this.sound.setAttribute('sound', 'src', musiclist[counter])

      });
    },
});

AFRAME.registerComponent('lightup', {
    init: function () {
        console.log("light up loaded");
        this.light = document.querySelector('#light');
        counter = 0;
        this.el.addEventListener('click', (e) => {
            console.log("light up clicked" + counter);
            counter += 1;
            if (counter > 5){
                counter = 5;
            }
            this.light.setAttribute('light', 'intenstiyy', counter);
            
        });
    }
});
