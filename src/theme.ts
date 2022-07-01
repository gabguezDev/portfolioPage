import { createTheme } from "@mui/material";

const Palette = {
	primary: {
		dark2: "#771728",
		dark: "#771728",
		main: "#B7243E",
		light: "#CC2845",
		light2: "#DC4C65",
		components: {
			disabled: "rgb(145, 69, 226,0.7)",
			outlined: "rgb(145, 69, 226,0.3)",
		},
	},
	secondary: {
		dark2: "#177766",
		dark: "#00FFFF",
		main: "#24B79D",
		light: "#20A28B",
		light2: "#4CDCC2",
		components: {
			disabled: "rgb(0, 255, 255,0.7)",
			outlined: "rgb(0, 255, 255,0.3)",
		},
	},
	error: {
		dark2: "#A30E29",
		dark: "#D22040",
		main: "#E24762",
		light: "#F26C84",
		light2: "#F798A9",
		components: {
			disabled: "rgb(226, 71, 98,0.7)",
			outlined: "rgb(226, 71, 98,0.3)",
		},
	},
	warning: {
		dark2: "#B7850B",
		dark: "#ECB01C",
		main: "#FBC748",
		light: "#FFD56C",
		light2: "#FFE197",
		components: {
			disabled: "rgb(251, 199, 72,0.7)",
			outlined: "rgb(251, 199, 72,0.3)",
		},
	},
	info: {
		dark2: "#B7850B",
		dark: "#ECB01C",
		main: "#FBC748",
		light: "#FFD56C",
		light2: "#FFE197",
		components: {
			disabled: "rgb(251, 199, 72,0.7)",
			outlined: "rgb(251, 199, 72,0.3)",
		},
	},
	grey: {
		50: "#fafafa",
		100: "#f5f5f5",
		200: "#eeeeee",
		300: "#e0e0e0",
		400: "#bdbdbd",
		500: "#9e9e9e",
		600: "#757575",
		700: "#616161",
		800: "#424242",
		900: "#212121",
	},
	success: {
		dark2: "#044208",
		dark: "#16621B",
		main: "#2E7D33",
		light: "#4D9A52",
		light2: "#7DBC81",
		components: {
			disabled: "rgb(46, 125, 51,0.7)",
			outlined: "rgb(46, 125, 51,0.3)",
		},
	},
	text: {
		primary: "#9145E2",
		secondary: "#00FFFF",
		dark: "#293036",
		disabled: "#B4B9BE",
		red: "#E24762",
		white: "#FFFFFF",
		lightGrey: "#B4B9BE",
		grey: "#6D7781",
	},
};

const ThemeFonts = {
	screenxl: {
		h1: 40,
		h2: 32,
		h3: 28,
		h4: 24,
		h5: 20,
		h6: 16,
		subtitle1: 20,
		subtitle2: 16,
		body1: 18,
		body2: 16,
		caption: 15,
		overline: 13,
		numericText: 16,
		button: 16,
		buttonsm: 14,
		buttonlg: 20,
		inputLabel: 14,
		inputText: 16,
		helperText: 12,
		tooltip: 14,
		avatarLetter: 20,
		chip: 14,
		tag: 12,
	},
	screenlg: {
		h1: 38,
		h2: 30,
		h3: 26,
		h4: 22,
		h5: 18,
		h6: 16,
		subtitle1: 20,
		subtitle2: 16,
		body1: 18,
		body2: 16,
		caption: 14,
		overline: 13,
		numericText: 16,
		button: 16,
		buttonsm: 14,
		buttonlg: 20,
		inputLabel: 14,
		inputText: 16,
		helperText: 12,
		tooltip: 14,
		avatarLetter: 18,
		chip: 14,
		tag: 12,
	},
	screenmd: {
		h1: 28,
		h2: 24,
		h3: 22,
		h4: 20,
		h5: 18,
		h6: 16,
		subtitle1: 18,
		subtitle2: 15,
		body1: 17,
		body2: 16,
		caption: 14,
		overline: 13,
		numericText: 15,
		button: 15,
		buttonsm: 13,
		buttonlg: 18,
		inputLabel: 14,
		inputText: 15,
		helperText: 11,
		tooltip: 13,
		avatarLetter: 16,
		chip: 14,
		tag: 12,
	},
	screensm: {
		h1: 23,
		h2: 21,
		h3: 20,
		h4: 19,
		h5: 18,
		h6: 16,
		subtitle1: 17,
		subtitle2: 14,
		body1: 16,
		body2: 14,
		caption: 12,
		overline: 12,
		numericText: 14,
		button: 14,
		buttonsm: 13,
		buttonlg: 16,
		inputLabel: 14,
		inputText: 14,
		helperText: 11,
		tooltip: 12,
		avatarLetter: 16,
		chip: 14,
		tag: 12,
	},
};

