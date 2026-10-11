import { CHECKOUT } from "@/lib/checkout";

// Central Meta Pixel manager for browser events only.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type PixelParams = Record<string, unknown>;

export const META_PIXEL_ID = "2142327090010383";

const VIEW_CONTENT_BY_PATH: Record<string, PixelParams> = {
  "/bst1": { content_name: "Guia de Sobrevivência 50+", content_ids: ["BST1"], content_type: "product", value: 47, currency: "BRL" },
  "/bst2": { content_name: "Guia de Entrevistas em Inglês em Multinacionais", content_ids: ["BST2"], content_type: "product", value: 47, currency: "BRL" },
  "/bst4": { content_name: "Guia de Aprovação de Visto aos EUA", content_ids: ["BST4"], content_type: "product", value: 27, currency: "BRL" },
  "/bst5": { content_name: "Destrava Falaê", content_ids: ["BST5"], content_type: "product", value: 47, currency: "BRL" },
  "/lp/adultos": { content_name: "Plano PRO Adultos", content_ids: ["PRO_ADULTOS"], content_type: "product", value: 147, currency: "BRL" },
  "/lp/kids-teens": { content_name: "Plano PRO Kids & Teens", content_ids: ["PRO_KIDS_TEENS"], content_type: "product", value: 126, currency: "BRL" },
};

let lastTrackedPath: string | undefined;

export const CHECKOUT_EVENTS = {
  BST1: { contentIds: ["BST1"], value: 47, checkoutUrl: CHECKOUT.bst1 },
  COMBO_BST1_BST4: { contentIds: ["BST1", "BST4"], value: 64, checkoutUrl: CHECKOUT.comboBst1Bst4 },
  BST2: { contentIds: ["BST2"], value: 47, checkoutUrl: CHECKOUT.bst2 },
  COMBO_BST2_BST5: { contentIds: ["BST2", "BST5"], value: 74, checkoutUrl: CHECKOUT.comboBst2Bst5 },
  BST3A: { contentIds: ["BST3A"], value: 27, checkoutUrl: CHECKOUT.bst3a },
  COMBO_BST3A_BST3B: { contentIds: ["BST3A", "BST3B"], value: 44, checkoutUrl: CHECKOUT.comboBst3aBst3b },
  BST3B: { contentIds: ["BST3B"], value: 37, checkoutUrl: CHECKOUT.bst3b },
  COMBO_BST3B_BST3A: { contentIds: ["BST3B", "BST3A"], value: 44, checkoutUrl: CHECKOUT.comboBst3bBst3a },
  BST4: { contentIds: ["BST4"], value: 27, checkoutUrl: CHECKOUT.bst4 },
  BST5: { contentIds: ["BST5"], value: 47, checkoutUrl: CHECKOUT.destravaFalae },
  COMBO_BST5_BST1: { contentIds: ["BST5", "BST1"], value: 74, checkoutUrl: CHECKOUT.comboBst5Bst1 },
  COMBO_BST5_BST4: { contentIds: ["BST5", "BST4"], value: 64, checkoutUrl: CHECKOUT.comboBst5Bst4 },
  COMBO_BST5_BST1_BST4: { contentIds: ["BST5", "BST1", "BST4"], value: 91, checkoutUrl: CHECKOUT.comboBst5Bst1Bst4 },
  PRO_ADULTOS: { contentIds: ["PRO_ADULTOS"], value: 147, checkoutUrl: CHECKOUT.proAdultos },
  PRO_KIDS_TEENS: { contentIds: ["PRO_KIDS_TEENS"], value: 126, checkoutUrl: CHECKOUT.proKidsTeens },
} as const;

export type CheckoutEventId = keyof typeof CHECKOUT_EVENTS;

function trackEvent(name: "ViewContent" | "InitiateCheckout", params?: PixelParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  // Capture UTMs automatically to enrich events
  const utms = {
    utm_source: new URLSearchParams(window.location.search).get('utm_source'),
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
    utm_content: new URLSearchParams(window.location.search).get('utm_content'),
    utm_term: new URLSearchParams(window.location.search).get('utm_term'),
    fbclid: new URLSearchParams(window.location.search).get('fbclid'),
  };

  const enrichedParams = {
    ...params,
    ...Object.fromEntries(Object.entries(utms).filter(([_, v]) => v !== null))
  };

  window.fbq("track", name, enrichedParams);
}

export function trackCheckoutAndNavigate(
  event: { preventDefault: () => void },
  checkoutId: CheckoutEventId,
) {
  event.preventDefault();
  const checkout = CHECKOUT_EVENTS[checkoutId];
  trackEvent("InitiateCheckout", {
    content_name: checkoutId,
    content_ids: [...checkout.contentIds],
    content_type: "product",
    value: checkout.value,
    currency: "BRL",
  });

  window.setTimeout(() => window.location.assign(checkout.checkoutUrl), 120);
}

export function trackPageVisit(pathname: string) {
  const viewContent = VIEW_CONTENT_BY_PATH[pathname];
  if (!viewContent) return;
  if (lastTrackedPath === pathname) return;
  lastTrackedPath = pathname;
  trackEvent("ViewContent", viewContent);
}
