(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(18),o=a.n(l),r=a(6),i=a(10),c=a(12),m=a(19),u=a(20),d=a(24),k=a(21),p=a(25),g=a(9),E=a(5),f=(a(31),a(32),function(){var e=new Date,t=e.getDate(),a=e.toLocaleString("en-us",{month:"short"}).toUpperCase(),n=e.getFullYear();return s.a.createElement("header",null,s.a.createElement("div",{className:"titlenav"},s.a.createElement("h1",{className:"sitetitle"},"Important Tasks"),s.a.createElement("ul",{className:"nav"},s.a.createElement("li",null,s.a.createElement(g.b,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(g.b,{to:"/about"},"About")))),s.a.createElement("div",{className:"header-main"},s.a.createElement("div",{className:"dateDiv"},s.a.createElement("h1",{className:"date"},t),s.a.createElement("div",{className:"dateDiv2"},s.a.createElement("span",{className:"month"},a),s.a.createElement("span",null,n)))))}),N=function(e){var t=e.getTotalTasks;return 5===e.getCompletedTasks?s.a.createElement("p",null,"You Won The Day!"):5===t?s.a.createElement("p",null,"A total of 5 tasks are allowed."):s.a.createElement("p",null,"Nothing to return")},h=function(e){var t=e.modal,a=e.closeModal,n=e.message,l=e.getTotalTasks,o=e.getCompletedTasks;return t?s.a.createElement("div",{className:"modal",style:{display:"block"},onClick:a},s.a.createElement("div",{className:"modal-content"},s.a.createElement(N,{message:n,getTotalTasks:l,getCompletedTasks:o}),s.a.createElement("button",{className:"btnClose",onClick:a},"okay"))):null},v=function(e){var t=e.totalTasks;return s.a.createElement("span",{className:"task-counter"}," ",t," of ",5," tasks")},T=function(e){var t=e.newTaskSubmitHandler,a=e.taskName,n=e.addNewTaskName;return s.a.createElement("form",{className:"additem",onSubmit:t},s.a.createElement("input",{className:"add-task",type:"text",placeholder:"Add new task",value:a,onChange:n}),s.a.createElement("button",{className:"addBtn",type:"submit",name:"submit",onClick:t},s.a.createElement("i",{className:"fas fa-plus-circle"})))},b=function(e){var t=e.isEditing,a=e.isCompleted,n=e.handleTitleEdits,l=e.children;return t?s.a.createElement("input",{className:"task-title",type:"text",value:l,onChange:n}):a?s.a.createElement("span",{style:{textDecoration:"line-through"},className:"task-title"},l):s.a.createElement("span",{className:"task-title"},l)},C=function(e){var t=e.title,a=e.isEditing,n=e.isCompleted,l=e.handleConfirmation,o=e.removeGuest,r=e.handleToggleEditing,i=e.setTitle;return s.a.createElement("li",{className:"holder"},s.a.createElement(b,{className:"task",isCompleted:n,isEditing:a,handleTitleEdits:function(e){return i(e.target.value)}},t),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"checkBtn btn",onClick:l},s.a.createElement("i",{className:"fas fa-check"})),s.a.createElement("button",{className:"editBtn btn",onClick:r},a?"save":"edit"),s.a.createElement("button",{className:"removeBtn btn",onClick:o},s.a.createElement("i",{className:"fas fa-trash-alt"}))))},A=function(e){var t=e.tasks,a=e.toggleConfirmationAt,n=e.toggleEditingAt,l=e.removeTaskAt,o=e.setTitleAt;return s.a.createElement("ul",{className:"todolist"},t.map(function(e,t){return s.a.createElement(C,{key:t,title:e.title,isEditing:e.isEditing,isCompleted:e.isCompleted,handleConfirmation:function(){return a(t)},handleToggleEditing:function(){return n(t)},removeGuest:function(){return l(t)},setTitle:function(e){return o(e,t)}})}))},y=function(e){var t=e.numberCompleted;return s.a.createElement("span",{className:"completed-counter"},t," of ",5," tasks completed")},S=function(){return s.a.createElement(n.Fragment,null,s.a.createElement("h2",{className:"about--h2"},"About This App"),s.a.createElement("p",{className:"about--p"},"List important tasks so you can win the day and make a habit of winning!"),s.a.createElement("p",{className:"about--p version"},"Version: 0.9"))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(s)))).state={taskName:"",tasks:[],list:[],modal:!1},a.toggleTaskPropertyAt=function(e,t){var n=a.state.tasks;a.setState({tasks:n.map(function(a,n){return n===t?Object(c.a)({},a,Object(i.a)({},e,!a[e])):a})})},a.toggleConfirmationAt=function(e){return a.toggleTaskPropertyAt("isCompleted",e)},a.toggleEditingAt=function(e){return a.toggleTaskPropertyAt("isEditing",e)},a.setTitleAt=function(e,t){return a.setState({tasks:a.state.tasks.map(function(a,n){return n===t?Object(c.a)({},a,{title:e}):a})})},a.removeTaskAt=function(e){var t=a.state.tasks,n=t.filter(function(t,a){return a!==e?t.title:null}).map(function(e){return e.title});a.setState({tasks:Object(r.a)(t.filter(function(t,a){return a!==e}))}),localStorage.setItem("tasks",JSON.stringify(n))},a.getTotalTasks=function(){return a.state.tasks.length},a.addNewTaskName=function(e){a.setState({taskName:e.target.value})},a.newTaskSubmitHandler=function(e){e.preventDefault();var t=a.state,n=t.tasks,s=t.taskName;if(n.length<5){var l=a.state.list;l.push(s),localStorage.setItem("tasks",JSON.stringify(l)),a.setState({tasks:[].concat(Object(r.a)(n),[{title:s,isCompleted:!1,isEditing:!1}]),taskName:""})}else a.openModal()},a.getCompletedTasks=function(){return a.state.tasks.reduce(function(e,t){return t.isCompleted?e+1:e},0)},a.openModal=function(){return a.setState({modal:!0})},a.closeModal=function(){return a.setState({modal:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.tasks,s=n.map(function(e){return e.isCompleted}).every(function(e){return!0===e}),l=this.getCompletedTasks();s&&5===l&&n.map(function(e,n){return e.isCompleted!==t.tasks[n].isCompleted?a.openModal():null})}},{key:"componentDidMount",value:function(){var e=this.state.tasks,t=localStorage.getItem("tasks");null===t&&(localStorage.setItem("tasks",JSON.stringify([])),t=localStorage.getItem("tasks"));var a=JSON.parse(t),n=[],s=[];a.map(function(e,t){return s=[].concat(Object(r.a)(s),[e]),n=[].concat(Object(r.a)(n),[{title:e,isCompleted:!1,isEditing:!1}])}),this.setState({tasks:[].concat(Object(r.a)(e),Object(r.a)(n)),list:Object(r.a)(s)})}},{key:"render",value:function(){var e=this,t=this.getTotalTasks(),a=this.getCompletedTasks();return s.a.createElement(g.a,{basename:"/"},s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"body"},s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement("main",null,s.a.createElement(h,{modal:this.state.modal,openModal:this.openModal,closeModal:this.closeModal,message:this.state.message,getTotalTasks:t,getCompletedTasks:a}),s.a.createElement(E.c,null,s.a.createElement(E.a,{exact:!0,path:"/",render:function(l){return s.a.createElement(n.Fragment,null,s.a.createElement("span",{className:"title"},"Task title"),s.a.createElement(T,{newTaskSubmitHandler:e.newTaskSubmitHandler,taskName:e.state.taskName,addNewTaskName:e.addNewTaskName}),s.a.createElement(v,{totalTasks:t}),s.a.createElement(A,{tasks:e.state.tasks,toggleConfirmationAt:e.toggleConfirmationAt,toggleEditingAt:e.toggleEditingAt,removeTaskAt:e.removeTaskAt,setTitleAt:e.setTitleAt}),s.a.createElement(y,{numberCompleted:a}))}}),s.a.createElement(E.a,{exact:!0,path:"/about",component:S})))))))}}]),t}(n.Component);o.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d8b39521.chunk.js.map