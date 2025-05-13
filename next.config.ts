const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'potfolio'; // replace with your repo

module.exports = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : '',
};
