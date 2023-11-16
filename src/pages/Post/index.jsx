import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoCard } from "../../components/InfoCard";
import { Container, Details, Info, SocialIcons, SubInfoCard } from "./styles";
import { Header } from "../../components/Header";

import github from "../../assets/icons/github.svg";
import building from "../../assets/icons/building.svg";
import user from "../../assets/icons/user.svg";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Post() {
  const params = useParams();

  const [gitHubData, setGitHubData] = useState([]);

  const publishedAtFormated = new Date(
    gitHubData.created_at === undefined ? new Date() : gitHubData.created_at
  );
  console.log(gitHubData.created_at);

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

  async function loadGitHubData() {
    const response = await fetch(
      `https://api.github.com/repos/diego3g/${params.id}`
    );
    const data = await response.json();

    setGitHubData(data);
  }

  useEffect(() => {
    loadGitHubData();
  }, []);

  console.log(gitHubData);

  return (
    <>
      <Header />
      <Container>
        <InfoCard>
          <SubInfoCard>
            <h1>{gitHubData.name}</h1>
            <Info>
              <SocialIcons>
                <img src={github} alt="logo do github" />
                <a href={gitHubData.html_url} target="_blank" rel="noreferrer">
                  link do repositorio
                </a>
              </SocialIcons>
              <SocialIcons>
                <img src={building} alt="logo da empresa que trabalha" />
                <time
                  title={publishedDateFormatted}
                  dateTime={publishedAtFormated.toISOString()}
                >
                  {publisheDataRelativeToNow}
                </time>
              </SocialIcons>
              <SocialIcons>
                <img src={user} alt="logo dos seguidores" />
                <p>Visto por : {gitHubData.watchers_count} pessoas </p>
              </SocialIcons>
            </Info>
          </SubInfoCard>
        </InfoCard>
        <Details>
          <p>{gitHubData.description}</p>
          <p>visibilidade: {gitHubData.visibility}</p>
          <p>language :{gitHubData.language}</p>
        </Details>
      </Container>
    </>
  );
}
