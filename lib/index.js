"use strict";

import base from "./configs/base";
import recommended from "./configs/recommended";
import basePrettier from "./prettier-configs/base";
import recommendedPrettier from "./prettier-configs/recommended";

module.exports = {
  configs: {
    base,
    recommended,
    "base-prettier": basePrettier,
    "recommended-prettier": recommendedPrettier,
  },
};
