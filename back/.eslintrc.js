module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off", // Les préfixes dans les noms d'interfaces ne sont pas forcés. Cette règle permet de désactiver l'obligation d'utiliser un préfixe spécifique dans les noms d'interfaces TypeScript.
    "@typescript-eslint/explicit-function-return-type": "off", // Les types de retour de fonction ne sont pas forcés à être explicites. Cette règle permet de désactiver l'obligation de spécifier le type de retour de chaque fonction.
    "@typescript-eslint/explicit-module-boundary-types": "off", // Les types pour les fonctions exportées ne sont pas forcés à être explicites. Cette règle permet de désactiver l'obligation d'indiquer les types de retour explicites pour les fonctions exportées.
    "@typescript-eslint/no-explicit-any": "warn", // Génère un avertissement quand le type 'any' est utilisé. Cette règle désactive les avertissements liés à l'utilisation du type 'any', ce qui signifie que vous pouvez utiliser 'any' sans générer d'erreur ESLint.
    "no-console": "warn", // Génère un avertissement en cas d'utilisation de console.log() et similaires. Cette règle génère un avertissement au lieu d'une erreur lorsque des méthodes de la console comme `console.log()` sont utilisées, ce qui permet de les utiliser pour le débogage tout en étant averti de leur présence.
    "camelcase": ["error", { "properties": "always" }], // Cette règle impose l'utilisation du style camelCase pour les noms de variables et de propriétés d'objet.
    "no-unused-vars": "error", // Cette règle signale les variables déclarées mais non utilisées, ce qui peut aider à détecter du code inutile.
    "eqeqeq": "error", // Cette règle encourage l'utilisation de l'opérateur strict d'égalité (`===` et `!==`) plutôt que de l'opérateur non strict d'égalité (`==` et `!=`) pour les comparaisons.
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "trailingComma": "all",
      },
    ],
  }  
};
