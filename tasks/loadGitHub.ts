import { Octokit } from '@octokit/core';
import colours from '../utilities/colours';
import log from '../utilities/log';

async function loadGitHub(githubToken: string): Promise<void> {
  log('___ 🐙 GitHub ___\n', colours.cyan);

  if (githubToken.length === 0) {
    log(
      'Please set "GITHUB_PERSONAL_ACCESS_TOKEN" in the `.env` file.\n',
      colours.red
    );

    return;
  }

  const octokit = new Octokit({ auth: githubToken });
  const response: { search: { repositoryCount: number; edges: any[] } } =
    await octokit.graphql(
      `{
          search(query: "is:public", type: REPOSITORY, first: 5) {
            repositoryCount
            edges {
              node {
                ... on Repository {
                  name
                }
              }
            }
          }
        }`
    );

  if (!response.search) {
    throw new Error('No search results were returned.');
  }

  log(
    `The first five public repositories of ${response.search.repositoryCount} repositories:`
  );

  response.search.edges.forEach(function (repository: {
    node: { name: string };
  }) {
    log(`- ${repository.node.name}`);
  });

  log('');
}

export default loadGitHub;
