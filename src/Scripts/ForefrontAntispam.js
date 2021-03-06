/* global mhaStrings */
/* global AntiSpamReport */
/* exported ForefrontAntiSpamReport */

var ForefrontAntiSpamReport = (function () {
    // cheap inheritance
    var antiSpamReport = AntiSpamReport();
    var forefrontAntiSpamRows = [
        antiSpamReport.row("CTRY", mhaStrings.mha_countryRegion, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("LANG", mhaStrings.mha_lang, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("SCL", mhaStrings.mha_scl, "X-MS-Exchange-Organization-SCL"),
        antiSpamReport.row("PCL", mhaStrings.mha_pcl, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("SFV", mhaStrings.mha_sfv, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("IPV", mhaStrings.mha_ipv, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("H", mhaStrings.mha_h, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("PTR", mhaStrings.mha_ptr, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("CIP", mhaStrings.mha_cip, "X-Forefront-Antispam-Report"),
        antiSpamReport.row("X-CustomSpam", mhaStrings.mha_customSpam, "X-Forefront-Antispam-Report")
    ];

    function init(report) { antiSpamReport.parse(report, forefrontAntiSpamRows); }
    function exists() { return antiSpamReport.existsInternal(forefrontAntiSpamRows); }

    return {
        init: init,
        exists: exists,
        get forefrontAntiSpamRows() { return forefrontAntiSpamRows; },
    }
});