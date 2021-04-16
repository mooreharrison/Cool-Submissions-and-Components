Vue.component('codenames', {
  props:['name','codename'],
	data: function(){
		return{
			propname:this.name
		}
	},
	methods:{
		nameChange:function(){
			if (this.propname==this.name){
				this.propname=this.codename;
			}else{
				this.propname=this.name;
			}
		}
	},
  template:'<div v-on:click="nameChange()">{{propname}}</div>'
})

var app =new Vue({
  el:"#app",
  data:{
    name:"",
    email:"",
	 mess:"",
	 submitted:"",
    list:[
		 {name:"Protagonist",codename:"Joker"},
		 {name:"Anne",codename:"Panther"},
		 {name:"Ryuji",codename:"Skull"}
	 ]
  },
  computed:{
 
  },
  watch:{
    name: function(){
      this.check();
    },
	 email: function(){
		this.check();
	 }
  },
	methods:{
		check: function(){
			if(this.name==""){
				this.mess="";
				this.submitted="";
			}else if(this.name.length<2){
				this.mess="Name needs to be greater than 2 characters.";
				this.submitted="Not Submitted";
			}else{
				if (this.validation(this.email)==true){
					this.mess="";
					this.submitted="Submitted";
				}else{
					this.mess="Email address needs to be valid.";
					this.submitted="Not Submitted";
				}
			}
		},
		validation: function(address){
			var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
			if(address.match(mailformat)){
				return true;
			}else{
				return false;
			}
		}
	}
})