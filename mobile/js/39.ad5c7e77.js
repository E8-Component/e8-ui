(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{977:function(e,a,n){"use strict";n.r(a);var o=function(){var e=this.$createElement;return(this._self._c||e)("e8-table",{attrs:{columns:this.columns,"table-data":this.tableData,"sort-option":this.sortOption}})};o._withStripped=!0;var t={data:function(){var e=this;return{sortOption:{sortChange:function(a){console.log("sortChange::",a),e.sortChange(a)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",width:100,align:"right",sortBy:""},{field:"company",key:"c",title:"Company",align:"left"},{field:"job",key:"d",title:"Job",align:"left"}],tableData:[{name:"Betty Lewis",age:"15",company:"Amazon",job:"Software Engineer"},{name:"Scott Garcia",age:"21",company:"Google",job:"Designer"},{name:"Brian Wilson",age:"36",company:"Tesla",job:"Tester"},{name:"Donald Taylor",age:"28",company:"Facebook",job:"PM"},{name:"Joseph Young",age:"56",company:"Alibaba",job:"Designer"},{name:"Margaret Harris",age:"45",company:"Tencent",job:"PM"},{name:"Frank Brown",age:"18",company:"Amazon",job:"Software Engineer"},{name:"Angela Anderson",age:"33",company:"Google",job:"Designer"},{name:"Kevin Hernandez",age:"29",company:"Tesla",job:"Tester"},{name:"Barbara Hall",age:"31",company:"Facebook",job:"PM"},{name:"Barbara Williams",age:"29",company:"Alibaba",job:"PM"},{name:"Jose Garcia",age:"38",company:"Tencent",job:"PM"}]}},methods:{sortChange:function(e){this.tableData.sort((function(a,n){if(e.age)return"asc"===e.age?a.age-n.age:"desc"===e.age?n.age-a.age:0}))}}},i=n(76),r=Object(i.a)(t,o,[],!1,null,null,null);r.options.__file="src-mobile/views-temp/en/table/sort-single.vue";a.default=r.exports}}]);