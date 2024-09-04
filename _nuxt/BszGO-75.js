import{m as y,a as g,c as i,b as e,d as I,h as w,i as f,w as a,j as h,F as p,r as u,k as v,v as r,o as n,t as M}from"./CSEihjz1.js";import{u as D}from"./NFWHnx46.js";import{u as b}from"./Ddbx9Co7.js";import k from"./OZNxI520.js";import"./Ca6lpOo8.js";const P={class:"row"},C={class:"col-6"},F={class:"col-6"},S={class:"row"},V={class:"col-md-3"},$=["value"],A={class:"col-md-3"},N={class:"col-md-3"},U={key:0,class:"row"},E={class:"col-md-3"},L=["value"],Y={class:"col-md-3"},B={class:"col-md-3"},j={key:1,class:"movie-details"},O={class:"row"},T={class:"col-md-8"},q={class:"row"},z={class:"col-md-8"},G={class:"row"},H={class:"col-md-8"},J={class:"row"},K={class:"col-2"},Q=["src"],R={class:"col"},W={class:"row"},X={class:"col-md-8"},Z={class:"row"},_={class:"col-md-8"},x={key:0},ee={class:"col-md-4"},te=["src"],se={class:"col-md-4"},oe=["onUpdate:modelValue"],le={class:"col-md-4"},ie=["onClick"],ne={class:"row"},de={class:"col-12"},ae={class:"row"},re={class:"col-md-6"},me={class:"col-md-6"},ve={data(){return{selectedDepartmentIndex:null,selectedMovieIndex:null,coverImageFile:null,photoFile:null}},computed:{...y(D,["departments"]),selectedDepartment(){return this.selectedDepartmentIndex!==null?this.departments[this.selectedDepartmentIndex]:null},selectedMovie(){var l;return this.selectedDepartment&&this.selectedMovieIndex!==null?(l=this.selectedDepartment)==null?void 0:l.Movies[this.selectedMovieIndex]:null}},watch:{selectedDepartmentIndex(){this.selectedMovieIndex=0}},methods:{...g(D,["saveDepartment","saveAllDepartments"]),addDepartment(){const l={Department:`New Department ${this.departments.length+1}`,Movies:[]};this.$departmentStore.departments.push(l),this.selectedDepartmentIndex=this.$departmentStore.departments.length-1},deleteDepartment(){this.selectedDepartmentIndex!==null&&(this.$departmentStore.departments.splice(this.selectedDepartmentIndex,1),this.selectedDepartmentIndex=null,this.selectedMovieIndex=null)},addMovie(){var s,t,m;const l={Name:`New Movie ${((s=this.selectedDepartment)==null?void 0:s.Movies.length)+1}`,Link:"",Image:"",Years:"",Description:"",Photos:[]};(t=this.selectedDepartment)==null||t.Movies.push(l),this.selectedMovieIndex=((m=this.selectedDepartment)==null?void 0:m.Movies.length)-1},deleteMovie(){var l;this.selectedMovieIndex!==null&&((l=this.selectedDepartment)==null||l.Movies.splice(this.selectedMovieIndex,1),this.selectedMovieIndex=null)},addPhoto(){this.selectedMovie&&this.selectedMovie.Photos.push("")},deletePhoto(l){this.selectedMovie&&this.selectedMovie.Photos.splice(l,1)},async onFileChange(l){const s=l.target.files[0];if(s)try{const t=await b(s,`movies/${this.selectedDepartment.id}/${this.selectedMovieIndex}/coverImages/${s.name}`);this.selectedMovie.Image=t}catch(t){console.error("Error uploading cover image:",t)}},async onPhotoFileChange(l){const s=l.target.files[0];if(s)try{const t=await b(s,`movies/${this.selectedDepartment.id}/${this.selectedMovieIndex}/photos/${s.name}`);this.selectedMovie.Photos.push(t)}catch(t){console.error("Error uploading photo:",t)}},async saveMovie(){this.selectedDepartment&&this.selectedMovie&&await this.saveDepartment({department:this.selectedDepartment}).then(()=>{alert("Movie saved successfully.")}).catch(l=>{console.error("Error saving movie:",l),alert("Failed to save movie.")})},async saveAllMovies(){await this.saveAllDepartments().then(()=>{alert("All departments saved successfully.")}).catch(l=>{console.error("Error saving all departments:",l),alert("Failed to save all departments.")})}},mounted(){this.selectedDepartmentIndex=0,this.selectedMovieIndex=0}},De=Object.assign(ve,{__name:"Film",setup(l){return(s,t)=>{var m;return n(),i("div",P,[e("div",C,[I(w(k))]),e("div",F,[e("form",{onSubmit:t[16]||(t[16]=f((...o)=>s.submitForm&&s.submitForm(...o),["prevent"]))},[e("div",S,[t[17]||(t[17]=e("div",{class:"col-md-3"},[e("label",{for:"department-select"},"Select Department:")],-1)),e("div",V,[a(e("select",{id:"department-select","onUpdate:modelValue":t[0]||(t[0]=o=>s.selectedDepartmentIndex=o)},[(n(!0),i(p,null,u(s.departments,(o,d)=>(n(),i("option",{key:d,value:d},M(o.Department),9,$))),128))],512),[[h,s.selectedDepartmentIndex]])]),e("div",A,[e("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=(...o)=>s.addDepartment&&s.addDepartment(...o))}," Add Department ")]),e("div",N,[s.selectedDepartmentIndex!==null?(n(),i("button",{key:0,class:"btn btn-danger",type:"button",onClick:t[2]||(t[2]=(...o)=>s.deleteDepartment&&s.deleteDepartment(...o))}," Delete Department ")):v("",!0)])]),s.selectedDepartmentIndex!==null?(n(),i("div",U,[t[18]||(t[18]=e("div",{class:"col-md-3"},[e("label",{for:"movie-select"},"Select Movie:")],-1)),e("div",E,[a(e("select",{id:"movie-select","onUpdate:modelValue":t[3]||(t[3]=o=>s.selectedMovieIndex=o)},[(n(!0),i(p,null,u((m=s.selectedDepartment)==null?void 0:m.Movies,(o,d)=>(n(),i("option",{key:d,value:d},M(o.Name),9,L))),128))],512),[[h,s.selectedMovieIndex]])]),e("div",Y,[e("button",{class:"btn btn-primary",type:"button",onClick:t[4]||(t[4]=(...o)=>s.addMovie&&s.addMovie(...o))}," Add Movie ")]),e("div",B,[s.selectedMovieIndex!==null?(n(),i("button",{key:0,class:"btn btn-danger",type:"button",onClick:t[5]||(t[5]=(...o)=>s.deleteMovie&&s.deleteMovie(...o))}," Delete Movie ")):v("",!0)])])):v("",!0),s.selectedMovieIndex!==null&&s.selectedMovie?(n(),i("div",j,[e("div",O,[t[19]||(t[19]=e("div",{class:"col-md-4"},[e("label",null,"Name")],-1)),e("div",T,[a(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=o=>s.selectedMovie.Name=o),style:{width:"inherit"}},null,512),[[r,s.selectedMovie.Name]])])]),e("div",q,[t[20]||(t[20]=e("div",{class:"col-md-4"},[e("label",null,"Link")],-1)),e("div",z,[a(e("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=o=>s.selectedMovie.Link=o),style:{width:"inherit"}},null,512),[[r,s.selectedMovie.Link]])])]),e("div",G,[t[21]||(t[21]=e("div",{class:"col-md-4"},[e("label",null,"Cover Image")],-1)),e("div",H,[e("div",J,[e("div",K,[e("img",{src:s.selectedMovie.Image,height:"100"},null,8,Q)]),e("div",R,[e("input",{type:"file",onChange:t[8]||(t[8]=(...o)=>s.onFileChange&&s.onFileChange(...o))},null,32),a(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=o=>s.selectedMovie.Image=o),style:{width:"inherit"}},null,512),[[r,s.selectedMovie.Image]])])])])]),e("div",W,[t[22]||(t[22]=e("div",{class:"col-md-4"},[e("label",null,"Years")],-1)),e("div",X,[a(e("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=o=>s.selectedMovie.Years=o),style:{width:"inherit"}},null,512),[[r,s.selectedMovie.Years]])])]),e("div",Z,[t[23]||(t[23]=e("div",{class:"col-md-4"},[e("label",null,"Description")],-1)),e("div",_,[a(e("textarea",{"onUpdate:modelValue":t[11]||(t[11]=o=>s.selectedMovie.Description=o),style:{width:"inherit"},rows:"5"},null,512),[[r,s.selectedMovie.Description]])])]),s.selectedMovie.Photos&&s.selectedMovie.Photos.length?(n(),i("div",x,[t[24]||(t[24]=e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("label",null,"Photos")])],-1)),(n(!0),i(p,null,u(s.selectedMovie.Photos,(o,d)=>(n(),i("div",{key:d,class:"photo row"},[e("div",ee,[e("img",{src:o,height:"100"},null,8,te)]),e("div",se,[a(e("input",{type:"text","onUpdate:modelValue":c=>s.selectedMovie.Photos[d]=c,style:{width:"inherit"}},null,8,oe),[[r,s.selectedMovie.Photos[d]]])]),e("div",le,[e("button",{class:"btn btn-danger",type:"button",onClick:c=>s.deletePhoto(d)}," Delete Photo ",8,ie)])]))),128))])):v("",!0),e("div",ne,[e("div",de,[e("button",{type:"button",onClick:t[12]||(t[12]=(...o)=>s.addPhoto&&s.addPhoto(...o))}," Add Photo "),e("input",{type:"file",onChange:t[13]||(t[13]=(...o)=>s.onPhotoFileChange&&s.onPhotoFileChange(...o))},null,32)])]),e("div",ae,[e("div",re,[e("button",{class:"btn btn-primary",type:"button",onClick:t[14]||(t[14]=(...o)=>s.saveMovie&&s.saveMovie(...o))}," Save Movie ")]),e("div",me,[e("button",{class:"btn btn-primary",type:"button",onClick:t[15]||(t[15]=(...o)=>s.saveAllMovies&&s.saveAllMovies(...o))}," Save All Departments ")])])])):v("",!0)],32)])])}}});export{De as default};
