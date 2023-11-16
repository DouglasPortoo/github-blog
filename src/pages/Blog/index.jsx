import { Header } from "../../components/Header";
import {
  Container,
  Info,
  Posts,
  ProfileData,
  Publications,
  Search,
  SocialIcons,
} from "./styles";
import github from "../../assets/icons/github.svg";
import building from "../../assets/icons/building.svg";
import user from "../../assets/icons/user.svg";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { InfoCard } from "../../components/InfoCard";
import { api } from "../../server/axios";



export function Blog() {
  const [gitHubData, setGitHubData] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [search, setSearch] = useState("");

  async function loadGitHubData() {
    const response = await api.get("/users/DouglasPortoo");

    setGitHubData(response.data);
  }

  async function loadRepositories(query) {
    //https://api.github.com/search/issues?q=repo:DouglasPortoo/github-blog
    const response = await api.get("/search/issues", {
      params: {
        q: query,
      },
    });
    setRepositories(response.data.items);
  }

  useEffect(() => {
    loadRepositories(`repo:DouglasPortoo/github-blog${search}`);
  }, [search]);

  useEffect(() => {
    loadGitHubData();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <InfoCard>
          <img src={gitHubData.avatar_url} alt={"foto de " + gitHubData.name} />

          <ProfileData>
            <h1>{gitHubData.name}</h1>
            <p>{gitHubData.bio}</p>

            <Info>
              <SocialIcons>
                <img src={github} alt="logo do github" />
                <a href={gitHubData.html_url} target="_blank" rel="noreferrer">
                  {gitHubData.name}
                </a>
              </SocialIcons>
              <SocialIcons>
                <img src={building} alt="logo da empresa que trabalha" />
                <a href={gitHubData.blog} target="_blank" rel="noreferrer">
                  {gitHubData.company === null
                    ? "Freelacer"
                    : gitHubData.company}
                </a>
                <p></p>
              </SocialIcons>
              <SocialIcons>
                <img src={user} alt="logo dos seguidores" />
                <p>{gitHubData.followers} seguidores</p>
              </SocialIcons>
            </Info>
          </ProfileData>
        </InfoCard>

        <Search>
          <Publications>
            <h1>Publicações</h1>
            <p>1 publicações</p>
          </Publications>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Posts>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              number={repo.number}
              title={repo.title}
              body={repo.body}
              publishedAt={repo.created_at}
            />
          ))}
        </Posts>
      </Container>
    </>
  );
}
