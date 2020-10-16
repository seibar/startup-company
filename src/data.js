const components = {
	"UiComponent": {
		"name": "UI Component",
		"icon": "images/components/ui.png",
		"requirements": {},
	},
	"BackendComponent": {
		"name": "Backend Component",
		"icon": "images/components/backend.png",
		"requirements": {},
	},
	"NetworkComponent": {
		"name": "Network Component",
		"icon": "images/components/network.png",
		"requirements": {},
	},
	"DatabaseComponent": {
		"name": "Database Component",
		"icon": "images/components/database.png",
		"requirements": {},
	},
	"VideoComponent": {
		"name": "Video Component",
		"icon": "images/components/video.png",
		"requirements": {},
	},
	"SemanticComponent": {
		"name": "Semantic Component",
		"icon": "images/components/semantic.png",
		"requirements": {},
	},
	"SmtpComponent": {
		"name": "Smtp Component",
		"icon": "images/components/smtp.png",
		"requirements": {},
	},
	"EncryptionComponent": {
		"name": "Encryption Component",
		"icon": "images/components/encryption.png",
		"requirements": {},
	},
	"FilesystemComponent": {
		"name": "Filesystem Component",
		"icon": "images/components/filesystem.png",
		"requirements": {},
	},
	"I18nComponent": {
		"name": "I18n Component",
		"icon": "images/components/i18n.png",
		"requirements": {},
	},
	"SearchAlgorithmComponent": {
		"name": "Search Algorithm Component",
		"icon": "images/components/searchalgorithm.png",
		"requirements": {},
	},
	"CompressionComponent": {
		"name": "Compression Component",
		"icon": "images/components/compression.png",
		"requirements": {},
	},
	"BlueprintComponent": {
		"name": "Blueprint Component",
		"icon": "images/components/blueprint.png",
		"requirements": {},
	},
	"WireframeComponent": {
		"name": "Wireframe Component",
		"icon": "images/components/wireframe.png",
		"requirements": {},
	},
	"GraphicsComponent": {
		"name": "Graphics Component",
		"icon": "images/components/graphics.png",
		"requirements": {},
	},
	"UiElement": {
		"name": "UI Element",
		"icon": "images/modules/uielement.png",
		"requirements": {
			"BlueprintComponent": 1,
			"GraphicsComponent": 1
		},
	},
	"UiSet": {
		"name": "UI Set",
		"icon": "images/modules/uiset.png",
		"requirements": {
			"WireframeComponent": 2,
			"UiElement": 2
		},
	},
	"ResponsiveUi": {
		"name": "Responsive UI",
		"icon": "images/modules/responsiveui.png",
		"requirements": {
			"WireframeComponent": 2,
			"UiElement": 2
		},
	},
	"DocumentationComponent": {
		"name": "Documentation Component",
		"icon": "images/components/documentation.png",
		"requirements": {},
	},
	"DesignGuidelines": {
		"name": "Design Guidelines",
		"icon": "images/modules/designguidelines.png",
		"requirements": {
			"DocumentationComponent": 3,
			"ResponsiveUi": 3
		},
	},
	"InterfaceModule": {
		"name": "Interface Module",
		"icon": "images/modules/webdesign.png",
		"requirements": {
			"UiElement": 2,
			"WireframeComponent": 1
		},
	},
	"FrontendModule": {
		"name": "Frontend Module",
		"icon": "images/modules/frontend.png",
		"requirements": {
			"UiElement": 1,
			"InterfaceModule": 1
		},
	},
	"BackendModule": {
		"name": "Backend Module",
		"icon": "images/modules/backend.png",
		"requirements": {
			"BackendComponent": 1,
			"NetworkComponent": 1
		},
	},
	"InputModule": {
		"name": "Input Module",
		"icon": "images/modules/input.png",
		"requirements": {
			"UiComponent": 1,
			"BackendComponent": 1
		},
	},
	"StorageModule": {
		"name": "Storage Module",
		"icon": "images/modules/storage.png",
		"requirements": {
			"FilesystemComponent": 1,
			"BackendComponent": 1
		},
	},
	"ContentManagementModule": {
		"name": "Content Management Module",
		"icon": "images/modules/contentmanagement.png",
		"requirements": {
			"FrontendModule": 1,
			"InputModule": 1,
			"BackendModule": 1
		},
	},
	"VideoPlaybackModule": {
		"name": "Video Playback Module",
		"icon": "images/modules/video.png",
		"requirements": {
			"VideoComponent": 1,
			"FrontendModule": 1,
			"BackendModule": 1
		},
	},
	"SeoModule": {
		"name": "Seo Module",
		"icon": "images/modules/seo.png",
		"requirements": {
			"FrontendModule": 1,
			"SemanticComponent": 1
		},
	},
	"EmailModule": {
		"name": "Email Module",
		"icon": "images/modules/email.png",
		"requirements": {
			"SmtpComponent": 1,
			"BackendComponent": 1
		},
	},
	"DatabaseLayer": {
		"name": "Database Layer",
		"icon": "images/modules/datalayer.png",
		"requirements": {
			"DatabaseComponent": 1,
			"BackendComponent": 1,
			"NetworkComponent": 1
		},
	},
	"NotificationModule": {
		"name": "Notification Module",
		"icon": "images/modules/notification.png",
		"requirements": {
			"UiComponent": 1,
			"BackendComponent": 1,
			"EmailModule": 1
		},
	},
	"AuthenticationModule": {
		"name": "Authentication Module",
		"icon": "images/modules/authentication.png",
		"requirements": {
			"DatabaseComponent": 1,
			"EncryptionComponent": 1,
			"BackendModule": 1
		},
	},
	"PaymentGatewayModule": {
		"name": "Payment Gateway Module",
		"icon": "images/modules/payment.png",
		"requirements": {
			"DatabaseLayer": 1,
			"ApiClientModule": 1,
			"AuthenticationModule": 1
		},
	},
	"LocalizationModule": {
		"name": "Localization Module",
		"icon": "images/modules/localization.png",
		"requirements": {
			"I18nComponent": 1,
			"FrontendModule": 1
		},
	},
	"SearchModule": {
		"name": "Search Module",
		"icon": "images/modules/search.png",
		"requirements": {
			"DatabaseComponent": 1,
			"SearchAlgorithmComponent": 1,
			"BackendComponent": 1
		},
	},
	"BandwidthCompressionModule": {
		"name": "Bandwidth Compression Module",
		"icon": "images/modules/compression.png",
		"requirements": {
			"CompressionComponent": 1,
			"NetworkComponent": 1,
			"BackendComponent": 1
		},
	},
	"CodeOptimizationModule": {
		"name": "Code Optimization Module",
		"icon": "images/modules/codeoptimization.png",
		"requirements": {
			"BackendModule": 2,
			"DatabaseLayer": 2,
			"FrontendModule": 2
		},
	},
	"ApiClientModule": {
		"name": "API Client Module",
		"icon": "images/modules/apiclient.png",
		"requirements": {
			"BackendModule": 1,
			"DatabaseLayer": 1,
			"CompressionComponent": 2
		},
	},
	// "Copywriting": {
	// 	"name": "Copywriting",
	// 	"icon": "images/components/copywriting.png",
	// 	"requirements": {},
	// },
	// "TextFormat": {
	// 	"name": "Text Format",
	// 	"icon": "images/components/textformat.png",
	// 	"requirements": {},
	// },
	// "ImageFormat": {
	// 	"name": "Image Format",
	// 	"icon": "images/components/imageformat.png",
	// 	"requirements": {},
	// },
	// "UserFeedback": {
	// 	"name": "User Feedback",
	// 	"icon": "images/components/userfeedback.png",
	// 	"requirements": {},
	// },
	// "Survey": {
	// 	"name": "Survey",
	// 	"icon": "images/components/survey.png",
	// 	"requirements": {},
	// },
	// "PhoneInterview": {
	// 	"name": "Phone Interview",
	// 	"icon": "images/components/phoneinterview.png",
	// 	"requirements": {},
	// },
	// "VideoFormat": {
	// 	"name": "Video Format",
	// 	"icon": "images/components/videoformat.png",
	// 	"requirements": {},
	// },
	// "AudioFormat": {
	// 	"name": "Audio Format",
	// 	"icon": "images/components/audioformat.png",
	// 	"requirements": {},
	// },
	// "AnalyticsResearch": {
	// 	"name": "Analytics Research",
	// 	"icon": "images/components/analyticsresearch.png",
	// 	"requirements": {},
	// },
	// "ContractAgreement": {
	// 	"name": "Contract Agreement",
	// 	"icon": "images/components/contractagreement.png",
	// 	"requirements": {},
	// },
	// "AbTesting": {
	// 	"name": "A/B Testing",
	// 	"icon": "images/components/abtesting.png",
	// 	"requirements": {},
	// },
	// "BehaviorObservation": {
	// 	"name": "Behavior Observation",
	// 	"icon": "images/components/behaviorobservation.png",
	// 	"requirements": {},
	// },
	"VirtualHardware": {
		"name": "Virtual Hardware",
		"icon": "images/components/hardware.png",
		"requirements": {},
	},
	"OperatingSystem": {
		"name": "Operating System",
		"icon": "images/components/operatingsystem.png",
		"requirements": {},
	},
	"Firewall": {
		"name": "Firewall",
		"icon": "images/components/firewall.png",
		"requirements": {},
	},
	"ProcessManagement": {
		"name": "Process Management",
		"icon": "images/components/processmanagement.png",
		"requirements": {},
	},
	"ContinuousIntegration": {
		"name": "Continuous Integration",
		"icon": "images/components/continuousintegration.png",
		"requirements": {},
	},
	"CronJob": {
		"name": "Cron Job",
		"icon": "images/components/cronjob.png",
		"requirements": {},
	},
	"VirtualContainer": {
		"name": "Virtual Container",
		"icon": "images/modules/virtualcontainer.png",
		"requirements": {
			"VirtualHardware": 1,
			"OperatingSystem": 1,
			"ProcessManagement": 1,
			"ContinuousIntegration": 1,
			"CronJob": 1
		},
	},
	"Cluster": {
		"name": "Cluster",
		"icon": "images/modules/cluster.png",
		"requirements": {
			"VirtualContainer": 3,
			"Firewall": 10
		},
	},
	"SwarmManagement": {
		"name": "Swarm Management",
		"icon": "images/modules/swarmmanagement.png",
		"requirements": {
			"Cluster": 1,
			"VirtualContainer": 1
		},
	}
};

