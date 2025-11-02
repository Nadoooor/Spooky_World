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
console.log("control panal loaded");
AFRAME.registerComponent('lightup', {
    init: function () {
        console.log("light up loaded");
        this.light = document.querySelector('#light');
        counter = 0;
        this.el.addEventListener('click', (e) => {
            console.log("light up clicked" + counter);
            counter = this.light.getAttribute('light').intensity;
            counter += 1;
            if (counter > 10){
                counter = 10;
            }
            this.light.setAttribute('light', 'intensity', counter);
            
        });
    }
});

AFRAME.registerComponent('lightdown', {
    init: function () {
        console.log("light up loaded");
        this.light = document.querySelector('#light');

        counter = 0;
        this.el.addEventListener('click', (e) => {
            counter = this.light.getAttribute('light').intensity;
            console.log("light up clicked" + counter);
            counter -= 1;
            if (counter < 0){
                counter =0;
            }
            this.light.setAttribute('light', 'intensity', counter);
            
        });
    }
});

AFRAME.registerComponent('morepums', {
    init: function () {
        this.el.addEventListener('click', (e) => {
            newpum = document.createElement('a-entity');
            newpum.setAttribute('gltf-model', '#pum');
            newpum.setAttribute('grap', '');
            newpum.setAttribute('class', 'draggable');
            newpum.setAttribute('ammo-body', 'type: dynamic; gravity: 0 -9.8 0;');
            newpum.setAttribute('ammo-shape', 'type: hull; offset: 0 0.01 0.02;');
            newpum.setAttribute('position', '5 2 5');
            newpum.setAttribute('scale', '0.007 0.007 0.007');
            scene = document.querySelector('a-scene');
            scene.appendChild(newpum);

        });

   } });