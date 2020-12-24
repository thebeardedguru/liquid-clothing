import DotenvWebpack from 'dotenv-webpack';

module.exports = {
  plugins: [new DotenvWebpack({ path: './.env' })],
};