const features = [
	{
		"name": "Landing Page",
		"icon": "fa-paper-plane-o",
		"requirements": {
			"UiComponent": 1,
			"BackendComponent": 1,
			"BlueprintComponent": 1,
			"GraphicsComponent": 1
		}
	},
	{
		"name": "Comment Functionality",
		"icon": "fa-commenting-o",
		"requirements": {
			"BackendModule": 3,
			"InputModule": 3
		}
	},
	{
		"name": "Sharing Functionality",
		"icon": "fa-share",
		"requirements": {
			"BackendModule": 2,
			"FrontendModule": 1,
			"InputModule": 1,
			"EmailModule": 2,
			"UiSet": 1
		}
	},
	{
		"name": "Image Upload",
		"icon": "fa-picture-o",
		"requirements": {
			"InputModule": 1,
			"StorageModule": 2,
			"DatabaseLayer": 2,
			"FrontendModule": 1,
			"UiSet": 1
		}
	},
	{
		"name": "Payment System",
		"icon": "fa-credit-card",
		"requirements": {
			"DatabaseLayer": 2,
			"FrontendModule": 1,
			"PaymentGatewayModule": 1,
			"EmailModule": 1,
			"DesignGuidelines": 1
		}
	},
	{
		"name": "Chat System",
		"icon": "fa-comments-o",
		"requirements": {
			"DatabaseLayer": 1,
			"InputModule": 1,
			"NotificationModule": 2,
			"NetworkComponent": 3,
			"ApiClientModule": 2,
			"DesignGuidelines": 1
		}
	},
	{
		"name": "Live Streaming",
		"icon": "fa-podcast",
		"requirements": {
			"BackendModule": 1,
			"FrontendModule": 1,
			"NetworkComponent": 4
		}
	},
	{
		"name": "Offline Content",
		"icon": "fa-spinner",
		"requirements": {
			"BackendModule": 2,
			"FrontendModule": 1,
			"StorageModule": 2,
			"DatabaseLayer": 2,
			"UiSet": 1
		}
	},
	{
		"name": "Ad Block Obfuscator",
		"icon": "fa-eye-slash",
		"requirements": {
			"CodeOptimizationModule": 2,
			"UiSet": 4,
			"ApiClientModule": 2,
		}
	},
	{
		"name": "DDOS Protection",
		"icon": "fa-shield",
		"requirements": {
			"CodeOptimizationModule": 1,
			"ApiClientModule": 2,
			"SwarmManagement": 1,
			"Firewall": 5
		}
	},
	{
		"name": "Help System",
		"icon": "fa-life-ring",
		"requirements": {
			"ContentManagementModule": 4,
			"InputModule": 4,
			"FrontendModule": 3,
			"BackendModule": 3,
			"UiSet": 2
		}
	},
	{
		"name": "Video Functionality",
		"icon": "fa-play",
		"requirements": {
			"FrontendModule": 1,
			"VideoPlaybackModule": 1
		}
	},
	
	{
		"name": "Video Editor",
		"icon": "fa-video-camera",
		"requirements": {
			"VideoPlaybackModule": 1,
			"StorageModule": 1,
			"FrontendModule": 1,
			"BackendModule": 1,
			"UiSet": 1
		}
	},
	{
		"name": "Item Listing",
		"icon": "fa-file-text-o",
		"requirements": {
			"BackendModule": 1,
			"FrontendModule": 1,
			"ContentManagementModule": 1
		}
	},
	{
		"name": "Content Management System",
		"icon": "fa-outdent",
		"requirements": {
			"ContentManagementModule": 5,
			"InputModule": 4
		}
	},
	{
		"name": "Login System",
		"icon": "fa-sign-in",
		"requirements": {
			"FrontendModule": 1,
			"InputModule": 1,
			"BackendModule": 1,
			"AuthenticationModule": 1
		}
	},
	{
		"name": "Profile Page",
		"icon": "fa-user-circle",
		"requirements": {
			"InputModule": 4,
			"FrontendModule": 3,
			"BackendModule": 3,
			"UiSet": 2,
			"AuthenticationModule": 1
		}
	},

	// Servers:
	{
		"name": "Mini Cloud Server",
		"icon": "fa-cloud",
		"requirements": {
			"Firewall": 2,
			"VirtualHardware": 2,
			"OperatingSystem": 2
		}
	},
	{
		"name": "Pro Cloud Server",
		"icon": "fa-cloud",
		"requirements": {
			"NetworkComponent": 8,
			"VirtualHardware": 8,
			"Firewall": 8,
			"OperatingSystem": 8
		}
	},
	{
		"name": "Ultra Cloud Server",
		"icon": "fa-cloud",
		"requirements": {
			"NetworkComponent": 30,
			"VirtualHardware": 30,
			"Firewall": 20,
			"OperatingSystem": 30
		}
	},
	// {
	// 	"name": "Small Virtual Cluster",
	// 	"icon": "fa-server",
	// 	"requirements": {
	// 		"NetworkComponent": 100,
	// 		"VirtualHardware": 100,
	// 		"Firewall": 80,
	// 		"OperatingSystem": 100
	// 	}
	// },
	// {
	// 	"name": "Medium Virtual Cluster",
	// 	"icon": "fa-server",
	// 	"requirements": {
	// 		"NetworkComponent": 300,
	// 		"VirtualHardware": 300,
	// 		"Firewall": 240,
	// 		"OperatingSystem": 300
	// 	}
	// },
	// {
	// 	"name": "Large Virtual Cluster",
	// 	"icon": "fa-server",
	// 	"requirements": {
	// 		"NetworkComponent": 900,
	// 		"VirtualHardware": 900,
	// 		"Firewall": 720,
	// 		"OperatingSystem": 900
	// 	}
	// }
	{
		name: 'Small Web Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 2,
			VirtualHardware: 2,
			OperatingSystem: 2
		}
	},
	{
		name: 'Small Cache Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 2,
			VirtualHardware: 2,
			OperatingSystem: 2
		}
	},
	{
		name: 'Small Database Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 2,
			VirtualHardware: 2,
			OperatingSystem: 2
		}
	},
	{
		name: '2U Web Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 4,
			VirtualHardware: 4,
			OperatingSystem: 4,
			ProcessManagement: 2,
			CronJob: 2
		}
	},
	{
		name: '2U Cache Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 4,
			VirtualHardware: 4,
			OperatingSystem: 4,
			ProcessManagement: 2,
			CronJob: 2
		}
	},
	{
		name: '2U Database Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 4,
			VirtualHardware: 4,
			OperatingSystem: 4,
			ProcessManagement: 2,
			CronJob: 2
		}
	},
	{
		name: '4U (Blade) Web Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 15,
			VirtualHardware: 15,
			OperatingSystem: 15,
			ProcessManagement: 4,
			CronJob: 4,
			ContinuousIntegration: 4
		}
	},
	{
		name: '4U (Blade) Cache Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 15,
			VirtualHardware: 15,
			OperatingSystem: 15,
			ProcessManagement: 4,
			CronJob: 4,
			ContinuousIntegration: 4
		}
	},
	{
		name: '4U (Blade) Database Server',
		"icon": "fa-server",
		requirements: {
			Firewall: 15,
			VirtualHardware: 15,
			OperatingSystem: 15,
			ProcessManagement: 4,
			CronJob: 4,
			ContinuousIntegration: 4
		}
	},
	{
		name: 'Web XServer',
		"icon": "fa-server",
		requirements: {
			VirtualContainer: 8,
			Cluster: 5,
			SwarmManagement: 5
		}
	},
	{
		name: 'Cache XServer',
		"icon": "fa-server",
		requirements: {
			VirtualContainer: 8,
			Cluster: 5,
			SwarmManagement: 5
		}
	},
	{
		name: 'Database XServer',
		"icon": "fa-server",
		requirements: {
			VirtualContainer: 8,
			Cluster: 5,
			SwarmManagement: 5
		}
	},
	{
		name: 'Fusion Server',
		"icon": "fa-server",
		requirements: {
			VirtualContainer: 24,
			Cluster: 15,
			SwarmManagement: 15
		}
	}
];

export {
	components,
	features
}