const breakpoints = {
	values: {
		xs: 0,
		sm: 360,
		md: 960,
		lg: 1280,
		xl: 1600,
	},
};

const theme = createTheme({
	spacing: 8,
	palette: {
		primary: {
			dark: Palette.primary.dark,
			main: Palette.primary.main,
			light: Palette.primary.light,
		},
		secondary: {
			dark: Palette.secondary.dark,
			main: Palette.secondary.main,
			light: Palette.secondary.light,
		},
		error: {
			dark: Palette.error.dark,
			main: Palette.error.main,
			light: Palette.error.light,
		},
		warning: {
			dark: Palette.warning.dark,
			main: Palette.warning.main,
			light: Palette.warning.light,
		},
		success: {
			dark: Palette.success.dark,
			main: Palette.success.main,
			light: Palette.success.light,
		},
		info: {
			dark: Palette.info.dark,
			main: Palette.info.main,
			light: Palette.info.light,
		},
		text: {
			primary: Palette.text.dark,
			secondary: Palette.text.primary,
			disabled: Palette.text.disabled,
		},
		grey: Palette.grey,
	},

	breakpoints: breakpoints,

	typography: {
		fontFamily: "Montserrat",
		h1: {
			fontSize: `${ThemeFonts.screenxl.h1}px`,
			fontStyle: "normal",
			fontWeight: 500,
			lineHeight: "120%",
			letterSpacing: "-0.015em",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h1}px`,
			},
		},
		h2: {
			fontSize: `${ThemeFonts.screenxl.h2}px`,
			fontWeight: 500,
			lineHeight: "120%",
			fontStyle: "normal",
			letterSpacing: "-0.015em",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h2}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h2}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h2}px`,
				fontWeight: "500",
			},
		},
		h3: {
			fontSize: `${ThemeFonts.screenxl.h3}px`,
			fontWeight: 600,
			lineHeight: "120%",
			fontStyle: "normal",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h3}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h3}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h3}px`,
				fontWeight: "500",
			},
		},
		h4: {
			fontSize: `${ThemeFonts.screenxl.h4}px`,
			fontWeight: 500,
			lineHeight: "120%",
			fontStyle: "normal",
			letterSpacing: "0.0025em",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h4}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h4}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h4}px`,
				fontWeight: "500",
			},
		},

		h5: {
			fontSize: `${ThemeFonts.screenxl.h5}px`,
			fontWeight: 500,
			lineHeight: "140%",
			fontStyle: "normal",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h5}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h5}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h5}px`,
				fontWeight: "500",
			},
		},
		h6: {
			fontSize: `${ThemeFonts.screenxl.h6}px`,
			fontWeight: 400,
			lineHeight: "120%",
			fontStyle: "normal",
			letterSpacing: "0.0015em",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.h6}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.h6}px`,
				fontWeight: "500",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.h6}px`,
				fontWeight: "500",
			},
		},
		subtitle1: {
			fontSize: `${ThemeFonts.screenxl.subtitle1}px`,
			fontWeight: 300,
			lineHeight: "120%",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.subtitle1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.subtitle1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.subtitle1}px`,
			},
		},

		subtitle2: {
			fontSize: `${ThemeFonts.screenxl.subtitle2}px`,
			fontWeight: 800,
			lineHeight: "120%",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.subtitle2}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.subtitle2}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.subtitle2}px`,
			},
		},
		body1: {
			fontSize: `${ThemeFonts.screenxl.body1}px`,
			fontWeight: "normal",
			lineHeight: "150%",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.body1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.body1}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.body1}px`,
			},
		},
		body2: {
			fontSize: `${ThemeFonts.screenxl.body2}px`,
			fontWeight: "normal",
			lineHeight: "150%",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.body2}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.body2}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.body2}px`,
			},
		},
		caption: {
			fontSize: `${ThemeFonts.screenxl.caption}px`,
			lineHeight: "144%",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.caption}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.caption}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.caption}px`,
			},
		},
		overline: {
			lineHeight: "120%",
			fontWeight: "normal",
			textTransform: "inherit",
			letterSpacing: "0.01em",
			fontSize: `${ThemeFonts.screenxl.overline}px`,
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.overline}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.overline}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.overline}px`,
			},
		},
		button: {
			// fontFamily: "Raleway",
			lineHeight: "120%",
			fontWeight: "normal",
			textTransform: "none",
			fontSize: `${ThemeFonts.screenxl.button}px`,
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: `${ThemeFonts.screenlg.button}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: `${ThemeFonts.screenmd.button}px`,
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: `${ThemeFonts.screensm.button}px`,
			},
		},
	},
});

export default theme;
