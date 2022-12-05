AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "avengers",
          url: "./images/comic1.png",
        },
        {
          id: "spider-man",
          url: "./images/comic2.png",
        },
                                                                                          
        {
          id: "iron-man",
          url: "./images/comic3.png",
        },
        {
          id: "thor",
          url: "./images/comic4.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
       const thumbnails = this.createThumbnail(item)
       borderEl.appendChild(thumbnails)
        // Title Text Element
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('id',id)
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{primitive:'box',height:25,width:19,depth:0.1})
      entityEl.setAttribute('position',position)
      entityEl.setAttribute('material',{color:'white',opacity:04})
      entityEl.setAttribute('cursor-listener',{})
      return entityEl
    },
    createThumbnail:function(item){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{primitive:'box',height:23,width:17,depth:0.2})
      entityEl.setAttribute('material',{src:item.url})
      return entityEl
    },
  });
  