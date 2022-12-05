AFRAME.registerComponent('cursor-listener',{
    schema:{
        selectedItemId: {default:'',type:'string'},
    },
    init:function(){
    this.handleMouseEnterEvents()
    this.handleMouseLeaveEvents()
    },
    handlePlacesListState: function(){
        const id = this.el.getAttribute('id')
        const placesId = ["avengers", "spider-man", "iron-man", "thor"]
        if(placesId.includes(id)){
            const placeContainer = document.querySelector('#places-container')
            placeContainer.setAttribute('cursor-listener',{
                selectedItemId: id
            })
            this.el.setAttribute('material',{
                color: "blue", opacity: 1,
            })
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter',()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener('mouseleave',()=>{
        const {selectedItemId} = this.data
        if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`)
            const id = el.getAttribute('id')
            if(id == selectedItemId){
                el.setAttribute('material',{
                    color:'white',
                    opacity: 4
                })
            }
        }
        })
    }
},)