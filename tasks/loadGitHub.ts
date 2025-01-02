import { Octokit } from '@octokit/core';
import colours from '../utilities/colours';
import log from '../utilities/log';

async function makeApiCall(
  githubToken: string
): Promise<{ search: { repositoryCount: number; edges: any[] } }> {
  const octokit: Octokit = new Octokit({ auth: githubToken });
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

  if (!response.search) throw new Error('No search results were returned.');

  return response;
}

export default async (githubToken: string): Promise<void> => {
  log('___ 🐙 GitHub ___\n', colours.cyan);

  if (!githubToken || githubToken === '-') {
    log(
      'Please set "GITHUB_PERSONAL_ACCESS_TOKEN" in the `.env` file.\n',
      colours.red
    );

    return;
  }

  const response: {
    search: {
      repositoryCount: number;
      edges: any[];
    };
  } = await makeApiCall(githubToken);

  log(
    `The first five public repositories of ${response.search.repositoryCount} repositories:`
  );

  response.search.edges.forEach((repository: { node: { name: string } }) => {
    log(`- ${repository.node.name}`);
  });

  log('');
};
