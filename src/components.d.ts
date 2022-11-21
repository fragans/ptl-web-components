/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PtlSearchInput {
        "apiUrl": string;
    }
    interface PtlSearchResult {
    }
    interface PtlWidgetRecommendation {
        "apiUrl": string;
    }
}
export interface PtlSearchInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtlSearchInputElement;
}
declare global {
    interface HTMLPtlSearchInputElement extends Components.PtlSearchInput, HTMLStencilElement {
    }
    var HTMLPtlSearchInputElement: {
        prototype: HTMLPtlSearchInputElement;
        new (): HTMLPtlSearchInputElement;
    };
    interface HTMLPtlSearchResultElement extends Components.PtlSearchResult, HTMLStencilElement {
    }
    var HTMLPtlSearchResultElement: {
        prototype: HTMLPtlSearchResultElement;
        new (): HTMLPtlSearchResultElement;
    };
    interface HTMLPtlWidgetRecommendationElement extends Components.PtlWidgetRecommendation, HTMLStencilElement {
    }
    var HTMLPtlWidgetRecommendationElement: {
        prototype: HTMLPtlWidgetRecommendationElement;
        new (): HTMLPtlWidgetRecommendationElement;
    };
    interface HTMLElementTagNameMap {
        "ptl-search-input": HTMLPtlSearchInputElement;
        "ptl-search-result": HTMLPtlSearchResultElement;
        "ptl-widget-recommendation": HTMLPtlWidgetRecommendationElement;
    }
}
declare namespace LocalJSX {
    interface PtlSearchInput {
        "apiUrl"?: string;
        "onFetchSearchApi"?: (event: PtlSearchInputCustomEvent<JSON>) => void;
    }
    interface PtlSearchResult {
    }
    interface PtlWidgetRecommendation {
        "apiUrl"?: string;
    }
    interface IntrinsicElements {
        "ptl-search-input": PtlSearchInput;
        "ptl-search-result": PtlSearchResult;
        "ptl-widget-recommendation": PtlWidgetRecommendation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ptl-search-input": LocalJSX.PtlSearchInput & JSXBase.HTMLAttributes<HTMLPtlSearchInputElement>;
            "ptl-search-result": LocalJSX.PtlSearchResult & JSXBase.HTMLAttributes<HTMLPtlSearchResultElement>;
            "ptl-widget-recommendation": LocalJSX.PtlWidgetRecommendation & JSXBase.HTMLAttributes<HTMLPtlWidgetRecommendationElement>;
        }
    }
}
