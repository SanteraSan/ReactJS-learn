(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[0],{131:function(e,t,a){e.exports={content:"Style_content__16A4z"}},132:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/Spinner-1s-200px.9064981b.svg"},137:function(e,t,a){e.exports={items:"dialog_items_items__OW-C5"}},164:function(e,t,a){e.exports=a(290)},169:function(e,t,a){},170:function(e,t,a){},18:function(e,t,a){e.exports={container:"Users_container__1gahj",wrapper:"Users_wrapper__1Qwy1",logo_button:"Users_logo_button__1sJlv",user_info:"Users_user_info__1g6w2",user_name_status:"Users_user_name_status__3j-ZG",name:"Users_name__1JVTp",status:"Users_status__mVXmE",location:"Users_location__-b0Fd",selectedPage:"Users_selectedPage__2muMN"}},20:function(e,t,a){e.exports={formControl:"formControl_formControl__2dxy4",error:"formControl_error__31xUb",formSummaryError:"formControl_formSummaryError__2khT-",textAreaProfile:"formControl_textAreaProfile__3wswq"}},27:function(e,t,a){e.exports={dialogs:"Dialog_dialogs__1PsFo",messages:"Dialog_messages__33gII",message:"Dialog_message__qVZhk",home:"Dialog_home__2Un3t",guest:"Dialog_guest__L8I1I"}},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(67),l=a.n(o),i=(a(169),a(30)),s=a(31),c=a(33),u=a(34),m=(a(170),a(8)),f=a.n(m),g=a(9),p=a(6),d=function(e){return r.a.createElement("div",{className:f.a.avatar},r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[0].link},e.dialogs[0].img),r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[1].link},e.dialogs[1].img),r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[2].link},e.dialogs[2].img))},E=Object(p.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}))(d),b=function(){return r.a.createElement("div",{className:f.a.navigat},r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.prof)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/profile"},"Profile")),r.a.createElement("div",{className:"".concat(f.a.message," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/dialogs"},"Message")),r.a.createElement("div",{className:"".concat(f.a.news," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/users"},"User")),r.a.createElement("div",{className:"".concat(f.a.news," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/news"},"News")),r.a.createElement("div",{className:"".concat(f.a.music," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/music"},"Music")),r.a.createElement("div",{className:"".concat(f.a.settings," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/settings"},"Settings")),r.a.createElement("div",{className:"".concat(f.a.friends)},r.a.createElement(g.b,{to:"/friends"},r.a.createElement("h3",null,"Friends")),r.a.createElement("div",{className:f.a.friendsItems},r.a.createElement(E,null))))},_=a(131),v=a.n(_),h=a(37),P=function(){return r.a.createElement("div",{className:"News"},"News")},O=a(132),S=a.n(O),N=function(){return r.a.createElement("div",{className:S.a.Settings},"Settings")},w=a(12),j=a.n(w),C=a(19),k=a(46),I=a(10),y=a(133).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"85c04d1a-48ca-445a-a2aa-989c2ecde80d"}}),A={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return y.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return y.delete("follow/".concat(e))},follow:function(e){return y.post("follow/".concat(e))},authMe:function(){return console.warn("Obsolete method. Please use profileAPI object"),x.authMe()},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),T.getProfile(e)}},x={authMe:function(){return y.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return y.post("auth/login",{email:e,password:t,rememberMe:a})},logout:function(){return y.delete("auth/login")}},T={getProfile:function(e){return y.get("profile/"+e)},getStatus:function(e){return y.get("profile/status/"+e)},updateStatus:function(e){return y.put("profile/status",{status:e})},saveProfile:function(e){return y.put("profile/",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),y.put("profile/photo",t)}},U={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(e){return{type:"FOLLOW",userId:e}},F=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},G=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},D=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},z=function(){var e=Object(C.a)(j.a.mark((function e(t,a,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(r(a)),t(D(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(I.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(I.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(I.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(I.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(I.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(I.a)({},e,{currentPage:t.currentPage});case"SET_CURRENT_COUNT":return Object(I.a)({},e,{totalUsersCount:t.currentCount});case"TOGGLE_IS_FETCHING":return Object(I.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(I.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},V=a(18),W=a.n(V),q=a(71),J=a.n(q),H=a(70),K=a(26),B=a(134),X=a.n(B),Y=function(e){for(var t=e.totalItemsCount,a=e.pageSize,o=e.currentPage,l=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,c=Math.ceil(t/a),u=[],m=1;m<=c;m++)u.push(m);var f=Math.ceil(c/s),g=Object(n.useState)(1),p=Object(K.a)(g,2),d=p[0],E=p[1],b=(d-1)*s+1,_=d*s;return r.a.createElement("div",{className:W.a.paginator},d>1&&r.a.createElement("button",{onClick:function(){E(d-1)}},"PREV"),u.filter((function(e){return e>=b&&e<=_})).map((function(e){return r.a.createElement("span",{className:X()(Object(H.a)({},W.a.selectedPage,o===e),W.a.pageNumber),key:e,onClick:function(){l(e)}}," ",e)})),f>d&&r.a.createElement("button",{onClick:function(){E(d+1)}},"NEXT"))},Z=function(e){return r.a.createElement("div",{className:W.a.container},r.a.createElement(Y,{totalItemsCount:e.totalUsersCount,currentPage:e.currentPage,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:W.a.wrapper},r.a.createElement("div",{className:W.a.logo_button},r.a.createElement(g.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:J.a,alt:"imaga must be here"})),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("div",{className:W.a.user_info},r.a.createElement("div",{className:W.a.user_name_status},r.a.createElement("div",{className:W.a.name},t.name),r.a.createElement("div",{className:W.a.status},t.status)),r.a.createElement("div",{className:W.a.location},r.a.createElement("span",null,"u.location.Country",","),r.a.createElement("br",null),r.a.createElement("span",null,"u.location.City"))))})))},Q=a(135),$=a.n(Q),ee=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:$.a,alt:""}))},te=function(e){return e.usersPage.users},ae=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},ie=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return console.log("render users"),r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ee,null):null,r.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),se=Object(p.b)((function(e){return console.log("mSTP users"),{users:te(e),pageSize:ae(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:oe(e),followingInProgress:le(e)}}),{follow:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(a,e,A.follow.bind(A),L);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(a,e,A.unfollow.bind(A),F);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:M,toggleFollowingProgress:D,getUsers:function(e,t){return function(){var a=Object(C.a)(j.a.mark((function a(n){var r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(G(!0)),n(M(e)),a.next=4,A.getUsers(e,t);case 4:r=a.sent,n(G(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_CURRENT_COUNT",currentCount:r.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ie),ce=a(126),ue=a(127),me=a(95),fe=a(20),ge=a.n(fe),pe=function(e){var t=e.input,a=e.meta,n=Object(me.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:o?ge.a.formControl+" "+ge.a.error:void 0},r.a.createElement("textarea",Object.assign({className:ge.a.textAreaProfile},t,n)),r.a.createElement("br",null),o&&r.a.createElement("span",null,a.error))},de=function(e){var t=e.input,a=e.meta,n=Object(me.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:o?ge.a.formControl+" "+ge.a.error:void 0},r.a.createElement("input",Object.assign({},t,n)),r.a.createElement("br",null),o&&r.a.createElement("span",null,a.error))},Ee=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(ce.a,Object.assign({placeholder:e,name:t,validate:a,component:n},o))," ",l)},be=function(e){if(!e)return"Field is required"},_e=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},ve=a(24),he={userId:null,login:null,email:null,isAuth:!1},Pe=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,login:t,email:a,isAuth:n}}},Oe=function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){var a,n,r,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.authMe();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,l=n.email,t(Pe(r,o,l,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(I.a)({},e,{},t.payload):e},Ne=function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(ce.a,{validate:[be],name:"email",component:de,placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement(ce.a,{validate:[be],name:"password",component:de,placeholder:"Password",type:"password"})),r.a.createElement("div",null,r.a.createElement(ce.a,{name:"rememberMe",component:"input",type:"checkbox"}),"remember me"),a&&r.a.createElement("div",{className:ge.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"Submit")))};Ne=Object(ue.a)({form:"loginPage"})(Ne);var we=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(C.a)(j.a.mark((function n(r){var o,l;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.login(e,t,a);case 2:0===(o=n.sent).data.resultCode?r(Oe()):(l=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(ve.a)("loginPage",{_error:l})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),je=a(27),Ce=a.n(je),ke={messages:[{id:1,message:"Hi"},{id:2,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis distinctio dolorum eaque,\n                et expedita fuga hic in ipsa laboriosam minus nam quam quos rerum similique, tempore tenetur voluptatem?"},{id:3,message:"Yo!!!!"}],dialogs:[{id:1,name:"Kirill",link:1,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:2,name:"Sasha",link:2,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:3,name:"Gulshatka",link:3,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:4,name:"Yurasya",link:4,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:5,name:"Svetlanka",link:5,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:6,name:"Mishanya",link:6,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:7,name:"Dimon",link:7,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})}]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:4,message:t.textareaName},n=Object(I.a)({},e);return n.messages=Object(k.a)(e.messages),n.messages.push(a),n;default:return e}},ye=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"".concat(Ce.a.message," ").concat(Ce.a.home)},e.message),r.a.createElement("div",{className:"".concat(Ce.a.message," ").concat(Ce.a.guest)},e.message))},Ae=_e(50),xe=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ce.a,{component:pe,name:"textareaName",placeholder:"Enter you message",validate:[be,Ae]})),r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))};xe=Object(ue.a)({form:"dialogMessageForm"})(xe);var Te=function(e){var t=e.messages.map((function(e){return r.a.createElement(ye,{key:e.id,message:e.message})}));return r.a.createElement("div",null,r.a.createElement("div",{className:Ce.a.messages},t),r.a.createElement(xe,{onSubmit:function(t){e.addMessages(t.textareaName)}}))},Ue=Object(p.b)((function(e){return{textAreaValue:e.dialogsPage.textAreaValue,messages:e.dialogsPage.messages}}),(function(e){return{updateNewMessageActionCreator:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:e}}(t))},addMessages:function(t){e(function(e){return{type:"ADD-MESSAGE",textareaName:e}}(t))}}}))(Te),Le=a(47),Fe=a.n(Le),Me=function(e){return r.a.createElement("div",{className:Fe.a.item},r.a.createElement(g.b,{className:Fe.a.imgLink,activeClassName:Fe.a.active,to:"/dialogs/"+e.link},e.img),r.a.createElement(g.b,{className:Fe.a.textLink,activeClassName:Fe.a.active,to:"/dialogs/"+e.link},e.name))},Ge=a(137),De=a.n(Ge),ze=function(e){var t=e.dialogs.map((function(e){return r.a.createElement(Me,{id:e.id,name:e.name,link:e.link,img:e.img})}));return r.a.createElement("div",{className:De.a.items},t)},Re=Object(p.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}))(ze),Ve=function(e){return r.a.createElement("div",{className:Ce.a.dialogs},r.a.createElement(Re,null),r.a.createElement(Ue,null))},We=a(36),qe=a.n(We),Je=Object(ue.a)({form:"Edit-profile-info"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.goEditMode,o=e.error;return r.a.createElement("div",{className:ge.a.infoProfile},a?r.a.createElement("form",{onSubmit:t},r.a.createElement("button",null,"Save"),"  ",r.a.createElement("button",{onClick:n},"close edit"),r.a.createElement("br",null),o&&r.a.createElement("div",{className:ge.a.formSummaryError},o),r.a.createElement("br",null),r.a.createElement("b",null,"FullName")," : ",Ee("full name","fullName",[],de)," ",r.a.createElement("br",null),r.a.createElement("b",null,"Looking for a job")," : ",a.lookingForAJob?"yes":"no",r.a.createElement(ce.a,{name:"lookingForAJob",component:"input",type:"checkbox"}),r.a.createElement("br",null),r.a.createElement("b",null,"lookingForAJobDescription")," : ",Ee("lookingForAJobDescription","lookingForAJobDescription",[],pe),r.a.createElement("b",null,"About me")," : ",Ee("About Me","aboutMe",[],de),r.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return r.a.createElement("div",{key:e,className:ge.a.contacts},r.a.createElement("b",null,e,": ",Ee(e,"contacts."+e,[],de)," "))}))):null)})),He=function(e){var t=e.profile,a=e.isOwner,n=e.goEditMode;return r.a.createElement("div",{className:qe.a.infoProfile},a?r.a.createElement("button",{onClick:n},"edit mode"):null,t?r.a.createElement("div",null,r.a.createElement("b",null,"FullName")," : ",t.fullName," ",r.a.createElement("br",null),r.a.createElement("b",null,"Looking for a job")," : ",t.lookingForAJob?"yes":"no",r.a.createElement("br",null),r.a.createElement("b",null,"About me"),": ",t.aboutMe,r.a.createElement("br",null),r.a.createElement("b",null,"Professional skills"),": ",t.lookingForAJobDescription,r.a.createElement("br",null),r.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return r.a.createElement(Ke,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))):null)},Ke=function(e){var t=e.contactTitle,a=e.contactValue;return r.a.createElement("div",{className:qe.a.contacts},r.a.createElement("b",null,t),": ",a)},Be=function(e){var t=Object(n.useState)(!1),a=Object(K.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",null,o?r.a.createElement(Je,{initialValues:e.profile,goEditMode:function(){l(!1)},profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){l(!1)}))}}):r.a.createElement(He,{goEditMode:function(){l(!0)},profile:e.profile,isOwner:e.isOwner}))},Xe=function(e){var t=Object(n.useState)({visibility:"hidden"}),a=Object(K.a)(t,2),o=a[0],l=a[1];if(!e.profile)return r.a.createElement(ee,null);return r.a.createElement("div",null,r.a.createElement("img",{className:qe.a.imaga,onClick:function(){l({visibility:"visible"})},src:e.profile.photos.large||J.a,alt:""}),r.a.createElement("br",null),e.isOwner&&r.a.createElement("input",{style:o,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}))},Ye={posts:[{id:1,greet:"hello",likeCounts:15},{id:2,greet:"hi",likeCounts:20}],textAreaValue:"some text",profile:null,status:"Please Sign in https://social-network.samuraijs.com"},Ze=function(e){return{type:"SET_STATUS",status:e}},Qe=function(e){return function(t){A.getProfile(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},$e=function(e){return function(t){T.updateStatus(e).then((function(a){0===a.data.resultCode&&t(Ze(e))}))}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:3,greet:t.profileAddPost,likeCount:0},n=Object(I.a)({},e);return n.posts=[].concat(Object(k.a)(e.posts),[a]),n.textAreaValue="",n;case"SET_USERS_PROFILE":return Object(I.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(I.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(I.a)({},e,{profile:Object(I.a)({},e.profile,{photos:t.photos})});case"UPDATE-NEW-POST-TEXT":var r=Object(I.a)({},e);return r.textAreaValue=t.newText,r;default:return e}},tt=function(e){var t=Object(n.useState)(!1),a=Object(K.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(e.status),s=Object(K.a)(i,2),c=s[0],u=s[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status)),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},value:c,autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(c)}})))};var at=Object(p.b)((function(e){return{status:e.profilePage.status}}),{updateStatus:$e})((function(e){return r.a.createElement(tt,{status:e.status,updateStatus:e.updateStatus})})),nt=function(e){return r.a.createElement("div",{className:"info_logo"},e.profile&&r.a.createElement("h2",{className:qe.a.profileName},e.profile.fullName),r.a.createElement("div",{className:qe.a.logoInfoContainer},r.a.createElement(Xe,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile}),r.a.createElement(Be,{profile:e.profile,isOwner:e.isOwner,saveProfile:e.saveProfile})),r.a.createElement(at,null))},rt=a(57),ot=a.n(rt),lt=a(58),it=a.n(lt),st=function(e){return r.a.createElement("div",{className:it.a.post},r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""}),e.message,r.a.createElement("br",null),r.a.createElement("span",null,"like"),e.likeCounts)},ct=_e(15),ut=r.a.memo((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:it.a.some},r.a.createElement(ce.a,{component:pe,name:"profileAddPost",placeholder:"Enter you message",validate:[be,ct]})),r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}));ut=Object(ue.a)({form:"profileForm"})(ut);var mt=function(e){var t=e.posts.map((function(e){return r.a.createElement(st,{key:e.id,message:e.greet,likeCounts:e.likeCounts})}));return r.a.createElement("div",{className:it.a.myPosts},r.a.createElement("h3",null,"My Posts"),r.a.createElement(ut,{onSubmit:function(t){e.addPost(t.profileAddPost)}}),r.a.createElement("br",null),t)},ft=Object(p.b)((function(e){return{textAreaValue:e.profilePage.textAreaValue,posts:e.profilePage.posts}}),{addPost:function(e){return{type:"ADD-POST",profileAddPost:e}},updateNewPost:function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}})(mt),gt=function(e){return r.a.createElement("div",{className:ot.a.prof},r.a.createElement("div",{className:ot.a.LogoInfoPosts},r.a.createElement(nt,{saveProfile:e.saveProfile,profile:e.profile,isOwner:e.isOwner,savePhoto:e.savePhoto}),r.a.createElement(ft,null)))},pt=function(e){return e.profilePage.profile},dt=function(e){return e.profilePage.status},Et=function(e){return e.auth.userId},bt=a(11);var _t=Object(bt.d)(Object(p.b)((function(e){return{profile:pt(e),status:dt(e),authorizeUserId:Et(e)}}),{getStatus:function(e){return function(t){T.getStatus(e).then((function(e){t(Ze(e.data))}))}},updateStatus:$e,getProfileData:Qe,savePhoto:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a,n){var r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,T.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=9;break}a(Qe(r)),t.next=11;break;case 9:return a(Object(ve.a)("Edit-profile-info",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),h.f)((function(e){console.log("render");var t=e.match.params.userId,a=e.authorizeUserId;return Object(n.useEffect)((function(){var n=t;n||(n=a),e.getProfileData(n),e.getStatus(n)}),[e.match.params.userId,e.authorizeUserId]),r.a.createElement("div",{className:ot.a.profile},r.a.createElement(gt,Object.assign({},e,{isOwner:!e.match.params.userId,savePhoto:e.savePhoto,saveProfile:e.saveProfile})))})),vt=function(){return r.a.createElement("div",{className:v.a.content},r.a.createElement(h.b,{path:"/dialogs",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(_t,null)}}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(h.b,{path:"/news",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(h.b,{path:"/music",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(h.b,{path:"/settings",render:function(){return r.a.createElement(N,null)}}))},ht=a(94),Pt=a.n(ht),Ot=function(e){return r.a.createElement("div",{className:Pt.a.header},r.a.createElement(g.b,{to:"/home"},r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})),"Header",r.a.createElement("div",{className:Pt.a.login_block},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("br",null),r.a.createElement("button",{onClick:e.logout},"LogOut")):r.a.createElement(g.b,{to:"/login"},"Login")))},St=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Ot,this.props)}}]),a}(r.a.Component),Nt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.logout();case 2:0===e.sent.data.resultCode&&t(Pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},letsAuth:Oe,setAuthUserData:Pe})(St),wt={initialize:!0},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZING_SUCCESS"===t.type?Object(I.a)({},e,{initialize:!0}):e},Ct=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.setInitializeSuccess()}},{key:"render",value:function(){return this.props.initialize?r.a.createElement(g.a,null,r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(Nt,null),r.a.createElement(b,null),r.a.createElement(vt,null))):r.a.createElement(ee,null)}}]),a}(n.Component),kt=Object(p.b)((function(e){return{initialize:e.app.initialize}}),{setInitializeSuccess:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:"INITIALIZING_SUCCESS"})}))}}})(Ct),It=a(138),yt=a(128),At=Object(bt.c)({profilePage:et,dialogsPage:Ie,usersPage:R,auth:Se,form:yt.a,app:jt}),xt=Object(bt.e)(At,Object(bt.a)(It.a));window.store=xt;var Tt=xt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:Tt},r.a.createElement(kt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports={imaga:"info_logo_imaga__5kUnd",VisibleInputImg:"info_logo_VisibleInputImg__dhI18",HiddenInputImg:"info_logo_HiddenInputImg__2KKNn",profileName:"info_logo_profileName__vezLi",logoInfoContainer:"info_logo_logoInfoContainer__3DfWd",infoProfile:"info_logo_infoProfile__1zOvz",contacts:"info_logo_contacts__jqdF1"}},47:function(e,t,a){e.exports={item:"item_dialog_item__dC-KW",textLink:"item_dialog_textLink__1pgKC",active:"item_dialog_active__2s_53",imgLink:"item_dialog_imgLink__1a-WS"}},57:function(e,t,a){e.exports={prof:"profile_prof__1xAzO",image:"profile_image__qnT4o",LogoInfoPosts:"profile_LogoInfoPosts__2NqB0"}},58:function(e,t,a){e.exports={post:"post_post__1FhAV",myPosts:"post_myPosts__3iEfK"}},71:function(e,t,a){e.exports=a.p+"static/media/png-transparent-computer-icons-user-icon-design-help-portal-computer-orange-sphere.7fc247f2.png"},8:function(e,t,a){e.exports={item:"nav_item__3dQhv",active:"nav_active__C5w4M",navigat:"nav_navigat__-BZYA",imgLink:"nav_imgLink__1i3V-",settings:"nav_settings__36NUo",friends:"nav_friends__3Bg4m",friendsItems:"nav_friendsItems__3CDGI"}},94:function(e,t,a){e.exports={header:"Header_header__O7Ceu",login_block:"Header_login_block__1jdTY"}}},[[164,1,2]]]);
//# sourceMappingURL=main.dd61b1a0.chunk.js.map