import { useState, type MouseEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { trackCheckoutAndNavigate, CHECKOUT_EVENTS, type CheckoutEventId } from "@/lib/pixel";

type Item = { name: string; desc: string; price: number; image: string };

export type StudyComboOffer = {
  main: Item;
  extra: Item & { originalPrice: number };
  mainId: CheckoutEventId;
  comboId: CheckoutEventId;
  title: string;
  description: string;
};

export function StudyComboButton({ offer, children }: { offer: StudyComboOffer; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [withExtra, setWithExtra] = useState(false);
  const total = offer.main.price + (withExtra ? offer.extra.price : 0);
  const id = withExtra ? offer.comboId : offer.mainId;
  const changeOpen = (next: boolean) => { setOpen(next); if (!next) setWithExtra(false); };
  const openOffer = (e: MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setOpen(true); };

  return <>
    <Button asChild className="study-cta"><a href={CHECKOUT_EVENTS[offer.mainId].checkoutUrl} onClick={openOffer}>{children}<ArrowRight aria-hidden="true" /></a></Button>
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="max-h-[94vh] w-[calc(100vw-1.5rem)] bst3a-page max-w-2xl gap-0 overflow-y-auto border-0 bg-study-cream p-0 text-left">
        <div className="study-dark px-5 pb-5 pt-7 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-study-yellow">Antes de continuar...</p>
          <DialogTitle className="mt-3 text-2xl font-bold text-study-yellow sm:text-3xl">{offer.title}</DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85">{offer.description}</DialogDescription>
        </div>
        <div className="space-y-4 p-4 sm:p-6">
          <article className="grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-card p-3">
            <img src={offer.main.image} alt={offer.main.name} className="aspect-square w-full rounded-md object-cover" />
            <div className="min-w-0"><p className="text-xs font-bold uppercase text-study-teal">Produto escolhido</p><h3 className="mt-1 text-base font-bold text-primary">{offer.main.name}</h3><p className="mt-1 text-sm">{offer.main.desc}</p></div>
            <strong className="text-xl text-primary">R${offer.main.price}</strong>
          </article>
          <label className={`block cursor-pointer rounded-lg border-2 bg-card p-4 ${withExtra ? "border-study-teal" : "border-border"}`}>
            <div className="flex gap-4"><img src={offer.extra.image} alt={offer.extra.name} className="h-24 w-24 flex-none rounded-md object-contain" /><div><p className="text-xs font-bold uppercase text-study-teal">Oferta complementar</p><h3 className="mt-1 text-lg font-bold text-primary">{offer.extra.name}</h3><p className="mt-1"><s className="mr-2 opacity-60">R${offer.extra.originalPrice}</s><span className="text-2xl font-bold text-primary">+ R${offer.extra.price}</span></p><p className="mt-2 text-sm">{offer.extra.desc}</p></div></div>
            <div className="mt-4 flex items-center gap-3 border-t pt-4"><Checkbox checked={withExtra} onCheckedChange={(c) => setWithExtra(c === true)} aria-label={`Adicionar ${offer.extra.name} por R$${offer.extra.price}`} /><span className="text-sm font-bold uppercase text-primary">Adicionar por + R${offer.extra.price}</span></div>
          </label>
          <div className="study-dark rounded-lg p-4 sm:p-5">
            <p className="text-xs font-bold uppercase text-study-yellow">Seu pedido</p>
            <div className="mt-3 space-y-2 text-sm"><p className="flex justify-between gap-4"><span>{offer.main.name}</span><strong>R${offer.main.price}</strong></p>{withExtra ? <p className="flex justify-between gap-4"><span>{offer.extra.name}</span><strong>+ R${offer.extra.price}</strong></p> : null}</div>
            <div className="mt-4 flex items-end justify-between border-t border-study-yellow/30 pt-4"><span className="font-bold uppercase">Total</span><strong className="text-3xl text-study-yellow">R${total}</strong></div>
            <Button asChild className="study-cta mt-4 w-full"><a href={CHECKOUT_EVENTS[id].checkoutUrl} onClick={(e) => trackCheckoutAndNavigate(e, id)}>{withExtra ? `Quero os 2 por R$${total}` : `Continuar por R$${total}`}</a></Button>
            <p className="mt-3 text-center text-xs opacity-80">Pagamento único • Garantia de 7 dias</p>
            <DialogClose asChild><Button variant="link" className="mt-1 w-full text-study-yellow">Continuar vendo a página</Button></DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>;
}
