;define(function(require){'use strict';var t=require('backbone'),l=require('root/config'),n=require('underscore');require('localstorage');var a=t.Model.extend({defaults:{id:'',label:'',type:'',data:'',global:''}});var o=t.Collection.extend({localStorage:new t.LocalStorage('Components-'+l.app_slug),model:a,saveAll:function(){this.map(function(e){e.save()})},resetAll:function(){var t=this.length;for(var e=t-1;e>=0;e--){this.at(e).destroy()};this.reset()}});return o});