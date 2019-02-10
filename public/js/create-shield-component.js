AFRAME.registerComponent('create-shield-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
           
            Context_AF.createshield();

            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createshield : function() {
        const Context_AF = this;

        let shieldElem = document.createElement('a-entity');
        shieldElem.setAttribute('obj-model', {obj:'/assets/models/HylianShield.obj'});
        shieldElem.setAttribute('id', 'bigshield');
        shieldElem.setAttribute('material', {src:'/assets/textures/HylianShield_BaseColor.png'});
        shieldElem.setAttribute('remove-component', {}); 
        shieldElem.setAttribute('position', {x:2, y:3, z:-4});
        shieldElem.setAttribute('scale',{x:.1, y:.1, z:.1});
        
      
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(shieldElem);
    }
});