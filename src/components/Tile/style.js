import styled, { css } from "styled-components";
import Bush from "./assets/bush.png";
import Path from "./assets/path_01.png";

// house_1
import House111 from "./assets/house_1/house1.1.1.png";
import House112 from "./assets/house_1/house1.1.2.png";
import House113 from "./assets/house_1/house1.1.3.png";
import House114 from "./assets/house_1/house1.1.4.png";
import House115 from "./assets/house_1/house1.1.5.png";

import House121 from "./assets/house_1/house1.2.1.png";
import House122 from "./assets/house_1/house1.2.2.png";
import House123 from "./assets/house_1/house1.2.3.png";
import House124 from "./assets/house_1/house1.2.4.png";
import House125 from "./assets/house_1/house1.2.5.png";

import House131 from "./assets/house_1/house1.3.1.png";
import House132 from "./assets/house_1/house1.3.2.png";
import House133 from "./assets/house_1/house1.3.3.png";
import House134 from "./assets/house_1/house1.3.4.png";
import House135 from "./assets/house_1/house1.3.5.png";

import House141 from "./assets/house_1/house1.4.1.png";
import House142 from "./assets/house_1/house1.4.2.png";
import House143 from "./assets/house_1/house1.4.3.png";
import House144 from "./assets/house_1/house1.4.4.png";
import House145 from "./assets/house_1/house1.4.5.png";

// house_2
import House211 from "./assets/house_2/house2.1.1.png";
import House212 from "./assets/house_2/house2.1.2.png";
import House213 from "./assets/house_2/house2.1.3.png";
import House214 from "./assets/house_2/house2.1.4.png";
import House215 from "./assets/house_2/house2.1.5.png";

import House221 from "./assets/house_2/house2.2.1.png";
import House222 from "./assets/house_2/house2.2.2.png";
import House223 from "./assets/house_2/house2.2.3.png";
import House224 from "./assets/house_2/house2.2.4.png";
import House225 from "./assets/house_2/house2.2.5.png";

import House231 from "./assets/house_2/house2.3.1.png";
import House232 from "./assets/house_2/house2.3.2.png";
import House233 from "./assets/house_2/house2.3.3.png";
import House234 from "./assets/house_2/house2.3.4.png";
import House235 from "./assets/house_2/house2.3.5.png";

import House241 from "./assets/house_2/house2.4.1.png";
import House242 from "./assets/house_2/house2.4.2.png";
import House243 from "./assets/house_2/house2.4.3.png";
import House244 from "./assets/house_2/house2.4.4.png";
import House245 from "./assets/house_2/house2.4.5.png";

// house_3
import House311 from "./assets/house_3/house3.1.1.png";
import House312 from "./assets/house_3/house3.1.2.png";
import House313 from "./assets/house_3/house3.1.3.png";
import House314 from "./assets/house_3/house3.1.4.png";
import House315 from "./assets/house_3/house3.1.5.png";

import House321 from "./assets/house_3/house3.2.1.png";
import House322 from "./assets/house_3/house3.2.2.png";
import House323 from "./assets/house_3/house3.2.3.png";
import House324 from "./assets/house_3/house3.2.4.png";
import House325 from "./assets/house_3/house3.2.5.png";

import House331 from "./assets/house_3/house3.3.1.png";
import House332 from "./assets/house_3/house3.3.2.png";
import House333 from "./assets/house_3/house3.3.3.png";
import House334 from "./assets/house_3/house3.3.4.png";
import House335 from "./assets/house_3/house3.3.5.png";

import House341 from "./assets/house_3/house3.4.1.png";
import House342 from "./assets/house_3/house3.4.2.png";
import House343 from "./assets/house_3/house3.4.3.png";
import House344 from "./assets/house_3/house3.4.4.png";
import House345 from "./assets/house_3/house3.4.5.png";

// house_4
import House411 from "./assets/house_4/house4.1.1.png";
import House412 from "./assets/house_4/house4.1.2.png";
import House413 from "./assets/house_4/house4.1.3.png";
import House414 from "./assets/house_4/house4.1.4.png";
import House415 from "./assets/house_4/house4.1.5.png";

import House421 from "./assets/house_4/house4.2.1.png";
import House422 from "./assets/house_4/house4.2.2.png";
import House423 from "./assets/house_4/house4.2.3.png";
import House424 from "./assets/house_4/house4.2.4.png";
import House425 from "./assets/house_4/house4.2.5.png";

import House431 from "./assets/house_4/house4.3.1.png";
import House432 from "./assets/house_4/house4.3.2.png";
import House433 from "./assets/house_4/house4.3.3.png";
import House434 from "./assets/house_4/house4.3.4.png";
import House435 from "./assets/house_4/house4.3.5.png";

import House441 from "./assets/house_4/house4.4.1.png";
import House442 from "./assets/house_4/house4.4.2.png";
import House443 from "./assets/house_4/house4.4.3.png";
import House444 from "./assets/house_4/house4.4.4.png";
import House445 from "./assets/house_4/house4.4.5.png";

// house_5
import House511 from "./assets/house_5/house5.1.1.png";
import House512 from "./assets/house_5/house5.1.2.png";
import House513 from "./assets/house_5/house5.1.3.png";
import House514 from "./assets/house_5/house5.1.4.png";
import House515 from "./assets/house_5/house5.1.5.png";

import House521 from "./assets/house_5/house5.2.1.png";
import House522 from "./assets/house_5/house5.2.2.png";
import House523 from "./assets/house_5/house5.2.3.png";
import House524 from "./assets/house_5/house5.2.4.png";
import House525 from "./assets/house_5/house5.2.5.png";

