"use strict";

import basePrettier from "./prettier-configs/base";
import recommendedPrettier from "./prettier-configs/recommended";

module.exports = {
  configs: {
    base: require("./configs/base"),
    recommended: require("./configs/recommended"),
    "base-prettier": basePrettier,
    "recommended-prettier": recommendedPrettier,
  },
};
