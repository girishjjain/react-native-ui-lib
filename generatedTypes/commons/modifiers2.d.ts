import _ from 'lodash';
export declare const FLEX_KEY_PATTERN: RegExp;
export declare const PADDING_KEY_PATTERN: RegExp;
export declare const MARGIN_KEY_PATTERN: RegExp;
export declare const ALIGNMENT_KEY_PATTERN: RegExp;
export declare const POSITION_KEY_PATTERN: RegExp;
export interface AlteredOptions {
    flex?: boolean;
    alignments?: boolean;
    paddings?: boolean;
    margins?: boolean;
    backgroundColor?: boolean;
    position?: boolean;
}
export interface ExtractedStyle {
    backgroundColor?: ReturnType<typeof extractBackgroundColorValue>;
    borderRadius?: ReturnType<typeof extractBorderRadiusValue>;
    paddings?: ReturnType<typeof extractPaddingValues>;
    margins?: ReturnType<typeof extractMarginValues>;
    alignments?: ReturnType<typeof extractAlignmentsValues>;
    flexStyle?: ReturnType<typeof extractFlexStyle>;
    positionStyle?: ReturnType<typeof extractPositionStyle>;
}
declare const PADDING_VARIATIONS: {
    readonly padding: "padding";
    readonly paddingL: "paddingLeft";
    readonly paddingT: "paddingTop";
    readonly paddingR: "paddingRight";
    readonly paddingB: "paddingBottom";
    readonly paddingH: "paddingHorizontal";
    readonly paddingV: "paddingVertical";
};
export declare type PaddingModifierKeyType = keyof typeof PADDING_VARIATIONS;
export declare type NativePaddingKeyType = typeof PADDING_VARIATIONS[PaddingModifierKeyType];
declare const MARGIN_VARIATIONS: {
    readonly margin: "margin";
    readonly marginL: "marginLeft";
    readonly marginT: "marginTop";
    readonly marginR: "marginRight";
    readonly marginB: "marginBottom";
    readonly marginH: "marginHorizontal";
    readonly marginV: "marginVertical";
};
export declare type MarginModifierKeyType = keyof typeof MARGIN_VARIATIONS;
export declare type NativeMarginModifierKeyType = typeof MARGIN_VARIATIONS[MarginModifierKeyType];
declare const STYLE_KEY_CONVERTERS: {
    readonly flex: "flex";
    readonly flexG: "flexGrow";
    readonly flexS: "flexShrink";
};
export declare type FlexModifierKeyType = keyof typeof STYLE_KEY_CONVERTERS;
export declare type NativeFlexModifierKeyType = typeof STYLE_KEY_CONVERTERS[FlexModifierKeyType];
export declare function extractColorValue(props: Dictionary<any>): any;
export declare function extractBackgroundColorValue(props: Dictionary<any>): any;
export declare function extractTypographyValue(props: Dictionary<any>): undefined;
export declare function extractPaddingValues(props: Dictionary<any>): Partial<Record<"padding" | "paddingLeft" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingHorizontal" | "paddingVertical", number>>;
export declare function extractMarginValues(props: Dictionary<any>): Partial<Record<"margin" | "marginLeft" | "marginTop" | "marginRight" | "marginBottom" | "marginHorizontal" | "marginVertical", number>>;
export declare function extractAlignmentsValues(props: Dictionary<any>): any;
export declare function extractPositionStyle(props: Dictionary<any>): import("react-native").RegisteredStyle<{
    position: "absolute";
}> | undefined;
export declare function extractFlexStyle(props: Dictionary<any>): Partial<Record<NativeFlexModifierKeyType, number>> | undefined;
export declare function extractAccessibilityProps(this: any, props?: any): Partial<any>;
export declare function extractBorderRadiusValue(props: Dictionary<any>): any;
export declare function extractModifierProps(props: Dictionary<any>): _.Dictionary<any>;
export declare function extractOwnProps(this: any, props: Dictionary<any>, ignoreProps: string[]): Pick<Partial<Dictionary<any>>, number>;
export declare function getThemeProps(this: any, props?: any, context?: any): any;
export declare function generateModifiersStyle(this: any, options?: {
    backgroundColor: boolean;
    borderRadius: boolean;
    paddings: boolean;
    margins: boolean;
    alignments: boolean;
    flex: boolean;
    position: boolean;
}, props?: any): ExtractedStyle;
export declare function getAlteredModifiersOptions(currentProps: any, nextProps: any): AlteredOptions;
export {};
