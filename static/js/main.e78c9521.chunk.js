(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[0],{128:function(e,t,a){e.exports={content:"Style_content__16A4z"}},129:function(e,t,a){},131:function(e,t,a){e.exports=a.p+"static/media/png-transparent-computer-icons-user-icon-design-help-portal-computer-orange-sphere.7fc247f2.png"},132:function(e,t,a){e.exports=a.p+"static/media/Spinner-1s-200px.9064981b.svg"},134:function(e,t,a){e.exports={items:"dialog_items_items__OW-C5"}},161:function(e,t,a){e.exports=a(288)},166:function(e,t,a){},167:function(e,t,a){},26:function(e,t,a){e.exports={container:"Users_container__1gahj",wrapper:"Users_wrapper__1Qwy1",logo_button:"Users_logo_button__1sJlv",user_info:"Users_user_info__1g6w2",user_name_status:"Users_user_name_status__3j-ZG",name:"Users_name__1JVTp",status:"Users_status__mVXmE",location:"Users_location__-b0Fd",selectedPage:"Users_selectedPage__2muMN"}},27:function(e,t,a){e.exports={dialogs:"Dialog_dialogs__1PsFo",messages:"Dialog_messages__33gII",message:"Dialog_message__qVZhk",home:"Dialog_home__2Un3t",guest:"Dialog_guest__L8I1I"}},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(63),s=a.n(o),i=(a(166),a(21)),l=a(22),c=a(23),u=a(24),m=(a(167),a(9)),f=a.n(m),g=a(8),p=a(5),d=function(e){return r.a.createElement("div",{className:f.a.avatar},r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[0].link},e.dialogs[0].img),r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[1].link},e.dialogs[1].img),r.a.createElement(g.b,{className:f.a.imgLink,to:"/dialogs/"+e.dialogs[2].link},e.dialogs[2].img))},E=Object(p.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}))(d),_=function(){return r.a.createElement("div",{className:f.a.navigat},r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.prof)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/profile"},"Profile")),r.a.createElement("div",{className:"".concat(f.a.message," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/dialogs"},"Message")),r.a.createElement("div",{className:"".concat(f.a.news," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/users"},"User")),r.a.createElement("div",{className:"".concat(f.a.news," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/news"},"News")),r.a.createElement("div",{className:"".concat(f.a.music," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/music"},"Music")),r.a.createElement("div",{className:"".concat(f.a.settings," ").concat(f.a.item)},r.a.createElement(g.b,{activeClassName:f.a.active,to:"/settings"},"Settings")),r.a.createElement("div",{className:"".concat(f.a.friends)},r.a.createElement(g.b,{to:"/friends"},r.a.createElement("h3",null,"Friends")),r.a.createElement("div",{className:f.a.friendsItems},r.a.createElement(E,null))))},h=a(128),v=a.n(h),b=a(33),O=function(){return r.a.createElement("div",{className:"News"},"News")},P=function(){return r.a.createElement("div",{className:"Music"},"Music")},S=a(129),N=a.n(S),w=function(){return r.a.createElement("div",{className:N.a.Settings},"Settings")},j=a(13),C=a.n(j),k=a(28),y=a(44),I=a(11),T=a(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"85c04d1a-48ca-445a-a2aa-989c2ecde80d"}}),A={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return T.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return T.delete("follow/".concat(e))},follow:function(e){return T.post("follow/".concat(e))},authMe:function(){return console.warn("Obsolete method. Please use profileAPI object"),U.authMe()},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),x.getProfile(e)}},U={authMe:function(){return T.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return T.post("auth/login",{email:e,password:t,rememberMe:a})},logout:function(){return T.delete("auth/login")}},x={getProfile:function(e){return T.get("profile/"+e)},getStatus:function(e){return T.get("profile/status/"+e)},updateStatus:function(e){return T.put("profile/status",{status:e})}},L=function(e,t,a,n){e.map((function(e){return e[t]===a?Object(I.a)({},e,{},n):e}))},G={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},F=function(e){return{type:"FOLLOW",userId:e}},D=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},z=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},R=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},W=function(){var e=Object(k.a)(C.a.mark((function e(t,a,n,r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(r(a)),t(R(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(I.a)({},e,{users:L(e.users,"id",t.userId,{followed:!0})});case"UNFOLLOW":return Object(I.a)({},e,{users:L(e.users,"id",t.userId,{followed:!1})});case"SET_USERS":return Object(I.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(I.a)({},e,{currentPage:t.currentPage});case"SET_CURRENT_COUNT":return Object(I.a)({},e,{totalUsersCount:t.currentCount});case"TOGGLE_IS_FETCHING":return Object(I.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(I.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},q=a(26),B=a.n(q),H=a(131),K=a.n(H),Y=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",{className:B.a.container},r.a.createElement("div",null,a.map((function(t){return r.a.createElement("span",{className:e.currentPage===t&&B.a.selectedPage,onClick:function(){e.onPageChanged(t)}}," ",t)}))),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:B.a.wrapper},r.a.createElement("div",{className:B.a.logo_button},r.a.createElement(g.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:K.a,alt:"imaga must be here"})),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("div",{className:B.a.user_info},r.a.createElement("div",{className:B.a.user_name_status},r.a.createElement("div",{className:B.a.name},t.name),r.a.createElement("div",{className:B.a.status},"u.status")),r.a.createElement("div",{className:B.a.location},r.a.createElement("span",null,"u.location.Country",","),r.a.createElement("br",null),r.a.createElement("span",null,"u.location.City"))))})))},Z=a(132),J=a.n(Z),X=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:J.a,alt:""}))},Q=(a(190),function(e){return e.usersPage.users}),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingInProgress},re=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return console.log("render users"),r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(X,null):null,r.a.createElement(Y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),oe=Object(p.b)((function(e){return console.log("mSTP users"),{users:Q(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ae(e),followingInProgress:ne(e)}}),{follow:function(e){return function(){var t=Object(k.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W(a,e,A.follow.bind(A),F);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(k.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W(a,e,A.unfollow.bind(A),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:M,toggleFollowingProgress:R,getUsers:function(e,t){return function(){var a=Object(k.a)(C.a.mark((function a(n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(z(!0)),n(M(e)),a.next=4,A.getUsers(e,t);case 4:r=a.sent,n(z(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_CURRENT_COUNT",currentCount:r.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(re),se=function(){return r.a.createElement("div",{className:"InfoProfile"},"some text-info")},ie=function(e){return e.profile?r.a.createElement("img",{src:e.profile.photos.large,alt:""}):r.a.createElement(X,null)},le={posts:[{id:1,greet:"hello",likeCounts:15},{id:2,greet:"hi",likeCounts:20}],textAreaValue:"some text",profile:null,status:"1"},ce=function(e){return{type:"SET_STATUS",status:e}},ue=function(e){return function(t){A.getProfile(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},me=function(e){return function(t){x.getStatus(e).then((function(e){t(ce(e.data))}))}},fe=function(e){return function(t){x.updateStatus(e).then((function(a){0===a.data.resultCode&&t(ce(e))}))}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:3,greet:t.profileAddPost,likeCount:0},n=Object(I.a)({},e);return n.posts=[].concat(Object(y.a)(e.posts),[a]),n.textAreaValue="",n;case"SET_USERS_PROFILE":return Object(I.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(I.a)({},e,{status:t.status});case"UPDATE-NEW-POST-TEXT":var r=Object(I.a)({},e);return r.textAreaValue=t.newText,r;default:return e}},pe=a(91),de=r.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(pe.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(e.status),l=Object(pe.a)(i,2),c=l[0],u=l[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status)),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},value:c,autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)}})))}));var Ee=Object(p.b)((function(e){return{status:e.profilePage.status}}),{updateStatus:fe})((function(e){return r.a.createElement(de,e)})),_e=function(e){return r.a.createElement("div",{className:"info_logo"},r.a.createElement(ie,{profile:e.profile}),r.a.createElement("br",null),r.a.createElement(Ee,null),r.a.createElement(se,null))},he=a(68),ve=a.n(he),be=a(66),Oe=a.n(be),Pe=function(e){return r.a.createElement("div",{className:Oe.a.post},r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""}),e.message,r.a.createElement("br",null),r.a.createElement("span",null,"like"),e.likeCounts)},Se=a(123),Ne=a(124),we=function(e){if(!e)return"Field is required"},je=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Ce=a(92),ke=a(37),ye=a.n(ke),Ie=function(e){var t=e.input,a=e.meta,n=Object(Ce.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:o&&ye.a.formControl+" "+ye.a.error},r.a.createElement("textarea",Object.assign({},t,n)),r.a.createElement("br",null),o&&r.a.createElement("span",null,a.error))},Te=function(e){var t=e.input,a=e.meta,n=Object(Ce.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:o&&ye.a.formControl+" "+ye.a.error},r.a.createElement("input",Object.assign({},t,n)),r.a.createElement("br",null),o&&r.a.createElement("span",null,a.error))},Ae=je(15),Ue=r.a.memo((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Se.a,{component:Ie,name:"profileAddPost",placeholder:"Enter you message",validate:[we,Ae]})),r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}));Ue=Object(Ne.a)({form:"profileForm"})(Ue);var xe=function(e){var t=e.posts.map((function(e){return r.a.createElement(Pe,{key:e.id,message:e.greet,likeCounts:e.likeCounts})}));return r.a.createElement("div",{className:Oe.a.myPosts},r.a.createElement("h3",null,"My Posts"),r.a.createElement(Ue,{onSubmit:function(t){e.addPost(t.profileAddPost)}}),t)},Le=Object(p.b)((function(e){return{textAreaValue:e.profilePage.textAreaValue,posts:e.profilePage.posts}}),{addPost:function(e){return{type:"ADD-POST",profileAddPost:e}},updateNewPost:function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}})(xe),Ge=function(e){return r.a.createElement("div",{className:ve.a.prof},r.a.createElement("img",{className:ve.a.image,src:"https://addons.cdn.mozilla.net/user-media/version-previews/full/2382/2382637.png?modified=1557783348",alt:""}),r.a.createElement("div",{className:ve.a.LogoInfoPosts},r.a.createElement(_e,{profile:e.profile}),r.a.createElement(Le,null)))},Fe=a(10),De=function(e){return{isAuth:e.auth.isAuth}},Me=function(e){var t=function(t){Object(u.a)(n,t);var a=Object(c.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return!1===this.props.isAuth?r.a.createElement(b.a,{to:"/login"}):r.a.createElement(e,this.props)}}]),n}(r.a.Component);return Object(p.b)(De)(t)},ze=function(e){return e.profilePage.profile},Re=function(e){return e.profilePage.status},We=function(e){return e.auth.userId},Ve=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizeUserId),this.props.getProfileData(e),this.props.getStatus(e)}},{key:"render",value:function(){return console.log("render prof"),r.a.createElement(Ge,this.props)}}]),a}(n.PureComponent),qe=(Object(Fe.d)(Object(p.b)((function(e){return console.log("mSTP"),{profile:ze(e),status:Re(e),authorizeUserId:We(e)}}),{getStatus:me,updateStatus:fe,getProfileData:ue}),b.f,Me)(Ve),a(39)),Be={userId:null,login:null,email:null,isAuth:!1},He=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,login:t,email:a,isAuth:n}}},Ke=function(){return function(){var e=Object(k.a)(C.a.mark((function e(t){var a,n,r,o,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.authMe();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,s=n.email,t(He(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(I.a)({},e,{},t.payload):e},Ze=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Se.a,{validate:[we],name:"email",component:Te,placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement(Se.a,{validate:[we],name:"password",component:Te,placeholder:"Password",type:"password"})),r.a.createElement("div",null,r.a.createElement(Se.a,{name:"rememberMe",component:"input",type:"checkbox"}),"remember me"),e.error&&r.a.createElement("div",{className:ye.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Submit")))};Ze=Object(Ne.a)({form:"loginPage"})(Ze);var Je=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(k.a)(C.a.mark((function n(r){var o,s;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.login(e,t,a);case 2:0===(o=n.sent).data.resultCode?r(Ke()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(qe.a)("loginPage",{_error:s})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Xe=a(27),Qe=a.n(Xe),$e={messages:[{id:1,message:"Hi"},{id:2,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis distinctio dolorum eaque,\n                et expedita fuga hic in ipsa laboriosam minus nam quam quos rerum similique, tempore tenetur voluptatem?"},{id:3,message:"Yo!!!!"}],dialogs:[{id:1,name:"Kirill",link:1,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:2,name:"Sasha",link:2,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:3,name:"Gulshatka",link:3,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:4,name:"Yurasya",link:4,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:5,name:"Svetlanka",link:5,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:6,name:"Mishanya",link:6,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})},{id:7,name:"Dimon",link:7,img:r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})}]},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:4,message:t.textareaName},n=Object(I.a)({},e);return n.messages=Object(y.a)(e.messages),n.messages.push(a),n;default:return e}},tt=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"".concat(Qe.a.message," ").concat(Qe.a.home)},e.message),r.a.createElement("div",{className:"".concat(Qe.a.message," ").concat(Qe.a.guest)},e.message))},at=je(50),nt=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Se.a,{component:Ie,name:"textareaName",placeholder:"Enter you message",validate:[we,at]})),r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))};nt=Object(Ne.a)({form:"dialogMessageForm"})(nt);var rt=function(e){var t=e.messages.map((function(e){return r.a.createElement(tt,{key:e.id,message:e.message})}));return r.a.createElement("div",null,r.a.createElement("div",{className:Qe.a.messages},t),r.a.createElement(nt,{onSubmit:function(t){e.addMessages(t.textareaName)}}))},ot=Object(p.b)((function(e){return{textAreaValue:e.dialogsPage.textAreaValue,messages:e.dialogsPage.messages}}),(function(e){return{updateNewMessageActionCreator:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:e}}(t))},addMessages:function(t){e(function(e){return{type:"ADD-MESSAGE",textareaName:e}}(t))}}}))(rt),st=a(45),it=a.n(st),lt=function(e){return r.a.createElement("div",{className:it.a.item},r.a.createElement(g.b,{className:it.a.imgLink,activeClassName:it.a.active,to:"/dialogs/"+e.link},e.img),r.a.createElement(g.b,{className:it.a.textLink,activeClassName:it.a.active,to:"/dialogs/"+e.link},e.name))},ct=a(134),ut=a.n(ct),mt=function(e){var t=e.dialogs.map((function(e){return r.a.createElement(lt,{id:e.id,name:e.name,link:e.link,img:e.img})}));return r.a.createElement("div",{className:ut.a.items},t)},ft=Object(p.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}))(mt),gt=Me((function(e){return r.a.createElement("div",{className:Qe.a.dialogs},r.a.createElement(ft,null),r.a.createElement(ot,null))}));var pt=Object(Fe.d)(Object(p.b)((function(e){return console.log("mSTP"),{profile:ze(e),status:Re(e),authorizeUserId:We(e)}}),{getStatus:me,updateStatus:fe,getProfileData:ue}),b.f,Me)((function(e){console.log("render");var t=e.match.params.userId,a=e.authorizeUserId;return Object(n.useEffect)((function(){var n=t;n||(n=a),e.getProfileData(n),e.getStatus(n)}),[e.match.params.userId,e.authorizeUserId]),r.a.createElement("div",null,r.a.createElement(Ge,e))})),dt=function(){return r.a.createElement("div",{className:v.a.content},r.a.createElement(b.b,{path:"/dialogs",render:function(){return r.a.createElement(gt,null)}}),r.a.createElement(b.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(pt,null)}}),r.a.createElement(b.b,{path:"/users",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(b.b,{path:"/news",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(b.b,{path:"/music",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(b.b,{path:"/login",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(b.b,{path:"/settings",render:function(){return r.a.createElement(w,null)}}))},Et=a(90),_t=a.n(Et),ht=function(e){return r.a.createElement("div",{className:_t.a.header},r.a.createElement(g.b,{to:"/home"},r.a.createElement("img",{src:"http://pngimg.com/uploads/american_football/american_football_PNG137.png",alt:""})),"Header",r.a.createElement("div",{className:_t.a.login_block},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("br",null),r.a.createElement("button",{onClick:e.logout},"LogOut")):r.a.createElement(g.b,{to:"/login"},"Login")))},vt=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(ht,this.props)}}]),a}(r.a.Component),bt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(k.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.logout();case 2:0===e.sent.data.resultCode&&t(He(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},letsAuth:Ke,setAuthUserData:He})(vt),Ot={initialize:!1},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZING_SUCCESS"===t.type?Object(I.a)({},e,{initialize:!0}):e},St=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.setInitializeSuccess()}},{key:"render",value:function(){return this.props.initialize?r.a.createElement(g.a,null,r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(bt,null),r.a.createElement(_,null),r.a.createElement(dt,null))):r.a.createElement(X,null)}}]),a}(n.Component),Nt=Object(p.b)((function(e){return{initialize:e.app.initialize}}),{setInitializeSuccess:function(){return function(e){var t=e(Ke());Promise.all([t]).then((function(){e({type:"INITIALIZING_SUCCESS"})}))}}})(St),wt=a(135),jt=a(125),Ct=Object(Fe.c)({profilePage:ge,dialogsPage:et,usersPage:V,auth:Ye,form:jt.a,app:Pt}),kt=Object(Fe.e)(Ct,Object(Fe.a)(wt.a));window.store=kt;var yt=kt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:yt},r.a.createElement(Nt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports={formControl:"formControl_formControl__2dxy4",error:"formControl_error__31xUb",formSummaryError:"formControl_formSummaryError__2khT-"}},45:function(e,t,a){e.exports={item:"item_dialog_item__dC-KW",textLink:"item_dialog_textLink__1pgKC",active:"item_dialog_active__2s_53",imgLink:"item_dialog_imgLink__1a-WS"}},66:function(e,t,a){e.exports={post:"post_post__1FhAV",myPosts:"post_myPosts__3iEfK"}},68:function(e,t,a){e.exports={prof:"profile_prof__1xAzO",image:"profile_image__qnT4o",LogoInfoPosts:"profile_LogoInfoPosts__2NqB0"}},9:function(e,t,a){e.exports={item:"nav_item__3dQhv",active:"nav_active__C5w4M",navigat:"nav_navigat__-BZYA",imgLink:"nav_imgLink__1i3V-",settings:"nav_settings__36NUo",friends:"nav_friends__3Bg4m",avatar:"nav_avatar__1dP7v",friendsItems:"nav_friendsItems__3CDGI"}},90:function(e,t,a){e.exports={header:"Header_header__O7Ceu",login_block:"Header_login_block__1jdTY"}}},[[161,1,2]]]);
//# sourceMappingURL=main.e78c9521.chunk.js.map