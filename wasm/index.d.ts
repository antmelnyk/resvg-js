// Generated by dts-bundle-generator v8.0.1
// Generated by dts-bundle-generator v6.13.0

declare class BBox {
	free(): void;
	/**
	*/
	height: number;
	/**
	*/
	width: number;
	/**
	*/
	x: number;
	/**
	*/
	y: number;
}
declare class RenderedImage {
	free(): void;
	/**
	* Write the image data to Uint8Array
	* @returns {Uint8Array}
	*/
	asPng(): Uint8Array;
	/**
	* Get the PNG height
	*/
	readonly height: number;
	/**
	* Get the RGBA pixels of the image
	*/
	readonly pixels: Uint8Array;
	/**
	* Get the PNG width
	*/
	readonly width: number;
}
export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;
export type ResvgRenderOptions = {
	font?: SystemFontsOptions | CustomFontsOptions;
	dpi?: number;
	languages?: string[];
	shapeRendering?: 0 // optimizeSpeed
	 | 1 // crispEdges
	 | 2; // geometricPrecision
	textRendering?: 0 // optimizeSpeed
	 | 1 // optimizeLegibility
	 | 2; // geometricPrecision'
	imageRendering?: 0 // optimizeQuality
	 | 1; // optimizeSpeed
	fitTo?: {
		mode: "original";
	} | {
		mode: "width";
		value: number;
	} | {
		mode: "height";
		value: number;
	} | {
		mode: "zoom";
		value: number;
	};
	background?: string; // Support CSS3 color, e.g. rgba(255, 255, 255, .8)
	crop?: {
		left: number;
		top: number;
		right?: number;
		bottom?: number;
	};
	logLevel?: "off" | "error" | "warn" | "info" | "debug" | "trace";
};
export type FontOptions = {
	defaultFontSize?: number; // Default: 12
	defaultFontFamily?: string;
	serifFamily?: string;
	sansSerifFamily?: string;
	cursiveFamily?: string;
	fantasyFamily?: string;
	monospaceFamily?: string;
};
export type CustomFontsOptions = {
	fontsBuffers: Uint8Array[]; // A list of raw font files to load.
} & FontOptions;
export type SystemFontsOptions = {
	loadSystemFonts?: boolean; // Default: true. if set to false, it will be faster.
	fontFiles?: string[]; // A list of local font file paths to load.
	fontDirs?: string[]; // A list of local font directories to load.
} & FontOptions;
/**
 * Initialize Wasm module
 * @param module_or_path WebAssembly Module or .wasm url
 *
 */
export declare const initWasm: (module_or_path: Promise<InitInput> | InitInput) => Promise<void>;
export declare const Resvg: {
	new (svg: Uint8Array | string, options?: ResvgRenderOptions): {
		free(): void;
		render(): RenderedImage;
		toString(): string;
		innerBBox(): BBox | undefined;
		getBBox(): BBox | undefined;
		cropByBBox(bbox: BBox): void;
		imagesToResolve(): any[];
		resolveImage(href: string, buffer: Uint8Array): void;
		readonly height: number;
		readonly width: number;
	};
};

export {};
