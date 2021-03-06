"use strict";

module.exports = {
  claimReportingFeesForkedMarket: require("./claim-reporting-fees-forked-market"),
  claimReportingFeesNonforkedMarkets: require("./claim-reporting-fees-nonforked-markets"),
  finalizeMarket: require("./finalize-market"),
  getCurrentPeriodProgress: require("./get-current-period-progress"),
  getDisputeInfo: require("./get-dispute-info"),
  getDisputeTokens: require("./get-dispute-tokens"),
  getDisputeWindowCurrent: require("./get-dispute-window-current"),
  getDisputeWindows: require("./get-dispute-windows"),
  getInitialReporters: require("./get-initial-reporters"),
  getReportingFees: require("./get-reporting-fees"),
  getReportingHistory: require("./get-reporting-history"),
  getReportingSummary: require("./get-reporting-summary"),
  getStakeRequiredForDesignatedReporter: require("./get-stake-required-for-designated-reporter"),
};
