import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-20 z-40 inline-flex size-14 items-center justify-center rounded-full bg-cream text-cream-fg shadow-[0_10px_30px_rgb(0_0_0_/_0.35)] transition-transform duration-150 ease-out hover:bg-fg active:scale-[0.96] sm:right-6"
      aria-label="Chat on WhatsApp to register"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
