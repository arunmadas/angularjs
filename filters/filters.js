
var app = angular.module("stockapp",[]);

var stocks = [
              {
            	  symbol : "NFLX",
            	  description : "Nasdaq listed Netflix is a video streaming technology corporation serving large customer base",
            	  subscriptionModel : true,
            	  subscriptionPrice : 7.99,
            	  subscriptionType : "Monthly",
            	  quote : 234.88,
            	  isMarketOpen : true,
            	  minDayQuote : 231.89,
            	  maxDayQuote : 238.46              
              },              
              {
            	  symbol : "FB",
            	  description : "Nasdaq listed Facebook is a social networking technology corporation serving large customer base",
            	  subscriptionModel : false,
            	  quote : 127.35,
            	  isMarketOpen : true,
            	  minDayQuote : 119.89,
            	  maxDayQuote : 129.46  
              },
              {
            	  symbol : "KORS",
            	  description : "Nasdaq listed Micahel Kors is a fashion corporation specializing in premium handbags with large customer base",
            	  subscriptionModel : false,
            	  quote : 90.35,
            	  isMarketOpen : false
              }
             ];

app.controller("StockQuoteController", function () {
	this.stocks = stocks;
});