import House531 from "./assets/house_5/house5.3.1.png";
import House532 from "./assets/house_5/house5.3.2.png";
import House533 from "./assets/house_5/house5.3.3.png";
import House534 from "./assets/house_5/house5.3.4.png";
import House535 from "./assets/house_5/house5.3.5.png";

import House541 from "./assets/house_5/house5.4.1.png";
import House542 from "./assets/house_5/house5.4.2.png";
import House543 from "./assets/house_5/house5.4.3.png";
import House544 from "./assets/house_5/house5.4.4.png";
import House545 from "./assets/house_5/house5.4.5.png";

// house_6
import House611 from "./assets/house_6/house6.1.1.png";
import House612 from "./assets/house_6/house6.1.2.png";
import House613 from "./assets/house_6/house6.1.3.png";
import House614 from "./assets/house_6/house6.1.4.png";
import House615 from "./assets/house_6/house6.1.5.png";

import House621 from "./assets/house_6/house6.2.1.png";
import House622 from "./assets/house_6/house6.2.2.png";
import House623 from "./assets/house_6/house6.2.3.png";
import House624 from "./assets/house_6/house6.2.4.png";
import House625 from "./assets/house_6/house6.2.5.png";

import House631 from "./assets/house_6/house6.3.1.png";
import House632 from "./assets/house_6/house6.3.2.png";
import House633 from "./assets/house_6/house6.3.3.png";
import House634 from "./assets/house_6/house6.3.4.png";
import House635 from "./assets/house_6/house6.3.5.png";

import House641 from "./assets/house_6/house6.4.1.png";
import House642 from "./assets/house_6/house6.4.2.png";
import House643 from "./assets/house_6/house6.4.3.png";
import House644 from "./assets/house_6/house6.4.4.png";
import House645 from "./assets/house_6/house6.4.5.png";

// house_7
import House711 from "./assets/house_7/house7.1.1.png";
import House712 from "./assets/house_7/house7.1.2.png";
import House713 from "./assets/house_7/house7.1.3.png";
import House714 from "./assets/house_7/house7.1.4.png";
import House715 from "./assets/house_7/house7.1.5.png";

import House721 from "./assets/house_7/house7.2.1.png";
import House722 from "./assets/house_7/house7.2.2.png";
import House723 from "./assets/house_7/house7.2.3.png";
import House724 from "./assets/house_7/house7.2.4.png";
import House725 from "./assets/house_7/house7.2.5.png";

import House731 from "./assets/house_7/house7.3.1.png";
import House732 from "./assets/house_7/house7.3.2.png";
import House733 from "./assets/house_7/house7.3.3.png";
import House734 from "./assets/house_7/house7.3.4.png";
import House735 from "./assets/house_7/house7.3.5.png";

import House741 from "./assets/house_7/house7.4.1.png";
import House742 from "./assets/house_7/house7.4.2.png";
import House743 from "./assets/house_7/house7.4.3.png";
import House744 from "./assets/house_7/house7.4.4.png";
import House745 from "./assets/house_7/house7.4.5.png";

// house_8
import House811 from "./assets/house_8/house8.1.1.png";
import House812 from "./assets/house_8/house8.1.2.png";
import House813 from "./assets/house_8/house8.1.3.png";
import House814 from "./assets/house_8/house8.1.4.png";
import House815 from "./assets/house_8/house8.1.5.png";

import House821 from "./assets/house_8/house8.2.1.png";
import House822 from "./assets/house_8/house8.2.2.png";
import House823 from "./assets/house_8/house8.2.3.png";
import House824 from "./assets/house_8/house8.2.4.png";
import House825 from "./assets/house_8/house8.2.5.png";

import House831 from "./assets/house_8/house8.3.1.png";
import House832 from "./assets/house_8/house8.3.2.png";
import House833 from "./assets/house_8/house8.3.3.png";
import House834 from "./assets/house_8/house8.3.4.png";
import House835 from "./assets/house_8/house8.3.5.png";

import House841 from "./assets/house_8/house8.4.1.png";
import House842 from "./assets/house_8/house8.4.2.png";
import House843 from "./assets/house_8/house8.4.3.png";
import House844 from "./assets/house_8/house8.4.4.png";
import House845 from "./assets/house_8/house8.4.5.png";

// house_9
import House911 from "./assets/house_9/house9.1.1.png";
import House912 from "./assets/house_9/house9.1.2.png";
import House913 from "./assets/house_9/house9.1.3.png";
import House914 from "./assets/house_9/house9.1.4.png";
import House915 from "./assets/house_9/house9.1.5.png";

import House921 from "./assets/house_9/house9.2.1.png";
import House922 from "./assets/house_9/house9.2.2.png";
import House923 from "./assets/house_9/house9.2.3.png";
import House924 from "./assets/house_9/house9.2.4.png";
import House925 from "./assets/house_9/house9.2.5.png";

import House931 from "./assets/house_9/house9.3.1.png";
import House932 from "./assets/house_9/house9.3.2.png";
import House933 from "./assets/house_9/house9.3.3.png";
import House934 from "./assets/house_9/house9.3.4.png";
import House935 from "./assets/house_9/house9.3.5.png";

import House941 from "./assets/house_9/house9.4.1.png";
import House942 from "./assets/house_9/house9.4.2.png";
import House943 from "./assets/house_9/house9.4.3.png";
import House944 from "./assets/house_9/house9.4.4.png";
import House945 from "./assets/house_9/house9.4.5.png";

// house_10
import House1011 from "./assets/house_10/house10.1.1.png";
import House1012 from "./assets/house_10/house10.1.2.png";
import House1013 from "./assets/house_10/house10.1.3.png";
import House1014 from "./assets/house_10/house10.1.4.png";
import House1015 from "./assets/house_10/house10.1.5.png";

