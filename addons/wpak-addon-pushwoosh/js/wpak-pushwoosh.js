;define(function(require){'use strict';var u=require('core/phonegap/utils'),n=require('root/config'),p=require('core/lib/hooks'),e={};var o=null;e.init=function(){if(!u.isLoaded()||'undefined'==typeof n.options.pushwoosh){return};o=cordova.require('pushwoosh-cordova-plugin.PushNotification');document.addEventListener('push-notification',e.handleNotif);o.onDeviceReady({projectid:n.options.pushwoosh.googleid,pw_appid:n.options.pushwoosh.pwid});o.registerDevice();t()};e.handleNotif=function(e){var o=e.notification,n=o.title||o.aps.alert,i=o.userdata||o.u;t();if('undefined'!==typeof i){if('undefined'!==typeof i.route){window.wpak_open_url=i.route}};p.applyFilters('wpak-pushwoosh-notification',n,[i,o])};var t=function(){if(null===o||'undefined'===typeof o.setApplicationIconBadgeNumber){return};o.setApplicationIconBadgeNumber(0)};return e});