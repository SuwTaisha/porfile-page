export async function GET() {
  const endPoint = "https://api.github.com/graphql";
  const query = `query suwaGithub {
    viewer {
        contributionsCollection {
            commitContributionsByRepository {
                repository {
                    name
                }

                contributions(first: 100) {
                    nodes {
                        occurredAt
                        commitCount
                    }
                }
            }
        }
    }
  }`;
  const res = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },

    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    return Response.json({ error: json.errors }, { status: 500 });
  }

  return Response.json(json.data.viewer.contributionsCollection);
}