import House1021 from "./assets/house_10/house10.2.1.png";
import House1022 from "./assets/house_10/house10.2.2.png";
import House1023 from "./assets/house_10/house10.2.3.png";
import House1024 from "./assets/house_10/house10.2.4.png";
import House1025 from "./assets/house_10/house10.2.5.png";

import House1031 from "./assets/house_10/house10.3.1.png";
import House1032 from "./assets/house_10/house10.3.2.png";
import House1033 from "./assets/house_10/house10.3.3.png";
import House1034 from "./assets/house_10/house10.3.4.png";
import House1035 from "./assets/house_10/house10.3.5.png";

import House1041 from "./assets/house_10/house10.4.1.png";
import House1042 from "./assets/house_10/house10.4.2.png";
import House1043 from "./assets/house_10/house10.4.3.png";
import House1044 from "./assets/house_10/house10.4.4.png";
import House1045 from "./assets/house_10/house10.4.5.png";

// house_11
import House1111 from "./assets/house_11/house11.1.1.png";
import House1112 from "./assets/house_11/house11.1.2.png";
import House1113 from "./assets/house_11/house11.1.3.png";
import House1114 from "./assets/house_11/house11.1.4.png";
import House1115 from "./assets/house_11/house11.1.5.png";

import House1121 from "./assets/house_11/house11.2.1.png";
import House1122 from "./assets/house_11/house11.2.2.png";
import House1123 from "./assets/house_11/house11.2.3.png";
import House1124 from "./assets/house_11/house11.2.4.png";
import House1125 from "./assets/house_11/house11.2.5.png";

import House1131 from "./assets/house_11/house11.3.1.png";
import House1132 from "./assets/house_11/house11.3.2.png";
import House1133 from "./assets/house_11/house11.3.3.png";
import House1134 from "./assets/house_11/house11.3.4.png";
import House1135 from "./assets/house_11/house11.3.5.png";

import House1141 from "./assets/house_11/house11.4.1.png";
import House1142 from "./assets/house_11/house11.4.2.png";
import House1143 from "./assets/house_11/house11.4.3.png";
import House1144 from "./assets/house_11/house11.4.4.png";
import House1145 from "./assets/house_11/house11.4.5.png";

const tileHouses1 = [
    { name: "TILE_HOUSE_111", img: House111 },
    { name: "TILE_HOUSE_112", img: House112 },
    { name: "TILE_HOUSE_113", img: House113 },
    { name: "TILE_HOUSE_114", img: House114 },
    { name: "TILE_HOUSE_115", img: House115 },
    { name: "TILE_HOUSE_211", img: House211 },
    { name: "TILE_HOUSE_212", img: House212 },
    { name: "TILE_HOUSE_213", img: House213 },
    { name: "TILE_HOUSE_214", img: House214 },
    { name: "TILE_HOUSE_215", img: House215 },
    { name: "TILE_HOUSE_311", img: House311 },
    { name: "TILE_HOUSE_312", img: House312 },
    { name: "TILE_HOUSE_313", img: House313 },
    { name: "TILE_HOUSE_314", img: House314 },
    { name: "TILE_HOUSE_315", img: House315 },
    { name: "TILE_HOUSE_411", img: House411 },
    { name: "TILE_HOUSE_412", img: House412 },
    { name: "TILE_HOUSE_413", img: House413 },
    { name: "TILE_HOUSE_414", img: House414 },
    { name: "TILE_HOUSE_415", img: House415 },
    { name: "TILE_HOUSE_511", img: House511 },
    { name: "TILE_HOUSE_512", img: House512 },
    { name: "TILE_HOUSE_513", img: House513 },
    { name: "TILE_HOUSE_514", img: House514 },
    { name: "TILE_HOUSE_515", img: House515 },
    { name: "TILE_HOUSE_611", img: House611 },
    { name: "TILE_HOUSE_612", img: House612 },
    { name: "TILE_HOUSE_613", img: House613 },
    { name: "TILE_HOUSE_614", img: House614 },
    { name: "TILE_HOUSE_615", img: House615 },
    { name: "TILE_HOUSE_711", img: House711 },
    { name: "TILE_HOUSE_712", img: House712 },
    { name: "TILE_HOUSE_713", img: House713 },
    { name: "TILE_HOUSE_714", img: House714 },
    { name: "TILE_HOUSE_715", img: House715 },
    { name: "TILE_HOUSE_811", img: House811 },
    { name: "TILE_HOUSE_812", img: House812 },
    { name: "TILE_HOUSE_813", img: House813 },
    { name: "TILE_HOUSE_814", img: House814 },
    { name: "TILE_HOUSE_815", img: House815 },
    { name: "TILE_HOUSE_911", img: House911 },
    { name: "TILE_HOUSE_912", img: House912 },
    { name: "TILE_HOUSE_913", img: House913 },
    { name: "TILE_HOUSE_914", img: House914 },
    { name: "TILE_HOUSE_915", img: House915 },
    { name: "TILE_HOUSE_1011", img: House1011 },
    { name: "TILE_HOUSE_1012", img: House1012 },
    { name: "TILE_HOUSE_1013", img: House1013 },
    { name: "TILE_HOUSE_1014", img: House1014 },
    { name: "TILE_HOUSE_1015", img: House1015 },
    { name: "TILE_HOUSE_1111", img: House1111 },
    { name: "TILE_HOUSE_1112", img: House1112 },
    { name: "TILE_HOUSE_1113", img: House1113 },
    { name: "TILE_HOUSE_1114", img: House1114 },
    { name: "TILE_HOUSE_1115", img: House1115 },
];

