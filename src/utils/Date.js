import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function DateFormatted(created_at) {

  const createdAt = new Date(created_at)

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(createdAt);

}

export function RelativeToNow(created_at) {

  const createdAt = new Date(created_at)

  return formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  });
} 