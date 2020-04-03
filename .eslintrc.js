module.exports = {
  "extends": "airbnb",
  "rules": {
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": "off",
    "no-plusplus": "off",
    "camelcase": "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }
}