const tileHouses2 = [
    { name: "TILE_HOUSE_121", img: House121 },
    { name: "TILE_HOUSE_122", img: House122 },
    { name: "TILE_HOUSE_123", img: House123 },
    { name: "TILE_HOUSE_124", img: House124 },
    { name: "TILE_HOUSE_125", img: House125 },
    { name: "TILE_HOUSE_221", img: House221 },
    { name: "TILE_HOUSE_222", img: House222 },
    { name: "TILE_HOUSE_223", img: House223 },
    { name: "TILE_HOUSE_224", img: House224 },
    { name: "TILE_HOUSE_225", img: House225 },
    { name: "TILE_HOUSE_321", img: House321 },
    { name: "TILE_HOUSE_322", img: House322 },
    { name: "TILE_HOUSE_323", img: House323 },
    { name: "TILE_HOUSE_324", img: House324 },
    { name: "TILE_HOUSE_325", img: House325 },
    { name: "TILE_HOUSE_421", img: House421 },
    { name: "TILE_HOUSE_422", img: House422 },
    { name: "TILE_HOUSE_423", img: House423 },
    { name: "TILE_HOUSE_424", img: House424 },
    { name: "TILE_HOUSE_425", img: House425 },
    { name: "TILE_HOUSE_521", img: House521 },
    { name: "TILE_HOUSE_522", img: House522 },
    { name: "TILE_HOUSE_523", img: House523 },
    { name: "TILE_HOUSE_524", img: House524 },
    { name: "TILE_HOUSE_525", img: House525 },
    { name: "TILE_HOUSE_621", img: House621 },
    { name: "TILE_HOUSE_622", img: House622 },
    { name: "TILE_HOUSE_623", img: House623 },
    { name: "TILE_HOUSE_624", img: House624 },
    { name: "TILE_HOUSE_625", img: House625 },
    { name: "TILE_HOUSE_721", img: House721 },
    { name: "TILE_HOUSE_722", img: House722 },
    { name: "TILE_HOUSE_723", img: House723 },
    { name: "TILE_HOUSE_724", img: House724 },
    { name: "TILE_HOUSE_725", img: House725 },
    { name: "TILE_HOUSE_821", img: House821 },
    { name: "TILE_HOUSE_822", img: House822 },
    { name: "TILE_HOUSE_823", img: House823 },
    { name: "TILE_HOUSE_824", img: House824 },
    { name: "TILE_HOUSE_825", img: House825 },
    { name: "TILE_HOUSE_921", img: House921 },
    { name: "TILE_HOUSE_922", img: House922 },
    { name: "TILE_HOUSE_923", img: House923 },
    { name: "TILE_HOUSE_924", img: House924 },
    { name: "TILE_HOUSE_925", img: House925 },
    { name: "TILE_HOUSE_1021", img: House1021 },
    { name: "TILE_HOUSE_1022", img: House1022 },
    { name: "TILE_HOUSE_1023", img: House1023 },
    { name: "TILE_HOUSE_1024", img: House1024 },
    { name: "TILE_HOUSE_1025", img: House1025 },
    { name: "TILE_HOUSE_1121", img: House1121 },
    { name: "TILE_HOUSE_1122", img: House1122 },
    { name: "TILE_HOUSE_1123", img: House1123 },
    { name: "TILE_HOUSE_1124", img: House1124 },
    { name: "TILE_HOUSE_1125", img: House1125 },
];

const tileHouses3 = [
    { name: "TILE_HOUSE_131", img: House131 },
    { name: "TILE_HOUSE_132", img: House132 },
    { name: "TILE_HOUSE_133", img: House133 },
    { name: "TILE_HOUSE_134", img: House134 },
    { name: "TILE_HOUSE_135", img: House135 },
    { name: "TILE_HOUSE_231", img: House231 },
    { name: "TILE_HOUSE_232", img: House232 },
    { name: "TILE_HOUSE_233", img: House233 },
    { name: "TILE_HOUSE_234", img: House234 },
    { name: "TILE_HOUSE_235", img: House235 },
    { name: "TILE_HOUSE_331", img: House331 },
    { name: "TILE_HOUSE_332", img: House332 },
    { name: "TILE_HOUSE_333", img: House333 },
    { name: "TILE_HOUSE_334", img: House334 },
    { name: "TILE_HOUSE_335", img: House335 },
    { name: "TILE_HOUSE_431", img: House431 },
    { name: "TILE_HOUSE_432", img: House432 },
    { name: "TILE_HOUSE_433", img: House433 },
    { name: "TILE_HOUSE_434", img: House434 },
    { name: "TILE_HOUSE_435", img: House435 },
    { name: "TILE_HOUSE_531", img: House531 },
    { name: "TILE_HOUSE_532", img: House532 },
    { name: "TILE_HOUSE_533", img: House533 },
    { name: "TILE_HOUSE_534", img: House534 },
    { name: "TILE_HOUSE_535", img: House535 },
    { name: "TILE_HOUSE_631", img: House631 },
    { name: "TILE_HOUSE_632", img: House632 },
    { name: "TILE_HOUSE_633", img: House633 },
    { name: "TILE_HOUSE_634", img: House634 },
    { name: "TILE_HOUSE_635", img: House635 },
    { name: "TILE_HOUSE_731", img: House731 },
    { name: "TILE_HOUSE_732", img: House732 },
    { name: "TILE_HOUSE_733", img: House733 },
    { name: "TILE_HOUSE_734", img: House734 },
    { name: "TILE_HOUSE_735", img: House735 },
    { name: "TILE_HOUSE_831", img: House831 },
    { name: "TILE_HOUSE_832", img: House832 },
    { name: "TILE_HOUSE_833", img: House833 },
    { name: "TILE_HOUSE_834", img: House834 },
    { name: "TILE_HOUSE_835", img: House835 },
    { name: "TILE_HOUSE_931", img: House931 },
    { name: "TILE_HOUSE_932", img: House932 },
    { name: "TILE_HOUSE_933", img: House933 },
    { name: "TILE_HOUSE_934", img: House934 },
    { name: "TILE_HOUSE_935", img: House935 },
    { name: "TILE_HOUSE_1031", img: House1031 },
    { name: "TILE_HOUSE_1032", img: House1032 },
    { name: "TILE_HOUSE_1033", img: House1033 },
    { name: "TILE_HOUSE_1034", img: House1034 },
    { name: "TILE_HOUSE_1035", img: House1035 },
    { name: "TILE_HOUSE_1131", img: House1131 },
    { name: "TILE_HOUSE_1132", img: House1132 },
    { name: "TILE_HOUSE_1133", img: House1133 },
    { name: "TILE_HOUSE_1134", img: House1134 },
    { name: "TILE_HOUSE_1135", img: House1135 },
];

