;define(function(require){var e={};e.parse=function(t){var r=e.parse.options,a=r.parser[r.strictMode?'strict':'loose'].exec(t),o={},s=r.key.length;while(s--)o[r.key[s]]=a[s]||'';o[r.q.name]={};o[r.key[12]].replace(r.q.parser,function(e,t,s){if(t)o[r.q.name][t]=s});return o};e.parse.options={strictMode:!1,key:['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'],q:{name:'queryKey',parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};return e});