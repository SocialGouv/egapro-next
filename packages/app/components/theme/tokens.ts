const tokens = {
  sizes: {
    13: "3.25rem",
  },
  colors: {
    blue: {
      focus: "#0078ff",
    },
    grey: {
      50: { main: "#161616", hover: "#343434", active: "#474747" },
      75: { main: "#1e1e1e", hover: "#3f3f3f", active: "#525252" },
      100: { main: "#242424", hover: "#474747", active: "#5b5b5b" },
      125: { main: "#2a2a2a", hover: "#4e4e4e", active: "#636363" },
      200: { main: "#3a3a3a", hover: "#616161", active: "#777" },
      425: { main: "#666", hover: "#919191", active: "#a6a6a6" },
      625: { main: "#929292", hover: "#bbb", active: "#cecece" },
      850: { main: "#cecece", hover: "#a8a8a8", active: "#939393" },
      925: { main: "#e5e5e5", hover: "#c5c5c5", active: "#b2b2b2" },
      950: { main: "#eee", hover: "#d2d2d2", active: "#c1c1c1" },
      975: { main: "#f6f6f6", hover: "#dfdfdf", active: "#cfcfcf" },
      1000: { main: "#fff", hover: "#f6f6f6", active: "#ededed" },
      525: { main: "#7b7b7b", hover: "#a6a6a6", active: "#bababa" },
    },
    "blue-france": {
      75: { main: "#1b1b35", hover: "#3a3a68", active: "#4d4d83" },
      100: { main: "#21213f", hover: "#424275", active: "#56568c" },
      125: { main: "#272747", hover: "#4a4a7d", active: "#5e5e90" },
      200: { main: "#313178", hover: "#5757ad", active: "#6c6cbb" },
      625: { main: "#8585f6", hover: "#b1b1f9", active: "#c6c6fb" },
      850: { main: "#cacafb", hover: "#a1a1f8", active: "#8b8bf6" },
      925: { main: "#e3e3fd", hover: "#c1c1fb", active: "#adadf9" },
      950: { main: "#ececfe", hover: "#cecefc", active: "#bbbbfc" },
      975: { main: "#f5f5fe", hover: "#dcdcfc", active: "#cbcbfa" },
      113: { main: "#000091", hover: "#1212ff", active: "#2323ff" },
      525: { main: "#6a6af4", hover: "#9898f8", active: "#aeaef9" },
    },
    "red-marianne": {
      75: { main: "#2b1919", hover: "#573737", active: "#704848" },
      100: { main: "#331f1f", hover: "#613f3f", active: "#7b5151" },
      125: { main: "#3b2424", hover: "#6b4545", active: "#865757" },
      200: { main: "#5e2a2b", hover: "#9c4a4c", active: "#be5c5e" },
      425: { main: "#c9191e", hover: "#f93f42", active: "#f95a5c" },
      625: { main: "#f95c5e", hover: "#fa9293", active: "#fbabac" },
      850: { main: "#fcbfbf", hover: "#fb8f8f", active: "#fa7474" },
      925: { main: "#fddede", hover: "#fbb6b6", active: "#fa9e9e" },
      950: { main: "#fee9e9", hover: "#fdc5c5", active: "#fcafaf" },
      975: { main: "#fef4f4", hover: "#fcd7d7", active: "#fac4c4" },
      472: { main: "#e1000f", hover: "#ff292f", active: "#ff4347" },
    },
    info: {
      75: { main: "#171d2e", hover: "#333e5c", active: "#445177" },
      100: { main: "#1d2437", hover: "#3b4767", active: "#4c5b83" },
      125: { main: "#222a3f", hover: "#414e71", active: "#53638d" },
      200: { main: "#273961", hover: "#45619f", active: "#5576c0" },
      425: { main: "#0063cb", hover: "#3b87ff", active: "#6798ff" },
      625: { main: "#518fff", hover: "#98b4ff", active: "#b4c7ff" },
      850: { main: "#bccdff", hover: "#83a9ff", active: "#5f96ff" },
      925: { main: "#dde5ff", hover: "#b1c6ff", active: "#95b4ff" },
      950: { main: "#e8edff", hover: "#c2d1ff", active: "#a9bfff" },
      975: { main: "#f4f6ff", hover: "#d6deff", active: "#c2cfff" },
      525: { main: "#0078f3", hover: "#6196ff", active: "#85a9ff" },
    },
    success: {
      75: { main: "#142117", hover: "#2e4533", active: "#3d5943" },
      100: { main: "#19271d", hover: "#344c3b", active: "#44624d" },
      125: { main: "#1e2e22", hover: "#3b5541", active: "#4b6b53" },
      200: { main: "#204129", hover: "#3a6d48", active: "#478558" },
      425: { main: "#18753c", hover: "#27a959", active: "#2fc368" },
      625: { main: "#27a658", hover: "#36d975", active: "#3df183" },
      850: { main: "#3bea7e", hover: "#2cb862", active: "#259e53" },
      925: { main: "#88fdaa", hover: "#3ee87e", active: "#36d070" },
      950: { main: "#b8fec9", hover: "#46fd89", active: "#34eb7b" },
      975: { main: "#dffee6", hover: "#8afcab", active: "#4efb8d" },
      525: { main: "#1f8d49", hover: "#2ec166", active: "#36db75" },
    },
    warning: {
      75: { main: "#2d1814", hover: "#5b352e", active: "#75473e" },
      100: { main: "#361e19", hover: "#663d35", active: "#824f44" },
      125: { main: "#3e231e", hover: "#70433b", active: "#8d564c" },
      200: { main: "#5d2c20", hover: "#9a4d3a", active: "#bc5f49" },
      425: { main: "#b34000", hover: "#ff6218", active: "#ff7a55" },
      625: { main: "#fc5d00", hover: "#ff8c73", active: "#ffa595" },
      850: { main: "#ffbeb4", hover: "#ff8e77", active: "#ff7550" },
      925: { main: "#ffded9", hover: "#ffb6a9", active: "#ff9f8b" },
      950: { main: "#ffe9e6", hover: "#ffc6bd", active: "#ffb0a2" },
      975: { main: "#fff4f3", hover: "#ffd7d3", active: "#ffc4bd" },
      525: { main: "#d64d00", hover: "#ff754e", active: "#ff8e76" },
    },
    error: {
      75: { main: "#301717", hover: "#603434", active: "#7c4444" },
      100: { main: "#391c1c", hover: "#6c3a3a", active: "#894b4b" },
      125: { main: "#412121", hover: "#764040", active: "#935252" },
      200: { main: "#642626", hover: "#a74545", active: "#cb5555" },
      425: { main: "#ce0500", hover: "#ff2725", active: "#ff4140" },
      625: { main: "#ff5655", hover: "#ff8c8c", active: "#ffa6a6" },
      850: { main: "#ffbdbd", hover: "#ff8c8c", active: "#ff7272" },
      925: { main: "#fdd", hover: "#ffb4b4", active: "#ff9c9c" },
      950: { main: "#ffe9e9", hover: "#ffc5c5", active: "#ffafaf" },
      975: { main: "#fff4f4", hover: "#ffd7d7", active: "#ffc3c3" },
      525: { main: "#f60700", hover: "#ff3634", active: "#ff5150" },
    },
  },
}

export default tokens
