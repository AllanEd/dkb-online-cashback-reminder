module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: 'last 5 Chrome versions'
      }
    ]
  ];

  const plugins = [];

  return {
    presets,
    plugins
  };
};