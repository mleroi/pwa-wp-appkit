;define(function(require){'use strict';var $=require('jquery'),i=require('underscore'),l=require('backbone'),o=require('root/config'),n=require('core/addons-internal'),t=require('text!theme/layout.html'),d=require('core/theme-tpl-tags'),u=require('core/lib/hooks'),r=!1;return l.View.extend({initialize:function(e){t=n.getHtml('layout','before')+t+n.getHtml('layout','after');r=t.match(/<%=\s*header\s*%>/)!==null;this.template=i.template(t)},render:function(){var l={app_title:o.app_title,header:'<div id="app-header"></div>',menu:'<div id="app-menu"></div>',content:'<div id="app-content-wrapper"></div>',TemplateTags:d};var r=n.getHtmlData('layout'),e=i.extend(l,r);e=u.applyFilters('template-args',e,['layout','layout',this]);var t=this.template(e);$(this.el).html(t);return this},containsHeader:function(){return r},isRendered:function(){return $(this.el).length>0&&$(this.el).html().length>0}})});