const tileHouses4 = [
    { name: "TILE_HOUSE_141", img: House141 },
    { name: "TILE_HOUSE_142", img: House142 },
    { name: "TILE_HOUSE_143", img: House143 },
    { name: "TILE_HOUSE_144", img: House144 },
    { name: "TILE_HOUSE_145", img: House145 },
    { name: "TILE_HOUSE_241", img: House241 },
    { name: "TILE_HOUSE_242", img: House242 },
    { name: "TILE_HOUSE_243", img: House243 },
    { name: "TILE_HOUSE_244", img: House244 },
    { name: "TILE_HOUSE_245", img: House245 },
    { name: "TILE_HOUSE_341", img: House341 },
    { name: "TILE_HOUSE_342", img: House342 },
    { name: "TILE_HOUSE_343", img: House343 },
    { name: "TILE_HOUSE_344", img: House344 },
    { name: "TILE_HOUSE_345", img: House345 },
    { name: "TILE_HOUSE_441", img: House441 },
    { name: "TILE_HOUSE_442", img: House442 },
    { name: "TILE_HOUSE_443", img: House443 },
    { name: "TILE_HOUSE_444", img: House444 },
    { name: "TILE_HOUSE_445", img: House445 },
    { name: "TILE_HOUSE_541", img: House541 },
    { name: "TILE_HOUSE_542", img: House542 },
    { name: "TILE_HOUSE_543", img: House543 },
    { name: "TILE_HOUSE_544", img: House544 },
    { name: "TILE_HOUSE_545", img: House545 },
    { name: "TILE_HOUSE_641", img: House641 },
    { name: "TILE_HOUSE_642", img: House642 },
    { name: "TILE_HOUSE_643", img: House643 },
    { name: "TILE_HOUSE_644", img: House644 },
    { name: "TILE_HOUSE_645", img: House645 },
    { name: "TILE_HOUSE_741", img: House741 },
    { name: "TILE_HOUSE_742", img: House742 },
    { name: "TILE_HOUSE_743", img: House743 },
    { name: "TILE_HOUSE_744", img: House744 },
    { name: "TILE_HOUSE_745", img: House745 },
    { name: "TILE_HOUSE_841", img: House841 },
    { name: "TILE_HOUSE_842", img: House842 },
    { name: "TILE_HOUSE_843", img: House843 },
    { name: "TILE_HOUSE_844", img: House844 },
    { name: "TILE_HOUSE_845", img: House845 },
    { name: "TILE_HOUSE_941", img: House941 },
    { name: "TILE_HOUSE_942", img: House942 },
    { name: "TILE_HOUSE_943", img: House943 },
    { name: "TILE_HOUSE_944", img: House944 },
    { name: "TILE_HOUSE_945", img: House945 },
    { name: "TILE_HOUSE_1041", img: House1041 },
    { name: "TILE_HOUSE_1042", img: House1042 },
    { name: "TILE_HOUSE_1043", img: House1043 },
    { name: "TILE_HOUSE_1044", img: House1044 },
    { name: "TILE_HOUSE_1045", img: House1045 },
    { name: "TILE_HOUSE_1141", img: House1141 },
    { name: "TILE_HOUSE_1142", img: House1142 },
    { name: "TILE_HOUSE_1143", img: House1143 },
    { name: "TILE_HOUSE_1144", img: House1144 },
    { name: "TILE_HOUSE_1145", img: House1145 },
];

const viewsBuilding2 = 10;
const viewsBuilding3 = 20;
const viewsBuilding4 = 30;

