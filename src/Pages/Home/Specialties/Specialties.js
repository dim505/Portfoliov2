import React, { useEffect, useState, useContext } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SqlServer from "./SQLServer.png";
import { useMediaQuery } from "react-responsive";
import Svg from "./svg";

//compoent that holds an summary of my skills
const Specialties = () => {
  const [value, Setvalue] = React.useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: 750px)` });
  const handleChange = (event, NewValue) => {
    Setvalue(NewValue);
  };

  const RenderTab = () => {
    if (value === 0) {
      return (
        <>
          <Grid item>
            <Svg PathUrl="M8.579 10.956c0.041-0.019 0.083-0.037 0.125-0.053-0.041 0.016-0.083 0.035-0.125 0.053zM2.496 22.174h0.126c0.372 0 0.477 0 0.905 0h0.337c0.026 0 0.052 0 0.078 0 0.029 0 0.060 0 0.091 0 0 0 0.005 0 0.006 0 0.013 0 0.026 0 0.038 0 0.005 0 0.005 0 0.009 0 0.005 0 0.011 0.006 0.017 0.005 2.378-0.122 3.48-1.352 4.034-3.124 0.431-1.375 0.784-2.532 1.094-3.504-0 0-0 0.001-0 0.001 0.004-0.012 0.007-0.023 0.011-0.035 0.747-1.048 1.519-1.953 2.215-2.687v0c0 0 0.016 0 0.016-0 1.065 3.257 1.476 9.068 4.591 9.068 0.126 0 0.257 0.003 0.384-0.010-0.127 0.013-0.25 0.030-0.376 0.030h2.474c-0.175 0-0.341-0.026-0.501-0.059-0.101-0.021-0.199-0.052-0.295-0.085 0.096 0.032 0.194 0.057 0.296 0.077 0.16 0.033 0.326 0.048 0.5 0.048 0.459 0 0.842-0.035 1.176-0.144-0.334 0.109-0.717 0.162-1.176 0.162h2.42c0 0 0 0 0 0 0.021 0 0.042 0 0.062 0 0 0 0 0 0 0s0.001 0 0.002 0l0.001-0.005 0.913-0.009c-0.117 0-0.226-0.021-0.331-0.056 0.001-0.002 0.003-0.003 0.004-0.005 0.103 0.031 0.21 0.037 0.325 0.037 2.403 0 4.826-4.315 8.835-11.483h-1.574l0.001 0.064h-0.293c-1.478 2.624-2.511 4.866-3.387 6.658 0.877-1.794 1.909-4.034 3.386-6.658h-2.161c-0.041 0-0.082 0-0.123 0-0.039 0-0.078 0-0.116 0h-0.005c-0.080 0-0.157-0.011-0.234-0.006-0 0.001-0.001-0.007-0.001-0.005-2.321 0.14-3.407 1.318-3.953 3.067-0.956 3.056-1.535 5.034-2.092 6.297-0 0 0-0.001-0-0 0 0.003-0.002 0.003-0.002 0.004v-0.003c-0.256 0.25-0.522 0.478-0.782 0.685-0.136 0.108-0.272 0.21-0.409 0.306 0.114 0.137 0.231 0.265 0.354 0.382 0.186 0.181 0.385 0.333 0.602 0.45-0 0-0.001 0-0.001 0-0.217-0.117-0.416-0.269-0.603-0.45-0.123-0.117-0.239-0.245-0.354-0.382 0 0 0 0 0 0 0.137-0.096 0.272-0.199 0.408-0.307-0.749-1.659-1.184-4.478-1.991-6.673 0.807 2.194 1.243 5.014 1.991 6.673 0.26-0.207 0.52-0.435 0.781-0.685-1.082-3.242-1.47-9.136-4.606-9.136-0.221 0-0.444 0.021-0.666 0.061 0.222-0.041 0.445-0.062 0.666-0.062l-1.233-0.017c0.196 0 0.381 0.055 0.557 0.055-0 0-0 0-0 0-0.176 0-0.361-0.055-0.556-0.055-0.017 0-0.034-0.004-0.051-0.003 0.017-0 0.034-0.006 0.051-0.006h-4.96c-0.028 0-0.056-0.004-0.085-0.004-2.706 0-6.435 5.059-8.115 11.524 0 0 0.122 0 0.323 0 0 0 0 0 0 0 0.232 0 0.95 0 0.95 0zM26.161 10.675c-0 0-0 0-0 0-0.807 0.254-1.401 0.694-1.842 1.277 0.441-0.583 1.034-1.023 1.842-1.277zM22.369 21.541c-0.008 0.004-0.015 0.008-0.023 0.012-0.011 0.006-0.023 0.011-0.034 0.017-0.001 0-0.002 0.001-0.002 0.001 0.020-0.010 0.039-0.020 0.059-0.029zM22.040 21.687c0.005-0.004 0.010-0.004 0.016-0.006-0.005 0.003-0.010 0.004-0.015 0.006-0.011 0.005-0.022 0.008-0.033 0.012 0.011-0.004 0.021-0.008 0.032-0.012zM22.001 21.703c0 0 0-0 0-0s-0.001 0-0.001 0c0-0 0-0 0.001-0zM21.751 21.787c0.019-0.006 0.036-0.011 0.054-0.016 0.009-0.004 0.018-0.007 0.027-0.009 0.011-0.004 0.021-0.007 0.030-0.011 0.011-0.004 0.022-0.006 0.031-0.010s0.017-0.006 0.026-0.010c0.021-0.008 0.042-0.014 0.064-0.022 0.003 0 0.006-0.001 0.008-0.003-0.002 0.001-0.005 0.002-0.007 0.003-0.021 0.008-0.042 0.014-0.063 0.022-0.009 0.004-0.018 0.006-0.026 0.009-0.009 0.004-0.020 0.007-0.031 0.010-0.009 0.004-0.020 0.006-0.031 0.011-0.009 0.004-0.018 0.005-0.027 0.009-0.019 0.005-0.036 0.010-0.054 0.016-0.001 0-0.003 0.001-0.004 0.001 0.001-0 0.002-0.001 0.003-0.001zM8.704 10.91v-0.008c0 0 0.006 0.008 0.007 0.008h0c-0.053 0-0.105 0.037-0.157 0.059 0.008-0.004 0.017-0.009 0.025-0.012-0.042 0.018-0.084 0.037-0.126 0.057-0.022 0.011-0.045 0.021-0.067 0.033zM8.832 10.846v0zM9.191 10.738c-0.007 0.004-0.012 0.019-0.018 0.019-0.044 0.011-0.088 0.023-0.132 0.035-0.005 0-0.009 0.004-0.015 0.005-0.012 0.003-0.024 0.007-0.037 0.011 0.013-0.004 0.025-0.011 0.037-0.013 0.006 0 0.011-0.005 0.015-0.005 0.044-0.012 0.088-0.024 0.132-0.035 0.006 0 0.011-0.018 0.018-0.018 0.012-0.004 0.024-0.020 0.037-0.021-0.013 0.001-0.025 0.021-0.037 0.023zM9.249 10.732c-0.006 0.004-0.013 0.008-0.019 0.010 0.006-0.004 0.012-0.011 0.019-0.013 0.013-0.004 0.025-0.014 0.039-0.014-0.014 0-0.026 0.015-0.039 0.017zM9.732 10.716c-0.024-0.004-0.047-0.002-0.070-0.002-0.001 0-0.002 0-0.002 0 0.023 0 0.046-0.003 0.070-0 0.003 0 0.005-0.001 0.008-0.001-0.002 0.001-0.003 0.003-0.006 0.003zM9.794 10.685c-0.058 0-0.115 0.012-0.174 0.016 0.008 0 0.016 0.010 0.024 0.012-0.015-0.002-0.030-0.011-0.045-0.012 0.007-0.001 0.014-0.005 0.021-0.005-0.004-0-0.004-0.002-0.008-0.002-0.005-0.004-0.012-0.006-0.012-0.006v0.005c-0.064 0.004-0.060 0.005-0.088 0.008l-0.004-0.005c-0.008 0-0.014 0.004-0.021 0.004-0.011 0.004-0.024 0.004-0.036 0.005-0.007 0-0.014 0-0.021 0.004-0.013 0.004-0.025 0.006-0.037 0.008-0.001 0-0.002 0.001-0.003 0.001 0.001 0 0.002 0 0.003 0 0.013 0 0.024-0.006 0.037-0.009 0.007 0 0.014-0.005 0.021-0.005 0.012 0 0.024-0.004 0.036-0.006 0.006 0 0.012-0 0.020-0.004 0.024-0.003 0.048-0.005 0.072-0.007 0.005 0 0.009 0.001 0.014 0.001 0.068-0.006 0.134-0.008 0.201-0.008zM9.955 10.755c-0.045-0.012-0.091-0.021-0.137-0.029-0.004 0-0.008-0.002-0.012-0.003 0.003 0.001 0.007 0.002 0.011 0.002 0.046 0.009 0.092 0.018 0.137 0.030 0.001 0 0.003 0.001 0.004 0.001-0.001-0-0.001-0-0.002-0zM10.934 11.537v0c-0 0-0 0.001-0.001 0.001-0.141-0.238-0.296-0.438-0.468-0.584 0.002 0.001 0.005 0.003 0.007 0.004 0.169 0.147 0.321 0.344 0.461 0.58 0-0 0 0-0 0zM11.154 11.961v0zM13.665 10.744c0.18-0.034 0.361-0.056 0.539-0.064-0.179 0.009-0.359 0.030-0.54 0.065zM11.904 12.446c-0.001-0.003-0.003-0.005-0.004-0.008 0.001 0.003 0.003 0.005 0.004 0.008v0zM14.209 10.947c-0.284 0.106-0.569 0.242-0.854 0.408 0.285-0.166 0.57-0.302 0.854-0.408 0.194-0.072 0.387-0.129 0.58-0.172-0.194 0.043-0.387 0.1-0.58 0.172zM14.94 10.743v0 0 0zM17.104 21.758c0.117-0.031 0.235-0.068 0.352-0.109 0 0 0 0 0 0-0.118 0.041-0.235 0.077-0.352 0.109zM20.136 21.561c-0 0-0 0-0 0-0.007 0.004-0.014 0.007-0.021 0.011 0.007-0.004 0.015-0.008 0.022-0.012zM20.762 21.884c-0.285-0.034-0.54-0.118-0.773-0.244 0.233 0.126 0.488 0.21 0.773 0.244 0.042 0.004 0.083 0.008 0.126 0.011-0.043-0.003-0.085-0.007-0.126-0.011zM20.742 21.035l0.001-0.005c0-0 0-0.001 0.001-0.001 0.157 0.267 0.331 0.487 0.527 0.639-0.196-0.149-0.371-0.364-0.528-0.633zM21.188 21.895c-0.008 0.004-0.015 0.004-0.023 0.004-0.001 0-0.001 0-0.002 0 0.008 0 0.016 0 0.023-0.004 0.015 0 0.030 0 0.046-0.004 0.001 0 0.002 0 0.002 0-0.016 0.004-0.031 0.004-0.046 0.004zM21.377 21.874c-0.017 0.003-0.035 0.004-0.053 0.008-0.005 0-0.010 0.004-0.015 0.004-0 0-0.004 0-0.004 0-0.016 0.002-0.033 0.005-0.049 0.005-0.001 0-0.002 0-0.002 0 0.016 0 0.033-0.004 0.049-0.005h0.004c0.005 0 0.010-0.004 0.015-0.004 0.018-0.004 0.036-0.006 0.053-0.008 0.002 0 0.003 0 0.004 0-0.001 0-0.001 0-0.002 0z" />

            <p>JavaScript </p>
          </Grid>
          <Grid item>
            <Svg PathUrl="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z" />

            <p>C# </p>
          </Grid>
          <Grid item>
            <Svg PathUrl="M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z" />

            <p>T-SQL </p>
          </Grid>
        </>
      );
    } else if (value === 1) {
      return (
        <>
          <Grid item>
            <Svg PathUrl="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />

            <p>React JS </p>
          </Grid>

          <Grid item>
            <Svg PathUrl="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z" />

            <p>HTML </p>
          </Grid>
          <Grid item>
            <Svg PathUrl="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z" />

            <p>CSS </p>
          </Grid>
          <Grid item>
            <Svg PathUrl="M31.641 21.161c-0.109-0.911-0.578-1.618-1.286-2.172-0.82-0.641-1.78-0.905-2.803-0.947-0.834-0.034-1.65 0.090-2.437 0.376-0.224 0.081-0.444 0.177-0.67 0.268-0.030-0.055-0.062-0.107-0.088-0.162-0.232-0.474-0.512-0.927-0.573-1.47-0.044-0.386-0.098-0.772-0.006-1.153 0.088-0.367 0.204-0.728 0.312-1.091 0.056-0.187 0.017-0.291-0.161-0.375-0.062-0.029-0.129-0.055-0.197-0.065-0.438-0.063-0.869-0.027-1.293 0.096-0.15 0.044-0.259 0.128-0.292 0.294-0.019 0.095-0.058 0.186-0.084 0.28-0.111 0.391-0.189 0.789-0.368 1.161-0.449 0.934-0.96 1.832-1.485 2.724-0.057 0.096-0.116 0.191-0.188 0.308-0.184-0.385-0.38-0.73-0.44-1.136-0.067-0.458-0.12-0.915-0.006-1.37 0.085-0.339 0.196-0.672 0.298-1.006 0.049-0.159 0.026-0.242-0.118-0.326-0.073-0.042-0.155-0.080-0.237-0.092-0.454-0.067-0.901-0.032-1.338 0.11-0.136 0.044-0.207 0.132-0.249 0.272-0.122 0.413-0.226 0.836-0.397 1.229-0.694 1.59-1.407 3.172-2.12 4.753-0.149 0.33-0.323 0.649-0.491 0.97-0.043 0.082-0.104 0.153-0.157 0.23-0.043-0.050-0.059-0.085-0.059-0.119 0.001-0.203-0.023-0.413 0.016-0.609 0.117-0.594 0.252-1.186 0.395-1.775 0.117-0.486 0.254-0.968 0.385-1.452 0.044-0.162 0.045-0.313-0.072-0.449-0.195-0.228-0.603-0.278-0.845-0.102-0.026 0.019-0.057 0.032-0.107 0.061 0.009-0.077 0.014-0.125 0.021-0.173 0.051-0.37 0.061-0.738-0.040-1.103-0.127-0.454-0.45-0.715-0.921-0.701-0.22 0.007-0.45 0.044-0.653 0.124-0.855 0.335-1.512 0.928-2.071 1.642-0.051 0.065-0.118 0.124-0.189 0.163-0.723 0.401-1.449 0.797-2.174 1.195-0.271 0.148-0.542 0.297-0.807 0.442-0.216-0.207-0.413-0.421-0.637-0.603-0.682-0.556-1.375-1.098-2.061-1.648-0.608-0.487-1.198-0.995-1.649-1.64-0.336-0.48-0.552-1.005-0.572-1.599-0.026-0.756 0.188-1.447 0.573-2.091 0.493-0.823 1.164-1.483 1.903-2.082 0.781-0.633 1.626-1.17 2.502-1.66 1.225-0.686 2.486-1.293 3.837-1.694 1.386-0.411 2.791-0.646 4.241-0.482 0.57 0.064 1.123 0.195 1.632 0.474 0.389 0.213 0.708 0.492 0.857 0.929 0.146 0.43 0.142 0.865 0.040 1.301-0.206 0.883-0.69 1.612-1.299 2.263-0.998 1.067-2.216 1.793-3.588 2.273-0.791 0.277-1.605 0.451-2.441 0.521-0.682 0.057-1.35-0.003-1.996-0.241-0.428-0.157-0.8-0.398-1.1-0.747-0.054-0.063-0.122-0.13-0.222-0.072-0.098 0.057-0.115 0.151-0.082 0.245 0.055 0.157 0.105 0.319 0.191 0.459 0.214 0.351 0.527 0.606 0.871 0.825 0.661 0.42 1.399 0.561 2.165 0.594 1.162 0.050 2.296-0.123 3.413-0.435 1.596-0.445 2.983-1.231 4.096-2.471 0.927-1.032 1.588-2.198 1.73-3.605 0.069-0.687-0.004-1.36-0.326-1.986-0.349-0.679-0.903-1.147-1.566-1.494-0.964-0.506-2.006-0.705-3.081-0.763-0.359-0-0.718-0-1.077-0-1.303 0.063-2.562 0.337-3.786 0.782-0.926 0.337-1.835 0.717-2.717 1.157-1.921 0.96-3.71 2.108-5.179 3.699-0.732 0.793-1.352 1.663-1.708 2.693-0.104 0.302-0.168 0.622-0.243 0.934-0.006 0.026 0.023 0.051-0.041 0.077 0 0.147 0 0.293 0 0.44 0.064 0.113 0.071 0.225 0.1 0.338 0.189 0.733 0.578 1.363 1.060 1.937 0.687 0.818 1.518 1.476 2.38 2.096 0.747 0.537 1.505 1.062 2.255 1.595 0.129 0.091 0.248 0.197 0.388 0.309-0.12 0.065-0.221 0.122-0.325 0.175-0.99 0.502-1.942 1.065-2.82 1.747-0.529 0.411-1.041 0.848-1.402 1.418-0.581 0.918-0.787 1.896-0.354 2.94 0.127 0.305 0.32 0.569 0.592 0.763 0.088 0.063 0.187 0.126 0.29 0.15 0.264 0.062 0.534 0.103 0.802 0.152 0.253-0 0.505-0 0.758-0 0.839-0.075 1.602-0.362 2.291-0.838 1.078-0.744 1.804-1.741 2.117-3.022 0.227-0.93 0.236-1.862-0.031-2.788-0.025-0.086-0.056-0.17-0.089-0.253s-0.071-0.164-0.116-0.268c0.572-0.329 1.146-0.659 1.719-0.989 0.009 0.007 0.017 0.015 0.026 0.022-0.031 0.102-0.064 0.204-0.093 0.308-0.204 0.746-0.34 1.505-0.291 2.279 0.052 0.825 0.282 1.597 0.765 2.287 0.39 0.558 1.321 0.578 1.736 0.019 0.147-0.199 0.29-0.406 0.397-0.628 0.28-0.579 0.54-1.168 0.807-1.753 0.012-0.025 0.022-0.050 0.047-0.107-0.019 0.277-0.042 0.52-0.052 0.764-0.016 0.38 0.006 0.758 0.136 1.12 0.111 0.31 0.3 0.541 0.655 0.581 0.242 0.028 0.436-0.083 0.614-0.224 0.279-0.22 0.505-0.491 0.673-0.8 0.475-0.873 0.963-1.74 1.394-2.635 0.466-0.968 0.873-1.964 1.306-2.948 0.024-0.054 0.045-0.109 0.072-0.175 0.102 0.402 0.174 0.795 0.305 1.168 0.152 0.432 0.341 0.854 0.547 1.264 0.097 0.194 0.086 0.32-0.049 0.482-0.564 0.68-1.118 1.368-1.673 2.056-0.123 0.152-0.245 0.306-0.347 0.472-0.062 0.101-0.103 0.223-0.12 0.341-0.033 0.225 0.105 0.441 0.346 0.493 0.219 0.047 0.453 0.065 0.677 0.048 0.774-0.057 1.477-0.329 2.099-0.789 0.805-0.597 1.064-1.41 0.869-2.375-0.053-0.262-0.146-0.517-0.237-0.769-0.041-0.114-0.043-0.194 0.031-0.3 0.644-0.919 1.194-1.895 1.705-2.892 0.020-0.039 0.041-0.079 0.076-0.121 0.166 0.863 0.415 1.694 0.862 2.448-0.228 0.22-0.454 0.419-0.658 0.639-0.45 0.483-0.84 1.009-1.043 1.649-0.087 0.276-0.155 0.556-0.116 0.852 0.061 0.458 0.436 0.755 0.886 0.651 0.963-0.223 1.795-0.677 2.403-1.481 0.409-0.541 0.446-1.145 0.275-1.778-0.047-0.172-0.103-0.341-0.163-0.539 0.238-0.074 0.47-0.162 0.709-0.217 1.245-0.284 2.476-0.234 3.675 0.215 0.7 0.262 1.266 0.702 1.601 1.393 0.41 0.845 0.183 1.646-0.613 2.18-0.074 0.050-0.159 0.089-0.221 0.151-0.038 0.038-0.060 0.115-0.051 0.167 0.005 0.031 0.087 0.069 0.133 0.069 0.262-0.002 0.474-0.139 0.678-0.28 0.511-0.353 0.848-0.829 0.928-1.454 0.002-0.018-0.024-0.035 0.040-0.052 0-0.139 0-0.277 0-0.416-0.064-0.017-0.037-0.034-0.039-0.052zM7.286 22.851c-0.083 1.115-0.588 2.019-1.414 2.75-0.465 0.412-0.997 0.705-1.618 0.808-0.225 0.037-0.455 0.046-0.674-0.047-0.311-0.133-0.381-0.409-0.387-0.704-0.009-0.469 0.155-0.893 0.38-1.296 0.294-0.526 0.725-0.927 1.185-1.301 0.725-0.59 1.512-1.090 2.317-1.561 0.013-0.008 0.029-0.012 0.061-0.025 0.124 0.46 0.184 0.914 0.149 1.377zM13.576 18.006c-0.059 0.356-0.132 0.712-0.236 1.057-0.36 1.194-0.821 2.352-1.32 3.493-0.092 0.211-0.226 0.404-0.343 0.604-0.018 0.031-0.045 0.058-0.071 0.084-0.144 0.143-0.282 0.135-0.355-0.052-0.085-0.217-0.137-0.449-0.182-0.679-0.030-0.154-0.023-0.316-0.032-0.474 0.010-1.123 0.352-2.145 0.934-3.095 0.24-0.392 0.501-0.765 0.899-1.014 0.123-0.076 0.26-0.137 0.399-0.177 0.212-0.060 0.343 0.039 0.308 0.252zM17.867 23.473c0.514-0.6 1.027-1.199 1.542-1.801 0.064 0.669-1.072 2.004-1.542 1.801zM22.793 22.262c-0.109 0.062-0.228 0.108-0.34 0.165-0.102 0.053-0.136-0-0.139-0.088-0.002-0.060 0.007-0.122 0.023-0.18 0.208-0.735 0.591-1.361 1.162-1.871 0.008-0.008 0.021-0.011 0.040-0.021 0.271 0.758-0.042 1.592-0.747 1.995z" />

            <p>SASS </p>
          </Grid>
        </>
      );
    } else if (value === 2) {
      return (
        <>
          <Grid item>
            <img src={SqlServer} alt="SqlServerIcon" />
            <p>Microsoft Sql Server </p>
          </Grid>
        </>
      );
    } else if (value === 3) {
      return (
        <>
          <Grid item>
            <Svg PathUrl="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z" />
            <p>Azure </p>
          </Grid>

          <Grid item>
            <Svg PathUrl="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            <p>Github </p>
          </Grid>

          <Grid item>
            <Svg PathUrl="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />

            <p>NPM </p>
          </Grid>
        </>
      );
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Specialties
      </Typography>
      <div className="Specialties">
        <Tabs
          orientation={isMobile ? "vertical" : ""}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label={
              <>
                {" "}
                <p> Programming Languages </p>{" "}
              </>
            }
          />
          <Tab
            label={
              <>
                {" "}
                <span> Front End </span> <span>Technologies </span>{" "}
              </>
            }
          />
          <Tab
            label={
              <>
                {" "}
                <span> Back End </span> <span>Technologies </span>{" "}
              </>
            }
          />
          <Tab label="Misc" />
        </Tabs>

        <Grid container justify="center" alignItems="center" spacing={8}>
          {" "}
          {RenderTab()}
        </Grid>
      </div>
    </div>
  );
};

export default Specialties;
