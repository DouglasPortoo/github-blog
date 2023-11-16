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

export function Blog() {
  const [gitHubData, setGitHubData] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [search, setSearch] = useState("");
  let repo
  const filteredRepos =
    search.length > 0
      ? repositories.filter((repo) => repo.name.includes(search))
      : [];

  async function loadGitHubData() {
    const response = await fetch("https://api.github.com/users/diego3g");
    const data = await response.json();

    setGitHubData(data);

    repo = data.repos_url;
    loadRepositories();
  }

  async function loadRepositories() {
    const response = await fetch(`${repo}`);
    const data = await response.json();

    setRepositories(data);
  }

  useEffect(() => {
    loadGitHubData();
  }, []);

  console.log(gitHubData)

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
            <p>{gitHubData.public_repos} publicações</p>
          </Publications>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Posts>
          {search.length > 0
            ? filteredRepos.map((repo) => (
                <Card key={repo.id} title={repo.name} desc={repo.description} publishedAt={repo.created_at}  />
              ))
            : repositories.map((repo) => (
                <Card key={repo.id} title={repo.name} desc={repo.description} publishedAt={repo.created_at}  />
              ))}
        </Posts>
      </Container>
    </>
  );
}
