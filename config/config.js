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
	// possible positions: top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below
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
		config: {
			maximumEntries: 7,
			maximumNumberOfDays: 5,
			calendars: [
			{
				url: "https://calendar.google.com/calendar/ical/chris.r.armstrong%40gmail.com/private-00bfcc38df412610c96e7685f031bd69/basic.ics"
			},
			{
				symbol: "heart",
				url: "https://calendar.google.com/calendar/ical/ac40cikivmgug6mdb8lmf4m3tk%40group.calendar.google.com/private-0348d12ebf539733833a87f4c9b60e44/basic.ics"
			},
			{
				symbol: "facebook",
				color: "#3b5998",
				url: "https://outlook.office365.com/owa/calendar/b974be8f6e6d4e56bdea5191d032c1c1@fb.com/e4239f2d341441ba957e29a9952d8af912834209555042456892/calendar.ics"
			}
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
			},
			{
				title: "BBC",
				url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk",
			},
			],
			showSourceTitle: true,
			showPublishDate: true,
			showDescription: true,
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
	{
		module: 'MMM-Todoist',
			position: 'bottom_right',	// This can be any of the regions. Best results in left or right regions.
			header: "Today's tasks", // This is optional
			config: { // See 'Configuration options' for more information.
			hideWhenEmpty: false,
			accessToken: '254f65ddc710bcc92a5187ba210a1f9715bb0a35',
			maximumEntries: 5,
				updateInterval: 10 * 60 * 1000, // Update every 10 minutes
				fade: true,
				// projects and/or labels is mandatory:
				projects: [1513458321],
				showDueDate: false
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: { // See "Configuration options" for more information.
			  source: "/r/Amoledbackgrounds",
			  slideInterval: 60 * 1000 // Change slides every minute
			}
		  }
		// {
		// 	module: "MMM-GooglePhotos",
		// 	position: "middle_center",
		// 	config: {
		// 	albums: ["Best of Japan"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
		// 	updateInterval: 1000 * 60, // minimum 10 seconds.
		// 	sort: "random", // "old", "random"
		// 	uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
		// 	condition: {
		// 		fromDate: null, // Or "2018-03", RFC ... format available
		// 		toDate: null, // Or "2019-12-25",
		// 		minWidth: null, // Or 400
		// 		maxWidth: null, // Or 8000
		// 		minHeight: null, // Or 400
		// 		maxHeight: null, // Or 8000
		// 		minWHRatio: null,
		// 		maxWHRatio: null,
		// 		// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
		// 	},
		// 	showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
		// 	showHeight: 1920,
		// 	timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
		// }
		]
	};

	/*************** DO NOT EDIT THE LINE BELOW ***************/
	if (typeof module !== "undefined") { module.exports = config; }
