module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RecordDetail',
      externals: {
        react: 'React'
      }
    }
  }
}
