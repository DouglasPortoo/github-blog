/* eslint-disable react/prop-types */
import { Container, TitleAndTimer } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useNavigate } from "react-router-dom";

export function Card({ title, desc, publishedAt }) {
  const publishedAtFormated = new Date(publishedAt)

    const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(publishedAtFormated);

    const publisheDataRelativeToNow = formatDistanceToNow(publishedAtFormated, {
      locale: ptBR,
      addSuffix: true,
    });

    const navigate = useNavigate();

    function handleDetails(name) {
      navigate(`/post/${name}`);
    }

  return (
    <Container onClick={() => handleDetails(title)}>
      <TitleAndTimer>
        <h1>{title}</h1>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAtFormated.toISOString()}
        >
          {publisheDataRelativeToNow}
        </time>
      </TitleAndTimer>
      <p>{desc}</p>
    </Container>
  );
}