export const StyledTile = styled.div(
        ({ variant, views }) => css `
        position: relative;
        z-index: 0;
        background-color: #3c3c3c;

        &:hover {
            outline: 6px dashed #d0dfff;
            outline-offset: -6px;
            cursor: pointer;
        }

        &:after {
            content: "";
            position: absolute;
            transform: translate(-50%, -50%) rotateX(0) rotateZ(-45deg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center;
            pointer-events: none;
            z-index: 3;
        }

        ${variant === "TILE_BUSH" &&
        css`
            &:after {
                background-image: url(${Bush});
                width: 163px;
                height: 201px;
                top: 45px;
                left: 45px;
            }
        `}

        /* Size 1 houses*/
        ${tileHouses1.find((o) => o.name === variant) &&
        css`
            &:after {
                width: 164px;
                height: 255px;
                top: 23px;
                left: 26px;
            }
        `}

        /* Size 2 houses*/
        ${tileHouses2.find((o) => o.name === variant) &&
        css`
            &:after {
                width: 164px;
                height: 290px;
                top: 13px;
                left: 15px;
            }
        `}

        /* Size 3 houses*/
        ${tileHouses3.find((o) => o.name === variant) &&
        css`
            &:after {
                width: 164px;
                height: 326px;
                top: 0px;
                left: 2px;
            }
        `}

        /* Size 4 houses*/
        ${tileHouses4.find((o) => o.name === variant) &&
        css`
            &:after {
                width: 164px;
                height: 369px;
                top: -13px;
                left: -11px;
            }
        `}
        
        /* Size 1 houses */
        ${variant === tileHouses1[0].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[0].img});
            }
        `}
        ${variant === tileHouses1[1].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[1].img});
            }
        `}
        ${variant === tileHouses1[2].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[2].img});
            }
        `}
        ${variant === tileHouses1[3].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[3].img});
            }
        `}
        ${variant === tileHouses1[4].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[4].img});
            }
        `}
        ${variant === tileHouses1[5].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[5].img});
            }
        `}
        ${variant === tileHouses1[6].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[6].img});
            }
        `}
        ${variant === tileHouses1[7].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[7].img});
            }
        `}
        ${variant === tileHouses1[8].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[8].img});
            }
        `}
        ${variant === tileHouses1[9].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[9].img});
            }
        `}
        ${variant === tileHouses1[10].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[10].img});
            }
        `}
        ${variant === tileHouses1[11].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[11].img});
            }
        `}
        ${variant === tileHouses1[12].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[12].img});
            }
        `}
        ${variant === tileHouses1[13].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[13].img});
            }
        `}
        ${variant === tileHouses1[14].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[14].img});
            }
        `}
        ${variant === tileHouses1[15].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[15].img});
            }
        `}
        ${variant === tileHouses1[16].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[16].img});
            }
        `}
        ${variant === tileHouses1[17].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[17].img});
            }
        `}
        ${variant === tileHouses1[18].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[18].img});
            }
        `}
        ${variant === tileHouses1[19].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[19].img});
            }
        `}
        ${variant === tileHouses1[20].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[20].img});
            }
        `}
        ${variant === tileHouses1[21].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[21].img});
            }
        `}
        ${variant === tileHouses1[22].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[22].img});
            }
        `}
        ${variant === tileHouses1[23].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[23].img});
            }
        `}
        ${variant === tileHouses1[24].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[24].img});
            }
        `}
        ${variant === tileHouses1[25].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[25].img});
            }
        `}
        ${variant === tileHouses1[26].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[26].img});
            }
        `}
        ${variant === tileHouses1[27].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[27].img});
            }
        `}
        ${variant === tileHouses1[28].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[28].img});
            }
        `}
        ${variant === tileHouses1[29].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[29].img});
            }
        `}
        ${variant === tileHouses1[30].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[30].img});
            }
        `}
        ${variant === tileHouses1[31].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[31].img});
            }
        `}
        ${variant === tileHouses1[32].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[32].img});
            }
        `}
          ${variant === tileHouses1[33].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[33].img});
            }
        `}
        ${variant === tileHouses1[34].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[34].img});
            }
        `}
        ${variant === tileHouses1[35].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[35].img});
            }
        `}
        ${variant === tileHouses1[36].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[36].img});
            }
        `}
        ${variant === tileHouses1[37].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[37].img});
            }
        `}
        ${variant === tileHouses1[38].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[38].img});
            }
        `}
        ${variant === tileHouses1[39].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[39].img});
            }
        `}
        ${variant === tileHouses1[40].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[40].img});
            }
        `}
        ${variant === tileHouses1[41].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[41].img});
            }
        `}
        ${variant === tileHouses1[42].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[42].img});
            }
        `}
        ${variant === tileHouses1[43].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[43].img});
            }
        `}
        ${variant === tileHouses1[44].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[44].img});
            }
        `}
        ${variant === tileHouses1[45].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[45].img});
            }
        `}
        ${variant === tileHouses1[46].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[46].img});
            }
        `}
        ${variant === tileHouses1[47].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[47].img});
            }
        `}
        ${variant === tileHouses1[48].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[48].img});
            }
        `}
        ${variant === tileHouses1[49].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[49].img});
            }
        `}
        ${variant === tileHouses1[50].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[50].img});
            }
        `}
        ${variant === tileHouses1[51].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[51].img});
            }
        `}
        ${variant === tileHouses1[52].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[52].img});
            }
        `}
        ${variant === tileHouses1[53].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[53].img});
            }
        `}
        ${variant === tileHouses1[54].name &&
        css`
            &:after {
                background-image: url(${tileHouses1[54].img});
            }
        `}



        /* Size 2 houses */
        ${variant === tileHouses2[0].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[0].img});
            }
        `}
          ${variant === tileHouses2[1].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[1].img});
            }
        `}
          ${variant === tileHouses2[2].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[2].img});
            }
        `}
          ${variant === tileHouses2[3].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[3].img});
            }
        `}
          ${variant === tileHouses2[4].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[4].img});
            }
        `}
          ${variant === tileHouses2[5].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[5].img});
            }
        `}
          ${variant === tileHouses2[6].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[6].img});
            }
        `}
          ${variant === tileHouses2[7].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[7].img});
            }
        `}
          ${variant === tileHouses2[8].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[8].img});
            }
        `}
          ${variant === tileHouses2[9].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[9].img});
            }
        `}
          ${variant === tileHouses2[10].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[10].img});
            }
        `}
          ${variant === tileHouses2[11].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[11].img});
            }
        `}
          ${variant === tileHouses2[12].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[12].img});
            }
        `}
          ${variant === tileHouses2[13].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[13].img});
            }
        `}
          ${variant === tileHouses2[14].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[14].img});
            }
        `}
          ${variant === tileHouses2[15].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[15].img});
            }
        `}
          ${variant === tileHouses2[16].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[16].img});
            }
        `}
          ${variant === tileHouses2[17].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[17].img});
            }
        `}
          ${variant === tileHouses2[18].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[18].img});
            }
        `}
          ${variant === tileHouses2[19].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[19].img});
            }
        `}
          ${variant === tileHouses2[20].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[20].img});
            }
        `}
          ${variant === tileHouses2[21].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[21].img});
            }
        `}
          ${variant === tileHouses2[22].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[22].img});
            }
        `}
          ${variant === tileHouses2[23].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[23].img});
            }
        `}
          ${variant === tileHouses2[24].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[24].img});
            }
        `}
          ${variant === tileHouses2[25].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[25].img});
            }
        `}
          ${variant === tileHouses2[26].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[26].img});
            }
        `}
          ${variant === tileHouses2[27].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[27].img});
            }
        `}
          ${variant === tileHouses2[28].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[28].img});
            }
        `}
          ${variant === tileHouses2[29].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[29].img});
            }
        `}
          ${variant === tileHouses2[30].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[30].img});
            }
        `}
          ${variant === tileHouses2[31].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[31].img});
            }
        `}
          ${variant === tileHouses2[32].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[32].img});
            }
        `}
            ${variant === tileHouses2[33].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[33].img});
            }
        `}
          ${variant === tileHouses2[34].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[34].img});
            }
        `}
          ${variant === tileHouses2[35].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[35].img});
            }
        `}
          ${variant === tileHouses2[36].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[36].img});
            }
        `}
          ${variant === tileHouses2[37].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[37].img});
            }
        `}
          ${variant === tileHouses2[38].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[38].img});
            }
        `}
          ${variant === tileHouses2[39].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[39].img});
            }
        `}
          ${variant === tileHouses2[40].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[40].img});
            }
        `}
          ${variant === tileHouses2[41].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[41].img});
            }
        `}
          ${variant === tileHouses2[42].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[42].img});
            }
        `}
          ${variant === tileHouses2[43].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[43].img});
            }
        `}
          ${variant === tileHouses2[44].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[44].img});
            }
        `}
          ${variant === tileHouses2[45].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[45].img});
            }
        `}
          ${variant === tileHouses2[46].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[46].img});
            }
        `}
          ${variant === tileHouses2[47].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[47].img});
            }
        `}
          ${variant === tileHouses2[48].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[48].img});
            }
        `}
          ${variant === tileHouses2[49].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[49].img});
            }
        `}
          ${variant === tileHouses2[50].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[50].img});
            }
        `}
          ${variant === tileHouses2[51].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[51].img});
            }
        `}
          ${variant === tileHouses2[52].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[52].img});
            }
        `}
          ${variant === tileHouses2[53].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[53].img});
            }
        `}
          ${variant === tileHouses2[54].name &&
        views >= viewsBuilding2 &&
        css`
            &:after {
                background-image: url(${tileHouses2[54].img});
            }
        `}

      
        /* Size 3 houses */
        ${variant === tileHouses3[0].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[0].img});
            }
        `}
          ${variant === tileHouses3[1].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[1].img});
            }
        `}
          ${variant === tileHouses3[2].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[2].img});
            }
        `}
          ${variant === tileHouses3[3].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[3].img});
            }
        `}
          ${variant === tileHouses3[4].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[4].img});
            }
        `}
          ${variant === tileHouses3[5].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[5].img});
            }
        `}
          ${variant === tileHouses3[6].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[6].img});
            }
        `}
          ${variant === tileHouses3[7].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[7].img});
            }
        `}
          ${variant === tileHouses3[8].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[8].img});
            }
        `}
          ${variant === tileHouses3[9].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[9].img});
            }
        `}
          ${variant === tileHouses3[10].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[10].img});
            }
        `}
          ${variant === tileHouses3[11].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[11].img});
            }
        `}
          ${variant === tileHouses3[12].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[12].img});
            }
        `}
          ${variant === tileHouses3[13].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[13].img});
            }
        `}
          ${variant === tileHouses3[14].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[14].img});
            }
        `}
          ${variant === tileHouses3[15].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[15].img});
            }
        `}
          ${variant === tileHouses3[16].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[16].img});
            }
        `}
          ${variant === tileHouses3[17].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[17].img});
            }
        `}
          ${variant === tileHouses3[18].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[18].img});
            }
        `}
          ${variant === tileHouses3[19].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[19].img});
            }
        `}
          ${variant === tileHouses3[20].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[20].img});
            }
        `}
          ${variant === tileHouses3[21].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[21].img});
            }
        `}
          ${variant === tileHouses3[22].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[22].img});
            }
        `}
          ${variant === tileHouses3[23].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[23].img});
            }
        `}
          ${variant === tileHouses3[24].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[24].img});
            }
        `}
          ${variant === tileHouses3[25].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[25].img});
            }
        `}
          ${variant === tileHouses3[26].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[26].img});
            }
        `}
          ${variant === tileHouses3[27].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[27].img});
            }
        `}
          ${variant === tileHouses3[28].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[28].img});
            }
        `}
          ${variant === tileHouses3[29].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[29].img});
            }
        `}
          ${variant === tileHouses3[30].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[30].img});
            }
        `}
          ${variant === tileHouses3[31].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[31].img});
            }
        `}
          ${variant === tileHouses3[32].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[32].img});
            }
        `}
            ${variant === tileHouses3[33].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[33].img});
            }
        `}
          ${variant === tileHouses3[34].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[34].img});
            }
        `}
          ${variant === tileHouses3[35].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[35].img});
            }
        `}
          ${variant === tileHouses3[36].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[36].img});
            }
        `}
          ${variant === tileHouses3[37].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[37].img});
            }
        `}
          ${variant === tileHouses3[38].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[38].img});
            }
        `}
          ${variant === tileHouses3[39].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[39].img});
            }
        `}
          ${variant === tileHouses3[40].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[40].img});
            }
        `}
          ${variant === tileHouses3[41].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[41].img});
            }
        `}
          ${variant === tileHouses3[42].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[42].img});
            }
        `}
          ${variant === tileHouses3[43].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[43].img});
            }
        `}
          ${variant === tileHouses3[44].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[44].img});
            }
        `}
          ${variant === tileHouses3[45].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[45].img});
            }
        `}
          ${variant === tileHouses3[46].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[46].img});
            }
        `}
          ${variant === tileHouses3[47].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[47].img});
            }
        `}
          ${variant === tileHouses3[48].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[48].img});
            }
        `}
          ${variant === tileHouses3[49].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[49].img});
            }
        `}
          ${variant === tileHouses3[50].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[50].img});
            }
        `}
          ${variant === tileHouses3[51].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[51].img});
            }
        `}
          ${variant === tileHouses3[52].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[52].img});
            }
        `}
          ${variant === tileHouses3[53].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[53].img});
            }
        `}
          ${variant === tileHouses3[54].name &&
        views >= viewsBuilding3 &&
        css`
            &:after {
                background-image: url(${tileHouses3[54].img});
            }
        `}



        /* Size 4 houses */
        ${variant === tileHouses4[0].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[0].img});
            }
        `}
          ${variant === tileHouses4[1].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[1].img});
            }
        `}
          ${variant === tileHouses4[2].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[2].img});
            }
        `}
          ${variant === tileHouses4[3].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[3].img});
            }
        `}
          ${variant === tileHouses4[4].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[4].img});
            }
        `}
          ${variant === tileHouses4[5].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[5].img});
            }
        `}
          ${variant === tileHouses4[6].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[6].img});
            }
        `}
          ${variant === tileHouses4[7].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[7].img});
            }
        `}
          ${variant === tileHouses4[8].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[8].img});
            }
        `}
          ${variant === tileHouses4[9].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[9].img});
            }
        `}
          ${variant === tileHouses4[10].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[10].img});
            }
        `}
          ${variant === tileHouses4[11].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[11].img});
            }
        `}
          ${variant === tileHouses4[12].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[12].img});
            }
        `}
          ${variant === tileHouses4[13].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[13].img});
            }
        `}
          ${variant === tileHouses4[14].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[14].img});
            }
        `}
          ${variant === tileHouses4[15].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[15].img});
            }
        `}
          ${variant === tileHouses4[16].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[16].img});
            }
        `}
          ${variant === tileHouses4[17].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[17].img});
            }
        `}
          ${variant === tileHouses4[18].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[18].img});
            }
        `}
          ${variant === tileHouses4[19].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[19].img});
            }
        `}
          ${variant === tileHouses4[20].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[20].img});
            }
        `}
          ${variant === tileHouses4[21].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[21].img});
            }
        `}
          ${variant === tileHouses4[22].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[22].img});
            }
        `}
          ${variant === tileHouses4[23].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[23].img});
            }
        `}
          ${variant === tileHouses4[24].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[24].img});
            }
        `}
          ${variant === tileHouses4[25].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[25].img});
            }
        `}
          ${variant === tileHouses4[26].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[26].img});
            }
        `}
          ${variant === tileHouses4[27].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[27].img});
            }
        `}
          ${variant === tileHouses4[28].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[28].img});
            }
        `}
          ${variant === tileHouses4[29].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[29].img});
            }
        `}
          ${variant === tileHouses4[30].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[30].img});
            }
        `}
          ${variant === tileHouses4[31].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[31].img});
            }
        `}
          ${variant === tileHouses4[32].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[32].img});
            }
        `}
            ${variant === tileHouses4[33].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[33].img});
            }
        `}
          ${variant === tileHouses4[34].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[34].img});
            }
        `}
          ${variant === tileHouses4[35].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[35].img});
            }
        `}
          ${variant === tileHouses4[36].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[36].img});
            }
        `}
          ${variant === tileHouses4[37].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[37].img});
            }
        `}
          ${variant === tileHouses4[38].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[38].img});
            }
        `}
          ${variant === tileHouses4[39].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[39].img});
            }
        `}
          ${variant === tileHouses4[40].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[40].img});
            }
        `}
          ${variant === tileHouses4[41].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[41].img});
            }
        `}
          ${variant === tileHouses4[42].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[42].img});
            }
        `}
          ${variant === tileHouses4[43].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[43].img});
            }
        `}
          ${variant === tileHouses4[44].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[44].img});
            }
        `}
          ${variant === tileHouses4[45].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[45].img});
            }
        `}
          ${variant === tileHouses4[46].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[46].img});
            }
        `}
          ${variant === tileHouses4[47].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[47].img});
            }
        `}
          ${variant === tileHouses4[48].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[48].img});
            }
        `}
          ${variant === tileHouses4[49].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[49].img});
            }
        `}
          ${variant === tileHouses4[50].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[50].img});
            }
        `}
          ${variant === tileHouses4[51].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[51].img});
            }
        `}
          ${variant === tileHouses4[52].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[52].img});
            }
        `}
          ${variant === tileHouses4[53].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[53].img});
            }
        `}
          ${variant === tileHouses4[54].name &&
        views >= viewsBuilding4 &&
        css`
            &:after {
                background-image: url(${tileHouses4[54].img});
            }
        `}


        



    
  ${variant === "TILE_PATH" &&
        css`
            &:after {
                background-image: url(${Path});
                width: 164px;
                height: 188px;
                top: 49px;
                left: 49px;
            }
        `}

  ${variant === "TILE_CREATABLE" &&
        css`
            outline: 6px dashed #d0dfff;
            outline-offset: -6px;
            cursor: pointer;
            background-color: transparent;

            &:after {
                content: "+";
                font-size: 64px;
                color: #d0dfff;
                position: absolute;
                transform: translate(-50%, -50%);
                top: calc(50% - 4px);
                left: calc(50% - 4px);
            }
        `}
    `
);