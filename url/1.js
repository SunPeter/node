/**
 * Created by peter on 14-8-11.
 */
var href="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
var url=require("url");

/**
  href .........
 protocol http:
 slashes //
 host host.com:8080
 hostname host.com
 port 8000
 pathname /p/a/t/h
 */


console.log(url.parse(href));
