export default {
  data(){
    return{
      agent:''
    }
  },
  methods:{
    jump(src){
      window.location.href=src;
    }
  },
  created(){
    this.agent=localStorage.getItem('agent')
  }
}
