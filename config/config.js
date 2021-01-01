/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

 var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
							port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	colored: true,
	coloredSymbolOnly: true,
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
	{
		module: "alert",
	},
	{
		module: "updatenotification",
		position: "top_bar"
	},
	{
		module: "clock",
		position: "top_left"
	},
	{
		module: "calendar",
		header: "Up Next",
		position: "top_left",
		maximumEntries: 7,
		maximumNumberOfDays: 14,
		config: {
			calendars: [
			{
				url: "https://calendar.google.com/calendar/ical/chris.r.armstrong%40gmail.com/private-00bfcc38df412610c96e7685f031bd69/basic.ics"
			},
			{
				symbol: "heart",
				url: "https://calendar.google.com/calendar/ical/ac40cikivmgug6mdb8lmf4m3tk%40group.calendar.google.com/private-0348d12ebf539733833a87f4c9b60e44/basic.ics"
			},
			// {
			// 	symbol: "facebook",
			// 	color: "#3b5998",
			// 	url: "https://outlook.office365.com/owa/calendar/b974be8f6e6d4e56bdea5191d032c1c1@fb.com/e4239f2d341441ba957e29a9952d8af912834209555042456892/calendar.ics"
			// }
			]
		}
	},
	{
		module: "compliments",
		position: "lower_third"
	},
	{
		module: "newsfeed",
		position: "bottom_bar",
		config: {
			feeds: [
			{
				title: "New York Times",
				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
			}
			],
			showSourceTitle: true,
			showPublishDate: true,
			broadcastNewsFeeds: true,
			broadcastNewsUpdates: true
		}
	},
	{
		module: "weather",
		position: "top_right",
		config: {
			weatherProvider: "openweathermap",
			weatherEndpoint: "/forecast",
			type: "forecast",
			units: "imperial",
			apiKey: "da9a7c5edf081ac9756a97fdd71c4c32",
			locationID: 5128581,
			roundTemp: true,
			colored: true,
		}
	},
	{
  module: "MMM-NowPlayingOnSpotify",
  position: "top_center",

  config: {
    clientID: "177ce93d552e463aa25c505469f0e2b9",
    clientSecret: "8fc419bdbc3a43a8be1627088d27a72c",
    accessToken: "BQC_vsw6OZ-FKQZ8SiQhoW46Zv7MLvcFSxo5FtSCxxsy8XcEM6hQjFD_0FQiCPei5lDm_-AZY-ASr3iDbthn42Ig6fgT2Qcja51wL1ZFzFx5VwJbRwNh8R7xso66iw7ZfFoVDJoH2bjKSh50L2FieQL8gw",
    refreshToken: "AQA6cpJHF7pa72yrpu8q2PNjILJz7hzzCKvgBJTY9K-YKnQmK7zUkP9wKlAyzhA1_9DpKqsBXU_hmvClQHDnIYMhq3JrgOaim936Q4uS3OZQ-H7vobPX3RSzDIBN-FNUu_A"
  }
},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
