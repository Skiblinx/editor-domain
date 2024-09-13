export let SITE_STACKS = []

export let PAGES_CHANGED = []

export let STYLE_DATA_COMPONENT = [

  {
    id: 2,
    label: "Size",
    type: "size",
    list: [
      {
        _id: 1,
        label: "Width",
        name: "width",
        type: "textInput",
        data: {
          type: "width",
          name: "width",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "Google font" },
          { id: "dp-23001", icon: "block", label: "Web font" },
        ],
      },
      {
        _id: 2,
        label: "Height",
        name: "height",
        type: "textInput",
        data: {
          type: "height",
          name: "height",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "Google font" },
          { id: "dp-23001", icon: "block", label: "Web font" },
        ],
      },
      {
        _id: 3,
        label: "Min W",
        name: "minWidth",
        type: "textInput",
        data: {
          type: "minWidth",
          name: "minWidth",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "Google font" }],
      },
      {
        _id: 4,
        label: "Min H",
        name: "maxHeight",
        type: "textInput",
        data: {
          type: "maxWidth",
          name: "maxHeight",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "Google font" }],
      },
      {
        _id: 5,
        label: "Max W",
        name: "maxWidth",
        type: "textInput",
        data: {
          type: "maxWidth",
          name: "maxWidth",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "Google font" }],
      },
      {
        _id: 6,
        label: "Max H",
        name: "maxHeight",
        type: "textInput",
        data: {
          type: "maxHeight",
          name: "maxHeight",
          class: "input",
          category: "size",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "Google font" }],
      },
      // {
      //   _id: 7,
      //   label: "Border",
      //   name: "border",
      //   type: "buttonGroup",
      //   data: {
      //     type: "border",
      //     name: "border",
      //     class: "input",
      //     category: "size",
      //     placeholder: "",
      //   },
      //   options: [{ id: "dp-23001", icon: "border", label: "Border" }],
      // },
      // {
      //   _id: 8,
      //   label: "Rotate",
      //   name: "rotate",
      //   type: "textInput",
      //   data: {
      //     type: "border",
      //     name: "border",
      //     class: "input",
      //     category: "size",
      //     placeholder: "0\u00B0",
      //   },
      //   options: [{ id: "dp-23001", icon: "border", label: "Border" }],
      // },
    ],
  },

  {
    id: 1,
    label: "Layout",
    type: "layout",
    data: {},
    list: [
      {
        _id: 1,
        label: "Display",
        name: "display",
        type: "buttonGroupWithDropdown",
        data: {
          type: "display",
          name: "display",
          class: "input",
          category: "layout",
          placeholder: "set display",
        },
        options: [
          { id: "dp-23001", icon: "", label: "block" },
          { id: "dp-23002", icon: "", label: "flex" },
          { id: "dp-23003", icon: "", label: "grid" },
          { id: "dp-23005", icon: "", label: "inline" },
          { id: "dp-23004", icon: "", label: "inline-block" },
          { id: "dp-23006", icon: "", label: "none" },
        ],
      },
      {
        _id: 2,
        label: "Direction",
        name: "flexDirection",
        type: "buttonGroup",
        data: {
          type: "flexDirection",
          name: "flexDirection",
          class: "flexDirection",
          category: "layout",
          placeholder: "set flex direction",
        },
        options: [
          { id: "dp-23001", icon: "row", label: "row" },
          { id: "dp-23002", icon: "row-reverse", label: "row-reverse" },
          { id: "dp-23003", icon: "column", label: "column" },
          { id: "dp-23004", icon: "column-reverse", label: "column-reverse" },
        ],
      },
      {
        _id: 3,
        label: "Align",
        name: "alignItems",
        type: "buttonGroupWithDropdown",
        data: {
          type: "alignItems",
          name: "alignItems",
          class: "alignItems",
          category: "layout",
          placeholder: "set align items",
        },
        options: [
          { id: "dp-23001", icon: "", label: "stretch" },
          { id: "dp-23002", icon: "", label: "flex-start" },
          { id: "dp-23003", icon: "", label: "flex-end" },
          { id: "dp-23004", icon: "", label: "center" },
          { id: "dp-23005", icon: "", label: "baseline" },
        ],
      },
      {
        _id: 4,
        label: "Justify",
        name: "justifyContent",
        type: "buttonGroup", //"radioGroup",
        data: {
          type: "justifyContent",
          name: "justifyContent",
          class: "justifyContent",
          category: "layout",
          placeholder: "set justify content",
        },
        options: [
          { id: "dp-23001", icon: "justify-center", label: "center" },
          { id: "dp-23002", icon: "justify-left", label: "flex-start" },
          { id: "dp-23003", icon: "justify-right", label: "flex-end" },
          { id: "dp-23006", icon: "justify-evenly", label: "space-evenly" },
          { id: "dp-23004", icon: "space-between", label: "space-between" },
          { id: "dp-23005", icon: "space-around", label: "space-around" },
        ],
      },
      {
        _id: 5,
        label: "Gap",
        name: "gap",
        type: "textInput",
        data: {
          type: "gap",
          name: "gap",
          class: "input",
          category: "layout",
          placeholder: "set gap",
        },
        // options: [{ id: "dp-23001", icon: "block", label: "block" }],
      },
    ],
  },

  {
    id: 4,
    label: "Positioning",
    type: "position",
    list: [
      {
        _id: 20,
        label: "Position",
        name: "position",
        type: "dropDown",
        data: {
          type: "position",
          name: "position",
          class: "input",
          category: "position",
          placeholder: "",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "relative" },
          { id: "dp-23002", icon: "block", label: "absolute" },
          { id: "dp-23003", icon: "block", label: "fixed" },
          { id: "dp-23003", icon: "block", label: "static" },
          { id: "dp-23003", icon: "block", label: "sticky" },
        ],
      },
      {
        _id: 21,
        label: "Top",
        name: "top",
        type: "textInput",
        data: {
          type: "top",
          name: "top",
          class: "input",
          category: "position",
          placeholder: "0",
        },
        options: [],
      },
      {
        _id: 23,
        label: "Right",
        name: "right",
        type: "textInput",
        data: {
          type: "right",
          name: "right",
          class: "input",
          category: "position",
          placeholder: "0",
        },
        options: [],
      },
      {
        _id: 24,
        label: "Bottom",
        name: "bottom",
        type: "textInput",
        data: {
          type: "bottom",
          name: "bottom",
          class: "input",
          category: "position",
          placeholder: "0",
        },
        options: [],
      },
      {
        _id: 25,
        label: "Left",
        name: "left",
        type: "textInput",
        data: {
          type: "left",
          name: "left",
          class: "input",
          category: "position",
          placeholder: "0",
        },
        options: [],
      },
    ],
  },

  {
    id: 5,
    label: "Spacing",
    name: "padding",
    type: "spaceUI",
    list: [
      {
        _id: 1,
        label: "Top",
        name: "paddingTop",
        type: "textInput",
        data: {
          type: "paddingTop",
          name: "paddingTop",
          class: "paddingTop",
          category: "padding",
          placeholder: "set padding top"
        },
        options: [{ id: "dp-23001", icon: "block", label: "block" }],
      },
      {
        _id: 2,
        label: "Right",
        name: "paddingRight",
        type: "textInput",
        data: {
          type: "paddingRight",
          name: "paddingRight",
          class: "paddingRight",
          category: "padding",
          placeholder: "set padding right"
        },
        options: [{ id: "dp-23001", icon: "block", label: "block" }],
      },
      {
        _id: 3,
        label: "Bottom",
        name: "paddingBottom",
        type: "textInput",
        data: {
          type: "paddingBottom",
          name: "paddingBottom",
          class: "paddingBottom",
          category: "padding",
          placeholder: "set padding bottom"
        },
        options: [{ id: "dp-23001", icon: "block", label: "block" }],
      },
      {
        _id: 4,
        label: "Left",
        name: "paddingLeft",
        type: "textInput",
        data: {
          type: "paddingLeft",
          name: "paddingLeft",
          class: "paddingLeft",
          category: "padding",
          placeholder: "set padding left"
        },
        options: [{ id: "dp-23001", icon: "block", label: "block" }],
      },
      {
        _id: 5,
        label: "top",
        name: "marginTop",
        type: "textInput",
        data: {
          type: "marginTop",
          name: "marginTop",
          class: "marginTop",
          category: "margin",
          placeholder: "set margin top"
        },
        options: [],
      }, {
        _id: 6,
        label: "bottom",
        name: "marginBottom",
        type: "textInput",
        data: {
          type: "marginBottom",
          name: "marginBottom",
          class: "marginBottom",
          category: "margin",
          placeholder: "set margin bottom"
        },
        options: [],
      },
      {
        _id: 7,
        label: "left",
        name: "marginLeft",
        type: "textInput",
        data: {
          type: "marginLeft",
          name: "marginLeft",
          class: "marginLeft",
          category: "margin",
          placeholder: "set margin left"
        },
        options: [],
      },
      {
        _id: 8,
        label: "right",
        name: "marginRight",
        type: "textInput",
        data: {
          type: "marginRight",
          name: "marginRight",
          class: "marginRight",
          category: "margin",
          placeholder: "set margin right"
        },
        options: [],
      },
    ]
  },

  {
    id: 3,
    label: "Typography",
    type: "typograghpy",
    list: [
      {
        _id: 1,
        label: "Font",
        name: "fontFamily",
        type: "dropDown",
        data: {
          type: "fontFamily",
          name: "fontFamily",
          class: "input",
          category: "font",
          placeholder: "set font-family",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "Google font" },
          { id: "dp-23001", icon: "block", label: "Web font" },
          { id: "dp-23001", icon: "block", label: "Custom font" },
        ],
      },
      {
        _id: 2,
        label: "Weight",
        name: "fontWeight",
        type: "dropDown",
        data: {
          type: "weight",
          name: "weight",
          class: "input",
          category: "font",
          placeholder: "set font-weight",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "lighter", label2: "100" },
          { id: "dp-23002", icon: "block", label: "Normal", label2: "400" },
          { id: "dp-23003", icon: "block", label: "Bold", label2: "700" },
          { id: "dp-23004", icon: "block", label: "Bolder", label2: "900" }
        ],
      },
      {
        _id: 3,
        label: "Size",
        name: "fontSize",
        type: "textInput",
        data: {
          type: "size",
          name: "size",
          class: "input small_input",
          category: "font",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "400 - Normal" }],
      },
      {
        _id: 4,
        label: "Height",
        name: "lineHeight",
        type: "textInput",
        data: {
          type: "lineHeight",
          name: "lineHeight",
          class: "input small_input",
          category: "font",
          placeholder: "0",
        },
        options: [{ id: "dp-23001", icon: "block", label: "400 - Normal" }],
      },
      {
        _id: 6,
        label: "Align",
        name: "textAlign",
        type: "buttonGroup",
        data: {
          type: "align",
          name: "align",
          category: "font",
          class: "input",
          placeholder: "set text-align",
        },
        options: [
          // { id: "dp-23001", icon: "block", label: "unset" },
          { id: "dp-23002", icon: "start", label: "start" },
          { id: "dp-23002", icon: "end", label: "end" },
          { id: "dp-23003", icon: "center", label: "center" },
          { id: "dp-23004", icon: "justify", label: "justify" },
        ],
      },
      {
        _id: 7,
        label: "Style",
        name: "fontStyle",
        type: "dropDown",
        data: {
          type: "fontStyle",
          name: "fontStyle",
          class: "input",
          category: "font",
          placeholder: "set font-style",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "normal" },
          { id: "dp-23002", icon: "italic", label: "italic" },
          { id: "dp-23002", icon: "block", label: "oblique" },
        ],
      },
      {
        _id: 5,
        label: "Color",
        name: "color",
        type: "textInputAndColor",
        data: {
          type: "color",
          name: "color",
          category: "font",
          class: "input",
          placeholder: "set text-color",
        },
        options: [
          {
            id: "dp-23011",
            icon: "block",
            label: "color",
            data: {
              type: "color",
              name: "color",
              category: "font",
              class: "input",
              placeholder: "search or set a color",
            },
          },
        ],
      },
      {
        _id: 8,
        label: "Decoration",
        name: "textDecoration",
        type: "dropDown",
        data: {
          type: "decoration",
          name: "textDecoration",
          class: "input",
          category: "font",
          placeholder: "set text-decoration",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "None" },
          { id: "dp-23002", icon: "block", label: "underline" },
          { id: "dp-23002", icon: "block", label: "line-through" },
          { id: "dp-23004", icon: "block", label: "overline" },
        ],
      },
      {
        _id: 9,
        label: "Letter Spacing",
        name: "letterSpacing",
        type: "textInput",
        data: {
          type: "decoration",
          name: "letterSpacing",
          class: "input",
          category: "font",
          placeholder: "0",
        },
        options: [],
      },
      {
        _id: 10,
        label: "Text Indent",
        name: "textIndent",
        type: "textInput",
        data: {
          type: "indentation",
          name: "textIndent",
          class: "input",
          category: "font",
          placeholder: "0",
        },
        options: [],
      },
      {
        _id: 11,
        label: "Column",
        name: "columns",
        type: "dropDown",
        data: {
          type: "column",
          name: "columns",
          class: "input",
          category: "font",
          placeholder: "0",
        },
        options: [
          { id: "dp-23001", icon: "block", label: "Auto" },
          { id: "dp-23002", icon: "block", label: "revert" },
          { id: "dp-23003", icon: "block", label: "revert-layer" },
          { id: "dp-23004", icon: "block", label: "initial" },
          { id: "dp-23005", icon: "block", label: "unset" },
        ],
      },
      {
        _id: 12,
        label: "Case",
        name: "textTransform",
        type: "buttonGroup",
        data: {
          type: "textTransform",
          name: "text-transform",
          category: "font",
          class: "input",
          placeholder: "set text-align",
        },
        options: [
          { id: "dp-23001", icon: "close", label: "none" },
          { id: "dp-23003", icon: "capitalize", label: "uppercase" },
          { id: "dp-23002", icon: "match-case", label: "capitalize" },
          { id: "dp-23004", icon: "lowercase", label: "lowercase" },
          // { id: "dp-23004", icon: "block", label: "unset" },
        ],
      },
      // {
      //   _id: 13,
      //   label: "Text Shadows",
      //   name: "textShadow",
      //   type: "textShadowControl",
      //   data: {
      //     type: "textShadow",
      //     name: "textShadow",
      //     class: "input",
      //     category: "font",
      //   },
      //   options: [
      //     {
      //       id: "xOffset",
      //       label: "X-axis",
      //       type: "range",
      //       defaultValue: "0"
      //     },
      //     {
      //       id: "yOffset",
      //       label: "Y-axis",
      //       type: "range",
      //       defaultValue: "0"
      //     },
      //     {
      //       id: "blur",
      //       label: "Blur",
      //       type: "range",
      //       defaultValue: "0"
      //     },
      //     {
      //       id: "color",
      //       label: "Color",
      //       type: "textInputAndColor",
      //       defaultValue: "#000000"
      //     }
      //   ],
      // },

      // {
      //   _id: 13,
      //   label: "Direction",
      //   name: "direction",
      //   type: "buttonGroup",
      //   data: {
      //     type: "direction",
      //     name: "direction",
      //     category: "font",
      //     class: "input",
      //     placeholder: "set text-align",
      //   },
      //   options: [
      //     { id: "dp-23001", icon: "ltr", label: "ltr" },
      //     { id: "dp-23002", icon: "rtl", label: "rtl" },

      //   ],
      // },
      // {
      //   _id: 14,
      //   label: "Breaking",
      //   name: "word-break",
      //   type: "dropDown",
      //   data: {
      //     type: "wordBreak",
      //     name: "wordBreak",
      //     category: "font",
      //     class: "input",
      //     placeholder: "Normal",
      //   },
      //   options: [
      //     { id: "dp-23001", icon: "", label: "normal" },
      //     { id: "dp-23002", icon: "", label: "breal-all" },
      //     { id: "dp-23002", icon: "", label: "keep-all" },
      //   ],
      // },
    ],
  },

  {
    id: 7,
    label: "Background",
    name: "background",
    type: "textInputAndColor",
    list: [
      {
        _id: 20,
        label: "color",
        name: "backgroundColor",
        type: "textInputAndColor",
        data: {
          type: "color",
          name: "backgroundColor",
          class: "input",
          category: "background",
          placeholder: "set background-color",
        },
        options: [
          {
            id: "dp-23001",
            icon: "block",
            label: "color",
            data: {
              type: "color",
              name: "backgroundColor",
              class: "input",
              category: "background",
              placeholder: "search or set a color",
            },
          },
        ],
      },
    ],
  },

  // {
  //   id: 8,
  //   label: "Borders",
  //   name: "Borders",
  //   type: "textInputAndPicker",
  //   list: [
  //     {
  //       _id: 20,
  //       label: "radius",
  //       name: "borderRadius",
  //       type: "textInput", //type: "textInputAndProgress",
  //       data: {
  //         type: "radius",
  //         name: "radius",
  //         class: "input",
  //         category: "border",
  //         placeholder: "set border-radius",
  //       },
  //       options: [{ id: "dp-23001", icon: "block", label: "color" }],
  //     },
  //     {
  //       _id: 21,
  //       label: "style",
  //       name: "borderStyle",
  //       type: "dropDown",
  //       data: {
  //         type: "style",
  //         name: "style",
  //         class: "input",
  //         category: "border",
  //         placeholder: "set border-style",
  //       },
  //       options: [
  //         { id: "dp-23001", icon: "block", label: "Solid" },
  //         { id: "dp-23002", icon: "block", label: "Dashed" },
  //         { id: "dp-23003", icon: "block", label: "Dotted" },
  //         { id: "dp-23004", icon: "block", label: "Double" },
  //         { id: "dp-23005", icon: "block", label: "Groove" },
  //         { id: "dp-23006", icon: "block", label: "Ridge" },
  //         { id: "dp-23007", icon: "block", label: "Inset" },
  //         { id: "dp-23008", icon: "block", label: "Outset" },
  //         { id: "dp-23009", icon: "block", label: "Hidden" },
  //         { id: "dp-23010", icon: "block", label: "None" },
  //       ],
  //     },
  //     {
  //       _id: 22,
  //       label: "width",
  //       name: "borderWidth",
  //       type: "textInput",
  //       data: {
  //         type: "width",
  //         name: "width",
  //         class: "input",
  //         category: "border",
  //         placeholder: "set border-width",
  //       },
  //       options: [{ id: "dp-23001", icon: "block", label: "color" }],
  //     },
  //     {
  //       _id: 23,
  //       label: "color",
  //       name: "borderColor",
  //       type: "textInputAndColor",
  //       data: {
  //         type: "color",
  //         name: "color",
  //         class: "input",
  //         category: "border",
  //         placeholder: "set border-color",
  //       },
  //       options: [
  //         {
  //           id: "dp-23001",
  //           icon: "block",
  //           label: "color",
  //           data: {
  //             type: "color",
  //             name: "backgroundColor",
  //             class: "input",
  //             category: "border",
  //             placeholder: "search or set a color",
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    id: 9,
    label: "Effects",
    type: "effects",
    list: [
      {
        _id: 1,
        label: "Blending",
        name: "blending",
        type: "dropDown",
        data: {
          type: "blending",
          name: "blending",
          class: "input",
          category: "effects",
          placeholder: "set blending mode",
        },
        options: [
          { id: "dp-24001", icon: "blend", label: "multiply" },
          { id: "dp-24002", icon: "blend", label: "screen" },
          { id: "dp-24003", icon: "blend", label: "overlay" },
          // More blending options...
        ],
      },
      {
        _id: 2,
        label: "Opacity",
        name: "opacity",
        type: "range",
        data: {
          type: "opacity",
          name: "opacity",
          class: "input",
          category: "effects",
          placeholder: "set opacity",
        },
      },
      // {
      //   _id: 3,
      //   label: "Outline",
      //   name: "outline",
      //   type: "buttonGroup",
      //   data: {
      //     type: "outline",
      //     name: "outline",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "set outline style",
      //   },
      //   options: [
      //     { id: "dp-24004", icon: "none", label: "none" },
      //     { id: "dp-24005", icon: "solid", label: "solid" },
      //     // More outline options...
      //   ],
      // },
      // {
      //   _id: 4,
      //   label: "Box Shadow",
      //   name: "boxShadow",
      //   type: "textInput",
      //   data: {
      //     type: "boxShadow",
      //     name: "boxShadow",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "set box-shadow",
      //   },
      // },
      // {
      //   _id: 5,
      //   label: "2D & 3D Transform",
      //   name: "transform",
      //   type: "textInput",
      //   data: {
      //     type: "transform",
      //     name: "transform",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "set transform",
      //   },
      // },
      // {
      //   _id: 6,
      //   label: "Transition",
      //   name: "transition",
      //   type: "textInput",
      //   data: {
      //     type: "transition",
      //     name: "transition",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "set transition",
      //   },
      // },
      // {
      //   _id: 7,
      //   label: "Filters",
      //   name: "filters",
      //   type: "textInput",
      //   data: {
      //     type: "filters",
      //     name: "filters",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "apply filters",
      //   },
      // },
      // {
      //   _id: 8,
      //   label: "Backdrop Filters",
      //   name: "backdropFilters",
      //   type: "textInput",
      //   data: {
      //     type: "backdropFilters",
      //     name: "backdropFilters",
      //     class: "input",
      //     category: "effects",
      //     placeholder: "set backdrop filters",
      //   },
      // },
      {
        _id: 9,
        label: "Cursor",
        name: "cursor",
        type: "dropDown",
        data: {
          type: "cursor",
          name: "cursor",
          class: "input",
          category: "effects",
          placeholder: "set cursor style",
        },
        options: [
          { id: "dp-24006", icon: "", label: "auto" },
          { id: "dp-24007", icon: "", label: "pointer" },
          { id: "dp-24007", icon: "", label: "context-menu" },
          { id: "dp-24007", icon: "", label: "help" },
          { id: "dp-24007", icon: "", label: "wait" },
          { id: "dp-24007", icon: "", label: "progress" },
          { id: "dp-24007", icon: "", label: "copy" },
          { id: "dp-24007", icon: "", label: "move" },
          { id: "dp-24007", icon: "", label: "not-allowed" },
          { id: "dp-24007", icon: "", label: "zoom-out" },
          { id: "dp-24007", icon: "", label: "zoom-in" },
        ],
      }
    ]
  }
];


export const SITE_CONTENT = {
  components: {
    label: "Base Component",
    list: [
      {
        _id: "00001367376830", tag: "div", type: "Header", label: "Header", class: "nc-add-layout", icon: "layout-header", data: {
          options: [
            {
              id: "H-001", label: "", img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715717218180-Desktop%20Header.png",
              node: [
                  {
                      "_id": "idcRRteFCU-IFq7-NwZH-KHqt-V2swIg0VmYrL",
                      "tag": "div",
                      "classes": [
                          "Header"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idEW3DsJXj-Y6PR-EG2n-EHMc-s4Hjd2UcTSOt",
                          "idVSbMrQOJ-lByG-ahbA-BNOj-U5bO18No9fs1"
                      ]
                  },
                  {
                      "_id": "id8EHVn0uD-qi0x-MiJG-1c7m-xHzs5DkEp5Nh",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706406533383-No-code%20Logo%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idUg4kRlL6-mRic-7N3N-I1on-YkO0jthg8hjl",
                      "tag": "div",
                      "classes": [
                          "Header-logo-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id8EHVn0uD-qi0x-MiJG-1c7m-xHzs5DkEp5Nh"
                      ]
                  },
                  {
                      "_id": "idb5l8SBLw-mnq0-QDE1-INxw-dlz6jweXIkZE",
                      "text": true,
                      "type": "text",
                      "v": "Home"
                  },
                  {
                      "_id": "idslCuTq6N-uChm-hdVV-UJOY-LqqZv4pZFqXR",
                      "tag": "li",
                      "classes": [
                          "Header-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idb5l8SBLw-mnq0-QDE1-INxw-dlz6jweXIkZE"
                      ]
                  },
                  {
                      "_id": "idviv4s1hi-lABQ-f2Pc-ANKC-pv3uob2EIPRO",
                      "text": true,
                      "type": "text",
                      "v": "Products"
                  },
                  {
                      "_id": "id4jBn1e1R-4Deu-kJ1j-tceW-pHubbh9yzP8F",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idviv4s1hi-lABQ-f2Pc-ANKC-pv3uob2EIPRO"
                      ]
                  },
                  {
                      "_id": "idpKMxbch7-4iwi-yH8t-t1AX-dHXlNC6ZScNj",
                      "tag": "img",
                      "classes": [
                          "Header-list-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410065208-chevron-down.png",
                          "alt": "arrow Down"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idoetDwQ1z-4P8i-uF4I-A9kW-RP5Odfyy0rty",
                      "tag": "li",
                      "classes": [
                          "Header-list",
                          "Header-list-children"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id4jBn1e1R-4Deu-kJ1j-tceW-pHubbh9yzP8F",
                          "idpKMxbch7-4iwi-yH8t-t1AX-dHXlNC6ZScNj"
                      ]
                  },
                  {
                      "_id": "id37chbkWn-150S-l9I3-MjCd-zAwxWmgl6Mol",
                      "text": true,
                      "type": "text",
                      "v": "Resources"
                  },
                  {
                      "_id": "idUnfdKKdA-cRwL-84GG-3QFR-Ntk45g5gXl43",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id37chbkWn-150S-l9I3-MjCd-zAwxWmgl6Mol"
                      ]
                  },
                  {
                      "_id": "idMITzRtaS-9UhM-NW9h-j07v-y3ocPtcNCLhX",
                      "tag": "img",
                      "classes": [
                          "Header-list-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410065208-chevron-down.png",
                          "alt": "arrow Down"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id1M3HeYbr-apDv-gct0-mcB7-v5g0bZJgnARf",
                      "tag": "li",
                      "classes": [
                          "Header-list",
                          "Header-list-children"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idUnfdKKdA-cRwL-84GG-3QFR-Ntk45g5gXl43",
                          "idMITzRtaS-9UhM-NW9h-j07v-y3ocPtcNCLhX"
                      ]
                  },
                  {
                      "_id": "idcNM5r37s-uvu7-zj9j-oikK-5MN022jPf68R",
                      "text": true,
                      "type": "text",
                      "v": "Pricing"
                  },
                  {
                      "_id": "idg5VU5uW8-Bu1r-Xpom-fRDJ-qduq40klXe7w",
                      "tag": "li",
                      "classes": [
                          "Header-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idcNM5r37s-uvu7-zj9j-oikK-5MN022jPf68R"
                      ]
                  },
                  {
                      "_id": "idsrun8RTC-dcxq-vQpk-ak6Q-lEAoGsLicWQy",
                      "tag": "ul",
                      "classes": [
                          "Header-list-container"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idslCuTq6N-uChm-hdVV-UJOY-LqqZv4pZFqXR",
                          "idoetDwQ1z-4P8i-uF4I-A9kW-RP5Odfyy0rty",
                          "id1M3HeYbr-apDv-gct0-mcB7-v5g0bZJgnARf",
                          "idg5VU5uW8-Bu1r-Xpom-fRDJ-qduq40klXe7w"
                      ]
                  },
                  {
                      "_id": "idEW3DsJXj-Y6PR-EG2n-EHMc-s4Hjd2UcTSOt",
                      "tag": "div",
                      "classes": [
                          "Header-first-section"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idUg4kRlL6-mRic-7N3N-I1on-YkO0jthg8hjl",
                          "idsrun8RTC-dcxq-vQpk-ak6Q-lEAoGsLicWQy"
                      ]
                  },
                  {
                      "_id": "idgwdmwTd2-sPmu-V2fb-03pl-mXZzOXW2Sy9r",
                      "text": true,
                      "type": "text",
                      "v": "Login"
                  },
                  {
                      "_id": "idPmLSTrSH-7qDe-vs73-N8Sd-08sGd6hiwEQ2",
                      "tag": "span",
                      "classes": [
                          "Header-sign-up-p"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idgwdmwTd2-sPmu-V2fb-03pl-mXZzOXW2Sy9r"
                      ]
                  },
                  {
                      "_id": "idXCJCrQnG-AzRr-fPvg-vObU-ksmRZYTaZG9U",
                      "text": true,
                      "type": "text",
                      "v": "Sign Up"
                  },
                  {
                      "_id": "idQUhmqvNY-RAmk-t2M6-aLcn-DmlJITA2ITbj",
                      "tag": "button",
                      "classes": [
                          "Header-sign-up-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idXCJCrQnG-AzRr-fPvg-vObU-ksmRZYTaZG9U"
                      ]
                  },
                  {
                      "_id": "idQGJORGpr-aZ0b-r09e-fBbP-UMLexSHKAwuz",
                      "tag": "div",
                      "classes": [
                          "Header-sign-up-1"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idPmLSTrSH-7qDe-vs73-N8Sd-08sGd6hiwEQ2",
                          "idQUhmqvNY-RAmk-t2M6-aLcn-DmlJITA2ITbj"
                      ]
                  },
                  {
                      "_id": "iddvwZPlGZ-iUTN-aiVJ-6Uco-FHJS7xZaKjaV",
                      "tag": "img",
                      "classes": [
                          "Header-sign-up-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409974726-menu.png",
                          "alt": "menu"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idVSbMrQOJ-lByG-ahbA-BNOj-U5bO18No9fs1",
                      "tag": "div",
                      "classes": [
                          "Header-sign-up"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idQGJORGpr-aZ0b-r09e-fBbP-UMLexSHKAwuz",
                          "iddvwZPlGZ-iUTN-aiVJ-6Uco-FHJS7xZaKjaV"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "8a4bae0c-82f5-4552-89c9-f0dc050eef73",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header",
                          "styleLess": "display: flex; justify-content: space-between; align-items: center; color: var(--Gray-500, #667085); font-family: sans-serif; font-style: normal; font-weight: 600; font-size: 11.678px; line-height: 17.518px; padding: 23px; gap: 23px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a9caaab8-eb87-4f2d-9dad-7fd9107785e6",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-first-section",
                          "styleLess": "display: flex; align-items: center; gap: 70px; justify-content: space-between;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e4fcacfc-bca8-481b-8cfd-72fc1106ecad",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-container",
                          "styleLess": "display: none; gap: 30px; margin: 0px; align-items: center; padding: 0px; list-style: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "abaad1b4-840e-4a94-8817-1f997605dadb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list",
                          "styleLess": "cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "76bac5a2-df73-4c4b-b775-614bc708b0b0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-children",
                          "styleLess": "display: flex; align-items: center; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7249584d-0c4a-4117-ac26-715c542b3f17",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-img",
                          "styleLess": "width: 20px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3f6fdf3c-0ff3-4b57-b053-becc349d60f7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-1",
                          "styleLess": "display: none; gap: 14px; align-items: center; line-height: 150%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "54c30e39-64ce-4e42-a290-e026f27282e9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-p",
                          "styleLess": "cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "af1b08aa-230b-421e-92a0-d0bbaf9a72c2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-btn",
                          "styleLess": "display: flex; padding: 6px 16px; justify-content: center; align-items: center; gap: 10px; border-radius: 6px; border: 1.195px solid var(--Black, #000); background: var(--Black, #000); box-shadow: rgba(16, 24, 40, 0.05) 0px 1.195px 2.389px 0px; color: var(--White, #FFF); font-family: sans-serif; font-size: 16px; font-style: normal; font-weight: 600; line-height: 28.673px; min-width: 95px; cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2f0516e2-ad1f-4626-93ab-00837e44ff72",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-btn:hover",
                          "styleLess": "background: var(--White, #FFF); color: var(--Black, #000);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cc2530b7-1d5e-4f9b-b3e5-e801c3339e0b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Header-first-section { min-width: 550px; }  .Header { font-size: 16px; line-height: 28px; padding: 30px; gap: 30px; }  .Header-list-container { display: flex; }  .Header-sign-up-1 { display: flex; }  .Header-sign-up-img { display: none; width: 50px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              }
            },
            {
              id: "H-02", label: "", img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715741936782-Container.png",
              node: [
                  {
                      "_id": "id0Phb5nJp-dG8j-3txF-lG16-WRfu3fJQ0aOJ",
                      "tag": "div",
                      "classes": [
                          "Header"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idSYZoUYfO-cdDy-WwhQ-8hMA-Z967uF20JZKW",
                          "idWN4ysJEv-b506-3hi5-sdyj-dUPfVAwAvyKf",
                          "idaF5AJM3M-oOBj-OIyT-qUB7-tzKpctGWww6v"
                      ]
                  },
                  {
                      "_id": "idwfNdnvcq-rOBP-Xl0O-6y4q-snSzfFXOZER3",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706406533383-No-code%20Logo%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idSYZoUYfO-cdDy-WwhQ-8hMA-Z967uF20JZKW",
                      "tag": "div",
                      "classes": [
                          "Header-logo-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idwfNdnvcq-rOBP-Xl0O-6y4q-snSzfFXOZER3"
                      ]
                  },
                  {
                      "_id": "idOU2LVmf0-y9s6-LVZH-Rv7e-0ZFtO9FxwUVT",
                      "text": true,
                      "type": "text",
                      "v": "Home"
                  },
                  {
                      "_id": "id329JSJbw-vc6N-MAbR-xbVg-EA4tv4xIGzOk",
                      "tag": "li",
                      "classes": [
                          "Header-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idOU2LVmf0-y9s6-LVZH-Rv7e-0ZFtO9FxwUVT"
                      ]
                  },
                  {
                      "_id": "idjmULnOqG-A5cA-2ThL-932p-x2flgKtw2RVB",
                      "text": true,
                      "type": "text",
                      "v": "Products"
                  },
                  {
                      "_id": "idz3BgvuhV-f1Kj-SEQ1-jmlK-vA9XZHdJ662t",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idjmULnOqG-A5cA-2ThL-932p-x2flgKtw2RVB"
                      ]
                  },
                  {
                      "_id": "id3LFrx4pK-0YCt-J35U-ufAO-JJYoBv2mzMwB",
                      "tag": "img",
                      "classes": [
                          "Header-list-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410065208-chevron-down.png",
                          "alt": "arrow Down"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id8kkoRCMu-pG4g-ps69-qv0y-G1rkR5yODw6O",
                      "tag": "li",
                      "classes": [
                          "Header-list",
                          "Header-list-children"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idz3BgvuhV-f1Kj-SEQ1-jmlK-vA9XZHdJ662t",
                          "id3LFrx4pK-0YCt-J35U-ufAO-JJYoBv2mzMwB"
                      ]
                  },
                  {
                      "_id": "id8wzq31nb-3J4A-XLZX-7B4L-SZYaSPfIthnI",
                      "text": true,
                      "type": "text",
                      "v": "Resources"
                  },
                  {
                      "_id": "idjYSRMmbP-Deqm-1mn3-CMNa-CPKJpwEPHGvO",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id8wzq31nb-3J4A-XLZX-7B4L-SZYaSPfIthnI"
                      ]
                  },
                  {
                      "_id": "id5PiQdmbf-Tkzc-zOIa-pKaU-ecbZIncEIf9w",
                      "tag": "img",
                      "classes": [
                          "Header-list-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410065208-chevron-down.png",
                          "alt": "arrow Down"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idMqsXNLAm-AphE-c74k-CqV2-cfjGWcBX7xke",
                      "tag": "li",
                      "classes": [
                          "Header-list",
                          "Header-list-children"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idjYSRMmbP-Deqm-1mn3-CMNa-CPKJpwEPHGvO",
                          "id5PiQdmbf-Tkzc-zOIa-pKaU-ecbZIncEIf9w"
                      ]
                  },
                  {
                      "_id": "idM6i4HTaU-S1Ve-sGNo-RaSz-TU9t7iOlehQo",
                      "text": true,
                      "type": "text",
                      "v": "Pricing"
                  },
                  {
                      "_id": "id50QqZvuq-JeCh-Voqy-8Jtu-kq1xF5WXXVLT",
                      "tag": "li",
                      "classes": [
                          "Header-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idM6i4HTaU-S1Ve-sGNo-RaSz-TU9t7iOlehQo"
                      ]
                  },
                  {
                      "_id": "id66wpA9Vl-y76R-vWgW-RJbc-YZxQdfETcXNR",
                      "tag": "ul",
                      "classes": [
                          "Header-list-container"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "id329JSJbw-vc6N-MAbR-xbVg-EA4tv4xIGzOk",
                          "id8kkoRCMu-pG4g-ps69-qv0y-G1rkR5yODw6O",
                          "idMqsXNLAm-AphE-c74k-CqV2-cfjGWcBX7xke",
                          "id50QqZvuq-JeCh-Voqy-8Jtu-kq1xF5WXXVLT"
                      ]
                  },
                  {
                      "_id": "idl3IPiMXt-DRdh-c1Cn-TDg9-Ml7rqErHm9QR",
                      "text": true,
                      "type": "text",
                      "v": "Get started"
                  },
                  {
                      "_id": "idwnNrPrjH-MUEm-pm5o-s2ot-oLdf2U5oSGqi",
                      "tag": "button",
                      "classes": [
                          "Header-sign-up-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idl3IPiMXt-DRdh-c1Cn-TDg9-Ml7rqErHm9QR"
                      ]
                  },
                  {
                      "_id": "idQ9eqYP9D-IXDh-qS3X-9A2i-eIHVurDWFBJP",
                      "tag": "div",
                      "classes": [
                          "Header-sign-up-1"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idwnNrPrjH-MUEm-pm5o-s2ot-oLdf2U5oSGqi"
                      ]
                  },
                  {
                      "_id": "idU7gJRaBy-qsMg-dcvd-dnOe-1i3oDM6tQeJl",
                      "tag": "div",
                      "classes": [
                          "Header-sign-up"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idQ9eqYP9D-IXDh-qS3X-9A2i-eIHVurDWFBJP"
                      ]
                  },
                  {
                      "_id": "idWN4ysJEv-b506-3hi5-sdyj-dUPfVAwAvyKf",
                      "tag": "div",
                      "classes": [
                          "Header-first-section"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id66wpA9Vl-y76R-vWgW-RJbc-YZxQdfETcXNR",
                          "idU7gJRaBy-qsMg-dcvd-dnOe-1i3oDM6tQeJl"
                      ]
                  },
                  {
                      "_id": "idaF5AJM3M-oOBj-OIyT-qUB7-tzKpctGWww6v",
                      "tag": "img",
                      "classes": [
                          "Header-sign-up-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409974726-menu.png",
                          "alt": "menu"
                      },
                      "type": "img",
                      "children": []
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "8a4bae0c-82f5-4552-89c9-f0dc050eef73",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header",
                          "styleLess": "display: flex; justify-content: space-between; align-items: center; color: var(--Gray-500, #667085); font-family: sans-serif; font-style: normal; font-weight: 600; font-size: 11.678px; line-height: 17.518px; padding: 23px; gap: 23px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a9caaab8-eb87-4f2d-9dad-7fd9107785e6",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-first-section",
                          "styleLess": "display: flex; align-items: center; gap: 70px; justify-content: space-between;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e4fcacfc-bca8-481b-8cfd-72fc1106ecad",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-container",
                          "styleLess": "display: none; gap: 30px; margin: 0px; align-items: center; padding: 0px; list-style: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "abaad1b4-840e-4a94-8817-1f997605dadb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list",
                          "styleLess": "cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "76bac5a2-df73-4c4b-b775-614bc708b0b0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-children",
                          "styleLess": "display: flex; align-items: center; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7249584d-0c4a-4117-ac26-715c542b3f17",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-list-img",
                          "styleLess": "width: 20px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3f6fdf3c-0ff3-4b57-b053-becc349d60f7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-1",
                          "styleLess": "display: none; gap: 14px; align-items: center; line-height: 150%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "54c30e39-64ce-4e42-a290-e026f27282e9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-p",
                          "styleLess": "cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "af1b08aa-230b-421e-92a0-d0bbaf9a72c2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-btn",
                          "styleLess": "display: flex; padding: 6px 16px; justify-content: center; align-items: center; gap: 10px; border-radius: 6px; border: 1.195px solid var(--Black, #000); background: var(--Black, #000); box-shadow: rgba(16, 24, 40, 0.05) 0px 1.195px 2.389px 0px; color: var(--White, #FFF); font-family: sans-serif; font-size: 16px; font-style: normal; font-weight: 600; line-height: 28.673px; min-width: 95px; cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2f0516e2-ad1f-4626-93ab-00837e44ff72",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Header-sign-up-btn:hover",
                          "styleLess": "background: var(--White, #FFF); color: var(--Black, #000);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cc2530b7-1d5e-4f9b-b3e5-e801c3339e0b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Header-first-section { min-width: 550px; }  .Header { font-size: 16px; line-height: 28px; padding: 30px; gap: 30px; }  .Header-list-container { display: flex; }  .Header-sign-up-1 { display: flex; }  .Header-sign-up-img { display: none; width: 50px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              }
            }
          ]
        }
      },
      {
        _id: "00002127636730", tag: "div", type: "Hero", label: "Hero", class: "nc-add-hero", icon: "layout-hero", data: {
          options: [
            {
              id: "TD-001",
              label: "",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715742599099-Section.png",
              node: [
                  {
                      "_id": "idZPU2SJPE-uoY3-P6o7-W3sC-PNXhDc9dZoyH",
                      "tag": "div",
                      "classes": [
                          "Hero-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idnafhLy6x-LMQq-9ave-TIGf-7Cg26WcyuRDh",
                          "idmDniHRxZ-IzYp-Gll4-mdLz-FS87WxFtXw1o"
                      ]
                  },
                  {
                      "_id": "idanlLHmMi-Z06z-0PRL-FEsk-czeHkqocd8Nd",
                      "text": true,
                      "type": "text",
                      "v": "Beautiful analytics to grow smarter"
                  },
                  {
                      "_id": "idSb0pP95u-zZBM-7cXq-bNwk-dN6tA59PifwS",
                      "tag": "h2",
                      "classes": [
                          "Hero-first-text-h2"
                      ],
                      "data": {},
                      "type": "h2",
                      "children": [
                          "idanlLHmMi-Z06z-0PRL-FEsk-czeHkqocd8Nd"
                      ]
                  },
                  {
                      "_id": "idSnCAnw66-8JYb-YI4O-M9aA-ME7Dp5Krr8Um",
                      "text": true,
                      "type": "text",
                      "v": "Powerful, self-serve product and growth analytics to help you convert,          engage, and retain more users. Trusted by over 4,000 startups."
                  },
                  {
                      "_id": "idBEGVzjCV-T2O6-44Ve-PRPu-pVdu9VBIHkR3",
                      "tag": "p",
                      "classes": [
                          "Hero-first-text-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idSnCAnw66-8JYb-YI4O-M9aA-ME7Dp5Krr8Um"
                      ]
                  },
                  {
                      "_id": "idG5eYzOYL-nDw6-ysZt-gChV-CRlADfJxdx1f",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "idpiS6Gnk4-XrYP-v9Dj-qmI8-1uczaVRmTqpt",
                      "tag": "button",
                      "classes": [
                          "Hero-first-text-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idG5eYzOYL-nDw6-ysZt-gChV-CRlADfJxdx1f"
                      ]
                  },
                  {
                      "_id": "idnafhLy6x-LMQq-9ave-TIGf-7Cg26WcyuRDh",
                      "tag": "div",
                      "classes": [
                          "Hero-first-text-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idSb0pP95u-zZBM-7cXq-bNwk-dN6tA59PifwS",
                          "idBEGVzjCV-T2O6-44Ve-PRPu-pVdu9VBIHkR3",
                          "idpiS6Gnk4-XrYP-v9Dj-qmI8-1uczaVRmTqpt"
                      ]
                  },
                  {
                      "_id": "idhLv5N4w4-tYfu-LSb2-7BY1-xi7sNtfIslJ7",
                      "tag": "img",
                      "classes": [
                          "Hero-first-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409433039-kseniya-lapteva-JN3HCJvZEFA-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idmDniHRxZ-IzYp-Gll4-mdLz-FS87WxFtXw1o",
                      "tag": "div",
                      "classes": [
                          "Hero-first-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idhLv5N4w4-tYfu-LSb2-7BY1-xi7sNtfIslJ7"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "bd8cc2fb-2233-44ba-a8b1-733b0a3de37b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first",
                          "styleLess": "display: flex; padding: 85.333px 20px 30px; flex-direction: column; align-items: center; gap: 56.889px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "77a5a84d-05ab-4779-a1bb-104b5fd78577",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-text-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 28.444px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4b9642c2-752f-4cf5-b17c-da3b2d88b773",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-text-h2",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Switzer; font-style: normal; font-weight: 600; margin: 0px; font-size: 32.583px; line-height: 39.1px; letter-spacing: -0.652px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7b0764f8-6be6-4561-a842-3ab6c7d8d26f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-text-p",
                          "styleLess": "color: var(--Gray-500, #667085); text-align: center; margin: 0px; font-family: Switzer; font-size: 14px; font-weight: 400; line-height: 16.292px; font-style: normal;",
                          "type": "class",
                          "variants": {
                              "small": {
                                  "sel": ".Hero-first-text-p",
                                  "styleLess": "width: 70%;"
                              }
                          }
                      }
                  },
                  {
                      "style_id": "59f4231d-30d6-4e21-99a9-d061bdee05e0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-text-btn",
                          "styleLess": "display: flex; justify-content: center; align-items: center; gap: 7px; border-radius: 7px; border: 0.889px solid var(--Gray-900, #101828); background: var(--Gray-900, #101828); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.889px 1.778px 0px; color: var(--White, #FFF); font-family: Switzer; padding: 8.689px 15.206px; font-size: 14px; line-height: 15.206px; font-style: normal; font-weight: 600;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "dcb9a0bb-e45f-4355-b65a-385e71103ddf",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-img-container",
                          "styleLess": "display: flex; justify-content: center; align-items: flex-start; gap: 56px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "20db8a12-3aee-49df-9d77-777235c46812",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-text-container",
                          "styleLess": "align-self: stretch; width: 100%; height: fit-content;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c897194f-a149-456e-b4b4-f557a512fb75",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-first-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover; max-width: 90%; max-height: 900px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e788d881-0178-40e8-a020-3b5093ad8541",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Hero-first-text-h2 { font-size: 53.333px; line-height: 64px; letter-spacing: -1.067px; }  .Hero-first-text-p { font-size: 17.778px; font-weight: 400; line-height: 26.667px; }  .Hero-first-text-btn { font-size: 16px; font-weight: 600; line-height: 24.889px; padding: 14.222px 24.889px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
            {
              id: "TD-002",
              label: "",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715742720718-Desktop%20Hero%20header%20section.png",
              node: [
                  {
                      "_id": "id7SElJlgx-7aBN-EI68-LLlc-zBSYq6aZ9g5s",
                      "tag": "div",
                      "classes": [
                          "Hero-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idyLNInj8c-rnPk-4TgO-AIdS-uFa2tlzKvBWU",
                          "idABTTiTiF-J8TL-K2G5-YOOM-tPCa2KSoReDS"
                      ]
                  },
                  {
                      "_id": "id3Bp6FYKx-68OR-2vsL-9iIJ-SSfouzqLspa9",
                      "text": true,
                      "type": "text",
                      "v": "Beautiful analytics to grow smarter"
                  },
                  {
                      "_id": "ideVdbPwy6-qV4t-UACs-Rb4z-8lgVZe9fDiWc",
                      "tag": "h2",
                      "classes": [
                          "Hero-second-text-h2"
                      ],
                      "data": {},
                      "type": "h2",
                      "children": [
                          "id3Bp6FYKx-68OR-2vsL-9iIJ-SSfouzqLspa9"
                      ]
                  },
                  {
                      "_id": "id6EV4Y9jp-HSY8-CxTH-83je-NHoXWDvdxlmH",
                      "text": true,
                      "type": "text",
                      "v": "Powerful, self-serve product and growth analytics to help you convert,          engage, and retain more users. Trusted by over 4,000 startups."
                  },
                  {
                      "_id": "idtCL47DXn-XeBt-PFDr-ipgc-GEPenbQTWlPP",
                      "tag": "p",
                      "classes": [
                          "Hero-second-text-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id6EV4Y9jp-HSY8-CxTH-83je-NHoXWDvdxlmH"
                      ]
                  },
                  {
                      "_id": "idzSrqBAeE-eX6u-6DvA-u2XA-Zp09PAA6tU33",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "id4vuTOOmr-XcZt-1dDq-3m7F-YR7qAU56LxCb",
                      "tag": "button",
                      "classes": [
                          "Hero-second-text-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idzSrqBAeE-eX6u-6DvA-u2XA-Zp09PAA6tU33"
                      ]
                  },
                  {
                      "_id": "idyLNInj8c-rnPk-4TgO-AIdS-uFa2tlzKvBWU",
                      "tag": "div",
                      "classes": [
                          "Hero-second-text-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "ideVdbPwy6-qV4t-UACs-Rb4z-8lgVZe9fDiWc",
                          "idtCL47DXn-XeBt-PFDr-ipgc-GEPenbQTWlPP",
                          "id4vuTOOmr-XcZt-1dDq-3m7F-YR7qAU56LxCb"
                      ]
                  },
                  {
                      "_id": "idEPsC5HHK-EhmZ-HyIM-GOot-9PHXkzr0QW8w",
                      "tag": "img",
                      "classes": [
                          "Hero-second-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706407432506-andrew-kliatskyi-DQorphiX7oE-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idABTTiTiF-J8TL-K2G5-YOOM-tPCa2KSoReDS",
                      "tag": "div",
                      "classes": [
                          "Hero-second-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idEPsC5HHK-EhmZ-HyIM-GOot-9PHXkzr0QW8w"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "bc160f53-8193-436f-8d97-e6afa34bd580",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second",
                          "styleLess": "display: flex; padding: 85.333px 20px 30px; flex-direction: column; align-items: center; align-self: stretch; gap: 56px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f4bcca65-018a-4822-9618-820acc461e34",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-text-container",
                          "styleLess": "display: flex; flex-direction: column; gap: 28.444px; width: 100%; text-align: center; justify-content: center; align-items: center; flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "8ffb8d4a-74fe-4fa1-92da-e94fc2588a40",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-text-h2",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Switzer; font-style: normal; font-weight: 600; margin: 0px; font-size: 32.583px; line-height: 39.1px; letter-spacing: -0.652px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f7e5a9ec-11a3-456f-8fe6-42ae38154dfe",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-text-p",
                          "styleLess": "color: var(--Gray-500, #667085); margin: 0px; font-family: Switzer; font-size: 14px; font-weight: 400; line-height: 16.292px; font-style: normal;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "02508264-72d0-4711-91be-67254eefef46",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-text-btn",
                          "styleLess": "display: flex; justify-content: center; align-items: center; gap: 7px; border-radius: 7px; border: 0.889px solid var(--Gray-900, #101828); background: var(--Gray-900, #101828); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.889px 1.778px 0px; color: var(--White, #FFF); font-family: Switzer; padding: 8.689px 15.206px; font-size: 14px; line-height: 15.206px; font-style: normal; font-weight: 600; width: fit-content;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f648742f-bdd8-4572-a159-fac77ca02d4e",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-img-container",
                          "styleLess": "display: flex; justify-content: center; align-items: center; align-self: stretch; width: 100%; height: fit-content; flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c666e2ca-0e14-46d1-b79b-5088952cfa9a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Hero-second-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover; max-height: 600px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "dbe0cdd7-401e-4ecb-af31-add872400f04",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Hero-second { flex-direction: row; gap: 12px; }  .Hero-second-text-p { width: 70%; }  .Hero-second-img-container { width: 40%; }  .Hero-second-text-container { width: 60%; justify-content: flex-start; align-items: flex-start; text-align: start; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "07e5cbe2-437a-4e9a-8880-56c0cafc57ac",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Hero-second { padding: 50px 20px; }  .Hero-second-text-h2 { font-size: 53.333px; line-height: 64px; letter-spacing: -1.067px; }  .Hero-second-text-p { font-size: 17.778px; font-weight: 400; line-height: 26.667px; }  .Hero-second-text-btn { font-size: 16px; font-weight: 600; line-height: 24.889px; padding: 14.222px 24.889px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
          ]
        },
      },
      {
        _id: "000022748492", tag: "div", type: "Content", label: "Content", class: "", icon: "layout-content", data: {
          options: [
            {
              id: "C-001",
              label: "Content with Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715750510644-desktop.png",
              node:[
                  {
                      "_id": "idHO0MiaqK-teQx-6fFu-YG1q-Xu91t5i5dcWS",
                      "tag": "div",
                      "classes": [
                          "Content-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idFkYCKBmX-guNt-cyru-GABK-KgDTbIZAHyp1",
                          "idgS1ls9s4-sSyv-Kxze-UoRy-7CRdofXSHxVB"
                      ]
                  },
                  {
                      "_id": "idj3zf2Cal-Xwgj-Sf5b-PBdH-ER9j3RKcGN9V",
                      "text": true,
                      "type": "text",
                      "v": "our studio"
                  },
                  {
                      "_id": "iduxkGo1qn-zQIe-ioiQ-1sUe-Si4TiD4v9Tjo",
                      "tag": "span",
                      "classes": [
                          "Content-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idj3zf2Cal-Xwgj-Sf5b-PBdH-ER9j3RKcGN9V"
                      ]
                  },
                  {
                      "_id": "idMRVU9n0W-kwoG-4yTK-x4yb-FXFpCu6BNVI2",
                      "text": true,
                      "type": "text",
                      "v": "People first. Design later."
                  },
                  {
                      "_id": "idaQ3j3PCc-LM66-V4al-ULZK-1bzxnuT0PSLe",
                      "tag": "h5",
                      "classes": [
                          "Content-first-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idMRVU9n0W-kwoG-4yTK-x4yb-FXFpCu6BNVI2"
                      ]
                  },
                  {
                      "_id": "idpuWlrKzR-zRGx-fVQI-uOaA-1IJJsnpjKDCT",
                      "text": true,
                      "type": "text",
                      "v": "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum              quis montes, sit sit. Tellus aliquam enim urna, etiam."
                  },
                  {
                      "_id": "idQwSY2vIt-IP41-fkA9-aav2-fGDS7H3x0Fnx",
                      "tag": "p",
                      "classes": [
                          "Content-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idpuWlrKzR-zRGx-fVQI-uOaA-1IJJsnpjKDCT"
                      ]
                  },
                  {
                      "_id": "idRmS0TiwC-18OQ-py08-qYFA-pjLHj7hRoshp",
                      "text": true,
                      "type": "text",
                      "v": "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,              nulla odio nisl vitae. In aliquet pellentesque aenean hac              vestibulum turpis mi bibendum diam. Tempor integer aliquam in              vitae malesuada."
                  },
                  {
                      "_id": "id1Ivdzg3p-w2mz-hu8s-a7u6-HIpwK45N5hoV",
                      "tag": "p",
                      "classes": [
                          "Content-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idRmS0TiwC-18OQ-py08-qYFA-pjLHj7hRoshp"
                      ]
                  },
                  {
                      "_id": "idTpMe7mfo-MgdQ-jofb-jmMz-7tL7WCpdGPVw",
                      "text": true,
                      "type": "text",
                      "v": "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet              commodo consectetur convallis risus. Sed condimentum enim              dignissim adipiscing faucibus consequat, urna. Viverra purus et              erat auctor aliquam."
                  },
                  {
                      "_id": "id37x6Wpfn-capp-FjAG-wFfa-It6Wwy4G47tG",
                      "tag": "p",
                      "classes": [
                          "Content-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idTpMe7mfo-MgdQ-jofb-jmMz-7tL7WCpdGPVw"
                      ]
                  },
                  {
                      "_id": "idVylZ7mg3-4VUj-7AmX-ubyJ-xQlEh7EQjNhB",
                      "text": true,
                      "type": "text",
                      "v": "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim              mauris id. Non pellentesque congue eget consectetur turpis.              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt              aenean."
                  },
                  {
                      "_id": "id7LGckOQi-7By0-pdVw-0Nz9-ugMFv4RT6G6X",
                      "tag": "p",
                      "classes": [
                          "Content-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idVylZ7mg3-4VUj-7AmX-ubyJ-xQlEh7EQjNhB"
                      ]
                  },
                  {
                      "_id": "idmn8xmblq-STey-Pxs6-UY0z-9pQkO9bo0vBU",
                      "tag": "div",
                      "classes": [
                          "Content-first-p-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idQwSY2vIt-IP41-fkA9-aav2-fGDS7H3x0Fnx",
                          "id1Ivdzg3p-w2mz-hu8s-a7u6-HIpwK45N5hoV",
                          "id37x6Wpfn-capp-FjAG-wFfa-It6Wwy4G47tG",
                          "id7LGckOQi-7By0-pdVw-0Nz9-ugMFv4RT6G6X"
                      ]
                  },
                  {
                      "_id": "idTKjmo9X7-sxHK-5Mek-TouF-F0M27ZSZpLBz",
                      "text": true,
                      "type": "text",
                      "v": "Get in touch"
                  },
                  {
                      "_id": "idJHmfMItR-F6aC-SWXN-a2TZ-rfZfakhbOjJ1",
                      "tag": "button",
                      "classes": [
                          "Content-first-btn-light"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idTKjmo9X7-sxHK-5Mek-TouF-F0M27ZSZpLBz"
                      ]
                  },
                  {
                      "_id": "idQZq3bzjU-sgaj-ekkz-a2p7-ir4rMydaii20",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "id3CPkYP8Z-zFsa-nbX4-Nx1Y-u04t2EkZjZi5",
                      "tag": "button",
                      "classes": [
                          "Content-first-btn-dark"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idQZq3bzjU-sgaj-ekkz-a2p7-ir4rMydaii20"
                      ]
                  },
                  {
                      "_id": "idnKvprvH7-mmPD-LE6K-tOFo-WNFju9Oo7UgO",
                      "tag": "div",
                      "classes": [
                          "Content-first-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idJHmfMItR-F6aC-SWXN-a2TZ-rfZfakhbOjJ1",
                          "id3CPkYP8Z-zFsa-nbX4-Nx1Y-u04t2EkZjZi5"
                      ]
                  },
                  {
                      "_id": "idg7RQxzjK-BBOI-UaLe-Z9M5-snXb879r0OIu",
                      "tag": "div",
                      "classes": [
                          "Content-first-text-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idaQ3j3PCc-LM66-V4al-ULZK-1bzxnuT0PSLe",
                          "idmn8xmblq-STey-Pxs6-UY0z-9pQkO9bo0vBU",
                          "idnKvprvH7-mmPD-LE6K-tOFo-WNFju9Oo7UgO"
                      ]
                  },
                  {
                      "_id": "idFkYCKBmX-guNt-cyru-GABK-KgDTbIZAHyp1",
                      "tag": "div",
                      "classes": [
                          "Content-first-section1"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iduxkGo1qn-zQIe-ioiQ-1sUe-Si4TiD4v9Tjo",
                          "idg7RQxzjK-BBOI-UaLe-Z9M5-snXb879r0OIu"
                      ]
                  },
                  {
                      "_id": "idGiWyo4kD-b1KH-pEyB-a78Z-nBTWxydPUGF4",
                      "tag": "img",
                      "classes": [
                          "Content-first-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706407432506-andrew-kliatskyi-DQorphiX7oE-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idgS1ls9s4-sSyv-Kxze-UoRy-7CRdofXSHxVB",
                      "tag": "div",
                      "classes": [
                          "Content-first-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idGiWyo4kD-b1KH-pEyB-a78Z-nBTWxydPUGF4"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "bd765f83-d80d-4097-b56f-143e336ac7a5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first",
                          "styleLess": "display: flex; padding: 50px 20px; justify-content: center; flex-direction: column; align-items: center; gap: 35.54px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e47760ca-3079-4a61-8876-f218934a0bce",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-section1",
                          "styleLess": "width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "99bc0d62-5765-4e11-ab82-237b23b86c97",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; text-decoration: none; font-weight: 600; line-height: 13.327px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ca0dd2a0-97be-4376-bbfe-ad6c43678e15",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-text-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 36.358px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3747ef21-0620-4546-afa9-1e923ffc44f8",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 25px; font-style: normal; font-weight: 600; margin: 12px 0px 0px; line-height: 24.434px; letter-spacing: -0.4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "90f825df-b6c4-45ed-a2b8-5de295e89df9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 15.549px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "42a10b14-ee9a-4949-b27e-950d9ea428b4",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-btn-container",
                          "styleLess": "display: flex; gap: 12px; font-family: Switzer; font-size: 14px; font-style: normal; font-weight: 600; line-height: 15.516px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d453020c-42ae-4d66-b673-84c3b16edd66",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-btn-light",
                          "styleLess": "display: flex; color: var(--Gray-700, #344054); padding: 8.866px 15.516px; justify-content: center; align-items: center; gap: 4.433px; border-radius: 4.433px; border: 0.554px solid var(--Gray-300, #D0D5DD); background: var(--White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.554px 1.108px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a3c7b0f6-1618-4cb2-b1ed-27f62c2d5293",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-btn-dark",
                          "styleLess": "display: flex; color: var(--White, #FFF); padding: 8.866px 15.516px; justify-content: center; align-items: center; gap: 4.433px; border-radius: 4.433px; border: 0.554px solid var(--Gray-900, #101828); background: var(--Gray-900, #101828); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.554px 1.108px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4cdc111a-bd3e-4e80-9510-b1edea6b0499",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-img-container",
                          "styleLess": "width: 100%; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f5b1eadf-3758-434e-b0c5-97824bc7f996",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-first-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover; margin: auto; max-height: 600px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f2b1b1ce-7636-4306-b05e-3f4f7bc0bd10",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Content-first { flex-direction: row; }  .Content-first-section1 { width: 50%; }  .Content-first-img-container { width: 50%;} ",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "bc0cf10c-277e-4f8a-8003-8ddcf54be442",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Content-first { padding: 87px 40.086px; gap: 35.54px; }  .Content-first-span { font-size: 14.543px; line-height: 21.815px; }  .Content-first-h5 { font-size: 32.722px; line-height: 39.994px; letter-spacing: -0.654px; }  .Content-first-p { font-size: 16.361px; font-weight: 400; line-height: 25.45px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
            {
              id: "C-002",
              label: "Content without Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715743085700-Content%20section.png",
              node: [
                  {
                      "_id": "idTwDldEEU-IQir-n5xa-adl6-cne9ThxgAvYi",
                      "tag": "div",
                      "classes": [
                          "Content-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id3wpCsecV-XT4F-CD3I-NcsE-1iew4vZzezNN",
                          "idfP1ru7z6-vXpv-QhZG-lEbp-wTL8tF5RWT6h"
                      ]
                  },
                  {
                      "_id": "idIjDDhIOF-D8vx-8JLb-UiTE-9HFgJrcSCh6O",
                      "text": true,
                      "type": "text",
                      "v": "Beautiful analytics to grow smarter"
                  },
                  {
                      "_id": "idnG1yn20j-VTFS-jfsr-s3hP-kYtFTUy1NAZw",
                      "tag": "h3",
                      "classes": [
                          "Content-second-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idIjDDhIOF-D8vx-8JLb-UiTE-9HFgJrcSCh6O"
                      ]
                  },
                  {
                      "_id": "idawm7QRQ0-I9Ag-XSB1-3btb-B8zTOMjoBvHX",
                      "text": true,
                      "type": "text",
                      "v": "Powerful, self-serve product and growth analytics to help you convert,          engage, and retain more users."
                  },
                  {
                      "_id": "idNK8Z6YGo-GwJ8-Y4un-Ifo7-S4aQMNj7GMYP",
                      "tag": "p",
                      "classes": [
                          "Content-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idawm7QRQ0-I9Ag-XSB1-3btb-B8zTOMjoBvHX"
                      ]
                  },
                  {
                      "_id": "id3wpCsecV-XT4F-CD3I-NcsE-1iew4vZzezNN",
                      "tag": "div",
                      "classes": [
                          "Content-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idnG1yn20j-VTFS-jfsr-s3hP-kYtFTUy1NAZw",
                          "idNK8Z6YGo-GwJ8-Y4un-Ifo7-S4aQMNj7GMYP"
                      ]
                  },
                  {
                      "_id": "idsXX0JNFg-bUfw-CqX3-se2J-MnIzWlmsoGta",
                      "text": true,
                      "type": "text",
                      "v": "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla."
                  },
                  {
                      "_id": "id8yKURMSu-ENRS-OqnU-0xz4-4rc7u5MYtquo",
                      "tag": "p",
                      "classes": [
                          "Content-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idsXX0JNFg-bUfw-CqX3-se2J-MnIzWlmsoGta"
                      ]
                  },
                  {
                      "_id": "idxHuzT32Z-8ZzK-snZj-jcUN-N5s0wh0b285h",
                      "text": true,
                      "type": "text",
                      "v": "How we can help"
                  },
                  {
                      "_id": "id3dAprc9T-shzV-93dx-fiYX-GsaXytRNziKT",
                      "tag": "h5",
                      "classes": [
                          "Content-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idxHuzT32Z-8ZzK-snZj-jcUN-N5s0wh0b285h"
                      ]
                  },
                  {
                      "_id": "id4z6d4zC4-UHkx-9qAD-DpYh-gqAMjQltOTpX",
                      "text": true,
                      "type": "text",
                      "v": "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At            feugiat sapien varius id."
                  },
                  {
                      "_id": "id02eKemDX-LtCv-KpLN-5T5Y-nsOoIMSnz8ow",
                      "tag": "p",
                      "classes": [
                          "Content-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id4z6d4zC4-UHkx-9qAD-DpYh-gqAMjQltOTpX"
                      ]
                  },
                  {
                      "_id": "idy9UpLeKx-E7s6-Wp4y-oJD2-ecsKgVKfwfHV",
                      "text": true,
                      "type": "text",
                      "v": "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie            aliquet sodales id est ac volutpat."
                  },
                  {
                      "_id": "iduUu5ZwCE-dlCk-QkxZ-HStH-I17MIDYSBsu4",
                      "tag": "p",
                      "classes": [
                          "Content-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idy9UpLeKx-E7s6-Wp4y-oJD2-ecsKgVKfwfHV"
                      ]
                  },
                  {
                      "_id": "id5ZsBOSVe-QEn8-2FPr-NJMC-T1GA23dKaVg5",
                      "tag": "div",
                      "classes": [
                          "Content-second-section-second-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id3dAprc9T-shzV-93dx-fiYX-GsaXytRNziKT",
                          "id02eKemDX-LtCv-KpLN-5T5Y-nsOoIMSnz8ow",
                          "iduUu5ZwCE-dlCk-QkxZ-HStH-I17MIDYSBsu4"
                      ]
                  },
                  {
                      "_id": "idfP1ru7z6-vXpv-QhZG-lEbp-wTL8tF5RWT6h",
                      "tag": "div",
                      "classes": [
                          "Content-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id8yKURMSu-ENRS-OqnU-0xz4-4rc7u5MYtquo",
                          "id5ZsBOSVe-QEn8-2FPr-NJMC-T1GA23dKaVg5"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "a9d54f5c-24c9-42d3-be07-10e49247c2a0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: center; gap: 24px; padding: 30px 20px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "37f4e58e-f8cf-4744-8264-db91d7d41139",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-second-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 19.55px; font-style: normal; margin-top: 0px; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "39e1e576-eddb-4131-b393-4031e245b3d3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-second-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; margin-top: 0px; font-style: normal; font-weight: 400; line-height: 26.667px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "bc833468-a5eb-4650-b639-006c6e870591",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Content-second-section-second-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 17px; font-style: normal; font-weight: 600; line-height: 33.778px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b68ff80c-fbc1-4478-824b-1836d1eb4d8c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Content-second { align-items: flex-start; padding: 60px 30px; flex-direction: row; }  .Content-second-section-first { flex: 1 1 0%; }  .Content-second-section-second { flex: 1 1 0%; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c14b5bc6-1bf4-4b14-b39a-58687f82ccc2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Content-second-section-first-h3 { font-size: 32px; line-height: 39.111px; letter-spacing: -0.64px; }  .Content-second-section-first-p { font-size: 17px; line-height: 24.889px; }  .Content-second-section-second-h5 { font-size: 26.667px; line-height: 33.778px;} ",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
          ]
        }
      },
      {
        _id: "00002hienk38", tag: "div", type: "Features", label: "Features", class: "", icon: "layout-features", data: {
          options: [
            {
              id: "FT-001",
              label: "Features with Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715750625182-Laptop%20Features%20section.png",
              node: [
                  {
                      "_id": "id1LgSK3Dp-G4lR-CYBu-kSXZ-KhSkKNO0TMhb",
                      "tag": "div",
                      "classes": [
                          "Feature-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idzaU21T9e-PaBn-NUwC-cH9P-LFBLgdWwG1NB",
                          "idlbShIhhl-cuFs-6jmL-NKpu-goPl4SdrqgTd"
                      ]
                  },
                  {
                      "_id": "idAqY6CmAH-3yO9-FFv4-st0C-V5q9VqQ83PJd",
                      "text": true,
                      "type": "text",
                      "v": "Features"
                  },
                  {
                      "_id": "id4nzDqMql-Ixg7-cTpV-nw6G-POjvwgGgBHnW",
                      "tag": "span",
                      "classes": [
                          "Feature-first-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idAqY6CmAH-3yO9-FFv4-st0C-V5q9VqQ83PJd"
                      ]
                  },
                  {
                      "_id": "idXiWG3FN2-kxiq-T861-RirB-53BWfn0M2REO",
                      "text": true,
                      "type": "text",
                      "v": "Overflowing with useful features"
                  },
                  {
                      "_id": "idFJkvIpyt-rP9P-WMsu-WpHM-f1t1wiHtYioY",
                      "tag": "h3",
                      "classes": [
                          "Feature-first-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idXiWG3FN2-kxiq-T861-RirB-53BWfn0M2REO"
                      ]
                  },
                  {
                      "_id": "idykOXNDG8-oAGw-8x8n-tCqP-x4d04dE7XvKg",
                      "text": true,
                      "type": "text",
                      "v": "Powerful, self-serve product and growth analytics to help you convert,          engage, and retain more users. Trusted by over 4,000 startups."
                  },
                  {
                      "_id": "idYuG33jxZ-Sqg7-IFzd-wDjM-YAv6p0xko5ky",
                      "tag": "p",
                      "classes": [
                          "Feature-first-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idykOXNDG8-oAGw-8x8n-tCqP-x4d04dE7XvKg"
                      ]
                  },
                  {
                      "_id": "idzaU21T9e-PaBn-NUwC-cH9P-LFBLgdWwG1NB",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id4nzDqMql-Ixg7-cTpV-nw6G-POjvwgGgBHnW",
                          "idFJkvIpyt-rP9P-WMsu-WpHM-f1t1wiHtYioY",
                          "idYuG33jxZ-Sqg7-IFzd-wDjM-YAv6p0xko5ky"
                      ]
                  },
                  {
                      "_id": "id6HMU2sDi-OoGH-nAYE-RrtM-WMrNcg5iJXJY",
                      "tag": "img",
                      "classes": [
                          "Feature-first-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410195690-Featured%20icon%20%285%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idK5pcbOLv-GsY0-jjwy-Uvhx-X3MBG55QS7rP",
                      "text": true,
                      "type": "text",
                      "v": "Share team inboxes"
                  },
                  {
                      "_id": "ideFpLXpiJ-3yTe-tqUl-TUHm-ulvPxQqPGkj7",
                      "tag": "h5",
                      "classes": [
                          "Feature-first-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idK5pcbOLv-GsY0-jjwy-Uvhx-X3MBG55QS7rP"
                      ]
                  },
                  {
                      "_id": "idV9RUkVic-YHxZ-RGKD-dx8t-Zg4bfWdLmdc1",
                      "text": true,
                      "type": "text",
                      "v": "Whether you have a team of 2 or 200, our shared team inboxes keep              everyone on the same page and in the loop."
                  },
                  {
                      "_id": "idPPZNimNC-B9ge-G2Qw-paV0-4SSJb1n5z95r",
                      "tag": "p",
                      "classes": [
                          "Feature-first-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idV9RUkVic-YHxZ-RGKD-dx8t-Zg4bfWdLmdc1"
                      ]
                  },
                  {
                      "_id": "idoARIhJw4-BpcP-sgz4-QWX1-WPPeUhmXqpxO",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6HMU2sDi-OoGH-nAYE-RrtM-WMrNcg5iJXJY",
                          "ideFpLXpiJ-3yTe-tqUl-TUHm-ulvPxQqPGkj7",
                          "idPPZNimNC-B9ge-G2Qw-paV0-4SSJb1n5z95r"
                      ]
                  },
                  {
                      "_id": "idBLKwL6Rn-nQi7-NRyN-qV3K-YmleFI2YDjX2",
                      "tag": "img",
                      "classes": [
                          "Feature-first-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410195690-Featured%20icon%20%285%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idlLbKyycF-agbt-5OBq-LNlM-5nBsKhlrK5Gq",
                      "text": true,
                      "type": "text",
                      "v": "Deliver instant answers"
                  },
                  {
                      "_id": "idf430uqPN-3X0b-2U47-5Bta-g4JaKZSWgg8F",
                      "tag": "h5",
                      "classes": [
                          "Feature-first-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idlLbKyycF-agbt-5OBq-LNlM-5nBsKhlrK5Gq"
                      ]
                  },
                  {
                      "_id": "iddWaaXNil-PQD8-Pa2E-3E9m-G1Qz2JfqWXWb",
                      "text": true,
                      "type": "text",
                      "v": "An all-in-one customer service platform that helps you balance              everything your customers need to be happy."
                  },
                  {
                      "_id": "idPWmxnmvl-bRDm-lKSy-5F55-RLBsL4iRFRK2",
                      "tag": "p",
                      "classes": [
                          "Feature-first-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "iddWaaXNil-PQD8-Pa2E-3E9m-G1Qz2JfqWXWb"
                      ]
                  },
                  {
                      "_id": "idC4DXE9LK-Zz2X-g5of-6diN-Lwf3oqClX5Ix",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idBLKwL6Rn-nQi7-NRyN-qV3K-YmleFI2YDjX2",
                          "idf430uqPN-3X0b-2U47-5Bta-g4JaKZSWgg8F",
                          "idPWmxnmvl-bRDm-lKSy-5F55-RLBsL4iRFRK2"
                      ]
                  },
                  {
                      "_id": "idtEjQ7gRF-cskW-O5fc-9i5f-XZR5vuLD5jPL",
                      "tag": "img",
                      "classes": [
                          "Feature-first-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410195690-Featured%20icon%20%285%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "iduQ5mE4Jf-nOfr-7FY0-npY7-k4e7PKL8VC7s",
                      "text": true,
                      "type": "text",
                      "v": "Manage your team with reports"
                  },
                  {
                      "_id": "idwRT18S66-6bYU-fegt-WXDR-nXSx5PraGGzV",
                      "tag": "h5",
                      "classes": [
                          "Feature-first-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "iduQ5mE4Jf-nOfr-7FY0-npY7-k4e7PKL8VC7s"
                      ]
                  },
                  {
                      "_id": "idMW2elA8s-86Pn-hR9d-y6nS-rbRgxXpEOoEE",
                      "text": true,
                      "type": "text",
                      "v": "Measure what matters with Untitled's easy-to-use reports. You can              filter, export, and drilldown on the data in a couple clicks."
                  },
                  {
                      "_id": "id383zGKAh-DMIp-r2cM-4sX4-43Ej0rA1saOg",
                      "tag": "p",
                      "classes": [
                          "Feature-first-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idMW2elA8s-86Pn-hR9d-y6nS-rbRgxXpEOoEE"
                      ]
                  },
                  {
                      "_id": "idj2XtFQrp-i3w7-Ywsz-3EtB-DiuLFtGgdo0D",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idtEjQ7gRF-cskW-O5fc-9i5f-XZR5vuLD5jPL",
                          "idwRT18S66-6bYU-fegt-WXDR-nXSx5PraGGzV",
                          "id383zGKAh-DMIp-r2cM-4sX4-43Ej0rA1saOg"
                      ]
                  },
                  {
                      "_id": "idBleLmLLa-Yaxe-aRQV-74SH-RZCsVdNFuL4a",
                      "tag": "img",
                      "classes": [
                          "Feature-first-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410195690-Featured%20icon%20%285%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idYklJ3SlM-JKNs-MsIN-orGa-ZOBRKgm6gMGv",
                      "text": true,
                      "type": "text",
                      "v": "Connect with customers"
                  },
                  {
                      "_id": "idaTqGAlUh-qsdB-XN3G-aCd2-ugnfXMxfcd7X",
                      "tag": "h5",
                      "classes": [
                          "Feature-first-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idYklJ3SlM-JKNs-MsIN-orGa-ZOBRKgm6gMGv"
                      ]
                  },
                  {
                      "_id": "idFvbiaBHQ-xeQM-EGmm-jfrA-UvHg3z3GCAhz",
                      "text": true,
                      "type": "text",
                      "v": "Solve a problem or close a sale in real-time with chat. If no one              is available, customers are seamlessly routed to email without              confusion."
                  },
                  {
                      "_id": "idoeOUToI6-3wzP-1O1q-hves-6Ks5Fbwni2Xy",
                      "tag": "p",
                      "classes": [
                          "Feature-first-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idFvbiaBHQ-xeQM-EGmm-jfrA-UvHg3z3GCAhz"
                      ]
                  },
                  {
                      "_id": "id0B8Tuboq-lPuc-C7X2-hcoj-U2eqFfuI05Kh",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idBleLmLLa-Yaxe-aRQV-74SH-RZCsVdNFuL4a",
                          "idaTqGAlUh-qsdB-XN3G-aCd2-ugnfXMxfcd7X",
                          "idoeOUToI6-3wzP-1O1q-hves-6Ks5Fbwni2Xy"
                      ]
                  },
                  {
                      "_id": "idRNXksH3s-QPly-brnR-8k9y-YWXGNjeNF7Se",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idoARIhJw4-BpcP-sgz4-QWX1-WPPeUhmXqpxO",
                          "idC4DXE9LK-Zz2X-g5of-6diN-Lwf3oqClX5Ix",
                          "idj2XtFQrp-i3w7-Ywsz-3EtB-DiuLFtGgdo0D",
                          "id0B8Tuboq-lPuc-C7X2-hcoj-U2eqFfuI05Kh"
                      ]
                  },
                  {
                      "_id": "idlB5b4b55-eusT-NsR3-XqcL-vEuoG2lGmQ9w",
                      "tag": "img",
                      "classes": [
                          "Feature-first-section-second-img"
                      ],
                      "data": {
                          "src": "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idGUwCipE2-eUXR-ZIEf-rb1c-TMF4J0B8o7hM",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idlB5b4b55-eusT-NsR3-XqcL-vEuoG2lGmQ9w"
                      ]
                  },
                  {
                      "_id": "idlbShIhhl-cuFs-6jmL-NKpu-goPl4SdrqgTd",
                      "tag": "div",
                      "classes": [
                          "Feature-first-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idRNXksH3s-QPly-brnR-8k9y-YWXGNjeNF7Se",
                          "idGUwCipE2-eUXR-ZIEf-rb1c-TMF4J0B8o7hM"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "970db8cb-c31e-45df-9e9e-f10e7a738058",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first",
                          "styleLess": "display: flex; padding: 60px 20px; flex-direction: column; gap: 34.756px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "8f4e658b-70fe-4685-b4fa-3290b21d155f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px; text-decoration: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c38efabd-f321-4d46-9ac1-a9728622196e",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 20px; font-style: normal; margin: 12px 0px; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f3e1463f-cdc3-41aa-a658-4005e2a2064a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "312ecef3-f39e-42da-8678-ece4b16b05fb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: center; gap: 34.756px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e605ef4a-9bce-46af-851a-b8eb3a474ab9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second-container",
                          "styleLess": "display: grid; grid-template-columns: auto auto; gap: 20px; flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f0bcaa29-4a79-4c4a-a60c-803c5b86748f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 14px; margin: 1px 0px; font-style: normal; font-weight: 600; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "61abfa41-f4df-43e7-a125-8f172fd45be4",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 400; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "40f10a13-d30c-44bc-8537-97b1ae7cdfeb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second-img-container",
                          "styleLess": "flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ea49a8d0-5a58-4704-8bce-3148f6d29c17",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-first-section-second-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover; max-height: 600px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d2f2221a-643c-4c58-9a0f-a21723f0b57c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Feature-first-section-second { flex-direction: row; align-items: center; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4ffefbd1-2c0f-4364-ad4e-eda8f81854af",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Feature-first-section-first-a { font-size: 14.222px; }  .Feature-first-section-first-h3 { font-size: 32px; line-height: 39.111px; letter-spacing: -0.64px; }  .Feature-first-section-first-p { font-size: 17.778px; line-height: 26.667px; }  .Feature-first-section-second-h5 { font-size: 17.778px; line-height: 26.667px; }  .Feature-first-section-second-p { font-size: 14.222px; line-height: 21.333px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
            {
              id: "FT-002",
              label: "Features without Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715743290066-Features%20section.png",
              node: [
                  {
                      "_id": "idhcplkH7x-789Y-qAXR-hg26-ENMfcLDl7zqA",
                      "tag": "div",
                      "classes": [
                          "Feature-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idj9UqmnL4-L7X0-XN1E-LGms-J7I4akwCWIcO",
                          "idaPwtfcpu-gb0h-V3VB-oySj-q4aJ0R9dIMTh"
                      ]
                  },
                  {
                      "_id": "idwIy9aFoB-rmJy-i1Dg-bqHs-dgEH0h4HkyHM",
                      "text": true,
                      "type": "text",
                      "v": "Integrations"
                  },
                  {
                      "_id": "id37oHXAPn-FiIh-XGVv-C58f-8l5q5lWE4OWv",
                      "tag": "span",
                      "classes": [
                          "Feature-second-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idwIy9aFoB-rmJy-i1Dg-bqHs-dgEH0h4HkyHM"
                      ]
                  },
                  {
                      "_id": "idWa1lIMbD-vD4d-7s6v-XjsS-Ul9R03l5TmAL",
                      "text": true,
                      "type": "text",
                      "v": "Get more value from your tools"
                  },
                  {
                      "_id": "idMv9xCqcT-AmGL-Yl5z-ZR06-BCgEYl3JK5sd",
                      "tag": "h3",
                      "classes": [
                          "Feature-second-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idWa1lIMbD-vD4d-7s6v-XjsS-Ul9R03l5TmAL"
                      ]
                  },
                  {
                      "_id": "idztvNb4gr-5oBI-A3tg-ghR2-ADoLMiUcdwqM",
                      "text": true,
                      "type": "text",
                      "v": "Connect your tools, connect your teams. With over 100 apps already          available in our directory, your team's favourite tools are just a          click away."
                  },
                  {
                      "_id": "idlZ4ICowd-ZtkT-9UOb-kDb7-8gsE2VMH5yBs",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idztvNb4gr-5oBI-A3tg-ghR2-ADoLMiUcdwqM"
                      ]
                  },
                  {
                      "_id": "idj9UqmnL4-L7X0-XN1E-LGms-J7I4akwCWIcO",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id37oHXAPn-FiIh-XGVv-C58f-8l5q5lWE4OWv",
                          "idMv9xCqcT-AmGL-Yl5z-ZR06-BCgEYl3JK5sd",
                          "idlZ4ICowd-ZtkT-9UOb-kDb7-8gsE2VMH5yBs"
                      ]
                  },
                  {
                      "_id": "idm9jsmJoi-xrxs-nVPR-vXwT-lyybBIlTvUNE",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410340765-notion.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idFRqRp5bl-GBYm-SX8f-aikI-NCYjfckMRb1T",
                      "text": true,
                      "type": "text",
                      "v": "Notion integration"
                  },
                  {
                      "_id": "idFRdDKNP4-J3mI-SMw9-IH6J-I6oIBtfb1x1G",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idFRqRp5bl-GBYm-SX8f-aikI-NCYjfckMRb1T"
                      ]
                  },
                  {
                      "_id": "idVVE7mbG3-rUz4-KNG0-SJjB-8kY6LGZO5qFN",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Notion, right              in the app."
                  },
                  {
                      "_id": "id0S5klOxu-NFmu-facP-STeh-qVQVaTSHLmD9",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idVVE7mbG3-rUz4-KNG0-SJjB-8kY6LGZO5qFN"
                      ]
                  },
                  {
                      "_id": "idFNNph2vg-hJ8V-UjLe-4XVr-Irp3Ap2F9VP2",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idFRdDKNP4-J3mI-SMw9-IH6J-I6oIBtfb1x1G",
                          "id0S5klOxu-NFmu-facP-STeh-qVQVaTSHLmD9"
                      ]
                  },
                  {
                      "_id": "id2MwRbgG0-TMiK-l047-1hiV-Tu56EtoActq1",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "idZZf9EPmH-T6RZ-BqEl-UkzZ-0PJyC7XiwwCz",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id2MwRbgG0-TMiK-l047-1hiV-Tu56EtoActq1"
                      ]
                  },
                  {
                      "_id": "idxqLmb7AB-K56a-wCaN-UALu-mwc25wUzWS5g",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idS83VPXDw-aycP-uhB1-bN6T-7qRdqA5gHR1V",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idZZf9EPmH-T6RZ-BqEl-UkzZ-0PJyC7XiwwCz",
                          "idxqLmb7AB-K56a-wCaN-UALu-mwc25wUzWS5g"
                      ]
                  },
                  {
                      "_id": "idwOSdVt5T-VMhl-SSLj-LDCI-VNtUCvlp7ie0",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idm9jsmJoi-xrxs-nVPR-vXwT-lyybBIlTvUNE",
                          "idFNNph2vg-hJ8V-UjLe-4XVr-Irp3Ap2F9VP2",
                          "idS83VPXDw-aycP-uhB1-bN6T-7qRdqA5gHR1V"
                      ]
                  },
                  {
                      "_id": "idUf81XkLy-kkKn-jhBl-F11i-xURx8oBk70cM",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410464117-slack.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idjyPnuoj5-RprO-YDPw-tVWx-x9lThKxzIQyU",
                      "text": true,
                      "type": "text",
                      "v": "Slack integration"
                  },
                  {
                      "_id": "iduvV3hKbT-K8rY-gZMI-uu5Y-qGV3RglTrEQB",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idjyPnuoj5-RprO-YDPw-tVWx-x9lThKxzIQyU"
                      ]
                  },
                  {
                      "_id": "id8BLfZYBS-nNQx-sjqx-czgn-kvjWOF7TFzZo",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Slack, right              in the app."
                  },
                  {
                      "_id": "id8FsAC4Zv-nIxj-sY8A-izs1-ziUZOUHeHDCp",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id8BLfZYBS-nNQx-sjqx-czgn-kvjWOF7TFzZo"
                      ]
                  },
                  {
                      "_id": "idE9sfYWVC-11EC-QKKK-43nb-6xwhIJqeUdvj",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iduvV3hKbT-K8rY-gZMI-uu5Y-qGV3RglTrEQB",
                          "id8FsAC4Zv-nIxj-sY8A-izs1-ziUZOUHeHDCp"
                      ]
                  },
                  {
                      "_id": "idLEek4Mtw-DNXD-fukL-H2ak-Zmc6d0bUAX3B",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "idzWh7ulat-NDna-3S93-z4Jn-lCn2fakcDBMx",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idLEek4Mtw-DNXD-fukL-H2ak-Zmc6d0bUAX3B"
                      ]
                  },
                  {
                      "_id": "idu93G0xjC-5ZAf-JjM2-VLz0-yvibbTvw54m7",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idjZnTJmZz-JLuR-jND5-wENB-7XJr93hyg21L",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idzWh7ulat-NDna-3S93-z4Jn-lCn2fakcDBMx",
                          "idu93G0xjC-5ZAf-JjM2-VLz0-yvibbTvw54m7"
                      ]
                  },
                  {
                      "_id": "id1CB8c83D-bVkf-NoQo-NheE-7nxDVQnMpnHI",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idUf81XkLy-kkKn-jhBl-F11i-xURx8oBk70cM",
                          "idE9sfYWVC-11EC-QKKK-43nb-6xwhIJqeUdvj",
                          "idjZnTJmZz-JLuR-jND5-wENB-7XJr93hyg21L"
                      ]
                  },
                  {
                      "_id": "idmdlWgFNm-DmOk-XQNk-xELk-R2hKQdXtXw0j",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410505991-google_drive.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idHcBDL2BZ-yek6-04Ca-AS28-6Nvr85cD1mZ8",
                      "text": true,
                      "type": "text",
                      "v": "Google Drive integration"
                  },
                  {
                      "_id": "idPmWyeyif-SE3U-xSoE-UmKH-dl7D6YmSRicu",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idHcBDL2BZ-yek6-04Ca-AS28-6Nvr85cD1mZ8"
                      ]
                  },
                  {
                      "_id": "idvlEpktAg-7B1i-D2NQ-4ML3-KU5ZH9bhbTgD",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Google Drive,              right in the app."
                  },
                  {
                      "_id": "idcRfNrRzI-a0a9-iAaD-PVYr-LS9kEgGxYC6R",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idvlEpktAg-7B1i-D2NQ-4ML3-KU5ZH9bhbTgD"
                      ]
                  },
                  {
                      "_id": "idaAsFvvNc-3hN0-eP1M-Pa78-6dFuON3SlCPn",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idPmWyeyif-SE3U-xSoE-UmKH-dl7D6YmSRicu",
                          "idcRfNrRzI-a0a9-iAaD-PVYr-LS9kEgGxYC6R"
                      ]
                  },
                  {
                      "_id": "idfn5vdqGN-oGt3-TlQw-IPpV-yr2Wnfm5reB3",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "idiIgzQilS-wN7L-D4A7-DRV5-OsomSRFrplAp",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idfn5vdqGN-oGt3-TlQw-IPpV-yr2Wnfm5reB3"
                      ]
                  },
                  {
                      "_id": "idpQDDyhaI-76KW-ymyl-cwvt-NLNQfCnRPWee",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idgWl33fuj-9Yth-HZzR-JUs2-zUt7iOrr3Mkj",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idiIgzQilS-wN7L-D4A7-DRV5-OsomSRFrplAp",
                          "idpQDDyhaI-76KW-ymyl-cwvt-NLNQfCnRPWee"
                      ]
                  },
                  {
                      "_id": "id7QYQenBW-nyDu-DBod-FwsQ-eOr67393lKb9",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idmdlWgFNm-DmOk-XQNk-xELk-R2hKQdXtXw0j",
                          "idaAsFvvNc-3hN0-eP1M-Pa78-6dFuON3SlCPn",
                          "idgWl33fuj-9Yth-HZzR-JUs2-zUt7iOrr3Mkj"
                      ]
                  },
                  {
                      "_id": "idoZDExZ9r-Ad14-F5ol-5Oq1-sZLtNV64VX9H",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410541532-intercom.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idFzFTxo7p-qFxh-PPyE-ZSCQ-2F3H23nATLfV",
                      "text": true,
                      "type": "text",
                      "v": "Intercom integration"
                  },
                  {
                      "_id": "idOVOnmkLO-HzyJ-cnIE-DBAt-E40wOtVU15if",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idFzFTxo7p-qFxh-PPyE-ZSCQ-2F3H23nATLfV"
                      ]
                  },
                  {
                      "_id": "idi4exLqns-r11g-2Y3M-BT5O-oGB3K269IyGu",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Intercom,              right in the app."
                  },
                  {
                      "_id": "idXJUiCku1-Ng2y-WlzA-TSiM-IGGEwuX3YOJ6",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idi4exLqns-r11g-2Y3M-BT5O-oGB3K269IyGu"
                      ]
                  },
                  {
                      "_id": "idbF4l0ain-Uv4P-ysO2-XoGc-6YyR1oGyJsDQ",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idOVOnmkLO-HzyJ-cnIE-DBAt-E40wOtVU15if",
                          "idXJUiCku1-Ng2y-WlzA-TSiM-IGGEwuX3YOJ6"
                      ]
                  },
                  {
                      "_id": "idMuZ6Flrl-vA8V-PcoQ-kO6C-5dXqzZkwLZPM",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "id4pKaHVyq-TIc0-OeYD-PtNY-FaCg0z6iepua",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idMuZ6Flrl-vA8V-PcoQ-kO6C-5dXqzZkwLZPM"
                      ]
                  },
                  {
                      "_id": "idGWXvsatS-rxOg-CnWh-EkDF-0U8yJRzqWoeF",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id5oihUl6e-umaK-5oF5-G0sO-tTWZHQKPwX0p",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id4pKaHVyq-TIc0-OeYD-PtNY-FaCg0z6iepua",
                          "idGWXvsatS-rxOg-CnWh-EkDF-0U8yJRzqWoeF"
                      ]
                  },
                  {
                      "_id": "idkLPAx9zv-Dw9H-tnsj-5dkW-Xja7Cef7KURn",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idoZDExZ9r-Ad14-F5ol-5Oq1-sZLtNV64VX9H",
                          "idbF4l0ain-Uv4P-ysO2-XoGc-6YyR1oGyJsDQ",
                          "id5oihUl6e-umaK-5oF5-G0sO-tTWZHQKPwX0p"
                      ]
                  },
                  {
                      "_id": "id3bneSBQi-563f-MHff-3NjV-Lna4Q6uj9IZS",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410574118-jira.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idzZSB5jUd-ASmR-L83a-xNwK-0UUkXS8HSuJZ",
                      "text": true,
                      "type": "text",
                      "v": "Jira integration"
                  },
                  {
                      "_id": "idkDFvZTA1-gMtQ-6POm-RcuD-Gt5SCsbO87ul",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idzZSB5jUd-ASmR-L83a-xNwK-0UUkXS8HSuJZ"
                      ]
                  },
                  {
                      "_id": "id0jAfiCNH-l144-Ztq2-lCjs-v7woS6VIEEmx",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Jira, right              in the app."
                  },
                  {
                      "_id": "idGI3Upql2-ulOB-nhml-kg2a-z9HsY2pDRe2C",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id0jAfiCNH-l144-Ztq2-lCjs-v7woS6VIEEmx"
                      ]
                  },
                  {
                      "_id": "idBi7D1zcy-cm5v-WQgP-KSsr-NjriaAxXQP7E",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idkDFvZTA1-gMtQ-6POm-RcuD-Gt5SCsbO87ul",
                          "idGI3Upql2-ulOB-nhml-kg2a-z9HsY2pDRe2C"
                      ]
                  },
                  {
                      "_id": "idjhCkz8F5-N5ug-T1f4-ACqh-Y0y1xEjZtIfd",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "idCTyPW4wv-HafT-XdPp-6bbD-GdFvmiCbbdBh",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idjhCkz8F5-N5ug-T1f4-ACqh-Y0y1xEjZtIfd"
                      ]
                  },
                  {
                      "_id": "id9v36n9pJ-OB1C-r9Qz-TX54-ca4nh9tC6qr5",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id8z7pBhBM-78Vt-3NjU-etA5-kCt7Ta4OFg8I",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idCTyPW4wv-HafT-XdPp-6bbD-GdFvmiCbbdBh",
                          "id9v36n9pJ-OB1C-r9Qz-TX54-ca4nh9tC6qr5"
                      ]
                  },
                  {
                      "_id": "id2yAJTscI-rLwN-TEx9-vpTG-Xp99itEuH5YD",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id3bneSBQi-563f-MHff-3NjV-Lna4Q6uj9IZS",
                          "idBi7D1zcy-cm5v-WQgP-KSsr-NjriaAxXQP7E",
                          "id8z7pBhBM-78Vt-3NjU-etA5-kCt7Ta4OFg8I"
                      ]
                  },
                  {
                      "_id": "idudcbmGeF-dpH8-q0BE-MUgk-KDkQ3XoBrqGD",
                      "tag": "img",
                      "classes": [
                          "Feature-second-section-second-icons"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410616900-dropbox.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idkkNnp4zg-MgXt-ajid-U1bR-4AREOn9sb2zK",
                      "text": true,
                      "type": "text",
                      "v": "Dropbox integration"
                  },
                  {
                      "_id": "id7ht9kBak-4s2e-GxMg-LukU-W5L2vcNw1JQs",
                      "tag": "h5",
                      "classes": [
                          "Feature-second-section-second-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idkkNnp4zg-MgXt-ajid-U1bR-4AREOn9sb2zK"
                      ]
                  },
                  {
                      "_id": "idQJUqgsL2-Tn6H-D2OG-ZBhX-A13rFu2kVy7S",
                      "text": true,
                      "type": "text",
                      "v": "Work faster and smarter by integrating directly with Dropbox,              right in the app."
                  },
                  {
                      "_id": "idlzjIzyXh-g4q7-nlo5-3vvF-7S729ZkXq3eQ",
                      "tag": "p",
                      "classes": [
                          "Feature-second-section-second-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idQJUqgsL2-Tn6H-D2OG-ZBhX-A13rFu2kVy7S"
                      ]
                  },
                  {
                      "_id": "idiDrguqnj-nx3c-caEj-Cx7J-CJ1EqOVH5XJf",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id7ht9kBak-4s2e-GxMg-LukU-W5L2vcNw1JQs",
                          "idlzjIzyXh-g4q7-nlo5-3vvF-7S729ZkXq3eQ"
                      ]
                  },
                  {
                      "_id": "idnblG7V2J-rp8h-1jaP-9a9a-gsPBAKiN0NMn",
                      "text": true,
                      "type": "text",
                      "v": "View integration"
                  },
                  {
                      "_id": "idaamKujB0-eahH-gGoQ-9UUP-UbMF6jWAdb9Y",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idnblG7V2J-rp8h-1jaP-9a9a-gsPBAKiN0NMn"
                      ]
                  },
                  {
                      "_id": "idj5K3um47-YG5N-Nlai-FNf2-jjz1QSh6QlL7",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410410144-arrow-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idAQesUy0y-I5zf-Waak-cCyZ-qCf1nKgcd4fZ",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-btn"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idaamKujB0-eahH-gGoQ-9UUP-UbMF6jWAdb9Y",
                          "idj5K3um47-YG5N-Nlai-FNf2-jjz1QSh6QlL7"
                      ]
                  },
                  {
                      "_id": "idx53p2ryR-akNn-eu68-pVIY-ztvporksNmbr",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second-features"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idudcbmGeF-dpH8-q0BE-MUgk-KDkQ3XoBrqGD",
                          "idiDrguqnj-nx3c-caEj-Cx7J-CJ1EqOVH5XJf",
                          "idAQesUy0y-I5zf-Waak-cCyZ-qCf1nKgcd4fZ"
                      ]
                  },
                  {
                      "_id": "idaPwtfcpu-gb0h-V3VB-oySj-q4aJ0R9dIMTh",
                      "tag": "div",
                      "classes": [
                          "Feature-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idwOSdVt5T-VMhl-SSLj-LDCI-VNtUCvlp7ie0",
                          "id1CB8c83D-bVkf-NoQo-NheE-7nxDVQnMpnHI",
                          "id7QYQenBW-nyDu-DBod-FwsQ-eOr67393lKb9",
                          "idkLPAx9zv-Dw9H-tnsj-5dkW-Xja7Cef7KURn",
                          "id2yAJTscI-rLwN-TEx9-vpTG-Xp99itEuH5YD",
                          "idx53p2ryR-akNn-eu68-pVIY-ztvporksNmbr"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "61145fc6-b045-4944-a4e9-19cd61188790",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second",
                          "styleLess": "display: flex; padding: 60px 20px; flex-direction: column; gap: 34.756px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b64d3401-5d94-4f43-bf63-e58d2dd7f268",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-first",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 0.667px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ff00e14e-f867-4309-aad8-0c5a4d8358d2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-first-span",
                          "styleLess": "padding: 3.556px 10.667px; border-radius: 14.222px; background: var(--Primary-50, #E0F6F6); mix-blend-mode: multiply; color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px; text-decoration: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7578d0c6-acde-4538-8bcf-675296e1ddae",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 20px; margin: 12px 0px; text-align: center; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a467b4f0-3fbc-4531-8761-fc494e6acc8a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-first-p",
                          "styleLess": "text-align: center; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b33e3792-fdd8-4ac5-9c4e-df24f0e947cd",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second",
                          "styleLess": "display: grid; grid-template-columns: auto auto; gap: 30px 20px; flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "19ecf83a-adfc-422d-9ab9-7b0613330704",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-features",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 14.222px; flex: 1 0 0px; justify-content: space-between;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a540b8a0-1f37-41d7-a140-7b318b04f42c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 14px; text-align: center; margin: 4px 0px; font-style: normal; font-weight: 600; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "959109e5-e8a5-410c-8a00-46034e35f319",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-p",
                          "styleLess": "width: 80%; text-align: center; color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; margin: auto; font-style: normal; font-weight: 400; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "16a2e5fe-3061-4065-ad73-1a4b0c5bdffb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-btn",
                          "styleLess": "display: flex; justify-content: center; align-items: center; gap: 7.111px; color: var(--Primary-700, #158B8D); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 21.333px; cursor: pointer;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7992b866-2760-4275-9937-36bd4bab787b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-img-container",
                          "styleLess": "flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2e7fbb3e-86fc-4117-bcc6-d32dd89bd8d0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Feature-second-section-second-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "941f5a55-ebd1-47b0-a0a8-27aa5df15efe",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Feature-second-section-second { flex-direction: row; align-items: center; }  .Feature-second-section-first-p { width: 70%; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "caa10d07-489a-4a1d-a2c5-9e649ca49a43",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Feature-second-section-first-span { font-size: 14.222px; }  .Feature-second-section-second { grid-template-columns: auto auto auto; }  .Feature-second-section-first-h3 { font-size: 32px; line-height: 39.111px; letter-spacing: -0.64px; }  .Feature-second-section-first-p { font-size: 17.778px; line-height: 26.667px; }  .Feature-second-section-second-h5 { font-size: 17.778px; line-height: 26.667px; }  .Feature-second-section-second-p { font-size: 14.222px; line-height: 21.333px; }  .Feature-second-section-second-btn { font-size: 14px; line-height: 21.333px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
          ]
        }
      },
      {
        _id: "00003027636730", tag: "div", type: "Form", label: "Form", icon: "layout-form", media: { img_url: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg" }, data: {
          options: [
            {
              id: "FM-001",
              label: "Form",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751130425-Desktop%20%281%29.png",
              node: [
                  {
                      "_id": "idjHMfXIlH-jeBt-Uzhw-zkzF-1daAB1cIDgYD",
                      "tag": "div",
                      "classes": [
                          "Form-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idVrEGogjN-Vvru-GUqD-v5Qx-sDK5Axq0HaRd",
                          "idqDKQouDk-wrjt-jXCP-tPVC-VT2ErUPLcmMl"
                      ]
                  },
                  {
                      "_id": "idAh2tOcGR-SgD2-YXvE-tVhZ-O6T0zYD4D60S",
                      "text": true,
                      "type": "text",
                      "v": "Contact us"
                  },
                  {
                      "_id": "id0azcRp9l-Qn0B-T6Sn-xWUX-Hvdm6nmlEknx",
                      "tag": "span",
                      "classes": [
                          "Form-first-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idAh2tOcGR-SgD2-YXvE-tVhZ-O6T0zYD4D60S"
                      ]
                  },
                  {
                      "_id": "idgQIwkIpb-w4s4-Y6DP-hIH2-vIJNFspEsujm",
                      "text": true,
                      "type": "text",
                      "v": "Get in touch"
                  },
                  {
                      "_id": "idASNmwSgV-Raec-0ryF-U0cA-xxG4XJfhmW58",
                      "tag": "h3",
                      "classes": [
                          "Form-first-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idgQIwkIpb-w4s4-Y6DP-hIH2-vIJNFspEsujm"
                      ]
                  },
                  {
                      "_id": "idvldedOCA-UQsN-Ovh5-EPoa-k4qKTjHQrqyU",
                      "text": true,
                      "type": "text",
                      "v": "We'd love to hear from you. Please fill out this form."
                  },
                  {
                      "_id": "id01Q506nq-j8YL-Zt58-oVzY-EMDnaQMLmqTl",
                      "tag": "p",
                      "classes": [
                          "Form-first-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idvldedOCA-UQsN-Ovh5-EPoa-k4qKTjHQrqyU"
                      ]
                  },
                  {
                      "_id": "idVrEGogjN-Vvru-GUqD-v5Qx-sDK5Axq0HaRd",
                      "tag": "div",
                      "classes": [
                          "Form-first-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id0azcRp9l-Qn0B-T6Sn-xWUX-Hvdm6nmlEknx",
                          "idASNmwSgV-Raec-0ryF-U0cA-xxG4XJfhmW58",
                          "id01Q506nq-j8YL-Zt58-oVzY-EMDnaQMLmqTl"
                      ]
                  },
                  {
                      "_id": "idUeylHcdn-b7ud-UmFb-rsLj-hPjaT7WasDqZ",
                      "text": true,
                      "type": "text",
                      "v": "First name"
                  },
                  {
                      "_id": "idsMdZMsLg-i0QI-Noco-rPS0-x8F2hexFbSFS",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idUeylHcdn-b7ud-UmFb-rsLj-hPjaT7WasDqZ"
                      ]
                  },
                  {
                      "_id": "id9O02is5K-fBRo-EDqM-vKy1-ZzGSlvA7XPjQ",
                      "tag": "input",
                      "classes": [
                          "small_input__field"
                      ],
                      "data": {
                          "name": "firstName",
                          "placeholder": "First name",
                          "type": "text",
                          "value": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idVBpk1Caf-uFaI-XZYp-diVU-CC49FAMjEDHm",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input-small"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idsMdZMsLg-i0QI-Noco-rPS0-x8F2hexFbSFS",
                          "id9O02is5K-fBRo-EDqM-vKy1-ZzGSlvA7XPjQ"
                      ]
                  },
                  {
                      "_id": "idVvodWBZq-HJ3H-DQNy-AdIY-7jFG6jjeDLPG",
                      "text": true,
                      "type": "text",
                      "v": "Last name"
                  },
                  {
                      "_id": "idjackMKWc-n7Vx-mUHD-cGRo-COJBuffGXrWf",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idVvodWBZq-HJ3H-DQNy-AdIY-7jFG6jjeDLPG"
                      ]
                  },
                  {
                      "_id": "idQ7qjBC61-amHo-keF4-CFsX-O6CMyzZiWorb",
                      "tag": "input",
                      "classes": [
                          "small_input__field"
                      ],
                      "data": {
                          "name": "lastName",
                          "placeholder": "Last name",
                          "type": "text",
                          "value": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idtBi9B2oC-SEgv-jZaX-GhBJ-gVPIxB22KkxD",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input-small"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idjackMKWc-n7Vx-mUHD-cGRo-COJBuffGXrWf",
                          "idQ7qjBC61-amHo-keF4-CFsX-O6CMyzZiWorb"
                      ]
                  },
                  {
                      "_id": "iduVSkrtnH-5tTs-6PsL-JbmQ-9RB3vQvHXPH8",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-names"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idVBpk1Caf-uFaI-XZYp-diVU-CC49FAMjEDHm",
                          "idtBi9B2oC-SEgv-jZaX-GhBJ-gVPIxB22KkxD"
                      ]
                  },
                  {
                      "_id": "id3JIOJqA0-BgKQ-qQ7w-IZxV-lSkjlWYe7oWi",
                      "text": true,
                      "type": "text",
                      "v": "Email address"
                  },
                  {
                      "_id": "idhwpotEyu-kbB4-WFKJ-k6Eu-O4UuBfz9rOQh",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "id3JIOJqA0-BgKQ-qQ7w-IZxV-lSkjlWYe7oWi"
                      ]
                  },
                  {
                      "_id": "idzmjkoP4c-N69w-QE1i-r7w4-SRCxM9YlVonJ",
                      "tag": "input",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "email",
                          "placeholder": "you@company.com",
                          "type": "email"
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idsmuGRZ2M-TP4x-zbQb-1DUP-oys79Jw5QUb8",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idhwpotEyu-kbB4-WFKJ-k6Eu-O4UuBfz9rOQh",
                          "idzmjkoP4c-N69w-QE1i-r7w4-SRCxM9YlVonJ"
                      ]
                  },
                  {
                      "_id": "idx8BtzY3h-xB0q-Y3by-00RO-uklNwCnAQn8f",
                      "text": true,
                      "type": "text",
                      "v": "Phone"
                  },
                  {
                      "_id": "idqrvmSNPB-NyAH-hYQN-tmw1-KKpTL5pdrLMD",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idx8BtzY3h-xB0q-Y3by-00RO-uklNwCnAQn8f"
                      ]
                  },
                  {
                      "_id": "idE2KjdNzJ-xHBl-UBsG-aLvp-k5ORKCKE9qrJ",
                      "tag": "input",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "phone",
                          "placeholder": "+1 (555) 000-0000",
                          "type": "text"
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idpw1Cho6o-Xc21-RcVW-4Y1X-dBHsNlfaN1ok",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idqrvmSNPB-NyAH-hYQN-tmw1-KKpTL5pdrLMD",
                          "idE2KjdNzJ-xHBl-UBsG-aLvp-k5ORKCKE9qrJ"
                      ]
                  },
                  {
                      "_id": "idQga5TmkX-E5hk-rLwH-pUge-JTHukJI3ebT3",
                      "text": true,
                      "type": "text",
                      "v": "Message"
                  },
                  {
                      "_id": "idwzOFyiQq-ht4e-WBn3-JTBz-uaxa6uz57SUO",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idQga5TmkX-E5hk-rLwH-pUge-JTHukJI3ebT3"
                      ]
                  },
                  {
                      "_id": "id85TLF692-TUM3-iEmi-TkrO-zik0EnsVVggC",
                      "tag": "textarea",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "message",
                          "placeholder": "Leave us a message...",
                          "cols": "30",
                          "rows": "5"
                      },
                      "type": "textarea",
                      "children": []
                  },
                  {
                      "_id": "idBanKRTBd-RB0t-8HCC-zkEE-F2kLhkriIUu5",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idwzOFyiQq-ht4e-WBn3-JTBz-uaxa6uz57SUO",
                          "id85TLF692-TUM3-iEmi-TkrO-zik0EnsVVggC"
                      ]
                  },
                  {
                      "_id": "idezfXfsqj-bmBX-i9r4-uq6K-M3TU6yJGDloB",
                      "tag": "input",
                      "classes": [],
                      "data": {
                          "type": "checkbox",
                          "name": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idMsn53afI-9zFu-kitU-2rk4-HcwHevStwKsw",
                      "text": true,
                      "type": "text",
                      "v": "You agree to our friendly"
                  },
                  {
                      "_id": "idajeIqn2c-vSgB-Oygi-S7Dy-ZSPDcwPMAQyl",
                      "tag": "p",
                      "classes": [],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idMsn53afI-9zFu-kitU-2rk4-HcwHevStwKsw"
                      ]
                  },
                  {
                      "_id": "idPwdqiJaj-FYt5-0yFB-Jg0P-BMvCdlXvrbsE",
                      "text": true,
                      "type": "text",
                      "v": "privacy policy."
                  },
                  {
                      "_id": "idYpTfjHA9-uiIF-FiSU-R8xx-AHPoHUc95Bvv",
                      "tag": "a",
                      "classes": [],
                      "data": {
                          "href": ""
                      },
                      "type": "a",
                      "children": [
                          "idPwdqiJaj-FYt5-0yFB-Jg0P-BMvCdlXvrbsE"
                      ]
                  },
                  {
                      "_id": "id53beQA7y-qaRU-MAtN-2nEr-ntIsrg5d37eT",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input-check-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idajeIqn2c-vSgB-Oygi-S7Dy-ZSPDcwPMAQyl",
                          "idYpTfjHA9-uiIF-FiSU-R8xx-AHPoHUc95Bvv"
                      ]
                  },
                  {
                      "_id": "idZ99angYe-KbMv-ijUj-SIoP-7TkSuw5yhML0",
                      "tag": "div",
                      "classes": [
                          "Form-first-form-input-check"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idezfXfsqj-bmBX-i9r4-uq6K-M3TU6yJGDloB",
                          "id53beQA7y-qaRU-MAtN-2nEr-ntIsrg5d37eT"
                      ]
                  },
                  {
                      "_id": "idWS6aLtcJ-GVXP-5nKg-FVV1-CypGKROGHILe",
                      "text": true,
                      "type": "text",
                      "v": "Send message"
                  },
                  {
                      "_id": "idFThL6cx5-J27b-tnqY-FljL-ThXJFcrJVn0J",
                      "tag": "button",
                      "classes": [
                          "Form-first-btn"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idWS6aLtcJ-GVXP-5nKg-FVV1-CypGKROGHILe"
                      ]
                  },
                  {
                      "_id": "idSCmvnwjq-rskv-iIWZ-I0ne-B3iuQqkC9Spn",
                      "tag": "form",
                      "classes": [
                          "Form-first-form"
                      ],
                      "data": {
                          "action": "#"
                      },
                      "type": "form",
                      "children": [
                          "iduVSkrtnH-5tTs-6PsL-JbmQ-9RB3vQvHXPH8",
                          "idsmuGRZ2M-TP4x-zbQb-1DUP-oys79Jw5QUb8",
                          "idpw1Cho6o-Xc21-RcVW-4Y1X-dBHsNlfaN1ok",
                          "idBanKRTBd-RB0t-8HCC-zkEE-F2kLhkriIUu5",
                          "idZ99angYe-KbMv-ijUj-SIoP-7TkSuw5yhML0",
                          "idFThL6cx5-J27b-tnqY-FljL-ThXJFcrJVn0J"
                      ]
                  },
                  {
                      "_id": "idqDKQouDk-wrjt-jXCP-tPVC-VT2ErUPLcmMl",
                      "tag": "div",
                      "classes": [
                          "Form-first-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idSCmvnwjq-rskv-iIWZ-I0ne-B3iuQqkC9Spn"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "7d7a311b-f642-40dc-b929-746490dc1d56",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first",
                          "styleLess": "padding: 50px 30px; display: flex; flex-direction: column; align-items: center;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a217fd15-f2da-433f-86c8-d2c92ac39536",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-section-first",
                          "styleLess": "width: 261px; display: flex; flex-direction: column; align-items: center; gap: 0.667px; padding-bottom: 50px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "204d75b4-e399-4aa1-8ce9-3fbe028e3b19",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-section-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px; text-decoration: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c2553fd1-62f0-4107-bef6-43b8b3f90a6d",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 20px; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "47f3043a-0a42-4c7a-ab97-d0fbda2b2442",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-section-first-p",
                          "styleLess": "text-align: center; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ad311102-1190-4a63-96af-fe31fbcc12fa",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-section-second",
                          "styleLess": "display: flex; justify-content: center;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "660ae27c-19ab-4ab4-bcd6-f7c9058ed2af",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form",
                          "styleLess": "width: 261px; display: flex; flex-direction: column; gap: 13.033px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a1138a8b-a1ff-4e04-ab9a-87fdf38f19fe",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form-names",
                          "styleLess": "display: grid; grid-template-columns: auto auto; gap: 17.378px 17px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2d9b4fce-4fc5-4a53-a18b-ae0dea979285",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form-input-small",
                          "styleLess": "display: flex; width: 88%; flex-direction: column; align-items: flex-start; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "33015d7e-bac8-4a52-9843-afd0e32619cd",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".small_input__field",
                          "styleLess": "outline: none; width: 100%; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.033px; padding: 5.431px 7.603px; border-radius: 4.344px; border: 0.543px solid var(--Gray-300, #D0D5DD); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.543px 1.086px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "06f53529-5c93-4571-8db3-483a7924e505",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".label",
                          "styleLess": "color: var(--Gray-700, #344054); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 500; line-height: 10.861px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "56de52d4-854a-4b1b-b072-d3d9ee6e94fa",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form-input",
                          "styleLess": "display: flex; width: 100%; flex-direction: column; align-items: flex-start; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "eee31401-5641-45db-89c1-850ded121a31",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".input__field",
                          "styleLess": "outline: none; width: calc(100% - 14px); color: var(--Gray-500, #667085); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.033px; padding: 5.431px 7.603px; border-radius: 4.344px; border: 0.543px solid var(--Gray-300, #D0D5DD); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.543px 1.086px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e72afe51-626e-4f96-b99a-04ebd7c89321",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-btn",
                          "styleLess": "color: var(--White, #FFF); font-family: Switzer; font-size: 14px; font-style: normal; font-weight: 600; line-height: 15.526px; padding: 8.872px 15.526px; border-radius: 4.436px; border: 0.554px solid var(--Gray-900, #101828); background: var(--Gray-900, #101828); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.554px 1.109px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a8f92838-1402-4c16-9d00-4e6ce60f2d49",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form-input-check",
                          "styleLess": "display: flex; align-items: center; gap: 6.517px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "30bbb68d-bf0d-45a1-ac45-3f5c6fbfe42a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-first-form-input-check-container",
                          "styleLess": "display: flex; align-items: center; gap: 4px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 400; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "340c0917-f89c-4c77-91b1-0ec2fbc629ea",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Form-first-form { width: 427px; }  .Form-first-form-input-small { width: 93%; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5376ff40-344b-4f91-b15f-ad61c47d1411",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Form-second-section-first-span { font-size: 14.222px; }  .Form-second-section-first-h3 { font-size: 32px; line-height: 39.111px; letter-spacing: -0.64px; }  .Form-second-section-first-p { font-size: 17.778px; line-height: 26.667px; }  .label { font-size: 16px; line-height: 26.667px; }  .small_input__field { font-size: 17px; line-height: 26.667px; }  .input__field { font-size: 17px; line-height: 26.667px; }  .Form-first-form-input-check-container { font-size: 14.222px; }  .Form-first-btn { font-size: 16.337px; line-height: 25.413px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
            {
              id: "FM-002",
              label: "Form with Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751226214-Desktop.png",
              node: [
                  {
                      "_id": "idVeXwDXh5-vvis-l7tV-VYQi-bFqi8mjUMOiK",
                      "tag": "div",
                      "classes": [
                          "Form-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idz8iPpbiW-qaPh-DYeP-YSgP-oHr5XmR4Lhbq",
                          "idabrezyN3-douB-iOf4-dxqf-8uZDKDKsCYgr"
                      ]
                  },
                  {
                      "_id": "idEqsvVgfs-mjf8-gq9X-rR4z-LB6xZlawsSC6",
                      "text": true,
                      "type": "text",
                      "v": "Contact us"
                  },
                  {
                      "_id": "idU4Dc6ek0-AHOI-M64m-yGji-76SinAMH2sNx",
                      "tag": "span",
                      "classes": [
                          "Form-second-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idEqsvVgfs-mjf8-gq9X-rR4z-LB6xZlawsSC6"
                      ]
                  },
                  {
                      "_id": "idtWwieBSu-Np1u-5rea-6kgB-Ztu5rQIYAdgV",
                      "text": true,
                      "type": "text",
                      "v": "Get in touch"
                  },
                  {
                      "_id": "idAXDgq9y3-ORFX-J3HX-6xg8-98LKRcfAVHpp",
                      "tag": "h3",
                      "classes": [
                          "Form-second-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idtWwieBSu-Np1u-5rea-6kgB-Ztu5rQIYAdgV"
                      ]
                  },
                  {
                      "_id": "idEYT78Imb-412m-DZow-3jcd-GH0t5a3w2iVm",
                      "text": true,
                      "type": "text",
                      "v": "We'd love to hear from you. Please fill out this form."
                  },
                  {
                      "_id": "ideaj6TwRO-cq2o-XyEF-2MVx-uEc3WTlAUrAZ",
                      "tag": "p",
                      "classes": [
                          "Form-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idEYT78Imb-412m-DZow-3jcd-GH0t5a3w2iVm"
                      ]
                  },
                  {
                      "_id": "idTCDpIMUe-Ebmg-UlN2-Fwpg-UvEhzdP5xDVb",
                      "tag": "div",
                      "classes": [
                          "Form-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idU4Dc6ek0-AHOI-M64m-yGji-76SinAMH2sNx",
                          "idAXDgq9y3-ORFX-J3HX-6xg8-98LKRcfAVHpp",
                          "ideaj6TwRO-cq2o-XyEF-2MVx-uEc3WTlAUrAZ"
                      ]
                  },
                  {
                      "_id": "idffpIFlGi-Uhsv-jK7A-IlJq-TzJM8NiNmF0D",
                      "text": true,
                      "type": "text",
                      "v": "First name"
                  },
                  {
                      "_id": "idDRgkuvK6-N3W6-sQDH-Y3fg-LdYVEgEn0Cxg",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idffpIFlGi-Uhsv-jK7A-IlJq-TzJM8NiNmF0D"
                      ]
                  },
                  {
                      "_id": "ido3ANoF2k-u6gZ-srSS-Swbk-2zJwILEKdJtX",
                      "tag": "input",
                      "classes": [
                          "small_input__field"
                      ],
                      "data": {
                          "name": "firstName",
                          "placeholder": "First name",
                          "type": "text",
                          "value": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idrojC9hSV-SxlD-6XfW-h4MO-aJTa7WSK3cMq",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input-small"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idDRgkuvK6-N3W6-sQDH-Y3fg-LdYVEgEn0Cxg",
                          "ido3ANoF2k-u6gZ-srSS-Swbk-2zJwILEKdJtX"
                      ]
                  },
                  {
                      "_id": "idD8DTqG35-7eHk-NL6l-LhpC-L4NV9XJLJZdo",
                      "text": true,
                      "type": "text",
                      "v": "Last name"
                  },
                  {
                      "_id": "idkuyJFX0X-tAbP-5lof-In5M-gaW07IKBwNoP",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idD8DTqG35-7eHk-NL6l-LhpC-L4NV9XJLJZdo"
                      ]
                  },
                  {
                      "_id": "idfNNzj4kp-InvL-6QYo-lxcl-gW1a1Met3JOl",
                      "tag": "input",
                      "classes": [
                          "small_input__field"
                      ],
                      "data": {
                          "name": "lastName",
                          "placeholder": "Last name",
                          "type": "text",
                          "value": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idyCMQywl7-rVII-JwQ8-xjHt-hYVIAsl0ZoK2",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input-small"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idkuyJFX0X-tAbP-5lof-In5M-gaW07IKBwNoP",
                          "idfNNzj4kp-InvL-6QYo-lxcl-gW1a1Met3JOl"
                      ]
                  },
                  {
                      "_id": "iduC3E6mVn-sJQD-u6QI-us77-h5z7AR5hMqHL",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-names"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idrojC9hSV-SxlD-6XfW-h4MO-aJTa7WSK3cMq",
                          "idyCMQywl7-rVII-JwQ8-xjHt-hYVIAsl0ZoK2"
                      ]
                  },
                  {
                      "_id": "idKyUq0Vrz-4Z9T-kS8E-8FWr-P5YPQsHhHFE0",
                      "text": true,
                      "type": "text",
                      "v": "Email address"
                  },
                  {
                      "_id": "idUwQSc03g-A2h0-7YH1-pkUB-64se4FFZfoYF",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idKyUq0Vrz-4Z9T-kS8E-8FWr-P5YPQsHhHFE0"
                      ]
                  },
                  {
                      "_id": "idnSUcZ0Rv-CT8n-YrYf-KHvK-kPzR0Y4VcTct",
                      "tag": "input",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "email",
                          "placeholder": "you@company.com",
                          "type": "email"
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idQ4G2uStj-Ya12-7Vn1-zjaN-kAf2jpy2eu7U",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idUwQSc03g-A2h0-7YH1-pkUB-64se4FFZfoYF",
                          "idnSUcZ0Rv-CT8n-YrYf-KHvK-kPzR0Y4VcTct"
                      ]
                  },
                  {
                      "_id": "idZ8CgBQ2L-qCkH-tXVu-FhOO-CltfTH3iUjce",
                      "text": true,
                      "type": "text",
                      "v": "Phone"
                  },
                  {
                      "_id": "idxeL9saWW-WXD1-37Gs-R6nT-wsdom63eHDMo",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idZ8CgBQ2L-qCkH-tXVu-FhOO-CltfTH3iUjce"
                      ]
                  },
                  {
                      "_id": "id03hNb0L4-hvDq-PdkI-JsLa-OqEBelrbnkDw",
                      "tag": "input",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "phone",
                          "placeholder": "+1 (555) 000-0000",
                          "type": "text"
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idSFUVUpJ3-JAcF-LiFt-ZADd-w9ntWfXGcsPT",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idxeL9saWW-WXD1-37Gs-R6nT-wsdom63eHDMo",
                          "id03hNb0L4-hvDq-PdkI-JsLa-OqEBelrbnkDw"
                      ]
                  },
                  {
                      "_id": "idvvBaI2Vu-38Av-CorS-PyxS-YWBIyEzx0WVX",
                      "text": true,
                      "type": "text",
                      "v": "Message"
                  },
                  {
                      "_id": "idmuutLIeX-NTuV-ai7b-MN9w-zSpF9UCMrkXd",
                      "tag": "label",
                      "classes": [
                          "label"
                      ],
                      "data": {
                          "for": ""
                      },
                      "type": "label",
                      "children": [
                          "idvvBaI2Vu-38Av-CorS-PyxS-YWBIyEzx0WVX"
                      ]
                  },
                  {
                      "_id": "idn6N7vWUE-OPy7-YeP0-sj0x-KTu7WxwjQ0gf",
                      "tag": "textarea",
                      "classes": [
                          "input__field"
                      ],
                      "data": {
                          "name": "message",
                          "placeholder": "Leave us a message...",
                          "cols": "30",
                          "rows": "5"
                      },
                      "type": "textarea",
                      "children": []
                  },
                  {
                      "_id": "idP4GAdqvl-Naqj-eHJ5-wgAL-V5IILcUpHFL7",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idmuutLIeX-NTuV-ai7b-MN9w-zSpF9UCMrkXd",
                          "idn6N7vWUE-OPy7-YeP0-sj0x-KTu7WxwjQ0gf"
                      ]
                  },
                  {
                      "_id": "idtmFf7fM4-WRop-cdqP-TlaK-CAouZa3Y7Uss",
                      "tag": "input",
                      "classes": [],
                      "data": {
                          "type": "checkbox",
                          "name": ""
                      },
                      "type": "input",
                      "children": []
                  },
                  {
                      "_id": "idXwRtdCkR-CvZL-nprn-krzI-EXipCqPgV6oy",
                      "text": true,
                      "type": "text",
                      "v": "You agree to our friendly"
                  },
                  {
                      "_id": "idBRciCGPs-CIJz-NTq1-Cmf4-YjSxs4D6iUk4",
                      "tag": "p",
                      "classes": [],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idXwRtdCkR-CvZL-nprn-krzI-EXipCqPgV6oy"
                      ]
                  },
                  {
                      "_id": "idoNZ5piG3-jS3d-eFKu-WQvg-5Ykq01DtPpSi",
                      "text": true,
                      "type": "text",
                      "v": "privacy policy."
                  },
                  {
                      "_id": "idYCrQxo3B-0XfE-s4KI-UHK0-EeBNr7Sywx6o",
                      "tag": "a",
                      "classes": [],
                      "data": {
                          "href": ""
                      },
                      "type": "a",
                      "children": [
                          "idoNZ5piG3-jS3d-eFKu-WQvg-5Ykq01DtPpSi"
                      ]
                  },
                  {
                      "_id": "idJomYkOZj-iIzI-tGCX-Tf1a-jUVmrbHeDwHV",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input-check-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idBRciCGPs-CIJz-NTq1-Cmf4-YjSxs4D6iUk4",
                          "idYCrQxo3B-0XfE-s4KI-UHK0-EeBNr7Sywx6o"
                      ]
                  },
                  {
                      "_id": "idmf24XWAn-kxm3-BCb9-pyC9-JZDxjtNkAPqA",
                      "tag": "div",
                      "classes": [
                          "Form-second-form-input-check"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idtmFf7fM4-WRop-cdqP-TlaK-CAouZa3Y7Uss",
                          "idJomYkOZj-iIzI-tGCX-Tf1a-jUVmrbHeDwHV"
                      ]
                  },
                  {
                      "_id": "idsTodT6O3-FYvl-5M16-bpq4-oIzUnigjGTXQ",
                      "text": true,
                      "type": "text",
                      "v": "Send message"
                  },
                  {
                      "_id": "idB9IxT6HO-hVRn-pdEe-p0Lr-W4Km4EVS39Ez",
                      "tag": "button",
                      "classes": [
                          "Form-second-btn"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idsTodT6O3-FYvl-5M16-bpq4-oIzUnigjGTXQ"
                      ]
                  },
                  {
                      "_id": "idLstZBvag-34pB-0WdX-yHuj-yMGeE1JbbwZ1",
                      "tag": "form",
                      "classes": [
                          "Form-second-form"
                      ],
                      "data": {
                          "action": "#"
                      },
                      "type": "form",
                      "children": [
                          "iduC3E6mVn-sJQD-u6QI-us77-h5z7AR5hMqHL",
                          "idQ4G2uStj-Ya12-7Vn1-zjaN-kAf2jpy2eu7U",
                          "idSFUVUpJ3-JAcF-LiFt-ZADd-w9ntWfXGcsPT",
                          "idP4GAdqvl-Naqj-eHJ5-wgAL-V5IILcUpHFL7",
                          "idmf24XWAn-kxm3-BCb9-pyC9-JZDxjtNkAPqA",
                          "idB9IxT6HO-hVRn-pdEe-p0Lr-W4Km4EVS39Ez"
                      ]
                  },
                  {
                      "_id": "idst4H2oWB-4Gai-xCMv-cZEx-PhYdkSJUKIab",
                      "tag": "div",
                      "classes": [
                          "Form-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idLstZBvag-34pB-0WdX-yHuj-yMGeE1JbbwZ1"
                      ]
                  },
                  {
                      "_id": "idz8iPpbiW-qaPh-DYeP-YSgP-oHr5XmR4Lhbq",
                      "tag": "div",
                      "classes": [
                          "Form-second-divider-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idTCDpIMUe-Ebmg-UlN2-Fwpg-UvEhzdP5xDVb",
                          "idst4H2oWB-4Gai-xCMv-cZEx-PhYdkSJUKIab"
                      ]
                  },
                  {
                      "_id": "idbaT8hdF1-H1hw-GFFH-tKe3-jS9bIAd1w9nL",
                      "tag": "img",
                      "classes": [
                          "Form-second-divider-second-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706407909218-joel-filipe-pyHPJEjUYHY-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idabrezyN3-douB-iOf4-dxqf-8uZDKDKsCYgr",
                      "tag": "div",
                      "classes": [
                          "Form-second-divider-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idbaT8hdF1-H1hw-GFFH-tKe3-jS9bIAd1w9nL"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "5c52f5f1-a090-4381-b48f-a588db8e445c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second",
                          "styleLess": "padding: 50px 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 56.853px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e5c60d7d-f594-469a-b031-897763919342",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-divider-first",
                          "styleLess": "flex: 1 0 0px; width: 270px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d3c29807-5030-4d0b-b624-c28c45b10a53",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-section-first",
                          "styleLess": "display: flex; width: fit-content; margin: 0ch; flex-direction: column; padding-bottom: 20px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ca7ab329-a43b-4561-9c5c-2b02bdc43a69",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-section-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px; text-decoration: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "22319717-7d06-4969-b933-04c39134d1c5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 20px; font-style: normal; margin: 12px 0px; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "63f3b2df-a640-4f17-a37a-de36cdd842e4",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 17px; margin-bottom: 0px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "413af085-1af0-4be9-8193-c674b20f909c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: center;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "57f35f8b-3c8c-45c9-b29a-d5f01e226008",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form",
                          "styleLess": "width: 100%; display: flex; flex-direction: column; gap: 13.033px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6c89f6ec-d546-4fd0-b3fe-c0e527b99dbf",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form-names",
                          "styleLess": "display: grid; grid-template-columns: auto auto; gap: 17.378px 17px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "fd859c04-f7b3-450b-a62c-07d60ab03f96",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form-input-small",
                          "styleLess": "display: flex; width: 88%; flex-direction: column; align-items: flex-start; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5b995f04-1c8b-49a1-831f-f1fe4678e39f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".small_input__field",
                          "styleLess": "outline: none; width: 100%; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.033px; padding: 5.431px 7.603px; border-radius: 4.344px; border: 0.543px solid var(--Gray-300, #D0D5DD); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.543px 1.086px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "28565a42-4c82-4a22-99e9-fc3846e4b00d",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".label",
                          "styleLess": "color: var(--Gray-700, #344054); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 500; line-height: 10.861px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "309efab1-ae02-4347-a839-2a86d62fc4dd",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form-input",
                          "styleLess": "display: flex; width: 100%; flex-direction: column; align-items: flex-start; gap: 4px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f18a6055-79ab-482c-ac6b-6c474e50dfd2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".input__field",
                          "styleLess": "outline: none; width: calc(100% - 14px); color: var(--Gray-500, #667085); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.033px; padding: 5.431px 7.603px; border-radius: 4.344px; border: 0.543px solid var(--Gray-300, #D0D5DD); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.543px 1.086px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "57fa11fb-8389-4267-8808-58c240a4a235",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-btn",
                          "styleLess": "color: var(--White, #FFF); font-family: Switzer; font-size: 14px; font-style: normal; font-weight: 600; line-height: 15.526px; padding: 8.872px 15.526px; border-radius: 4.436px; border: 0.554px solid var(--Gray-900, #101828); background: var(--Gray-900, #101828); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.554px 1.109px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4fda39c2-58f5-4194-9442-3d7a266f8bf3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form-input-check",
                          "styleLess": "display: flex; align-items: center; gap: 6.517px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5f97a985-dca6-485b-ad7c-cdd5572493b1",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-form-input-check-container",
                          "styleLess": "display: flex; align-items: center; gap: 4px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 400; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "188143ba-b3aa-4300-8edd-78032a7f97dd",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-divider-second",
                          "styleLess": "flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "61d87206-ff46-49f9-919a-1932f50741dc",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Form-second-divider-second-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: fill; min-width: 90%; max-height: 700px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "384f30cc-64ca-465b-86b3-e96216e6a2d8",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 470px)",
                          "styleLess": "  .Form-second { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "de1ad41b-0a35-43e1-907f-26f442809271",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Form-second-divider-first { flex: 1 0 0px; }  .Form-second-form-input-small { width: 93%; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "1c31f22f-8d43-4c6d-9f8a-717ab7d6decc",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Form-second-section-first-span { font-size: 14.222px; }  .Form-second-section-first-h3 { font-size: 32px; line-height: 39.111px; letter-spacing: -0.64px; }  .Form-second-section-first-p { font-size: 17.778px; line-height: 26.667px; }  .label { font-size: 16px; line-height: 26.667px; }  .small_input__field { font-size: 17px; line-height: 26.667px; }  .input__field { font-size: 17px; line-height: 26.667px; }  .Form-second-form-input-check-container { font-size: 14.222px; }  .Form-second-btn { font-size: 16.337px; line-height: 25.413px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ]
              },
            },
          ]
        }
      },
      {
        _id: "0000749347288", tag: "div", type: "Action Calls", label: "Call to Action", class: "", icon: "layout-action", data: {
          options: [
            {
              id: "BT-001",
              label: "Button without Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716654247467-Headerv.png",
              node: [
                  {
                      "_id": "id8fjPatTz-JGhX-IoNK-hqRm-HZAU65CZxOPO",
                      "tag": "button",
                      "classes": [
                          "btn1"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idmceLz8GM-qkY9-tWto-AHLp-vCiXk92bGT4f"
                      ]
                  },
                  {
                      "_id": "idXRt5bOk2-qRRh-eoe8-1aVv-h630PaFgWvyR",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "idmceLz8GM-qkY9-tWto-AHLp-vCiXk92bGT4f",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idXRt5bOk2-qRRh-eoe8-1aVv-h630PaFgWvyR"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "d828bc5b-3188-4d01-9eb8-a32dacdfe175",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn1",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: white; font-family: Switzer; font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Website-Main-Color, #00989B); background: var(--Website-Main-Color, #00989B); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
            {
              id: "BT-002",
              label: "Button without Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716654461674-Headerv.png",
              node: [
                  {
                      "_id": "idWBGxoZwE-ZUg2-UZhO-IbRq-iKwXZwcmg32G",
                      "tag": "button",
                      "classes": [
                          "btn2"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "id1sUMhctB-eFaa-YRsB-uTXV-Z4Mhtqo60lK5"
                      ]
                  },
                  {
                      "_id": "idRVDaQzEZ-97QC-DfYf-39Dz-gQfYhqsNtjlW",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "id1sUMhctB-eFaa-YRsB-uTXV-Z4Mhtqo60lK5",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idRVDaQzEZ-97QC-DfYf-39Dz-gQfYhqsNtjlW"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "d828bc5b-3188-4d01-9eb8-a32dacdfe175",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn2",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: white; font-family: Switzer; font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Website-Main-Color, #00989B); background: var(--Website-Main-Color, #00989B); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;  border-radius: 100px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
            {
              id: "BT-003",
              label: "Button with Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716654827299-Actions.png",
              node: [
                  {
                      "_id": "idqT4pd0tb-kdt0-9mfa-mis5-IkT1KNdcFHxe",
                      "tag": "button",
                      "classes": [
                          "btn3"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idETkdqF3e-uSan-Afz9-GOct-MpMCucuKm8AX",
                          "id6hnBc8rT-v1QD-GsPr-9DXS-FGQqBPsX4aOX"
                      ]
                  },
                  {
                      "_id": "idETkdqF3e-uSan-Afz9-GOct-MpMCucuKm8AX",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411810987-arr-btn-left.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idaRqDZ959-vvhn-GUoE-I5gE-PSgilealHRoL",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "id6hnBc8rT-v1QD-GsPr-9DXS-FGQqBPsX4aOX",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idaRqDZ959-vvhn-GUoE-I5gE-PSgilealHRoL"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "f5e2e722-ea76-4c7b-8609-54cced933566",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn3",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: var(--Gray-700, #344054); font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Gray-300, #D0D5DD); background: var(--White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
            {
              id: "BT-004",
              label: "Button with Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716654899844-Button.png",
              node: [
                  {
                      "_id": "idacAXXunp-XHWq-hBzP-L2GT-bHHdLRh2T8l1",
                      "tag": "button",
                      "classes": [
                          "btn4"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idw1nm2FdK-kgdC-DFqh-qP7u-W03ydugwreSx",
                          "idfgcsLfeC-ykyg-rZdx-1rOt-jxw4WflUEfXD"
                      ]
                  },
                  {
                      "_id": "idNkaeEp2d-UP2V-XH64-YJdC-bHXVfFlxtU2I",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "idw1nm2FdK-kgdC-DFqh-qP7u-W03ydugwreSx",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idNkaeEp2d-UP2V-XH64-YJdC-bHXVfFlxtU2I"
                      ]
                  },
                  {
                      "_id": "idfgcsLfeC-ykyg-rZdx-1rOt-jxw4WflUEfXD",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411849737-arr-btn-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "f5e2e722-ea76-4c7b-8609-54cced933566",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn4",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: var(--Gray-700, #344054); font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Gray-300, #D0D5DD); background: var(--White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
            {
              id: "BT-005",
              label: "Button with Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716654966479-Actions.png",
              node: [
                  {
                      "_id": "ide7CoHVoI-PNgr-4Eha-8fWU-YypjINr6VRJx",
                      "tag": "button",
                      "classes": [
                          "btn5"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idsYz2E3nP-B4Cr-Weid-eEwT-FucwRTPCwv73",
                          "idFzXTf7Tm-gxnk-QGg8-DD5w-IsVFhcoqIWcb"
                      ]
                  },
                  {
                      "_id": "idsYz2E3nP-B4Cr-Weid-eEwT-FucwRTPCwv73",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411810987-arr-btn-left.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idyxA0IaSk-6d5g-TdG0-mf3t-o4ZLa8SEGR4F",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "idFzXTf7Tm-gxnk-QGg8-DD5w-IsVFhcoqIWcb",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idyxA0IaSk-6d5g-TdG0-mf3t-o4ZLa8SEGR4F"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "f5e2e722-ea76-4c7b-8609-54cced933566",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn5",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: var(--Gray-700, #344054); font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Gray-300, #D0D5DD); background: var(--White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;border-radius: 8px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
            {
              id: "BT-006",
              label: "Button with Arrow",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1716655019799-Button.png",
              node: [
                  {
                      "_id": "idL6SZIJrr-fFOG-5tfZ-hTAn-M1jm4dZJuvPa",
                      "tag": "button",
                      "classes": [
                          "btn6"
                      ],
                      "data": {
                          "type": "button"
                      },
                      "type": "button",
                      "children": [
                          "idh4GCS597-1POr-K0YM-j6uB-mE4dAzJ7Kf8P",
                          "idhHL9EGNq-Wbsd-X9mx-69oe-b1tQOXWyMmN4"
                      ]
                  },
                  {
                      "_id": "id9FBeevgG-Ff0R-voYp-fqRt-CDHCZxO6FALe",
                      "text": true,
                      "type": "text",
                      "v": "Button CTA"
                  },
                  {
                      "_id": "idh4GCS597-1POr-K0YM-j6uB-mE4dAzJ7Kf8P",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id9FBeevgG-Ff0R-voYp-fqRt-CDHCZxO6FALe"
                      ]
                  },
                  {
                      "_id": "idhHL9EGNq-Wbsd-X9mx-69oe-b1tQOXWyMmN4",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411849737-arr-btn-right.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                    "style_id": "f5e2e722-ea76-4c7b-8609-54cced933566",
                    "data": {
                      "comb": "",
                      "affects": {},
                      "children": [],
                      "name": "",
                      "sel": ".btn6",
                      "styleLess": "margin: 20px auto; width: 200px; display: flex; padding: 12px 6px; justify-content: center; align-items: center; gap: 4px; flex: 1 0 0px; color: var(--Gray-700, #344054); font-size: 14px; font-style: normal; font-weight: 600; line-height: 16px; border: 0.174px solid var(--Gray-300, #D0D5DD); background: var(--White, #FFF); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.174px 0.347px 0px;border-radius: 8px;",
                      "type": "class",
                      "variants": {}
                    }
                  }
                ]
              },
            },
          ]
        }
      },
      {
        _id: "00004027636730", tag: "div", type: "Testimonial", label: "Testimonial", icon: "layout-testimonial", media: { img_url: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg" }, data: {
          options: [
            {
              id: "TS-001",
              label: "Testimonial with Image",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751440813-Desktop%20Testimonial%20section.png",
              node: [
                  {
                      "_id": "idqiYivgQF-BJ8v-wQrV-YbRl-iPBYXsC5hmku",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iddOY8z1r5-zUVz-MOZ9-qWNF-MRoGQazReBvM",
                          "idlSQ59Z8u-jYTh-OqDK-F5pR-WFZGfrvVCP1j"
                      ]
                  },
                  {
                      "_id": "idXGcJ81A0-SfN0-WnhC-HDrY-olwf6aEBoFXi",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410821869-Stars.png",
                          "alt": "starts"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idodNsxncS-fOUb-xNe8-Wrfl-Nk5Pjt9BpBNh",
                      "text": true,
                      "type": "text",
                      "v": "Love the simplicity of the service and the prompt customer support. We can't imagine working without it."
                  },
                  {
                      "_id": "id7r8x2P5O-UR4S-k8rn-pfhI-tzLbmp0Z6cgk",
                      "tag": "h3",
                      "classes": [
                          "Testimonial-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idodNsxncS-fOUb-xNe8-Wrfl-Nk5Pjt9BpBNh"
                      ]
                  },
                  {
                      "_id": "idyYn6UvBa-JceM-1Ix6-NMID-DB0dGYCh0nQA",
                      "tag": "img",
                      "classes": [
                          "Testimonial-first-profile-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408856257-esther-jiao-ADv0GiMBlmI-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idDxgS6dHw-aXVL-jaSY-ILVd-xPWWxpnSSfIC",
                      "text": true,
                      "type": "text",
                      "v": "Lyle Kauffman"
                  },
                  {
                      "_id": "ideK4oOOdC-VGx5-hEwW-VOyz-QlSMhLBrqz7o",
                      "tag": "h3",
                      "classes": [
                          "Testimonial-first-profile-h5"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idDxgS6dHw-aXVL-jaSY-ILVd-xPWWxpnSSfIC"
                      ]
                  },
                  {
                      "_id": "idFwWU8c2V-DEq2-z3Ux-3sdK-8HeWIU19r90k",
                      "text": true,
                      "type": "text",
                      "v": "Data Engineer, Sisyphus"
                  },
                  {
                      "_id": "id9MZbrQfU-dS3f-HFrb-73up-7irpwuQmrfKg",
                      "tag": "p",
                      "classes": [
                          "Testimonial-first-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idFwWU8c2V-DEq2-z3Ux-3sdK-8HeWIU19r90k"
                      ]
                  },
                  {
                      "_id": "idYHPlToPG-P2CI-COIH-2Lu0-JqaY3LzKkwbh",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "ideK4oOOdC-VGx5-hEwW-VOyz-QlSMhLBrqz7o",
                          "id9MZbrQfU-dS3f-HFrb-73up-7irpwuQmrfKg"
                      ]
                  },
                  {
                      "_id": "idmW3m9B9i-U1OS-xyhN-nwKo-l3D6MVNn4zKa",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idyYn6UvBa-JceM-1Ix6-NMID-DB0dGYCh0nQA",
                          "idYHPlToPG-P2CI-COIH-2Lu0-JqaY3LzKkwbh"
                      ]
                  },
                  {
                      "_id": "id2d552tyP-iLfx-3xwb-VeEp-HJCBcROE7wuP",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410912621-_Testiomonial%20carousel%20arrow.png",
                          "alt": "swiper"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idkOQKHudT-qhXm-2YCn-mNhP-MtW3CeH5LscP",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410948176-_Testiomonial%20carousel%20arrow%20%281%29.png",
                          "alt": "swiper"
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idkiLK81If-xdFY-Qgv3-m1y4-zee8J5xynlDv",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-img-swiper"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id2d552tyP-iLfx-3xwb-VeEp-HJCBcROE7wuP",
                          "idkOQKHudT-qhXm-2YCn-mNhP-MtW3CeH5LscP"
                      ]
                  },
                  {
                      "_id": "id3J9TzvTA-HHSF-JfeJ-kUiC-PyYpum078MI2",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idmW3m9B9i-U1OS-xyhN-nwKo-l3D6MVNn4zKa",
                          "idkiLK81If-xdFY-Qgv3-m1y4-zee8J5xynlDv"
                      ]
                  },
                  {
                      "_id": "idNoLZviuU-44Ij-BLSF-qRW3-QajQeKjlxFRa",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-text-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idXGcJ81A0-SfN0-WnhC-HDrY-olwf6aEBoFXi",
                          "id7r8x2P5O-UR4S-k8rn-pfhI-tzLbmp0Z6cgk",
                          "id3J9TzvTA-HHSF-JfeJ-kUiC-PyYpum078MI2"
                      ]
                  },
                  {
                      "_id": "iddOY8z1r5-zUVz-MOZ9-qWNF-MRoGQazReBvM",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-section1"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idNoLZviuU-44Ij-BLSF-qRW3-QajQeKjlxFRa"
                      ]
                  },
                  {
                      "_id": "idNrSEnH6H-AD41-0Emv-kYo5-dtTa4CAfjwtC",
                      "tag": "img",
                      "classes": [
                          "Content-first-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408730467-andrej-lisakov-g3z-CgUiPtg-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idlSQ59Z8u-jYTh-OqDK-F5pR-WFZGfrvVCP1j",
                      "tag": "div",
                      "classes": [
                          "Testimonial-first-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idNrSEnH6H-AD41-0Emv-kYo5-dtTa4CAfjwtC"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "0610cfc7-6c32-48dd-93f8-ae1806130c9d",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first",
                          "styleLess": "display: flex; padding: 50px 25.086px; justify-content: center; flex-direction: column; align-items: center; gap: 35.54px; max-width: 1500px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "32cb5361-016d-4e07-9709-5e8e10bd84d0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-section1",
                          "styleLess": "width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "33c4b2bb-f3a5-4223-88b2-9cce76c618da",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-a",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; text-decoration: none; font-weight: 600; line-height: 13.327px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "911123c1-a776-469a-bfca-7dca705484e2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-text-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 36.358px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "862bcadb-cc88-4f9f-a50b-a0884a88c76f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 26.092px; font-style: normal; font-weight: 500; line-height: 32.616px; letter-spacing: -0.522px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5dc64993-b74d-4b40-aa20-3a731e047115",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 400; line-height: 15.549px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "141cfe27-2634-4c87-b2d1-b0e1433fd424",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-btn-container",
                          "styleLess": "width: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; justify-content: space-between;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "678a346d-d892-4ef7-9afd-7361cff078f5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-img-container",
                          "styleLess": "width: 100%; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a508e1b1-e137-4c1b-b45b-508c6bc996ae",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-img",
                          "styleLess": "width: 100%; height: 100%; object-fit: cover; margin: auto; max-height: 600px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9c9984c8-f07c-4bf7-9637-8b2e2cf60a77",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-profile",
                          "styleLess": "display: flex; width: 228.309px; align-items: center; gap: 8.697px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "64522dfc-eda6-4e08-b605-87c730a711c9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-profile-p",
                          "styleLess": "margin: 0px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14.236px; font-style: normal; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d3f10029-06be-47cf-a12c-0aed69dc8a56",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-profile-h5",
                          "styleLess": "margin: 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7319b4a7-4c5b-4f97-a79d-c2d377901be0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-img-swiper",
                          "styleLess": "display: flex; gap: 10px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5f4003dd-dffd-42ba-a1b4-11117755052f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-first-profile-img",
                          "styleLess": "width: 50px; height: 50px; border-radius: 50%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9575ccfd-85be-4fba-95ed-38a4682cf746",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Testimonial-first { flex-direction: row; }  .Testimonial-first-section1 { width: 50%; }  .Testimonial-first-img-container { width: 50%; }  .Testimonial-first-btn-container { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d5213ac3-b938-4e26-b0c0-c344c366e0b3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Testimonial-first { padding: 87px 40.086px; gap: 35.54px; }  .Testimonial-first-a { font-size: 14.543px; line-height: 21.815px; }  .Testimonial-first-h3 { font-size: 42.709px; line-height: 53.386px; letter-spacing: -0.854px; }  .Testimonial-first-p { font-size: 16.361px; font-weight: 400; line-height: 25.45px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],

              },
            },
            {
              id: "TS-002",
              label: "Testimonial vslick",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751534414-Desktop%20Testimonial%20section%20%281%29.png",
              node: [
                  {
                      "_id": "idGI6ovC7J-BcmZ-yJHz-hQyp-ommjc9hZdmBG",
                      "tag": "div",
                      "classes": [
                          "Testimonial-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idzstDYxlf-gMTG-c3M7-Tsp1-UBHjkVWEBAcs",
                          "idf0ouvfpk-9c2m-37yf-AeA9-MBZKieKDwYkW"
                      ]
                  },
                  {
                      "_id": "idWcARBp3w-CoD1-swZD-NFwq-yCcEE1ausq9E",
                      "text": true,
                      "type": "text",
                      "v": "Love the simplicity of the service and the prompt customer support. We can't imagine working without it."
                  },
                  {
                      "_id": "idzstDYxlf-gMTG-c3M7-Tsp1-UBHjkVWEBAcs",
                      "tag": "h3",
                      "classes": [
                          "Testimonial-second-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idWcARBp3w-CoD1-swZD-NFwq-yCcEE1ausq9E"
                      ]
                  },
                  {
                      "_id": "idp4uOGNlX-ueQ1-ppKI-4Cl4-bkg4lLstVZHh",
                      "tag": "img",
                      "classes": [
                          "Testimonial-second-profile-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408856257-esther-jiao-ADv0GiMBlmI-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idpnxQU2iD-n4QI-U4XW-yHbC-6OXXypjeZ3yP",
                      "text": true,
                      "type": "text",
                      "v": "Kelly Williams"
                  },
                  {
                      "_id": "id5kLLsfc3-89lT-DRqC-SHBU-UjNZotPSNWXc",
                      "tag": "h3",
                      "classes": [
                          "Testimonial-second-profile-h5"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idpnxQU2iD-n4QI-U4XW-yHbC-6OXXypjeZ3yP"
                      ]
                  },
                  {
                      "_id": "idT6xsALJd-VA3G-AbDj-xdtd-zE7SwxGqhFTz",
                      "text": true,
                      "type": "text",
                      "v": "Head of Design, Layers"
                  },
                  {
                      "_id": "iduwi0XT8v-vQkh-weeB-qhrb-H8rF3L3S6lMP",
                      "tag": "p",
                      "classes": [
                          "Testimonial-second-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idT6xsALJd-VA3G-AbDj-xdtd-zE7SwxGqhFTz"
                      ]
                  },
                  {
                      "_id": "idnGane3Y8-4dgO-1jNJ-O9la-QfVsbfSCPwts",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id5kLLsfc3-89lT-DRqC-SHBU-UjNZotPSNWXc",
                          "iduwi0XT8v-vQkh-weeB-qhrb-H8rF3L3S6lMP"
                      ]
                  },
                  {
                      "_id": "idq1fM8qUi-YIyH-ex5R-gV8J-rXiVOrpYVRZE",
                      "tag": "div",
                      "classes": [
                          "Testimonial-second-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idp4uOGNlX-ueQ1-ppKI-4Cl4-bkg4lLstVZHh",
                          "idnGane3Y8-4dgO-1jNJ-O9la-QfVsbfSCPwts"
                      ]
                  },
                  {
                      "_id": "idNhgHogWT-BMij-7Fvb-qI7d-qBRmQRafuUiQ",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706410821869-Stars.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idf0ouvfpk-9c2m-37yf-AeA9-MBZKieKDwYkW",
                      "tag": "div",
                      "classes": [
                          "Testimonial-second-profile-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idq1fM8qUi-YIyH-ex5R-gV8J-rXiVOrpYVRZE",
                          "idNhgHogWT-BMij-7Fvb-qI7d-qBRmQRafuUiQ"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "479ccc92-0ef2-4777-86e6-45e767990317",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second",
                          "styleLess": "padding: 50px 25.086px; display: flex; flex-direction: column; align-items: center; gap: 30px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e208bb1c-10dc-4e72-b470-0d612abb6124",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Inter; font-size: 26.092px; font-style: normal; font-weight: 500; line-height: 32.616px; letter-spacing: -0.522px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "618b40a2-a231-4045-ad15-7c02ffadc4ee",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-profile-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 14.236px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e16f8ad6-354d-4e61-96fa-66707a628fb7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-profile",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 14.236px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2140186d-bb78-4440-a4f5-a965f3b746e5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-profile-p",
                          "styleLess": "margin: 0px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14.236px; font-style: normal; text-align: center; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b4e9383d-d5f1-4077-a07f-e0f7f938c7b5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-profile-h5",
                          "styleLess": "margin: 0px; text-align: center;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7e87afe7-bd55-44f1-8886-ef526782a967",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Testimonial-second-profile-img",
                          "styleLess": "width: 50px; height: 50px; border-radius: 50%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5d4019fe-ca2d-430c-95ac-e824412e8b0c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Testimonial-second { padding: 87px 40.086px; gap: 35.54px; }  .Testimonial-second-a { font-size: 14.543px; line-height: 21.815px; }  .Testimonial-second-h3 { font-size: 42.709px; line-height: 53.386px; letter-spacing: -0.854px; }  .Testimonial-second-p { font-size: 16.361px; font-weight: 400; line-height: 25.45px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],

              },
            }
          ],
        }
      },
      {
        _id: "0000402763649247", tag: "div", type: "Pricing", label: "Pricing", icon: "layout-testimonial", media: { img_url: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg" }, data: {
          options: [
            {
              id: "PR-001",
              label: "Pricing with 2 Cards",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751697614-Desktop.png",
              node: [
                  {
                      "_id": "id8tW3pAoM-Qb0T-SyJE-0HiB-HLueRa8t98lC",
                      "tag": "div",
                      "classes": [
                          "Pricing-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id1mcDNwfN-xAu8-NSkb-4hGW-15zaSLINTwbb",
                          "id9TKyIf8j-JVIs-AoZ5-lBAS-mDTwFPrdxquD"
                      ]
                  },
                  {
                      "_id": "idYGVTCzqR-99TS-L7V6-J2UJ-kgcdiQFozCpV",
                      "text": true,
                      "type": "text",
                      "v": "Upgrade"
                  },
                  {
                      "_id": "idQqYKPsma-5FA8-uBaF-826D-FKWUs5DFcZ6z",
                      "tag": "span",
                      "classes": [
                          "Pricing-first-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idYGVTCzqR-99TS-L7V6-J2UJ-kgcdiQFozCpV"
                      ]
                  },
                  {
                      "_id": "id9kpAsRV4-TIsY-5270-WUQN-L1lGtxTwqjjz",
                      "text": true,
                      "type": "text",
                      "v": "Pricing plans that scale"
                  },
                  {
                      "_id": "idXtz0jqUT-kKkq-bWIu-Dkxd-X8omJ1QyNlI5",
                      "tag": "h3",
                      "classes": [
                          "Pricing-first-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "id9kpAsRV4-TIsY-5270-WUQN-L1lGtxTwqjjz"
                      ]
                  },
                  {
                      "_id": "idcIA5P1NM-bJzF-38tF-y41V-eeV1vGuIi2mF",
                      "text": true,
                      "type": "text",
                      "v": "Simple, transparent pricing that grows with you. Try any plan free for 30 days."
                  },
                  {
                      "_id": "idiGM6Ispr-TyVm-cD3y-P5n3-FwTKGPZY0Lwg",
                      "tag": "p",
                      "classes": [
                          "Pricing-first-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idcIA5P1NM-bJzF-38tF-y41V-eeV1vGuIi2mF"
                      ]
                  },
                  {
                      "_id": "id1mcDNwfN-xAu8-NSkb-4hGW-15zaSLINTwbb",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idQqYKPsma-5FA8-uBaF-826D-FKWUs5DFcZ6z",
                          "idXtz0jqUT-kKkq-bWIu-Dkxd-X8omJ1QyNlI5",
                          "idiGM6Ispr-TyVm-cD3y-P5n3-FwTKGPZY0Lwg"
                      ]
                  },
                  {
                      "_id": "id9vpfqwcJ-cYrz-86ME-3K6U-4FvEpBYer3sq",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411012243-Featured%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idYv4XNDTt-L94s-HgDT-YrXz-0Zt6bISRVBoD",
                      "text": true,
                      "type": "text",
                      "v": "Basic plan"
                  },
                  {
                      "_id": "idbYbU3kHB-KvBF-LBnj-DxUd-EmA8H1X7nOcR",
                      "tag": "h5",
                      "classes": [
                          "Pricing-first-profile-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idYv4XNDTt-L94s-HgDT-YrXz-0Zt6bISRVBoD"
                      ]
                  },
                  {
                      "_id": "id1j18pNkO-Ydku-hbRF-nJQC-jjsPePRge3dY",
                      "text": true,
                      "type": "text",
                      "v": "$10/mth"
                  },
                  {
                      "_id": "idhTB30GWy-gekr-MN6L-hlb4-EWuu0Z9cP4fB",
                      "tag": "h3",
                      "classes": [
                          "Pricing-first-profile-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "id1j18pNkO-Ydku-hbRF-nJQC-jjsPePRge3dY"
                      ]
                  },
                  {
                      "_id": "idHKD4DEPu-rHAG-PPGg-D2dq-CDWEjxhEECaP",
                      "text": true,
                      "type": "text",
                      "v": "Billed annually."
                  },
                  {
                      "_id": "idmJMzXui9-ojKE-FvdZ-9YTy-Wquq2AT8wrRD",
                      "tag": "p",
                      "classes": [
                          "Pricing-first-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idHKD4DEPu-rHAG-PPGg-D2dq-CDWEjxhEECaP"
                      ]
                  },
                  {
                      "_id": "idMZNJQpj0-p5jv-QxZu-4eMs-vIXxrtyqnRuD",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idbYbU3kHB-KvBF-LBnj-DxUd-EmA8H1X7nOcR",
                          "idhTB30GWy-gekr-MN6L-hlb4-EWuu0Z9cP4fB",
                          "idmJMzXui9-ojKE-FvdZ-9YTy-Wquq2AT8wrRD"
                      ]
                  },
                  {
                      "_id": "idJ0hnAyMJ-dmtK-EGnj-Ayxo-eBSYlCiT75F4",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id9vpfqwcJ-cYrz-86ME-3K6U-4FvEpBYer3sq",
                          "idMZNJQpj0-p5jv-QxZu-4eMs-vIXxrtyqnRuD"
                      ]
                  },
                  {
                      "_id": "idonmtWHVm-sChm-Gdkw-iAdq-L3W0UI1cSE2o",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idum6fVjbV-i0Wa-ffhU-x3VK-ZuiYfxfaChzZ",
                      "text": true,
                      "type": "text",
                      "v": "Access to all basic features"
                  },
                  {
                      "_id": "idkftmHupV-0AUw-VS1r-OPnl-jDshWUnQki8B",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idum6fVjbV-i0Wa-ffhU-x3VK-ZuiYfxfaChzZ"
                      ]
                  },
                  {
                      "_id": "idQ4sUacfM-cIi8-jZRJ-I5J9-AmrjuaQSFIbW",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idonmtWHVm-sChm-Gdkw-iAdq-L3W0UI1cSE2o",
                          "idkftmHupV-0AUw-VS1r-OPnl-jDshWUnQki8B"
                      ]
                  },
                  {
                      "_id": "idZtrSweTn-o8ar-H5uJ-CWBu-zuRirTE2JIPe",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idncUQZvZs-rMUm-khKV-8PEw-XmCGckRvwkjm",
                      "text": true,
                      "type": "text",
                      "v": "Basic reporting and analytics"
                  },
                  {
                      "_id": "idkK9bStBy-j3kw-uqw2-DTnk-TKdzY750ZmCS",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idncUQZvZs-rMUm-khKV-8PEw-XmCGckRvwkjm"
                      ]
                  },
                  {
                      "_id": "idSpP9DslV-nSed-V6T9-lYKZ-BMLbWatnbyoa",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idZtrSweTn-o8ar-H5uJ-CWBu-zuRirTE2JIPe",
                          "idkK9bStBy-j3kw-uqw2-DTnk-TKdzY750ZmCS"
                      ]
                  },
                  {
                      "_id": "idoLVgwUlm-Y2dN-87Jb-1UPM-baCY8irQsK9K",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idtBtNpSbe-NoCx-vGx8-hTWC-zHZQ1tNrXshr",
                      "text": true,
                      "type": "text",
                      "v": "Up to 10 individual users"
                  },
                  {
                      "_id": "idkB6inVuo-8t1M-ZUCz-4gDx-SETj3QvvosdI",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idtBtNpSbe-NoCx-vGx8-hTWC-zHZQ1tNrXshr"
                      ]
                  },
                  {
                      "_id": "idAW5ej7AT-xKJi-Tib4-GQB8-m34uqOEGYEe9",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idoLVgwUlm-Y2dN-87Jb-1UPM-baCY8irQsK9K",
                          "idkB6inVuo-8t1M-ZUCz-4gDx-SETj3QvvosdI"
                      ]
                  },
                  {
                      "_id": "idQS4ItqZv-joq1-2xnh-AsPZ-wt1rlvYhodYc",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idAQ62quXM-prcx-XXsn-PlBI-hrUQefkdcLiG",
                      "text": true,
                      "type": "text",
                      "v": "20GB individual data each user"
                  },
                  {
                      "_id": "idZWFhbGuU-LIRC-5pEp-xCiG-pp49ObzymHwo",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idAQ62quXM-prcx-XXsn-PlBI-hrUQefkdcLiG"
                      ]
                  },
                  {
                      "_id": "idfUa2SFly-KRLA-mnef-vjO8-LATJntnLbPe2",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idQS4ItqZv-joq1-2xnh-AsPZ-wt1rlvYhodYc",
                          "idZWFhbGuU-LIRC-5pEp-xCiG-pp49ObzymHwo"
                      ]
                  },
                  {
                      "_id": "idFbvPobBy-6rns-nFji-AXiK-hf3p4uWbeIA4",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idPt9PMs0V-qPQi-4edv-CIIG-jg4S53aooi2L",
                      "text": true,
                      "type": "text",
                      "v": "Basic chat and email support"
                  },
                  {
                      "_id": "idWQTY1laL-VKVG-tQOe-LPka-CHVw8hcp7WlP",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idPt9PMs0V-qPQi-4edv-CIIG-jg4S53aooi2L"
                      ]
                  },
                  {
                      "_id": "id7kjoeNtA-9lwy-t2Uu-JTcg-fNNNzETC3V6i",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idFbvPobBy-6rns-nFji-AXiK-hf3p4uWbeIA4",
                          "idWQTY1laL-VKVG-tQOe-LPka-CHVw8hcp7WlP"
                      ]
                  },
                  {
                      "_id": "id7O1rqos4-KlQz-Bj1s-O8Zi-ML4SOJp1HOYB",
                      "tag": "ul",
                      "classes": [
                          "Pricing-first-section-second-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idQ4sUacfM-cIi8-jZRJ-I5J9-AmrjuaQSFIbW",
                          "idSpP9DslV-nSed-V6T9-lYKZ-BMLbWatnbyoa",
                          "idAW5ej7AT-xKJi-Tib4-GQB8-m34uqOEGYEe9",
                          "idfUa2SFly-KRLA-mnef-vjO8-LATJntnLbPe2",
                          "id7kjoeNtA-9lwy-t2Uu-JTcg-fNNNzETC3V6i"
                      ]
                  },
                  {
                      "_id": "idav6tHNJg-fMQd-cNcz-JkVu-PcUyF2SzI0Xk",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id7O1rqos4-KlQz-Bj1s-O8Zi-ML4SOJp1HOYB"
                      ]
                  },
                  {
                      "_id": "idRrdGjKZv-v0lG-uode-qaEm-jXSp8jxWJApH",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "idSQmPVZma-F15n-D6n5-t5yA-TfuqEVOhSKRj",
                      "tag": "button",
                      "classes": [
                          "Pricing-first-card-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idRrdGjKZv-v0lG-uode-qaEm-jXSp8jxWJApH"
                      ]
                  },
                  {
                      "_id": "idxAaD8puH-z8yM-HYOK-j2e0-QFt9KJDIzy4m",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-card-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idSQmPVZma-F15n-D6n5-t5yA-TfuqEVOhSKRj"
                      ]
                  },
                  {
                      "_id": "idYndMxVcZ-G16K-X3ef-ICnz-pG2U7su2kFLQ",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idJ0hnAyMJ-dmtK-EGnj-Ayxo-eBSYlCiT75F4",
                          "idav6tHNJg-fMQd-cNcz-JkVu-PcUyF2SzI0Xk",
                          "idxAaD8puH-z8yM-HYOK-j2e0-QFt9KJDIzy4m"
                      ]
                  },
                  {
                      "_id": "idL3TZ59ym-k6Lv-tFOW-PfvU-Hk2EvJzefP7r",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411012243-Featured%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idgPNPBBK5-Yx6H-m1hX-BrSq-mjLVY4BsajEG",
                      "text": true,
                      "type": "text",
                      "v": "Basic plan"
                  },
                  {
                      "_id": "id8GM6pY0r-IaIg-ZrWd-vAvd-kuqa7F8YNfid",
                      "tag": "h5",
                      "classes": [
                          "Pricing-first-profile-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idgPNPBBK5-Yx6H-m1hX-BrSq-mjLVY4BsajEG"
                      ]
                  },
                  {
                      "_id": "idzKkGqOZc-AAEE-XNFI-VCNp-y6sZB2kaN7V1",
                      "text": true,
                      "type": "text",
                      "v": "$10/mth"
                  },
                  {
                      "_id": "idJuIT0LO1-9cAd-c3XI-896Q-5hbJEEeXaAnR",
                      "tag": "h3",
                      "classes": [
                          "Pricing-first-profile-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idzKkGqOZc-AAEE-XNFI-VCNp-y6sZB2kaN7V1"
                      ]
                  },
                  {
                      "_id": "idgrgB8TIM-nvIO-KaQu-7FWt-JCGXaZgpzDSH",
                      "text": true,
                      "type": "text",
                      "v": "Billed annually."
                  },
                  {
                      "_id": "idFaPD6hDa-f5pv-17Ru-03ri-BxiC1gq6orxu",
                      "tag": "p",
                      "classes": [
                          "Pricing-first-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idgrgB8TIM-nvIO-KaQu-7FWt-JCGXaZgpzDSH"
                      ]
                  },
                  {
                      "_id": "idPQAYquM5-IIqn-92SD-1kcj-wj0PCvFCujew",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id8GM6pY0r-IaIg-ZrWd-vAvd-kuqa7F8YNfid",
                          "idJuIT0LO1-9cAd-c3XI-896Q-5hbJEEeXaAnR",
                          "idFaPD6hDa-f5pv-17Ru-03ri-BxiC1gq6orxu"
                      ]
                  },
                  {
                      "_id": "idaaIqcDBH-qFFW-Qvyk-QNCE-tqE891scZz8Q",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idL3TZ59ym-k6Lv-tFOW-PfvU-Hk2EvJzefP7r",
                          "idPQAYquM5-IIqn-92SD-1kcj-wj0PCvFCujew"
                      ]
                  },
                  {
                      "_id": "idPoyR7dM9-ORAY-u9B0-mbR8-PBVq7rPBo4lU",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id08VDM2QC-fxVn-0Ckr-4J88-qbA5p94LhkXT",
                      "text": true,
                      "type": "text",
                      "v": "Access to all basic features"
                  },
                  {
                      "_id": "idotGwu3o8-NwcO-5ZXS-0bzg-bTFzffgAxoF9",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id08VDM2QC-fxVn-0Ckr-4J88-qbA5p94LhkXT"
                      ]
                  },
                  {
                      "_id": "idMhhIcbXz-4sax-1z3o-pmEV-iPrgGrlhUtmI",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idPoyR7dM9-ORAY-u9B0-mbR8-PBVq7rPBo4lU",
                          "idotGwu3o8-NwcO-5ZXS-0bzg-bTFzffgAxoF9"
                      ]
                  },
                  {
                      "_id": "idYQKSiICN-TPQD-OODs-BFhH-WPeW5E1udoRg",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id8kugLPLv-cypV-MYqE-GGXV-zNB4Rrh7nyUX",
                      "text": true,
                      "type": "text",
                      "v": "Basic reporting and analytics"
                  },
                  {
                      "_id": "id15zSYow2-Z0QL-dez1-JiNm-OyWfdRAUBfxm",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id8kugLPLv-cypV-MYqE-GGXV-zNB4Rrh7nyUX"
                      ]
                  },
                  {
                      "_id": "idXWdaCORP-z5Os-UntF-5t6b-kgaW4lP8W4nR",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idYQKSiICN-TPQD-OODs-BFhH-WPeW5E1udoRg",
                          "id15zSYow2-Z0QL-dez1-JiNm-OyWfdRAUBfxm"
                      ]
                  },
                  {
                      "_id": "idnqr6d4JM-r82q-wyNK-MSzz-PLqyMyV136e0",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idie9Y1bCQ-rtSi-D9xS-J5SP-Eugc3SvEjH6P",
                      "text": true,
                      "type": "text",
                      "v": "Up to 10 individual users"
                  },
                  {
                      "_id": "idrVTvNOX1-ox8G-Y76Q-oKgq-KcxdYS9LIbU2",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idie9Y1bCQ-rtSi-D9xS-J5SP-Eugc3SvEjH6P"
                      ]
                  },
                  {
                      "_id": "iduxvNxvjB-shjh-1PAE-AJ1h-1nbz8NugjO0B",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idnqr6d4JM-r82q-wyNK-MSzz-PLqyMyV136e0",
                          "idrVTvNOX1-ox8G-Y76Q-oKgq-KcxdYS9LIbU2"
                      ]
                  },
                  {
                      "_id": "idObLy3mwL-LFRS-CfBN-Z6DL-iGUPIOKxVhnw",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idVbdwNiFQ-y0xh-6m0d-9KJA-QgKIaabWlb4N",
                      "text": true,
                      "type": "text",
                      "v": "20GB individual data each user"
                  },
                  {
                      "_id": "idBDbfFiG3-ZwHh-g1br-tLK7-xrhYauJqZGab",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idVbdwNiFQ-y0xh-6m0d-9KJA-QgKIaabWlb4N"
                      ]
                  },
                  {
                      "_id": "id7ktuh5VE-LAOT-fvnL-zoK2-jCBzLB3fI1vM",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idObLy3mwL-LFRS-CfBN-Z6DL-iGUPIOKxVhnw",
                          "idBDbfFiG3-ZwHh-g1br-tLK7-xrhYauJqZGab"
                      ]
                  },
                  {
                      "_id": "idsX9OmQ9S-MgHZ-YGKD-TTNr-5VGcAcBoDZb7",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idDrDI6yCY-TTBe-QaPg-r2OK-bDyVruEGHkha",
                      "text": true,
                      "type": "text",
                      "v": "Basic chat and email support"
                  },
                  {
                      "_id": "idtxU1e2hR-cvUa-89Mm-Cf1V-NdNcRglP2pXg",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idDrDI6yCY-TTBe-QaPg-r2OK-bDyVruEGHkha"
                      ]
                  },
                  {
                      "_id": "idA0w5adhN-jlzj-OebQ-5b6x-XOdQme9hrAFU",
                      "tag": "li",
                      "classes": [
                          "Pricing-first-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idsX9OmQ9S-MgHZ-YGKD-TTNr-5VGcAcBoDZb7",
                          "idtxU1e2hR-cvUa-89Mm-Cf1V-NdNcRglP2pXg"
                      ]
                  },
                  {
                      "_id": "idcmqyiLJw-ZHmM-fTeP-mCGs-NiFjYd1xH1Ar",
                      "tag": "ul",
                      "classes": [
                          "Pricing-first-section-second-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idMhhIcbXz-4sax-1z3o-pmEV-iPrgGrlhUtmI",
                          "idXWdaCORP-z5Os-UntF-5t6b-kgaW4lP8W4nR",
                          "iduxvNxvjB-shjh-1PAE-AJ1h-1nbz8NugjO0B",
                          "id7ktuh5VE-LAOT-fvnL-zoK2-jCBzLB3fI1vM",
                          "idA0w5adhN-jlzj-OebQ-5b6x-XOdQme9hrAFU"
                      ]
                  },
                  {
                      "_id": "idncN2ld07-Z20n-x6EC-CVIm-mjCnKrPngcHS",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idcmqyiLJw-ZHmM-fTeP-mCGs-NiFjYd1xH1Ar"
                      ]
                  },
                  {
                      "_id": "idaJ7Fb136-AZo9-rYFH-zzRn-U3ZiCqjxOQez",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "idL9267YTC-MXn3-Pl4q-l6tx-2a6qUrpr0zpt",
                      "tag": "button",
                      "classes": [
                          "Pricing-first-card-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idaJ7Fb136-AZo9-rYFH-zzRn-U3ZiCqjxOQez"
                      ]
                  },
                  {
                      "_id": "id2QfUBkqF-NiWn-FBu2-m2M9-eKg809Ok2eqk",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-card-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idL9267YTC-MXn3-Pl4q-l6tx-2a6qUrpr0zpt"
                      ]
                  },
                  {
                      "_id": "idjqYCooI2-qUfc-ILEr-9vHn-6aWPqShnY5ye",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idaaIqcDBH-qFFW-Qvyk-QNCE-tqE891scZz8Q",
                          "idncN2ld07-Z20n-x6EC-CVIm-mjCnKrPngcHS",
                          "id2QfUBkqF-NiWn-FBu2-m2M9-eKg809Ok2eqk"
                      ]
                  },
                  {
                      "_id": "id9TKyIf8j-JVIs-AoZ5-lBAS-mDTwFPrdxquD",
                      "tag": "div",
                      "classes": [
                          "Pricing-first-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idYndMxVcZ-G16K-X3ef-ICnz-pG2U7su2kFLQ",
                          "idjqYCooI2-qUfc-ILEr-9vHn-6aWPqShnY5ye"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "101a55ba-b0db-41f9-ba26-7ddc2af763f1",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first",
                          "styleLess": "display: flex; padding: 50px 29.803px; flex-direction: column; align-items: flex-start; gap: 59.606px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "203f55b3-2bbc-497f-9170-83744080ae16",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-first",
                          "styleLess": "display: flex; flex-direction: column; gap: 0.667px; flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6b079c72-deb4-407c-b951-8dd1fb9665ce",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-first-span",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6d89edfa-3842-4b58-aeb4-d7ca017db776",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 22px; margin: 12px 0px; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f4062590-4835-4428-912a-d4aad91dbdf6",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 17px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cae0a6ae-6efc-4e6b-8995-3a8774c76820",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 35px; width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c6f389ab-ca45-4dab-9e0b-e29905217b52",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-card",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; width: fit-content; border-radius: 14.901px; border: 0.931px solid var(--Gray-200, #EAECF0); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.03) 0px 3.725px 5.588px -1.863px, rgba(16, 24, 40, 0.08) 0px 11.176px 14.901px -3.725px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "053100d6-95b3-4c77-8d01-5c42fce8a058",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-profile",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 14.236px; align-self: stretch; padding: 18.208px 18.208px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b33b1146-ef8e-4218-9a66-4f436f251f29",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-profile-p",
                          "styleLess": "margin: 0px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14.236px; font-style: normal; text-align: center; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6b3c5aeb-4863-4c58-b030-f2c0584d85f7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-profile-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Inter; font-size: 14px; font-style: normal; font-weight: 600; line-height: 17.07px; margin: 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2568ff88-f9d6-4502-b58b-78e14516f1db",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-profile-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Inter; font-size: 27.311px; font-style: normal; margin: 12px 0px; font-weight: 600; line-height: 34.139px; letter-spacing: -0.546px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "851bdf99-eba3-4d8d-a28c-b974c8defe95",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-second-ul",
                          "styleLess": "display: flex; padding: 18.208px; flex-direction: column; align-items: flex-start; gap: 13.656px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b98da1b8-af99-487d-ae2a-ae441504e21f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-section-second-list",
                          "styleLess": "display: flex; align-items: flex-start; gap: 6.828px; align-self: stretch; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.656px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cf8a707c-0b9c-402e-8ab0-d65f6749d65a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-card-btn-container",
                          "styleLess": "display: flex; padding: 18.208px; justify-content: center; gap: 13.656px; align-self: stretch; background: var(--Gray-50, #F9FAFB);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e5e41a6a-1b3c-4565-8946-7e1320f129be",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-first-card-btn",
                          "styleLess": "padding: 6px 12px; border-radius: 4.552px; border: 0.569px solid var(--Gray-800, #1D2939); background: var(--Gray-800, #1D2939); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.569px 1.138px 0px; color: var(--Base-White, #FFF); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 600; line-height: 13.656px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "0a6dd062-9374-4902-a6c0-8db0728ec65a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 470px)",
                          "styleLess": "  .Pricing-first-section-second { flex-direction: row; flex: 1 0 0px; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "969aecac-bec5-41bc-a833-13a8be4eb4cb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Pricing-first { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cfa931c4-60b8-46c9-8b75-890a4e59f9b1",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Pricing-first-section-first-span { font-size: 14.901px; line-height: 22.352px; }  .Pricing-first-section-first-h3 { font-size: 33.528px; line-height: 40.979px; letter-spacing: -0.671px; }  .Pricing-first-section-first-p { font-size: 16.764px; line-height: 26.077px; }  .Pricing-first-section-second { gap: 18px; }  .Pricing-first-profile { padding: 29.803px 29.803px 0px; }  .Pricing-first-section-second-ul { padding: 29.803px; }  .Pricing-first-profile-h5 { font-size: 18.627px; line-height: 27.94px; }  .Pricing-first-profile-h3 { font-size: 44.704px; line-height: 55.88px; letter-spacing: -0.894px; }  .Pricing-first-profile-p { font-size: 14.901px; line-height: 22.352px; }  .Pricing-first-card-btn-container { padding: 29.803px; }  .Pricing-first-card-btn { padding: 11.176px 18.627px; font-size: 16px; line-height: 22.352px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],

              },
            },
            {
              id: "PR-002",
              label: "Pricing with 3 Cards",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751774667-desktop%20%281%29.png",
              node: [
                  {
                      "_id": "id4VyNXNz8-7vLe-3Hid-PrMp-MiD5cvB0hRyK",
                      "tag": "div",
                      "classes": [
                          "Pricing-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idZNt3KejG-sgoc-Qi9c-MhAM-ccdNDsrbkTzN",
                          "id9oZe8AEW-abnI-ZWEN-IWNW-iqCMSRcnlbyY"
                      ]
                  },
                  {
                      "_id": "idZpDHubNg-u1Vf-3Rm2-UkMN-vPIljmmKBRQG",
                      "text": true,
                      "type": "text",
                      "v": "Upgrade"
                  },
                  {
                      "_id": "idmTdu8xRY-YDlw-eBp6-4M88-rYz3wavmdsqz",
                      "tag": "span",
                      "classes": [
                          "Pricing-second-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idZpDHubNg-u1Vf-3Rm2-UkMN-vPIljmmKBRQG"
                      ]
                  },
                  {
                      "_id": "idiTKQ5X1m-VC7z-66am-5Kmg-adK5oygEQeCP",
                      "text": true,
                      "type": "text",
                      "v": "Pricing plans that scale"
                  },
                  {
                      "_id": "id95C4Mczd-rD4e-C53U-ZrwU-03UZOgg2s2il",
                      "tag": "h3",
                      "classes": [
                          "Pricing-second-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idiTKQ5X1m-VC7z-66am-5Kmg-adK5oygEQeCP"
                      ]
                  },
                  {
                      "_id": "idVyKTAWTz-66X7-Om9P-H0RP-kWQXPNPmQoDi",
                      "text": true,
                      "type": "text",
                      "v": "Simple, transparent pricing that grows with you. Try any plan free for 30 days."
                  },
                  {
                      "_id": "id4wN3QRHD-3S7x-EKuA-KjCi-UzBKF0eVqZB2",
                      "tag": "p",
                      "classes": [
                          "Pricing-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idVyKTAWTz-66X7-Om9P-H0RP-kWQXPNPmQoDi"
                      ]
                  },
                  {
                      "_id": "idZNt3KejG-sgoc-Qi9c-MhAM-ccdNDsrbkTzN",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idmTdu8xRY-YDlw-eBp6-4M88-rYz3wavmdsqz",
                          "id95C4Mczd-rD4e-C53U-ZrwU-03UZOgg2s2il",
                          "id4wN3QRHD-3S7x-EKuA-KjCi-UzBKF0eVqZB2"
                      ]
                  },
                  {
                      "_id": "idNbhK5vjp-Yeka-Bwgn-rBJY-Mz6yfInPAeUU",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411012243-Featured%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idD28eBtVH-HQJy-OjTo-cAwr-Fm3yC2fPDHGi",
                      "text": true,
                      "type": "text",
                      "v": "Basic plan"
                  },
                  {
                      "_id": "idcEvcs0M2-lPb5-7TT7-d5cq-yRLpe2x6fcWx",
                      "tag": "h5",
                      "classes": [
                          "Pricing-second-profile-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idD28eBtVH-HQJy-OjTo-cAwr-Fm3yC2fPDHGi"
                      ]
                  },
                  {
                      "_id": "idBFNKmyWj-T0Rs-aQxZ-jFpT-E3RU4j8Uad63",
                      "text": true,
                      "type": "text",
                      "v": "$10/mth"
                  },
                  {
                      "_id": "idnMgJuDoZ-7gdt-TFJr-WMIC-zYIl6Uj2Q4Lh",
                      "tag": "h3",
                      "classes": [
                          "Pricing-second-profile-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idBFNKmyWj-T0Rs-aQxZ-jFpT-E3RU4j8Uad63"
                      ]
                  },
                  {
                      "_id": "idKt9S9OR9-7dIV-3trm-lRWL-5uXZU2a500Vg",
                      "text": true,
                      "type": "text",
                      "v": "Billed annually."
                  },
                  {
                      "_id": "id6jY57xzP-WT7h-SsNm-9bwO-o98TR7XdFTxt",
                      "tag": "p",
                      "classes": [
                          "Pricing-second-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idKt9S9OR9-7dIV-3trm-lRWL-5uXZU2a500Vg"
                      ]
                  },
                  {
                      "_id": "idwNccf2Gl-Ywo3-Ocbg-kiH6-Y2kryY5CiV9o",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idcEvcs0M2-lPb5-7TT7-d5cq-yRLpe2x6fcWx",
                          "idnMgJuDoZ-7gdt-TFJr-WMIC-zYIl6Uj2Q4Lh",
                          "id6jY57xzP-WT7h-SsNm-9bwO-o98TR7XdFTxt"
                      ]
                  },
                  {
                      "_id": "iduisoRMH9-asls-2YBt-RS4W-4eoICIVrk0VA",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idNbhK5vjp-Yeka-Bwgn-rBJY-Mz6yfInPAeUU",
                          "idwNccf2Gl-Ywo3-Ocbg-kiH6-Y2kryY5CiV9o"
                      ]
                  },
                  {
                      "_id": "idbYsMdyo2-FEHl-g8bT-0RV4-zPT47qdaA9xb",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "ids6a2LZZy-8JLT-lIF5-Ng86-ljayLGLlQ94V",
                      "text": true,
                      "type": "text",
                      "v": "Access to all basic features"
                  },
                  {
                      "_id": "idUvM9yiqM-dsoD-nG59-m3Vl-UHOyh0vDTGV4",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "ids6a2LZZy-8JLT-lIF5-Ng86-ljayLGLlQ94V"
                      ]
                  },
                  {
                      "_id": "idZ9lXr4lk-Kzn9-3wIh-1TjI-q8BXV6vU4mO9",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idbYsMdyo2-FEHl-g8bT-0RV4-zPT47qdaA9xb",
                          "idUvM9yiqM-dsoD-nG59-m3Vl-UHOyh0vDTGV4"
                      ]
                  },
                  {
                      "_id": "idJD09i0oj-5Ryt-Ku9g-M9YK-8udNuX4q605C",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idOvwYamH0-wmvX-jXao-SBUt-DXvSCYjpoqrg",
                      "text": true,
                      "type": "text",
                      "v": "Basic reporting and analytics"
                  },
                  {
                      "_id": "idb3m6BKrb-AGdh-wegi-3v9U-vHV44nYK7gGF",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idOvwYamH0-wmvX-jXao-SBUt-DXvSCYjpoqrg"
                      ]
                  },
                  {
                      "_id": "idtxiK8Osm-bKkA-yZ6e-WfiH-Dgxn4d6cEZYR",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idJD09i0oj-5Ryt-Ku9g-M9YK-8udNuX4q605C",
                          "idb3m6BKrb-AGdh-wegi-3v9U-vHV44nYK7gGF"
                      ]
                  },
                  {
                      "_id": "idWqReLnEt-Mg4q-A2wY-PMeQ-DIQ5432RSwoG",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idEnf0nzHE-8mCV-dPbg-cmqi-LDVBOaIF4MND",
                      "text": true,
                      "type": "text",
                      "v": "Up to 10 individual users"
                  },
                  {
                      "_id": "idchBmrq74-qp9j-lXhv-cWTX-Zi6IbwUIdhyk",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idEnf0nzHE-8mCV-dPbg-cmqi-LDVBOaIF4MND"
                      ]
                  },
                  {
                      "_id": "idEPbkR4c0-d2K7-laK8-omYN-sOTJRJpJTNSe",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idWqReLnEt-Mg4q-A2wY-PMeQ-DIQ5432RSwoG",
                          "idchBmrq74-qp9j-lXhv-cWTX-Zi6IbwUIdhyk"
                      ]
                  },
                  {
                      "_id": "idyQ9KVINw-eG8J-iftG-nO8I-ZDbC7ffObh37",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idPlPK4gVj-24rx-OqZY-vdYA-uNnG0epLNcs2",
                      "text": true,
                      "type": "text",
                      "v": "20GB individual data each user"
                  },
                  {
                      "_id": "idZg86P6EP-b2WS-t7a4-gV37-QfVKLo2UxkSh",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idPlPK4gVj-24rx-OqZY-vdYA-uNnG0epLNcs2"
                      ]
                  },
                  {
                      "_id": "idLqcOTxTE-RNkg-aynm-icjM-Asxa5eoDOzm2",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idyQ9KVINw-eG8J-iftG-nO8I-ZDbC7ffObh37",
                          "idZg86P6EP-b2WS-t7a4-gV37-QfVKLo2UxkSh"
                      ]
                  },
                  {
                      "_id": "idWvoHndtb-6TAL-4XqK-sOo8-3uzcL4AnQw6i",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idocIGrYPT-xFTN-pLvJ-qrwK-XadsahBeKZzI",
                      "text": true,
                      "type": "text",
                      "v": "Basic chat and email support"
                  },
                  {
                      "_id": "idq7pUeGQy-4EGC-kHxc-7cvy-ZlZaWHXvnPen",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idocIGrYPT-xFTN-pLvJ-qrwK-XadsahBeKZzI"
                      ]
                  },
                  {
                      "_id": "idG8lrnKcX-zhkw-7yE5-XHl1-M9xQNVMr3tvK",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idWvoHndtb-6TAL-4XqK-sOo8-3uzcL4AnQw6i",
                          "idq7pUeGQy-4EGC-kHxc-7cvy-ZlZaWHXvnPen"
                      ]
                  },
                  {
                      "_id": "idpSNJthkO-jd2v-XdiX-wDVh-YR1Xs9gHmKWQ",
                      "tag": "ul",
                      "classes": [
                          "Pricing-second-section-second-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idZ9lXr4lk-Kzn9-3wIh-1TjI-q8BXV6vU4mO9",
                          "idtxiK8Osm-bKkA-yZ6e-WfiH-Dgxn4d6cEZYR",
                          "idEPbkR4c0-d2K7-laK8-omYN-sOTJRJpJTNSe",
                          "idLqcOTxTE-RNkg-aynm-icjM-Asxa5eoDOzm2",
                          "idG8lrnKcX-zhkw-7yE5-XHl1-M9xQNVMr3tvK"
                      ]
                  },
                  {
                      "_id": "idCSHACVBR-StG2-GcJT-MKAZ-5iJe250jRS9u",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-section-second-ul-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idpSNJthkO-jd2v-XdiX-wDVh-YR1Xs9gHmKWQ"
                      ]
                  },
                  {
                      "_id": "idc30oiZk3-Ytjv-ObkG-aVqe-9Jia3TvxVUqT",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "id2yA76CYj-lQM0-Gebh-9p34-TyX7j5uDsdPt",
                      "tag": "button",
                      "classes": [
                          "Pricing-second-card-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idc30oiZk3-Ytjv-ObkG-aVqe-9Jia3TvxVUqT"
                      ]
                  },
                  {
                      "_id": "idCSclRFS3-iGkY-UN8z-0BPh-smoCCv4iAgc3",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id2yA76CYj-lQM0-Gebh-9p34-TyX7j5uDsdPt"
                      ]
                  },
                  {
                      "_id": "id0XtDIo00-G5n0-5YUb-u0zO-ajYKQJ55mMuH",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iduisoRMH9-asls-2YBt-RS4W-4eoICIVrk0VA",
                          "idCSHACVBR-StG2-GcJT-MKAZ-5iJe250jRS9u",
                          "idCSclRFS3-iGkY-UN8z-0BPh-smoCCv4iAgc3"
                      ]
                  },
                  {
                      "_id": "idTlzIo0y7-SVd4-DE5K-3ffg-2CETUSb1WIA9",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411012243-Featured%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idwQ8b0GoH-8VCB-eFG9-MIi4-XqB8H0lQgwpw",
                      "text": true,
                      "type": "text",
                      "v": "Basic plan"
                  },
                  {
                      "_id": "idVCKiejZx-mIdP-lQkU-EZAY-rdzWtFmBheTb",
                      "tag": "h5",
                      "classes": [
                          "Pricing-second-profile-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idwQ8b0GoH-8VCB-eFG9-MIi4-XqB8H0lQgwpw"
                      ]
                  },
                  {
                      "_id": "idh7Lh3ZaQ-K5E8-gEHt-wD5d-UfD4Byq7VIrz",
                      "text": true,
                      "type": "text",
                      "v": "$10/mth"
                  },
                  {
                      "_id": "idcRMcvLuc-SfoW-1NTY-YjZH-mSMalXY7Wnf1",
                      "tag": "h3",
                      "classes": [
                          "Pricing-second-profile-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idh7Lh3ZaQ-K5E8-gEHt-wD5d-UfD4Byq7VIrz"
                      ]
                  },
                  {
                      "_id": "id4IEU6oPn-E52e-Olh6-1Cqf-u9BGPrPkTBV8",
                      "text": true,
                      "type": "text",
                      "v": "Billed annually."
                  },
                  {
                      "_id": "id02vTxNN7-YGBY-qpuN-47S6-8CWVGlXLj6Tj",
                      "tag": "p",
                      "classes": [
                          "Pricing-second-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id4IEU6oPn-E52e-Olh6-1Cqf-u9BGPrPkTBV8"
                      ]
                  },
                  {
                      "_id": "id0gIDBR7g-iaPf-k7cK-SnSr-7WvFZhhtbLLL",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idVCKiejZx-mIdP-lQkU-EZAY-rdzWtFmBheTb",
                          "idcRMcvLuc-SfoW-1NTY-YjZH-mSMalXY7Wnf1",
                          "id02vTxNN7-YGBY-qpuN-47S6-8CWVGlXLj6Tj"
                      ]
                  },
                  {
                      "_id": "id6Ojp0Wa7-aFeH-w9FP-ILoq-3vqmlzrHbFFs",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idTlzIo0y7-SVd4-DE5K-3ffg-2CETUSb1WIA9",
                          "id0gIDBR7g-iaPf-k7cK-SnSr-7WvFZhhtbLLL"
                      ]
                  },
                  {
                      "_id": "idEobndXmg-ywX6-Y8UG-PAid-OixqWTIx8JeV",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idr6aJNQAu-71Z6-FZ6f-aJyT-ziE7CcrV3Opv",
                      "text": true,
                      "type": "text",
                      "v": "Access to all basic features"
                  },
                  {
                      "_id": "idliQmK1Mr-EdCf-1uqg-GHBB-qg5s4J2EBmYh",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idr6aJNQAu-71Z6-FZ6f-aJyT-ziE7CcrV3Opv"
                      ]
                  },
                  {
                      "_id": "idWAK2E9oF-MSbW-LBjp-lg3G-sUtgpCo8ONO7",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idEobndXmg-ywX6-Y8UG-PAid-OixqWTIx8JeV",
                          "idliQmK1Mr-EdCf-1uqg-GHBB-qg5s4J2EBmYh"
                      ]
                  },
                  {
                      "_id": "idoLiw2doZ-4Msx-hKSE-Ok8X-3YmQlmrO1ebM",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id8WwGXSA1-xHFX-qFwP-7syP-eyoQiOk2BGNB",
                      "text": true,
                      "type": "text",
                      "v": "Basic reporting and analytics"
                  },
                  {
                      "_id": "idHVvh9ogZ-g3XM-B4lp-6WKZ-SE5zNJHvP4ZU",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "id8WwGXSA1-xHFX-qFwP-7syP-eyoQiOk2BGNB"
                      ]
                  },
                  {
                      "_id": "idchPwbJsL-iqQU-TjQR-ZpZs-12YT3Ne4jWqf",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idoLiw2doZ-4Msx-hKSE-Ok8X-3YmQlmrO1ebM",
                          "idHVvh9ogZ-g3XM-B4lp-6WKZ-SE5zNJHvP4ZU"
                      ]
                  },
                  {
                      "_id": "idMKuUHpA0-0ivx-l3ok-T7Ib-hjf8nI0MInm1",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idpPruJtum-5GKw-YAoo-mvIl-7GM7x7AmGEtB",
                      "text": true,
                      "type": "text",
                      "v": "Up to 10 individual users"
                  },
                  {
                      "_id": "idjsnviVSy-jKTJ-y755-GTkU-HDL1bFdmubKn",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idpPruJtum-5GKw-YAoo-mvIl-7GM7x7AmGEtB"
                      ]
                  },
                  {
                      "_id": "idkLPN4r28-vQEf-YxMX-gz9r-hDap4lQRT5RC",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idMKuUHpA0-0ivx-l3ok-T7Ib-hjf8nI0MInm1",
                          "idjsnviVSy-jKTJ-y755-GTkU-HDL1bFdmubKn"
                      ]
                  },
                  {
                      "_id": "idnRPHQpwu-Bdaa-x469-mAMB-88rbqDEC1XR0",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idsgWZUZ8T-nvfW-uQDu-KLGE-KeDPp9kCw1rK",
                      "text": true,
                      "type": "text",
                      "v": "20GB individual data each user"
                  },
                  {
                      "_id": "idwoVqgZT0-I7ct-orqB-paL8-huukdPUA36bm",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idsgWZUZ8T-nvfW-uQDu-KLGE-KeDPp9kCw1rK"
                      ]
                  },
                  {
                      "_id": "idXE7Ucas5-DYJU-tLIZ-3jgu-d53SV782nb1R",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idnRPHQpwu-Bdaa-x469-mAMB-88rbqDEC1XR0",
                          "idwoVqgZT0-I7ct-orqB-paL8-huukdPUA36bm"
                      ]
                  },
                  {
                      "_id": "idSEZdX5u4-vHky-KvPd-Gwqr-GSj0JCZTCqhK",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idmLApiDoP-Vvwv-jfKd-rzSE-LtYfAyeBbXyW",
                      "text": true,
                      "type": "text",
                      "v": "Basic chat and email support"
                  },
                  {
                      "_id": "idEu2nFd6i-4ihA-MIH0-wwl8-8F3ezMfO7q9l",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idmLApiDoP-Vvwv-jfKd-rzSE-LtYfAyeBbXyW"
                      ]
                  },
                  {
                      "_id": "idGN5JpLuu-VZ7F-N8Ko-gneK-FhKok7Byt0aF",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idSEZdX5u4-vHky-KvPd-Gwqr-GSj0JCZTCqhK",
                          "idEu2nFd6i-4ihA-MIH0-wwl8-8F3ezMfO7q9l"
                      ]
                  },
                  {
                      "_id": "idp2ELUsq1-ljrh-mTEx-WwTG-qkKynUaSwc59",
                      "tag": "ul",
                      "classes": [
                          "Pricing-second-section-second-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idWAK2E9oF-MSbW-LBjp-lg3G-sUtgpCo8ONO7",
                          "idchPwbJsL-iqQU-TjQR-ZpZs-12YT3Ne4jWqf",
                          "idkLPN4r28-vQEf-YxMX-gz9r-hDap4lQRT5RC",
                          "idXE7Ucas5-DYJU-tLIZ-3jgu-d53SV782nb1R",
                          "idGN5JpLuu-VZ7F-N8Ko-gneK-FhKok7Byt0aF"
                      ]
                  },
                  {
                      "_id": "idy4kzPx8D-Oey5-Vils-CkCQ-aBvUD5tTDu9G",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-section-second-ul-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idp2ELUsq1-ljrh-mTEx-WwTG-qkKynUaSwc59"
                      ]
                  },
                  {
                      "_id": "idGwgc5n5j-loDM-wBUu-QxNb-SeyV6iKwY3rz",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "idT8B3vvB7-MaST-ozC5-Ebt9-Anmti64dxzvd",
                      "tag": "button",
                      "classes": [
                          "Pricing-second-card-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idGwgc5n5j-loDM-wBUu-QxNb-SeyV6iKwY3rz"
                      ]
                  },
                  {
                      "_id": "id9BxGj64v-k1Ez-TSGS-3t9S-N2qOh2MOZgKM",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idT8B3vvB7-MaST-ozC5-Ebt9-Anmti64dxzvd"
                      ]
                  },
                  {
                      "_id": "idqMH0rCIJ-kPiR-0dlG-EAWq-dIrSRF7KfMNo",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6Ojp0Wa7-aFeH-w9FP-ILoq-3vqmlzrHbFFs",
                          "idy4kzPx8D-Oey5-Vils-CkCQ-aBvUD5tTDu9G",
                          "id9BxGj64v-k1Ez-TSGS-3t9S-N2qOh2MOZgKM"
                      ]
                  },
                  {
                      "_id": "idN0JeD9oz-iZjw-5RtI-kVcG-N20QL9gT8Y9u",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411012243-Featured%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idmqX5PII5-T5IU-Q8H7-Q9IE-5H9eQeg9QRgu",
                      "text": true,
                      "type": "text",
                      "v": "Basic plan"
                  },
                  {
                      "_id": "idliFMXJRw-5jMr-pbYi-3Vyv-50Jy92HB2bLW",
                      "tag": "h5",
                      "classes": [
                          "Pricing-second-profile-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idmqX5PII5-T5IU-Q8H7-Q9IE-5H9eQeg9QRgu"
                      ]
                  },
                  {
                      "_id": "idvnYewTdk-8bG7-gvkU-e5ws-muJOYZPQg4w1",
                      "text": true,
                      "type": "text",
                      "v": "$10/mth"
                  },
                  {
                      "_id": "idyvsDe1my-3p2z-2mIR-8WR4-HppoqnfmRBIJ",
                      "tag": "h3",
                      "classes": [
                          "Pricing-second-profile-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idvnYewTdk-8bG7-gvkU-e5ws-muJOYZPQg4w1"
                      ]
                  },
                  {
                      "_id": "idLyCRLq3v-VacU-WkCn-VjwS-hyFHdsXm4BFb",
                      "text": true,
                      "type": "text",
                      "v": "Billed annually."
                  },
                  {
                      "_id": "id61s5DLEJ-hLxI-XmvH-1jac-E5gAzd9d0uJk",
                      "tag": "p",
                      "classes": [
                          "Pricing-second-profile-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idLyCRLq3v-VacU-WkCn-VjwS-hyFHdsXm4BFb"
                      ]
                  },
                  {
                      "_id": "idZG2rsSXd-JiAM-7UHd-ejxB-dUnVCyaAVZn3",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idliFMXJRw-5jMr-pbYi-3Vyv-50Jy92HB2bLW",
                          "idyvsDe1my-3p2z-2mIR-8WR4-HppoqnfmRBIJ",
                          "id61s5DLEJ-hLxI-XmvH-1jac-E5gAzd9d0uJk"
                      ]
                  },
                  {
                      "_id": "id6Xv9TS3w-Tva3-QXYj-vUKE-Yyjv3Bqzc01m",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-profile"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idN0JeD9oz-iZjw-5RtI-kVcG-N20QL9gT8Y9u",
                          "idZG2rsSXd-JiAM-7UHd-ejxB-dUnVCyaAVZn3"
                      ]
                  },
                  {
                      "_id": "idiaRxihYn-NWjg-OBx5-oYLC-qZxd03aUjjQA",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idObQe8MHM-5Lkx-uDGY-MKVK-BMpPpGvSHkLm",
                      "text": true,
                      "type": "text",
                      "v": "Access to all basic features"
                  },
                  {
                      "_id": "idWYv0JZrD-Yl3G-GhtQ-OCW5-BjaMD3gaiSHh",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idObQe8MHM-5Lkx-uDGY-MKVK-BMpPpGvSHkLm"
                      ]
                  },
                  {
                      "_id": "iddbh0AUnr-bjAB-Oeys-YfbZ-ExVqihhZFlln",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idiaRxihYn-NWjg-OBx5-oYLC-qZxd03aUjjQA",
                          "idWYv0JZrD-Yl3G-GhtQ-OCW5-BjaMD3gaiSHh"
                      ]
                  },
                  {
                      "_id": "idMHt4vY0n-9L13-INng-S6KC-Elqc8pTKFSVZ",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idaMbncX2r-17xV-Lsd2-uyhy-nIMYHC0ZfrTD",
                      "text": true,
                      "type": "text",
                      "v": "Basic reporting and analytics"
                  },
                  {
                      "_id": "idqzryruXq-Toku-z5yA-nbKk-9vBT9Pd96uNb",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idaMbncX2r-17xV-Lsd2-uyhy-nIMYHC0ZfrTD"
                      ]
                  },
                  {
                      "_id": "idyskjHoSF-VvOy-yTWg-Q07o-AdcPGQ2z4pgB",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idMHt4vY0n-9L13-INng-S6KC-Elqc8pTKFSVZ",
                          "idqzryruXq-Toku-z5yA-nbKk-9vBT9Pd96uNb"
                      ]
                  },
                  {
                      "_id": "idPPHbn79A-dGt5-C2wj-vhTy-aA19J13rtmGU",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idrjtxPbqd-iTCE-YJGN-K3dz-XFhKf0z8z8ok",
                      "text": true,
                      "type": "text",
                      "v": "Up to 10 individual users"
                  },
                  {
                      "_id": "idirMMpPLh-yZJg-pavQ-FVjk-iIOcYAeP0zuW",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idrjtxPbqd-iTCE-YJGN-K3dz-XFhKf0z8z8ok"
                      ]
                  },
                  {
                      "_id": "idq0hEnUu6-KkD9-QNpD-b2dx-A8ENh1ToaoIz",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idPPHbn79A-dGt5-C2wj-vhTy-aA19J13rtmGU",
                          "idirMMpPLh-yZJg-pavQ-FVjk-iIOcYAeP0zuW"
                      ]
                  },
                  {
                      "_id": "idxfBQkJsJ-oHWU-XHQT-rYvY-lLLvEz6gYYaV",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idmdeC7o9z-BVMz-83NQ-k9Uq-OzYdI7sJOaLR",
                      "text": true,
                      "type": "text",
                      "v": "20GB individual data each user"
                  },
                  {
                      "_id": "idLEiPWmoU-dUG2-0udV-PwKj-KAy04JSfvHnR",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idmdeC7o9z-BVMz-83NQ-k9Uq-OzYdI7sJOaLR"
                      ]
                  },
                  {
                      "_id": "iduPBQnqcb-5KFc-NNaa-qh2u-kLgORo6cDyAV",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idxfBQkJsJ-oHWU-XHQT-rYvY-lLLvEz6gYYaV",
                          "idLEiPWmoU-dUG2-0udV-PwKj-KAy04JSfvHnR"
                      ]
                  },
                  {
                      "_id": "idwIh8d4Zh-vlHz-iTAQ-UFNQ-yhBxDzRzoJT1",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411058513-Check%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idM6V7DBss-ranG-SHRl-qv0m-48lDGOBhSvEj",
                      "text": true,
                      "type": "text",
                      "v": "Basic chat and email support"
                  },
                  {
                      "_id": "idUl6EPtQM-pzLX-MOO9-tTIP-PSWq7Wl1V32X",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idM6V7DBss-ranG-SHRl-qv0m-48lDGOBhSvEj"
                      ]
                  },
                  {
                      "_id": "id2lizhrSe-5eIv-2mFi-Vdmb-34cgynO1y10y",
                      "tag": "li",
                      "classes": [
                          "Pricing-second-section-second-list"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idwIh8d4Zh-vlHz-iTAQ-UFNQ-yhBxDzRzoJT1",
                          "idUl6EPtQM-pzLX-MOO9-tTIP-PSWq7Wl1V32X"
                      ]
                  },
                  {
                      "_id": "idjOPDkkzO-rDqv-jBs3-QvZK-TiZpOfDtcy8n",
                      "tag": "ul",
                      "classes": [
                          "Pricing-second-section-second-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "iddbh0AUnr-bjAB-Oeys-YfbZ-ExVqihhZFlln",
                          "idyskjHoSF-VvOy-yTWg-Q07o-AdcPGQ2z4pgB",
                          "idq0hEnUu6-KkD9-QNpD-b2dx-A8ENh1ToaoIz",
                          "iduPBQnqcb-5KFc-NNaa-qh2u-kLgORo6cDyAV",
                          "id2lizhrSe-5eIv-2mFi-Vdmb-34cgynO1y10y"
                      ]
                  },
                  {
                      "_id": "idN47J9zIY-5OAE-c1KV-UDUk-VeOehj8ETkk6",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-section-second-ul-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idjOPDkkzO-rDqv-jBs3-QvZK-TiZpOfDtcy8n"
                      ]
                  },
                  {
                      "_id": "idjTFKsdCd-K7nQ-MuHf-EFbE-8KyPFey6B2bh",
                      "text": true,
                      "type": "text",
                      "v": "Get Started"
                  },
                  {
                      "_id": "idXcEPjXHQ-3UwY-aAoq-kzJu-mchCushJVWc5",
                      "tag": "button",
                      "classes": [
                          "Pricing-second-card-btn"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idjTFKsdCd-K7nQ-MuHf-EFbE-8KyPFey6B2bh"
                      ]
                  },
                  {
                      "_id": "idsnReva4H-s8OV-IUjk-zoK6-4qfIuVkT1B1E",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idXcEPjXHQ-3UwY-aAoq-kzJu-mchCushJVWc5"
                      ]
                  },
                  {
                      "_id": "idokUeveL0-HD8M-BGI6-EQz7-GUzmjqef4IRE",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6Xv9TS3w-Tva3-QXYj-vUKE-Yyjv3Bqzc01m",
                          "idN47J9zIY-5OAE-c1KV-UDUk-VeOehj8ETkk6",
                          "idsnReva4H-s8OV-IUjk-zoK6-4qfIuVkT1B1E"
                      ]
                  },
                  {
                      "_id": "id9oZe8AEW-abnI-ZWEN-IWNW-iqCMSRcnlbyY",
                      "tag": "div",
                      "classes": [
                          "Pricing-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id0XtDIo00-G5n0-5YUb-u0zO-ajYKQJ55mMuH",
                          "idqMH0rCIJ-kPiR-0dlG-EAWq-dIrSRF7KfMNo",
                          "idokUeveL0-HD8M-BGI6-EQz7-GUzmjqef4IRE"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "8d5ba303-bc44-4b28-a751-f652bc02795f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second",
                          "styleLess": "display: flex; padding: 50px 29.803px; flex-direction: column; align-items: flex-start; gap: 59.606px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a6a99fda-dd46-4473-b436-10cf395769c7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-first",
                          "styleLess": "display: flex; flex-direction: column; gap: 0.667px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "787d244f-5831-4a49-94f8-0eca9b62bdb8",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-first-span",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c9955107-647f-4d3d-81ff-1cfdd4674f5f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 22px; margin: 12px 0px; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "0fc8620b-b529-4f4b-a7b3-28784d6dd994",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 17px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6b762f16-4bfa-414b-9a59-3660060c16ad",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; gap: 25px; width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2de291b4-d483-4b3a-85b0-1f7f8e798cca",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-card",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; border-radius: 14.901px; border: 0.931px solid var(--Gray-200, #EAECF0); background: var(--Base-White, #FFF); box-shadow: rgba(16, 24, 40, 0.03) 0px 3.725px 5.588px -1.863px, rgba(16, 24, 40, 0.08) 0px 11.176px 14.901px -3.725px; min-width: 200px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3d9b00ee-4a83-4ab9-a5f6-239585375315",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-profile",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 14.236px; align-self: stretch; padding: 18.208px 18.208px 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "34ccc636-7a46-44de-b997-c4d031fe5d30",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-profile-p",
                          "styleLess": "margin: 0px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14.236px; font-style: normal; text-align: center; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e14c4404-5e63-4b72-ae8b-42cea09fc342",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-profile-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Inter; font-size: 14px; font-style: normal; font-weight: 600; line-height: 17.07px; margin: 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "1cc6f603-3f06-406a-96c2-2d96100f1a55",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-profile-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); text-align: center; font-family: Inter; font-size: 27.311px; font-style: normal; margin: 12px 0px; font-weight: 600; line-height: 34.139px; letter-spacing: -0.546px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5744d814-35df-41c4-a0d5-ab848be032c8",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-second-ul-container",
                          "styleLess": "width: 100%; display: flex; justify-content: center;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9212f4cc-d87b-474d-aceb-f54d21e4a33e",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-second-ul",
                          "styleLess": "display: flex; padding: 18.208px; flex-direction: column; align-items: flex-start; gap: 13.656px; align-self: stretch; width: fit-content;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b13c07c3-5eb4-4df0-9d3b-52f4a3ae15de",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-section-second-list",
                          "styleLess": "display: flex; align-items: flex-start; gap: 6.828px; align-self: stretch; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13.656px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "80b11eec-dee6-4436-b8a1-ed98d784634a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-card-btn-container",
                          "styleLess": "display: flex; padding: 0px 29.208px 29.208px; justify-content: center; gap: 13.656px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "765465b2-2c13-4ad4-821d-bfce81d86409",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Pricing-second-card-btn",
                          "styleLess": "padding: 10px 12px; border-radius: 4.552px; border: 0.569px solid var(--Gray-800, #1D2939); background: var(--Gray-800, #1D2939); box-shadow: rgba(16, 24, 40, 0.05) 0px 0.569px 1.138px 0px; color: var(--Base-White, #FFF); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 600; line-height: 13.656px; width: 70%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "08c00583-ee28-4242-b8e8-ca665ef9024b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Pricing-second-section-second { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "676991ab-f840-4d2e-ba8d-4bfdb6e2c51f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Pricing-second-section-first-span { font-size: 14.901px; line-height: 22.352px; }  .Pricing-second-card { width: 350px; }  .Pricing-second-section-first-h3 { font-size: 33.528px; line-height: 40.979px; letter-spacing: -0.671px; }  .Pricing-second-section-first-p { font-size: 16.764px; line-height: 26.077px; }  .Pricing-second-section-second { gap: 39px; }  .Pricing-second-profile { padding: 39.803px 29.803px 0px; }  .Pricing-second-section-second-ul { padding: 39.803px; }  .Pricing-second-profile-h5 { font-size: 18.627px; line-height: 27.94px; }  .Pricing-second-profile-h3 { font-size: 44.704px; line-height: 55.88px; letter-spacing: -0.894px; }  .Pricing-second-profile-p { font-size: 14.901px; line-height: 22.352px; }  .Pricing-second-card-btn-container { padding: 39.803px; }  .Pricing-second-card-btn { padding: 11.176px 18.627px; font-size: 16px; line-height: 22.352px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],

              },
            }
          ],
        }
      },
      {
        _id: "00004027636730", tag: "div", type: "Team", label: "Team", icon: "layout-team", media: { img_url: "https://d3e54v103j8qbb.cloudfront.net/img/pbl-LayoutTeamCircles-preview@2x.e493c59c1d.png" },
        data: {
          options: [
            {
              id: "TM-001",
              label: "Team 4",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751908461-Desktop%20Team%20section.png",
              node: [
                  {
                      "_id": "id7hyo22bG-sdrN-sZ5I-LJNn-gjcstf0OwSAN",
                      "tag": "div",
                      "classes": [
                          "Team-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "ide6B3UAs3-9MVC-ctCO-roKW-oO5cX00B1He6",
                          "idampeCUbj-HXjU-V3wd-88m0-LfdPeTOa9ZCs"
                      ]
                  },
                  {
                      "_id": "idqtWz658Q-vHnt-QzWs-Vsul-OrKNFXWNNmcH",
                      "text": true,
                      "type": "text",
                      "v": "Our team"
                  },
                  {
                      "_id": "idyxLlAh9G-Q4Ok-KNsE-p4fq-gX70WDr9SH0x",
                      "tag": "span",
                      "classes": [
                          "Team-first-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idqtWz658Q-vHnt-QzWs-Vsul-OrKNFXWNNmcH"
                      ]
                  },
                  {
                      "_id": "idnbzbicKU-NiJs-1yA7-wLoQ-aAYQEJU6E8zY",
                      "text": true,
                      "type": "text",
                      "v": "Leadership team"
                  },
                  {
                      "_id": "idBPXLOmGI-vhZx-csHy-T0ib-RKvrUCMJfmYh",
                      "tag": "h3",
                      "classes": [
                          "Team-first-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idnbzbicKU-NiJs-1yA7-wLoQ-aAYQEJU6E8zY"
                      ]
                  },
                  {
                      "_id": "idqS75K3ut-y6gw-Bqhz-2xkI-yVxQVzMlaOu0",
                      "text": true,
                      "type": "text",
                      "v": "We're a cross-disciplinary team with a wealth of experience that loves to create great experiences for our customers."
                  },
                  {
                      "_id": "idyU4qngxJ-r998-RxOt-VKcI-hncjaZKJgGv6",
                      "tag": "p",
                      "classes": [
                          "Team-first-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idqS75K3ut-y6gw-Bqhz-2xkI-yVxQVzMlaOu0"
                      ]
                  },
                  {
                      "_id": "ide6B3UAs3-9MVC-ctCO-roKW-oO5cX00B1He6",
                      "tag": "div",
                      "classes": [
                          "Team-first-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idyxLlAh9G-Q4Ok-KNsE-p4fq-gX70WDr9SH0x",
                          "idBPXLOmGI-vhZx-csHy-T0ib-RKvrUCMJfmYh",
                          "idyU4qngxJ-r998-RxOt-VKcI-hncjaZKJgGv6"
                      ]
                  },
                  {
                      "_id": "idSWZlF7Gt-0Pwy-8LVu-PGUP-rNpePYN87oCF",
                      "tag": "img",
                      "classes": [
                          "Team-first-card-img"
                      ],
                      "data": {
                          "src": "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idiidOqRuK-62KT-vIy8-r4mw-ZrjpgnbRKAKf",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idSWZlF7Gt-0Pwy-8LVu-PGUP-rNpePYN87oCF"
                      ]
                  },
                  {
                      "_id": "idLzHJFm3s-0CFt-uQ40-2ptg-XdstywBaGdGM",
                      "text": true,
                      "type": "text",
                      "v": "Olivia Rhye"
                  },
                  {
                      "_id": "idbq60fQ1s-bZNC-d6xI-AS3h-aysPVE4bSN3K",
                      "tag": "h5",
                      "classes": [
                          "Team-first-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idLzHJFm3s-0CFt-uQ40-2ptg-XdstywBaGdGM"
                      ]
                  },
                  {
                      "_id": "id57FaOpXV-DFv9-FMGx-6vpO-tBkwCPLBReYt",
                      "text": true,
                      "type": "text",
                      "v": "Founder & CEO"
                  },
                  {
                      "_id": "idjF9Gllsl-MJjP-aSgL-Z9Td-lnV8HgCt9Fwg",
                      "tag": "h6",
                      "classes": [
                          "Team-first-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "id57FaOpXV-DFv9-FMGx-6vpO-tBkwCPLBReYt"
                      ]
                  },
                  {
                      "_id": "idzM8aiNgE-R152-mkXX-uS5b-DCxvr2PCQJcA",
                      "text": true,
                      "type": "text",
                      "v": "Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                  },
                  {
                      "_id": "idd8x677zJ-vqdc-FaYl-9258-iFELnSORI7en",
                      "tag": "p",
                      "classes": [
                          "Team-first-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idzM8aiNgE-R152-mkXX-uS5b-DCxvr2PCQJcA"
                      ]
                  },
                  {
                      "_id": "idLnq1JHez-TqUV-UpW0-OKwA-EotlZv13e7Vq",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idrchJjja8-y3M7-5JLg-xD1L-t9Eo5GfK3mof",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idLnq1JHez-TqUV-UpW0-OKwA-EotlZv13e7Vq"
                      ]
                  },
                  {
                      "_id": "idH5uzsXIC-4kxs-9cvq-9FzB-tWHpuQIlFcgH",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idwgHCf9CJ-cQRB-dq7f-bsHq-AFANO4yLqmvF",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idH5uzsXIC-4kxs-9cvq-9FzB-tWHpuQIlFcgH"
                      ]
                  },
                  {
                      "_id": "idRAn44Oag-yQ5g-BZl3-MWCS-hSDemS5BQrQ1",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id61V6H1Wm-oSSk-qrtY-7jO3-vAF3QcAG8XkS",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idRAn44Oag-yQ5g-BZl3-MWCS-hSDemS5BQrQ1"
                      ]
                  },
                  {
                      "_id": "idE9kPJew3-7IXo-l4il-4WRe-VmgK753Elb19",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idrchJjja8-y3M7-5JLg-xD1L-t9Eo5GfK3mof",
                          "idwgHCf9CJ-cQRB-dq7f-bsHq-AFANO4yLqmvF",
                          "id61V6H1Wm-oSSk-qrtY-7jO3-vAF3QcAG8XkS"
                      ]
                  },
                  {
                      "_id": "idamyHogMM-H6I2-Fyye-F2dR-TXSLib7XUtFk",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idbq60fQ1s-bZNC-d6xI-AS3h-aysPVE4bSN3K",
                          "idjF9Gllsl-MJjP-aSgL-Z9Td-lnV8HgCt9Fwg",
                          "idd8x677zJ-vqdc-FaYl-9258-iFELnSORI7en",
                          "idE9kPJew3-7IXo-l4il-4WRe-VmgK753Elb19"
                      ]
                  },
                  {
                      "_id": "idtK3wZqKj-mpWu-P2l9-ylZ8-5FLl0IoaXNOy",
                      "tag": "div",
                      "classes": [
                          "Team-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idiidOqRuK-62KT-vIy8-r4mw-ZrjpgnbRKAKf",
                          "idamyHogMM-H6I2-Fyye-F2dR-TXSLib7XUtFk"
                      ]
                  },
                  {
                      "_id": "idIjAeawoN-iGVm-DRhu-KnAf-RTTZze9f5jbn",
                      "tag": "img",
                      "classes": [
                          "Team-first-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408856257-esther-jiao-ADv0GiMBlmI-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id4TDCqLhN-l49Y-kyvG-C2UI-mOJwstF8Zb3R",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idIjAeawoN-iGVm-DRhu-KnAf-RTTZze9f5jbn"
                      ]
                  },
                  {
                      "_id": "idb9ZqcchS-M7Q3-M0zH-MiCG-6ppuknvcZY08",
                      "text": true,
                      "type": "text",
                      "v": "Phoenix Baker"
                  },
                  {
                      "_id": "idKFtHT5QI-gNhz-MRQ6-ZMda-tF9Zc6Qx9NlK",
                      "tag": "h5",
                      "classes": [
                          "Team-first-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idb9ZqcchS-M7Q3-M0zH-MiCG-6ppuknvcZY08"
                      ]
                  },
                  {
                      "_id": "idbbjngrMN-c7nM-YMSH-oPUc-GsplIKnYPLHw",
                      "text": true,
                      "type": "text",
                      "v": "Engineering Manager"
                  },
                  {
                      "_id": "idO7e0H686-49kQ-Wxog-DUTV-FGyQvzoDtdKj",
                      "tag": "h6",
                      "classes": [
                          "Team-first-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idbbjngrMN-c7nM-YMSH-oPUc-GsplIKnYPLHw"
                      ]
                  },
                  {
                      "_id": "idIpchpgwC-YbOs-uaDo-e5dN-XHjPznyPpY7h",
                      "text": true,
                      "type": "text",
                      "v": "Lead engineering teams at Figma, Pitch, and Protocol Labs."
                  },
                  {
                      "_id": "idVXARbK8g-ltV5-9n2R-jNtt-WHxCBRNGiI1k",
                      "tag": "p",
                      "classes": [
                          "Team-first-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idIpchpgwC-YbOs-uaDo-e5dN-XHjPznyPpY7h"
                      ]
                  },
                  {
                      "_id": "idtqnAytrN-MOc1-xq6M-ZBww-ZdGgu89CD5X4",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idvHpXeQp6-maN6-PyRF-nSrZ-toxNINU2lpky",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idtqnAytrN-MOc1-xq6M-ZBww-ZdGgu89CD5X4"
                      ]
                  },
                  {
                      "_id": "id3XAe2xzb-ix0Q-TcCE-2XaR-vcQSRJrBBjE6",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idyiBBLa8u-UrAD-mCZe-ikAr-9Z1bHIj0080a",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "id3XAe2xzb-ix0Q-TcCE-2XaR-vcQSRJrBBjE6"
                      ]
                  },
                  {
                      "_id": "idCchMhVtH-3fso-Fi7G-JIMk-hW0MzAQDJKMY",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idZrCxSu7Q-LCrg-itAF-cGhF-2102wJlPIIdZ",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idCchMhVtH-3fso-Fi7G-JIMk-hW0MzAQDJKMY"
                      ]
                  },
                  {
                      "_id": "idbulwn4QX-IfIz-Lvao-T9cR-f7AooLQPeIoN",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idvHpXeQp6-maN6-PyRF-nSrZ-toxNINU2lpky",
                          "idyiBBLa8u-UrAD-mCZe-ikAr-9Z1bHIj0080a",
                          "idZrCxSu7Q-LCrg-itAF-cGhF-2102wJlPIIdZ"
                      ]
                  },
                  {
                      "_id": "idL008hIFU-Y9Bt-xUXv-WvEe-61bhu9Hmnl5Z",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idKFtHT5QI-gNhz-MRQ6-ZMda-tF9Zc6Qx9NlK",
                          "idO7e0H686-49kQ-Wxog-DUTV-FGyQvzoDtdKj",
                          "idVXARbK8g-ltV5-9n2R-jNtt-WHxCBRNGiI1k",
                          "idbulwn4QX-IfIz-Lvao-T9cR-f7AooLQPeIoN"
                      ]
                  },
                  {
                      "_id": "idzz3x9bl4-dQPf-BfEe-nmCi-m33gh6KGPDAW",
                      "tag": "div",
                      "classes": [
                          "Team-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id4TDCqLhN-l49Y-kyvG-C2UI-mOJwstF8Zb3R",
                          "idL008hIFU-Y9Bt-xUXv-WvEe-61bhu9Hmnl5Z"
                      ]
                  },
                  {
                      "_id": "idz7GvGhTu-6sZf-0Pkx-HuOk-rF6xNJpI86QY",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idtK3wZqKj-mpWu-P2l9-ylZ8-5FLl0IoaXNOy",
                          "idzz3x9bl4-dQPf-BfEe-nmCi-m33gh6KGPDAW"
                      ]
                  },
                  {
                      "_id": "idracPPvbX-wH5N-SwiJ-QH8x-JrpxPKb12Ayg",
                      "tag": "img",
                      "classes": [
                          "Team-first-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409207926-sardar-faizan-FPXFyGPOlrE-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idHqh1pOnp-y438-3VAO-OmBp-YUtqHRjKmrsv",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idracPPvbX-wH5N-SwiJ-QH8x-JrpxPKb12Ayg"
                      ]
                  },
                  {
                      "_id": "idiwQau6YM-OggK-AsBE-jHnG-oypQuNkNdWWZ",
                      "text": true,
                      "type": "text",
                      "v": "Drew Cano"
                  },
                  {
                      "_id": "idBCX4YRUV-Cwb1-IdOY-BDEu-A3OU4wpgQlSP",
                      "tag": "h5",
                      "classes": [
                          "Team-first-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idiwQau6YM-OggK-AsBE-jHnG-oypQuNkNdWWZ"
                      ]
                  },
                  {
                      "_id": "idZ6Y4MOTG-XR3V-KlTy-3Bl2-5vyCCEvv9O8r",
                      "text": true,
                      "type": "text",
                      "v": "UX Researcher"
                  },
                  {
                      "_id": "idw9Yi5XrP-3FD6-TSAe-sljC-g28ey7szy6Dp",
                      "tag": "h6",
                      "classes": [
                          "Team-first-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idZ6Y4MOTG-XR3V-KlTy-3Bl2-5vyCCEvv9O8r"
                      ]
                  },
                  {
                      "_id": "idapLJYp9B-fT3Q-2wrp-60Aw-9Mgoee4PH7qA",
                      "text": true,
                      "type": "text",
                      "v": "Lead user research for Slack. Contractor for Netflix and Udacity."
                  },
                  {
                      "_id": "idBZltlYKQ-JyKW-kIEp-e7Vg-gD1TNOBPPn09",
                      "tag": "p",
                      "classes": [
                          "Team-first-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idapLJYp9B-fT3Q-2wrp-60Aw-9Mgoee4PH7qA"
                      ]
                  },
                  {
                      "_id": "idQq8FvQgW-jHmR-0ycC-Oe16-a5ZVfe0PHWc8",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idGnOqjrx4-YN91-4AVP-tsJm-dymjPj1OZuBz",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idQq8FvQgW-jHmR-0ycC-Oe16-a5ZVfe0PHWc8"
                      ]
                  },
                  {
                      "_id": "idtUnLtOm0-bFDf-GAlj-OrGD-srMfZCVfxNJW",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idVp121FRE-b1EV-FltA-XfBD-NKqhYRC2E9rL",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idtUnLtOm0-bFDf-GAlj-OrGD-srMfZCVfxNJW"
                      ]
                  },
                  {
                      "_id": "idxqfsmNxp-eqqT-b7kO-wVov-FqsciS10Ppx8",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idM6sLFP24-0Y4z-aF4X-AsKp-rsMf7TZbY1FY",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idxqfsmNxp-eqqT-b7kO-wVov-FqsciS10Ppx8"
                      ]
                  },
                  {
                      "_id": "idPif9um4C-slKq-ZuGc-yLEn-2FFSaWjfcAiB",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idGnOqjrx4-YN91-4AVP-tsJm-dymjPj1OZuBz",
                          "idVp121FRE-b1EV-FltA-XfBD-NKqhYRC2E9rL",
                          "idM6sLFP24-0Y4z-aF4X-AsKp-rsMf7TZbY1FY"
                      ]
                  },
                  {
                      "_id": "idI77dRlZI-YvgQ-JJYd-nv3X-inw8AqEUwe1s",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idBCX4YRUV-Cwb1-IdOY-BDEu-A3OU4wpgQlSP",
                          "idw9Yi5XrP-3FD6-TSAe-sljC-g28ey7szy6Dp",
                          "idBZltlYKQ-JyKW-kIEp-e7Vg-gD1TNOBPPn09",
                          "idPif9um4C-slKq-ZuGc-yLEn-2FFSaWjfcAiB"
                      ]
                  },
                  {
                      "_id": "idV6TDnkEz-oKrY-4fc5-NIwC-HLfNVJnmNRE1",
                      "tag": "div",
                      "classes": [
                          "Team-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idHqh1pOnp-y438-3VAO-OmBp-YUtqHRjKmrsv",
                          "idI77dRlZI-YvgQ-JJYd-nv3X-inw8AqEUwe1s"
                      ]
                  },
                  {
                      "_id": "idCVm7j85Z-XHKN-kkg4-CHRC-Td0Eev71eloZ",
                      "tag": "img",
                      "classes": [
                          "Team-first-card-img"
                      ],
                      "data": {
                          "src": "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idocehFe1X-l5VI-9AJa-YdJl-buhkWjjBo9Kc",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idCVm7j85Z-XHKN-kkg4-CHRC-Td0Eev71eloZ"
                      ]
                  },
                  {
                      "_id": "idrxNzWE71-cpO6-EChh-w9oV-5tFRqh6yrV9G",
                      "text": true,
                      "type": "text",
                      "v": "Candice Wu"
                  },
                  {
                      "_id": "idYZoOCluI-Aa9i-tkno-n8vd-mkAepLQklLfC",
                      "tag": "h5",
                      "classes": [
                          "Team-first-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idrxNzWE71-cpO6-EChh-w9oV-5tFRqh6yrV9G"
                      ]
                  },
                  {
                      "_id": "idJSyoLrRD-DUJU-lTGT-iCii-JJsD3bOoEjoD",
                      "text": true,
                      "type": "text",
                      "v": "Backend Developer"
                  },
                  {
                      "_id": "idNE8qR3JU-P64u-rD4z-8nmm-Gl5caeKExMcB",
                      "tag": "h6",
                      "classes": [
                          "Team-first-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idJSyoLrRD-DUJU-lTGT-iCii-JJsD3bOoEjoD"
                      ]
                  },
                  {
                      "_id": "id84ipSmpk-vJeV-Qpuv-IdJY-pQhcXIg8KW6c",
                      "text": true,
                      "type": "text",
                      "v": "Lead backend dev at Clearbit. Former Clearbit and Loom."
                  },
                  {
                      "_id": "idSWsTMVp4-ckwe-3M0x-zSPq-3VKtY3hze8zc",
                      "tag": "p",
                      "classes": [
                          "Team-first-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "id84ipSmpk-vJeV-Qpuv-IdJY-pQhcXIg8KW6c"
                      ]
                  },
                  {
                      "_id": "idOnBzh8rG-Cmdd-x7er-Ri51-KL9xOeQXrSEs",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idJh2CaKeP-3zys-Ciwn-wrHB-XebzKzrNgmof",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idOnBzh8rG-Cmdd-x7er-Ri51-KL9xOeQXrSEs"
                      ]
                  },
                  {
                      "_id": "idqB8Fympu-5FqX-KrU3-3cTH-O1pN4guPxMBU",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idPGeneypx-kQEX-xZX4-STKN-arOIOOWjoR32",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idqB8Fympu-5FqX-KrU3-3cTH-O1pN4guPxMBU"
                      ]
                  },
                  {
                      "_id": "idElbqLbRp-BY19-PMz8-WXa8-0nhKJvrHWIKq",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idUYDTxSDo-CEuB-yeHx-LdpK-IYpo6J3UGj50",
                      "tag": "a",
                      "classes": [
                          "Team-first-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idElbqLbRp-BY19-PMz8-WXa8-0nhKJvrHWIKq"
                      ]
                  },
                  {
                      "_id": "iduMUjF96B-F6ZB-h2C9-ZNTD-mYzBy9GcMXaz",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idJh2CaKeP-3zys-Ciwn-wrHB-XebzKzrNgmof",
                          "idPGeneypx-kQEX-xZX4-STKN-arOIOOWjoR32",
                          "idUYDTxSDo-CEuB-yeHx-LdpK-IYpo6J3UGj50"
                      ]
                  },
                  {
                      "_id": "idrUki79wk-kmgz-N5BD-m1aB-52IIOy8btXfS",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idYZoOCluI-Aa9i-tkno-n8vd-mkAepLQklLfC",
                          "idNE8qR3JU-P64u-rD4z-8nmm-Gl5caeKExMcB",
                          "idSWsTMVp4-ckwe-3M0x-zSPq-3VKtY3hze8zc",
                          "iduMUjF96B-F6ZB-h2C9-ZNTD-mYzBy9GcMXaz"
                      ]
                  },
                  {
                      "_id": "idJ9iHy5Qv-Z8ub-A1Ny-ELlu-YBrB2S3ruxNG",
                      "tag": "div",
                      "classes": [
                          "Team-first-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idocehFe1X-l5VI-9AJa-YdJl-buhkWjjBo9Kc",
                          "idrUki79wk-kmgz-N5BD-m1aB-52IIOy8btXfS"
                      ]
                  },
                  {
                      "_id": "idYhsjIySN-j5Lr-vvQg-XKAm-1WPprsVUz7va",
                      "tag": "div",
                      "classes": [
                          "Team-first-card-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idV6TDnkEz-oKrY-4fc5-NIwC-HLfNVJnmNRE1",
                          "idJ9iHy5Qv-Z8ub-A1Ny-ELlu-YBrB2S3ruxNG"
                      ]
                  },
                  {
                      "_id": "idampeCUbj-HXjU-V3wd-88m0-LfdPeTOa9ZCs",
                      "tag": "div",
                      "classes": [
                          "Team-first-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idz7GvGhTu-6sZf-0Pkx-HuOk-rF6xNJpI86QY",
                          "idYhsjIySN-j5Lr-vvQg-XKAm-1WPprsVUz7va"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "66ff5b82-a939-4366-aa87-5cc7caa456b5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first",
                          "styleLess": "display: flex; padding: 50px 29.803px; flex-direction: column; align-items: flex-start; gap: 59.606px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "04540582-696a-480c-9c43-92566c5d39c5",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-section-first",
                          "styleLess": "display: flex; flex-direction: column; gap: 0.667px; padding-bottom: 50px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2ba2f66a-226b-415a-bd05-70082db5f3fc",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-section-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "2eed34c6-d7e6-4607-aa2b-7b7eeef8e84f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 22px; margin: 12px 0px; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "57125e1c-28c2-4809-b020-1d088b936132",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-section-first-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 17px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ef098672-4a61-404c-93f8-e2aeef273820",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; gap: 35px; width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f341fdfe-f14e-483d-8fba-d1bd7332e926",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-container",
                          "styleLess": "display: flex; align-items: flex-start; flex-direction: column; gap: 29.774px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "1801348d-7ee1-4881-8790-c03f6bde0785",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card",
                          "styleLess": "display: flex; align-items: flex-start; gap: 24.191px; max-width: 600px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "59db8da2-fb1c-4c05-ac46-b3667b1f4a89",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-img-container",
                          "styleLess": "flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7b3c1d5e-2fa1-4e78-9dd7-1a80c16241aa",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-img",
                          "styleLess": "width: 100%; height: 100%; max-width: 270px; max-height: 270px; object-position: center center; object-fit: cover;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "8f6afa8c-c957-4788-b42e-6e7b6dfa2ff8",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-text",
                          "styleLess": "flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4c187cd0-0dfe-4929-947e-d8807c17701a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; margin: 10px 0px; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e143c5cb-5b3d-4056-b5e9-390ee070d704",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 16px; font-style: normal; margin: 10px 0px; font-weight: 600; line-height: 18.19px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "efa19f87-6597-4c84-a95b-f804e76a1c14",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-h6",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 14px; font-style: normal; margin: 10px 0px; font-weight: 400; line-height: 26.052px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d40d6533-6388-4664-a8e3-2c7622cf8a57",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-first-card-icons-a",
                          "styleLess": "text-decoration: none; padding: 2px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ea2c3b3f-284b-46a1-a5b4-2e5dcfa83d62",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Team-first-card-container { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c50c3ac6-ad61-4bcd-be34-cd341e436892",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Team-first-section-first-span { font-size: 14.901px; line-height: 22.352px; }  .Team-first-section-first-h3 { font-size: 33.528px; line-height: 40.979px; letter-spacing: -0.671px; }  .Team-first-section-first-p { font-size: 16.764px; line-height: 26.077px; }  .Team-first-section-second { gap: 39px; }  .Team-first-profile { padding: 39.803px 29.803px 0px; }  .Team-first-card-h5 { font-size: 22px; line-height: 29.774px; }  .Team-first-card-h6 { font-size: 16px; line-height: 18.774px; }  .Team-first-card-p { font-size: 14.901px; line-height: 16px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],
              },
            },
            {
              id: "TM-002",
              label: "Team 6",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715751999847-Desktop%20Team%20section%20%281%29.png",
              node: [
                  {
                      "_id": "idlF8BYW4d-4b8q-0wCA-5TP0-krM2iF9SyHuy",
                      "tag": "div",
                      "classes": [
                          "Team-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id2VoyAoaN-3ryz-g9KE-mxwy-xLRy7Uig9IAY",
                          "idhiLaW9Jq-NtP4-zxn7-L8gC-lZk4hjcSswOg"
                      ]
                  },
                  {
                      "_id": "idQ30pOnDH-VHSk-DYnF-kk1y-HjmKFo45CrbJ",
                      "text": true,
                      "type": "text",
                      "v": "We're hiring!"
                  },
                  {
                      "_id": "idermnxzrk-FlGh-LRRt-0B3S-RuUngXwXI1rB",
                      "tag": "span",
                      "classes": [
                          "Team-second-section-first-span"
                      ],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idQ30pOnDH-VHSk-DYnF-kk1y-HjmKFo45CrbJ"
                      ]
                  },
                  {
                      "_id": "idZ2AQ7OgS-cwl1-axpN-02UK-A3OXboQQfwzN",
                      "text": true,
                      "type": "text",
                      "v": "Meet our team"
                  },
                  {
                      "_id": "idBsYhceKZ-LZ43-tDIv-bATm-1qs6kgWr9uV9",
                      "tag": "h3",
                      "classes": [
                          "Team-second-section-first-h3"
                      ],
                      "data": {},
                      "type": "h3",
                      "children": [
                          "idZ2AQ7OgS-cwl1-axpN-02UK-A3OXboQQfwzN"
                      ]
                  },
                  {
                      "_id": "idN5hJXpll-DFM7-QfEs-aXiq-cnSXcfchVcJb",
                      "text": true,
                      "type": "text",
                      "v": "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
                  },
                  {
                      "_id": "idzDHxklJt-KFPI-ZDV1-Sjlg-GrpuEe6z0p3n",
                      "tag": "p",
                      "classes": [
                          "Team-second-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idN5hJXpll-DFM7-QfEs-aXiq-cnSXcfchVcJb"
                      ]
                  },
                  {
                      "_id": "idcP6m1ffr-7yOb-AvLT-Hvor-UGVM9bgH7vBw",
                      "text": true,
                      "type": "text",
                      "v": "About us"
                  },
                  {
                      "_id": "idvZfgwoFk-UiBt-fidn-BF0J-UnUJqaTWKnzT",
                      "tag": "button",
                      "classes": [
                          "Content-first-btn-light"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "idcP6m1ffr-7yOb-AvLT-Hvor-UGVM9bgH7vBw"
                      ]
                  },
                  {
                      "_id": "ideGYwNIPn-Rgdv-lV87-6zZD-pYBSbDqkKS2c",
                      "text": true,
                      "type": "text",
                      "v": "Open positions"
                  },
                  {
                      "_id": "idSYKyTsSf-VWby-wy6M-vlSH-ic8rX4hN7o2s",
                      "tag": "button",
                      "classes": [
                          "Content-first-btn-dark"
                      ],
                      "data": {},
                      "type": "button",
                      "children": [
                          "ideGYwNIPn-Rgdv-lV87-6zZD-pYBSbDqkKS2c"
                      ]
                  },
                  {
                      "_id": "idyjPthAeV-wGvN-6yu9-hbCU-OKx97q2lfTqC",
                      "tag": "div",
                      "classes": [
                          "Content-first-btn-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idvZfgwoFk-UiBt-fidn-BF0J-UnUJqaTWKnzT",
                          "idSYKyTsSf-VWby-wy6M-vlSH-ic8rX4hN7o2s"
                      ]
                  },
                  {
                      "_id": "id2VoyAoaN-3ryz-g9KE-mxwy-xLRy7Uig9IAY",
                      "tag": "div",
                      "classes": [
                          "Team-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idermnxzrk-FlGh-LRRt-0B3S-RuUngXwXI1rB",
                          "idBsYhceKZ-LZ43-tDIv-bATm-1qs6kgWr9uV9",
                          "idzDHxklJt-KFPI-ZDV1-Sjlg-GrpuEe6z0p3n",
                          "idyjPthAeV-wGvN-6yu9-hbCU-OKx97q2lfTqC"
                      ]
                  },
                  {
                      "_id": "idvEkiVpGe-Fh1p-wlAA-21AY-XY7GwHQy2c22",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id0drjIbjj-y1S4-mcCy-KgcF-8vBKGOmJ4DLm",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idvEkiVpGe-Fh1p-wlAA-21AY-XY7GwHQy2c22"
                      ]
                  },
                  {
                      "_id": "idmFut9Apj-xpu5-dLX0-GD9w-D7xvK6EU5iV6",
                      "text": true,
                      "type": "text",
                      "v": "Olivia Rhye"
                  },
                  {
                      "_id": "id6kuQ9NXy-XEYu-RY4I-xiQG-5cMY49NfFfUf",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idmFut9Apj-xpu5-dLX0-GD9w-D7xvK6EU5iV6"
                      ]
                  },
                  {
                      "_id": "idUMvFm4NZ-WRuj-MfVw-sdwB-cfzDZu5DY5aM",
                      "text": true,
                      "type": "text",
                      "v": "Founder & CEO"
                  },
                  {
                      "_id": "id9ZMV2AfA-auoL-Xc1z-cxRD-iiPGrM4KCmWs",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idUMvFm4NZ-WRuj-MfVw-sdwB-cfzDZu5DY5aM"
                      ]
                  },
                  {
                      "_id": "idSym77Rbn-O12q-zQzz-txiy-WBTyuhpcHJmw",
                      "text": true,
                      "type": "text",
                      "v": "Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                  },
                  {
                      "_id": "idhjE3tAjX-In1n-uUt1-x3YH-DW7wn7OJuyuw",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idSym77Rbn-O12q-zQzz-txiy-WBTyuhpcHJmw"
                      ]
                  },
                  {
                      "_id": "iduv4karE5-sjMK-mjTV-NDI0-rxobxLDfpVKu",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idLVosPU50-04wp-soBt-fU6Y-WO5hm0togzoE",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "iduv4karE5-sjMK-mjTV-NDI0-rxobxLDfpVKu"
                      ]
                  },
                  {
                      "_id": "id6H5J8LqK-edDy-7kUp-yOSE-6TEeoZcwJpDK",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idbjHsdqh1-9y5e-Cb6e-gje8-VXNki4xjY6OV",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "id6H5J8LqK-edDy-7kUp-yOSE-6TEeoZcwJpDK"
                      ]
                  },
                  {
                      "_id": "idh8gvQCNZ-Gs1h-4nRU-bMBN-Zcn343MbYm8g",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idzpf0Mdrr-323A-HCqn-phhG-RoKRdbMpdXJ6",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idh8gvQCNZ-Gs1h-4nRU-bMBN-Zcn343MbYm8g"
                      ]
                  },
                  {
                      "_id": "idr9tQmB5Z-owlN-2adB-lskK-Xf599UwV1iic",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idLVosPU50-04wp-soBt-fU6Y-WO5hm0togzoE",
                          "idbjHsdqh1-9y5e-Cb6e-gje8-VXNki4xjY6OV",
                          "idzpf0Mdrr-323A-HCqn-phhG-RoKRdbMpdXJ6"
                      ]
                  },
                  {
                      "_id": "idmXE7VOCQ-PSsr-qHLj-3JNJ-NvCyiCUBa5nI",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6kuQ9NXy-XEYu-RY4I-xiQG-5cMY49NfFfUf",
                          "id9ZMV2AfA-auoL-Xc1z-cxRD-iiPGrM4KCmWs",
                          "idhjE3tAjX-In1n-uUt1-x3YH-DW7wn7OJuyuw",
                          "idr9tQmB5Z-owlN-2adB-lskK-Xf599UwV1iic"
                      ]
                  },
                  {
                      "_id": "id4I0Lyeme-0emt-hMhr-B17p-1mbHgJDZ8GTl",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id0drjIbjj-y1S4-mcCy-KgcF-8vBKGOmJ4DLm",
                          "idmXE7VOCQ-PSsr-qHLj-3JNJ-NvCyiCUBa5nI"
                      ]
                  },
                  {
                      "_id": "idvyIbduHS-070z-wWNU-OIfz-NMSmA01mxk9R",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408856257-esther-jiao-ADv0GiMBlmI-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id6sw1GjLT-1Prb-WFhB-FV59-vjTFx0xpAa98",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idvyIbduHS-070z-wWNU-OIfz-NMSmA01mxk9R"
                      ]
                  },
                  {
                      "_id": "idil4bpIFE-Nycc-qpL4-yZqT-YktZYV4TsAhf",
                      "text": true,
                      "type": "text",
                      "v": "Phoenix Baker"
                  },
                  {
                      "_id": "idCTuiAy2o-0TLN-JRJV-KXrL-Z0jqMuYmpKfm",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idil4bpIFE-Nycc-qpL4-yZqT-YktZYV4TsAhf"
                      ]
                  },
                  {
                      "_id": "idBt9NOURq-pAXD-kRvf-xd6L-m5I6vXlAmtU0",
                      "text": true,
                      "type": "text",
                      "v": "Engineering Manager"
                  },
                  {
                      "_id": "idpOMeciih-MLgj-EdBf-22rb-QoVxCemR0TZu",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idBt9NOURq-pAXD-kRvf-xd6L-m5I6vXlAmtU0"
                      ]
                  },
                  {
                      "_id": "iddvl8SlyT-iG7r-Saa0-DFqr-qhB3eLsDs09X",
                      "text": true,
                      "type": "text",
                      "v": "Lead engineering teams at Figma, Pitch, and Protocol Labs."
                  },
                  {
                      "_id": "idT6hXYZ1J-gdRH-eJi1-2tLz-CzRaCoZDrsTO",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "iddvl8SlyT-iG7r-Saa0-DFqr-qhB3eLsDs09X"
                      ]
                  },
                  {
                      "_id": "idryzCESUu-Or3z-rnYJ-XnUg-MyYpmm1XQjLt",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idzOB57phK-f6mp-9lAa-HKj5-TBLPIY7KzgUX",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idryzCESUu-Or3z-rnYJ-XnUg-MyYpmm1XQjLt"
                      ]
                  },
                  {
                      "_id": "idgPiI1zRr-fsrW-dqAc-EFs4-3cI92fe4u5iG",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idT6GiRlp9-3BSF-aOZb-Q5ud-QggET1xjLQE1",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idgPiI1zRr-fsrW-dqAc-EFs4-3cI92fe4u5iG"
                      ]
                  },
                  {
                      "_id": "idAkjFEjkh-tJvl-1NuE-5axT-uIxmhXwyu1LR",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id2Wrh095j-DTpN-LdAD-thIz-QJnaYFUbmWPR",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idAkjFEjkh-tJvl-1NuE-5axT-uIxmhXwyu1LR"
                      ]
                  },
                  {
                      "_id": "idy2bC1tnm-Afok-zSyR-wooe-Lbwqo4rg0xqb",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idzOB57phK-f6mp-9lAa-HKj5-TBLPIY7KzgUX",
                          "idT6GiRlp9-3BSF-aOZb-Q5ud-QggET1xjLQE1",
                          "id2Wrh095j-DTpN-LdAD-thIz-QJnaYFUbmWPR"
                      ]
                  },
                  {
                      "_id": "idRc6NhvCI-E3T1-JDkP-jyQO-ltELnRoNkPRP",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idCTuiAy2o-0TLN-JRJV-KXrL-Z0jqMuYmpKfm",
                          "idpOMeciih-MLgj-EdBf-22rb-QoVxCemR0TZu",
                          "idT6hXYZ1J-gdRH-eJi1-2tLz-CzRaCoZDrsTO",
                          "idy2bC1tnm-Afok-zSyR-wooe-Lbwqo4rg0xqb"
                      ]
                  },
                  {
                      "_id": "id1FZ5uZvk-O4co-WoLp-tS8s-IiGP3ZLFyY5u",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6sw1GjLT-1Prb-WFhB-FV59-vjTFx0xpAa98",
                          "idRc6NhvCI-E3T1-JDkP-jyQO-ltELnRoNkPRP"
                      ]
                  },
                  {
                      "_id": "idxhrX5bG9-YVVc-KuLv-AM0j-WuRMwoQLUwWH",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409207926-sardar-faizan-FPXFyGPOlrE-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idhzyFGFBN-uAjn-pJuE-DpRa-TroQOu3lzENw",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idxhrX5bG9-YVVc-KuLv-AM0j-WuRMwoQLUwWH"
                      ]
                  },
                  {
                      "_id": "idsmqDYL2Z-zc1M-GIR4-1LJM-s55QjsLHWX0o",
                      "text": true,
                      "type": "text",
                      "v": "Drew Cano"
                  },
                  {
                      "_id": "idtJrYBKPU-TaA0-CcZE-QX90-GWcxNdnuTgic",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idsmqDYL2Z-zc1M-GIR4-1LJM-s55QjsLHWX0o"
                      ]
                  },
                  {
                      "_id": "idq5z0Or2x-0hsN-NS1r-lkoz-LWIfOwrPRSZM",
                      "text": true,
                      "type": "text",
                      "v": "UX Researcher"
                  },
                  {
                      "_id": "idCKfb6C8g-9co9-c8hf-g2MN-H95bBerLROca",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idq5z0Or2x-0hsN-NS1r-lkoz-LWIfOwrPRSZM"
                      ]
                  },
                  {
                      "_id": "idhiRpBuoT-0Qll-QI8D-sDYN-WN1JpCcVDulC",
                      "text": true,
                      "type": "text",
                      "v": "Lead user research for Slack. Contractor for Netflix and Udacity."
                  },
                  {
                      "_id": "idMRLWEBeY-4k3g-lHah-QZAl-fDFiCm1CAuee",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idhiRpBuoT-0Qll-QI8D-sDYN-WN1JpCcVDulC"
                      ]
                  },
                  {
                      "_id": "idQ9wVqz9d-jzZj-uKmq-FDi0-Ne30PbdixlxO",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idb62nDpOD-yXke-yids-sLJt-FP6Bs9tfZ2mV",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idQ9wVqz9d-jzZj-uKmq-FDi0-Ne30PbdixlxO"
                      ]
                  },
                  {
                      "_id": "idWPvxVswz-Mr3f-WsMk-wWw0-jXOqxiwLjKqt",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idMtLlqbti-poKC-Ou5y-42ZK-yN7h9JfBrAgQ",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idWPvxVswz-Mr3f-WsMk-wWw0-jXOqxiwLjKqt"
                      ]
                  },
                  {
                      "_id": "id4puVuhlW-o7P9-pFd1-3I0y-2CTiiwBWW1NT",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idV4GOOTNK-lyO9-mfNP-lGz8-PSjmZTVWQ5Ql",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "id4puVuhlW-o7P9-pFd1-3I0y-2CTiiwBWW1NT"
                      ]
                  },
                  {
                      "_id": "idDjD3PX5z-qLuL-Fbmf-TRX6-t3lOseNR864u",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idb62nDpOD-yXke-yids-sLJt-FP6Bs9tfZ2mV",
                          "idMtLlqbti-poKC-Ou5y-42ZK-yN7h9JfBrAgQ",
                          "idV4GOOTNK-lyO9-mfNP-lGz8-PSjmZTVWQ5Ql"
                      ]
                  },
                  {
                      "_id": "idqvOyLxKh-Yxpu-R3QH-iXPw-If3i7r5XOuJd",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idtJrYBKPU-TaA0-CcZE-QX90-GWcxNdnuTgic",
                          "idCKfb6C8g-9co9-c8hf-g2MN-H95bBerLROca",
                          "idMRLWEBeY-4k3g-lHah-QZAl-fDFiCm1CAuee",
                          "idDjD3PX5z-qLuL-Fbmf-TRX6-t3lOseNR864u"
                      ]
                  },
                  {
                      "_id": "idaBHXtT5E-XNWL-owGc-tTGB-EkAzXo5HJhui",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idhzyFGFBN-uAjn-pJuE-DpRa-TroQOu3lzENw",
                          "idqvOyLxKh-Yxpu-R3QH-iXPw-If3i7r5XOuJd"
                      ]
                  },
                  {
                      "_id": "idWYoV7fH0-n3xQ-jAsJ-1c8c-fzoxVIVeEDJv",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409157495-nadiia-ploshchenko-pb4HW4KghiM-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id0tPlfu81-9wmp-Tw9X-B9IC-7V587QVxlgdu",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idWYoV7fH0-n3xQ-jAsJ-1c8c-fzoxVIVeEDJv"
                      ]
                  },
                  {
                      "_id": "idep1s8Grl-0khJ-y7nm-cR9i-UoUXLBqZ1Oya",
                      "text": true,
                      "type": "text",
                      "v": "Candice Wu"
                  },
                  {
                      "_id": "idjVmXL92t-OB2W-5goN-1FuI-Z71bnjYYxYGw",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idep1s8Grl-0khJ-y7nm-cR9i-UoUXLBqZ1Oya"
                      ]
                  },
                  {
                      "_id": "idAiDzi5U4-Nijb-lWM1-l5E8-ZKYeLveuPB1d",
                      "text": true,
                      "type": "text",
                      "v": "Backend Developer"
                  },
                  {
                      "_id": "idRcCoDzK3-3Jzb-I4hY-2Am0-zvx5Li4jltQP",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idAiDzi5U4-Nijb-lWM1-l5E8-ZKYeLveuPB1d"
                      ]
                  },
                  {
                      "_id": "idJfbjJIlu-mH9b-viFf-E91c-rCxaYVWFO1sv",
                      "text": true,
                      "type": "text",
                      "v": "Lead backend dev at Clearbit. Former Clearbit and Loom."
                  },
                  {
                      "_id": "id6zPUCkLH-uLo0-9T4H-TxLW-PQCEZ1g1OFHa",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idJfbjJIlu-mH9b-viFf-E91c-rCxaYVWFO1sv"
                      ]
                  },
                  {
                      "_id": "idkyltRPpQ-HQKV-g1B6-iKau-LE0YJF3HtGu4",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idNEN7BUaB-VDtz-IDbO-ioNc-NVDBUVON51kX",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idkyltRPpQ-HQKV-g1B6-iKau-LE0YJF3HtGu4"
                      ]
                  },
                  {
                      "_id": "idFS3UFa7n-jgvk-27E3-5SbP-PpxhQvt8PkYs",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idu0otUNrn-mOpS-VPh7-4Pz5-hHDWi1Iw8FgR",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idFS3UFa7n-jgvk-27E3-5SbP-PpxhQvt8PkYs"
                      ]
                  },
                  {
                      "_id": "idoryJuZo2-s0jk-7Ech-Yr0f-ZV0g8l7UYaIa",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id8hXo2ABS-2LHU-AxeN-7ftU-qf1DEdIrDFJH",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idoryJuZo2-s0jk-7Ech-Yr0f-ZV0g8l7UYaIa"
                      ]
                  },
                  {
                      "_id": "idZzqMaany-lNAO-DcJI-y3VW-jt0Fy861S25K",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idNEN7BUaB-VDtz-IDbO-ioNc-NVDBUVON51kX",
                          "idu0otUNrn-mOpS-VPh7-4Pz5-hHDWi1Iw8FgR",
                          "id8hXo2ABS-2LHU-AxeN-7ftU-qf1DEdIrDFJH"
                      ]
                  },
                  {
                      "_id": "ido7AcZUHW-m9PE-PeyQ-XBZy-6E0NKB13MQiS",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idjVmXL92t-OB2W-5goN-1FuI-Z71bnjYYxYGw",
                          "idRcCoDzK3-3Jzb-I4hY-2Am0-zvx5Li4jltQP",
                          "id6zPUCkLH-uLo0-9T4H-TxLW-PQCEZ1g1OFHa",
                          "idZzqMaany-lNAO-DcJI-y3VW-jt0Fy861S25K"
                      ]
                  },
                  {
                      "_id": "idyD24uo22-9Udx-qfot-rkgZ-4tx81V33mH1H",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id0tPlfu81-9wmp-Tw9X-B9IC-7V587QVxlgdu",
                          "ido7AcZUHW-m9PE-PeyQ-XBZy-6E0NKB13MQiS"
                      ]
                  },
                  {
                      "_id": "idnugkGUuz-6MTi-UFCG-YUGm-H9MTU2xVUgEw",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id4I0Lyeme-0emt-hMhr-B17p-1mbHgJDZ8GTl",
                          "id1FZ5uZvk-O4co-WoLp-tS8s-IiGP3ZLFyY5u",
                          "idaBHXtT5E-XNWL-owGc-tTGB-EkAzXo5HJhui",
                          "idyD24uo22-9Udx-qfot-rkgZ-4tx81V33mH1H"
                      ]
                  },
                  {
                      "_id": "idkXikTSaG-dpuv-ETyj-1SlD-SmSDMhh6gDJz",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id89W75UNe-zSWc-ZAFr-1T49-COsosTQS385t",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idkXikTSaG-dpuv-ETyj-1SlD-SmSDMhh6gDJz"
                      ]
                  },
                  {
                      "_id": "idpowpdzXY-iTh9-qbig-HtHB-IJPpqqtMVmIY",
                      "text": true,
                      "type": "text",
                      "v": "Olivia Rhye"
                  },
                  {
                      "_id": "id77zDKRi1-nmRF-Kw35-DCl7-TSNBjsPqS4gd",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idpowpdzXY-iTh9-qbig-HtHB-IJPpqqtMVmIY"
                      ]
                  },
                  {
                      "_id": "idctfdK3ZD-imQO-81Io-msHq-kpIBwshfaYZb",
                      "text": true,
                      "type": "text",
                      "v": "Founder & CEO"
                  },
                  {
                      "_id": "idzcPpnoB6-LoJQ-vgL6-d1ek-Mwunu1UfUffU",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idctfdK3ZD-imQO-81Io-msHq-kpIBwshfaYZb"
                      ]
                  },
                  {
                      "_id": "idwfhcoENL-8Prc-uk1E-8Q7G-muTzjgPLotOx",
                      "text": true,
                      "type": "text",
                      "v": "Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                  },
                  {
                      "_id": "idoFdBF151-jvLX-qTqt-FMsA-n4YXA99M1Pgw",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idwfhcoENL-8Prc-uk1E-8Q7G-muTzjgPLotOx"
                      ]
                  },
                  {
                      "_id": "idQjEDtboz-dEeq-E3hu-vJ8W-YUeeTEgrdtUu",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idEP6Eb4Oh-sruk-xhgz-Cnwj-5Ypeg2ooH6Jb",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idQjEDtboz-dEeq-E3hu-vJ8W-YUeeTEgrdtUu"
                      ]
                  },
                  {
                      "_id": "id7F9mN78G-89hG-bfQr-yjEK-IaChODNrB0oI",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idNNisdnCF-w2fy-EcRG-jXcW-RY2LTHRC0r9y",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "id7F9mN78G-89hG-bfQr-yjEK-IaChODNrB0oI"
                      ]
                  },
                  {
                      "_id": "idGMI0NF0Z-o3x6-GFpV-xZfz-PFfTZvTrDDqO",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idLWH808pc-V7pc-T3Uf-r6jQ-tsMljrABOTBu",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idGMI0NF0Z-o3x6-GFpV-xZfz-PFfTZvTrDDqO"
                      ]
                  },
                  {
                      "_id": "idAV28pEiG-j8js-B7LF-zQ17-B3ZsOE9K0eT7",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idEP6Eb4Oh-sruk-xhgz-Cnwj-5Ypeg2ooH6Jb",
                          "idNNisdnCF-w2fy-EcRG-jXcW-RY2LTHRC0r9y",
                          "idLWH808pc-V7pc-T3Uf-r6jQ-tsMljrABOTBu"
                      ]
                  },
                  {
                      "_id": "idPQBh4fIr-Ra96-BfeK-oaxK-0bcnigfxH36R",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id77zDKRi1-nmRF-Kw35-DCl7-TSNBjsPqS4gd",
                          "idzcPpnoB6-LoJQ-vgL6-d1ek-Mwunu1UfUffU",
                          "idoFdBF151-jvLX-qTqt-FMsA-n4YXA99M1Pgw",
                          "idAV28pEiG-j8js-B7LF-zQ17-B3ZsOE9K0eT7"
                      ]
                  },
                  {
                      "_id": "id7CfExr5m-MuTn-a4nL-Dp6U-rGt2jK1apyBc",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id89W75UNe-zSWc-ZAFr-1T49-COsosTQS385t",
                          "idPQBh4fIr-Ra96-BfeK-oaxK-0bcnigfxH36R"
                      ]
                  },
                  {
                      "_id": "idD3aPfqeK-F5F0-k0bj-UNLc-wJE4N4ayuG4n",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706408856257-esther-jiao-ADv0GiMBlmI-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idJE5Eganu-USMw-Z8uO-T50z-eBQmJKP5vPz5",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idD3aPfqeK-F5F0-k0bj-UNLc-wJE4N4ayuG4n"
                      ]
                  },
                  {
                      "_id": "idkn01L33l-lpDy-x2RS-aZd9-l8tBoEWjmj9B",
                      "text": true,
                      "type": "text",
                      "v": "Phoenix Baker"
                  },
                  {
                      "_id": "idiCK89etX-1a1Y-7TrZ-astl-3qh05wVqxxFf",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idkn01L33l-lpDy-x2RS-aZd9-l8tBoEWjmj9B"
                      ]
                  },
                  {
                      "_id": "idJx7tniuo-R7O1-jmC3-e3Xj-Pb4XlqewmgnD",
                      "text": true,
                      "type": "text",
                      "v": "Engineering Manager"
                  },
                  {
                      "_id": "id2fIR2m2B-nuYz-o16q-KXy1-Tn9yAKsYbbZe",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idJx7tniuo-R7O1-jmC3-e3Xj-Pb4XlqewmgnD"
                      ]
                  },
                  {
                      "_id": "idRRYRXcOt-zNp9-Lxg4-nNlF-gZIeO3S902tT",
                      "text": true,
                      "type": "text",
                      "v": "Lead engineering teams at Figma, Pitch, and Protocol Labs."
                  },
                  {
                      "_id": "idwzE08h1v-3ImP-n95M-GKTu-y9OSJh9D7sqF",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idRRYRXcOt-zNp9-Lxg4-nNlF-gZIeO3S902tT"
                      ]
                  },
                  {
                      "_id": "idqzV1lwox-AYA2-yNKD-K9GY-bQ52zLST6Pnz",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id69SBGIDS-tSRs-mCpw-a2ip-WHJiFNRH4tKh",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idqzV1lwox-AYA2-yNKD-K9GY-bQ52zLST6Pnz"
                      ]
                  },
                  {
                      "_id": "idIHXVl0dX-o2Qr-08VY-Vh4A-j1LTMWW1MNlx",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idIKz5JCub-DdxQ-Ouy7-Y0B8-OhTgoWBBhEQb",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idIHXVl0dX-o2Qr-08VY-Vh4A-j1LTMWW1MNlx"
                      ]
                  },
                  {
                      "_id": "idzz1JE2CO-j9uJ-zEi3-E98y-paWWh7mSqxIX",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idCgt0fWUG-wKVq-sE8H-ro4x-iyoBJ7XFSK1I",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idzz1JE2CO-j9uJ-zEi3-E98y-paWWh7mSqxIX"
                      ]
                  },
                  {
                      "_id": "idUBFS9Ms0-7jFx-PjJp-3GvS-Qtzg9piykJ7v",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id69SBGIDS-tSRs-mCpw-a2ip-WHJiFNRH4tKh",
                          "idIKz5JCub-DdxQ-Ouy7-Y0B8-OhTgoWBBhEQb",
                          "idCgt0fWUG-wKVq-sE8H-ro4x-iyoBJ7XFSK1I"
                      ]
                  },
                  {
                      "_id": "idPZK8866q-Vug5-27K0-pd9I-XvWRKhp043NR",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idiCK89etX-1a1Y-7TrZ-astl-3qh05wVqxxFf",
                          "id2fIR2m2B-nuYz-o16q-KXy1-Tn9yAKsYbbZe",
                          "idwzE08h1v-3ImP-n95M-GKTu-y9OSJh9D7sqF",
                          "idUBFS9Ms0-7jFx-PjJp-3GvS-Qtzg9piykJ7v"
                      ]
                  },
                  {
                      "_id": "id0OgAJHZC-nBK2-aEaK-4bOc-diEktkQZAFxJ",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idJE5Eganu-USMw-Z8uO-T50z-eBQmJKP5vPz5",
                          "idPZK8866q-Vug5-27K0-pd9I-XvWRKhp043NR"
                      ]
                  },
                  {
                      "_id": "ide8sI5pZk-x0Q6-b1uS-eQYC-ojQ1lDahqHIT",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409207926-sardar-faizan-FPXFyGPOlrE-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idMQQuAUJ1-1m03-MENM-5egd-CGyBbWvKpHUJ",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "ide8sI5pZk-x0Q6-b1uS-eQYC-ojQ1lDahqHIT"
                      ]
                  },
                  {
                      "_id": "idzy8I85G0-IRVL-bXpc-mtQv-fqBzM4Q7UdJb",
                      "text": true,
                      "type": "text",
                      "v": "Drew Cano"
                  },
                  {
                      "_id": "idJCNcYjHm-lyMt-cmk3-tav0-3pDWvx1o3889",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idzy8I85G0-IRVL-bXpc-mtQv-fqBzM4Q7UdJb"
                      ]
                  },
                  {
                      "_id": "idsjZ9RpGj-U4cN-ryRs-0cer-LqIZ2PEwClxl",
                      "text": true,
                      "type": "text",
                      "v": "UX Researcher"
                  },
                  {
                      "_id": "idbssHZsxA-llVU-uyhW-uMPG-ADJaDBABIII6",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idsjZ9RpGj-U4cN-ryRs-0cer-LqIZ2PEwClxl"
                      ]
                  },
                  {
                      "_id": "idgWDvb9C9-m5aT-1QDq-4pjM-bV6lnqSLbnD1",
                      "text": true,
                      "type": "text",
                      "v": "Lead user research for Slack. Contractor for Netflix and Udacity."
                  },
                  {
                      "_id": "idLXA9rIGq-VgDt-csCM-kQdW-nE7j8tS82jd1",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idgWDvb9C9-m5aT-1QDq-4pjM-bV6lnqSLbnD1"
                      ]
                  },
                  {
                      "_id": "idANoTrhsw-sSFP-a4sR-GwB9-SQbxNiZToGz9",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id7Vc7Mzj4-LFUW-AhdB-aZDo-rrJbj7IfVcfP",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idANoTrhsw-sSFP-a4sR-GwB9-SQbxNiZToGz9"
                      ]
                  },
                  {
                      "_id": "idVbfzAL90-60fp-Cl6U-ih0U-L07HmnKrHU6P",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "iddczt3BqF-Hvg8-tS5x-D6IM-7nUETJyyFBMD",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idVbfzAL90-60fp-Cl6U-ih0U-L07HmnKrHU6P"
                      ]
                  },
                  {
                      "_id": "idme8cX2bL-Z8eI-hjBF-HszH-a6YSKyob5RX1",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idcDcClHr1-rumj-gwf8-YwuS-dkwU5YOw0HFx",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idme8cX2bL-Z8eI-hjBF-HszH-a6YSKyob5RX1"
                      ]
                  },
                  {
                      "_id": "id7spl55et-alw6-Lb3L-lYar-KGUTVUKMToKT",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id7Vc7Mzj4-LFUW-AhdB-aZDo-rrJbj7IfVcfP",
                          "iddczt3BqF-Hvg8-tS5x-D6IM-7nUETJyyFBMD",
                          "idcDcClHr1-rumj-gwf8-YwuS-dkwU5YOw0HFx"
                      ]
                  },
                  {
                      "_id": "id7ZTm1hp5-WqiA-TUkr-L6S6-dBMmL362LSpg",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idJCNcYjHm-lyMt-cmk3-tav0-3pDWvx1o3889",
                          "idbssHZsxA-llVU-uyhW-uMPG-ADJaDBABIII6",
                          "idLXA9rIGq-VgDt-csCM-kQdW-nE7j8tS82jd1",
                          "id7spl55et-alw6-Lb3L-lYar-KGUTVUKMToKT"
                      ]
                  },
                  {
                      "_id": "idaBomVAjH-N327-GDnE-7kAw-nrZbsEnY5Z33",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idMQQuAUJ1-1m03-MENM-5egd-CGyBbWvKpHUJ",
                          "id7ZTm1hp5-WqiA-TUkr-L6S6-dBMmL362LSpg"
                      ]
                  },
                  {
                      "_id": "id8Lt0Ejau-P0gl-L26T-Pb05-5zljSXD7nmiT",
                      "tag": "img",
                      "classes": [
                          "Team-second-card-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706409157495-nadiia-ploshchenko-pb4HW4KghiM-unsplash.jpg",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "iddb05XkfI-2lLK-75G2-Reol-grbuoTx7nv00",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-img-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id8Lt0Ejau-P0gl-L26T-Pb05-5zljSXD7nmiT"
                      ]
                  },
                  {
                      "_id": "idjhj3nTvy-SAuY-WyoW-4TfA-TVf1yhyzy5oi",
                      "text": true,
                      "type": "text",
                      "v": "Candice Wu"
                  },
                  {
                      "_id": "idYvq7oSzJ-UUns-imBs-RuEs-eon3nDCEiIGf",
                      "tag": "h5",
                      "classes": [
                          "Team-second-card-h5"
                      ],
                      "data": {},
                      "type": "h5",
                      "children": [
                          "idjhj3nTvy-SAuY-WyoW-4TfA-TVf1yhyzy5oi"
                      ]
                  },
                  {
                      "_id": "idACXgrqCK-mKPS-LZuK-zPCz-WCs4j1P7aMO6",
                      "text": true,
                      "type": "text",
                      "v": "Backend Developer"
                  },
                  {
                      "_id": "idjikrbwaP-4WfA-DA6A-AKa9-Zjpmgwar1yo7",
                      "tag": "h6",
                      "classes": [
                          "Team-second-card-h6"
                      ],
                      "data": {},
                      "type": "h6",
                      "children": [
                          "idACXgrqCK-mKPS-LZuK-zPCz-WCs4j1P7aMO6"
                      ]
                  },
                  {
                      "_id": "idc0bw2qO8-WUMs-ojjQ-AlgJ-9e4zlK6C2gKP",
                      "text": true,
                      "type": "text",
                      "v": "Lead backend dev at Clearbit. Former Clearbit and Loom."
                  },
                  {
                      "_id": "idYZjVKR5a-AKqV-OLxS-iDHF-BJRUiJ7ESpAz",
                      "tag": "p",
                      "classes": [
                          "Team-second-card-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idc0bw2qO8-WUMs-ojjQ-AlgJ-9e4zlK6C2gKP"
                      ]
                  },
                  {
                      "_id": "idTRMOnmSN-Roh3-Q5iv-1mci-NrPtPf1qbn38",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411147414-Social%20icon.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idOKoOwXVD-u4iW-xkIV-sg3H-pBMS68BPEWy8",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idTRMOnmSN-Roh3-Q5iv-1mci-NrPtPf1qbn38"
                      ]
                  },
                  {
                      "_id": "id7dt86nnD-E50T-2cNe-YCQ4-TZGapS1xoBwD",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idSQBVBinD-f2rP-Krch-OGZj-sMydSAACKqh1",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "id7dt86nnD-E50T-2cNe-YCQ4-TZGapS1xoBwD"
                      ]
                  },
                  {
                      "_id": "idYfyOjaYA-GeLd-9mMQ-DSAG-bUtNuJYBsd6b",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idm2M8R01L-wf8l-0v5g-mTH4-g5OHbXyffdEx",
                      "tag": "a",
                      "classes": [
                          "Team-second-card-icons-a"
                      ],
                      "data": {
                          "href": "#",
                          "target": "_blank",
                          "rel": "noopener noreferrer"
                      },
                      "type": "a",
                      "children": [
                          "idYfyOjaYA-GeLd-9mMQ-DSAG-bUtNuJYBsd6b"
                      ]
                  },
                  {
                      "_id": "idpX5mV8on-rcCL-lXvb-6uBZ-KUwaXLHaA7k0",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-icons"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idOKoOwXVD-u4iW-xkIV-sg3H-pBMS68BPEWy8",
                          "idSQBVBinD-f2rP-Krch-OGZj-sMydSAACKqh1",
                          "idm2M8R01L-wf8l-0v5g-mTH4-g5OHbXyffdEx"
                      ]
                  },
                  {
                      "_id": "idCTycCyQF-zT7a-vYda-tdbx-i0oEsNG7ODLe",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-text"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idYvq7oSzJ-UUns-imBs-RuEs-eon3nDCEiIGf",
                          "idjikrbwaP-4WfA-DA6A-AKa9-Zjpmgwar1yo7",
                          "idYZjVKR5a-AKqV-OLxS-iDHF-BJRUiJ7ESpAz",
                          "idpX5mV8on-rcCL-lXvb-6uBZ-KUwaXLHaA7k0"
                      ]
                  },
                  {
                      "_id": "idcpNaHNHH-dDIv-Un3h-PIk3-4xl3RawaKhXy",
                      "tag": "div",
                      "classes": [
                          "Team-second-card"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iddb05XkfI-2lLK-75G2-Reol-grbuoTx7nv00",
                          "idCTycCyQF-zT7a-vYda-tdbx-i0oEsNG7ODLe"
                      ]
                  },
                  {
                      "_id": "idlEXolbIl-V3ut-MNQv-l6AO-rgDlv497DxIF",
                      "tag": "div",
                      "classes": [
                          "Team-second-card-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id7CfExr5m-MuTn-a4nL-Dp6U-rGt2jK1apyBc",
                          "id0OgAJHZC-nBK2-aEaK-4bOc-diEktkQZAFxJ",
                          "idaBomVAjH-N327-GDnE-7kAw-nrZbsEnY5Z33",
                          "idcpNaHNHH-dDIv-Un3h-PIk3-4xl3RawaKhXy"
                      ]
                  },
                  {
                      "_id": "idhiLaW9Jq-NtP4-zxn7-L8gC-lZk4hjcSswOg",
                      "tag": "div",
                      "classes": [
                          "Team-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idnugkGUuz-6MTi-UFCG-YUGm-H9MTU2xVUgEw",
                          "idlEXolbIl-V3ut-MNQv-l6AO-rgDlv497DxIF"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "603d4396-5996-42f1-8b2c-c5dde1ecc03b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second",
                          "styleLess": "display: flex; padding: 50px 10px; flex-direction: column; align-items: flex-start; gap: 59.606px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "df4c70c4-0fe1-44d2-8ceb-f31b05b9336b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-section-first",
                          "styleLess": "display: flex; flex-direction: column; align-items: center; gap: 0.667px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "a78e9c76-7d28-45d5-8df6-3519e5deb1a2",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-section-first-span",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13.033px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e6ffe419-cf41-475f-acaf-b79751bb87fa",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-section-first-h3",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 20px; margin: 12px 0px; font-style: normal; font-weight: 600; line-height: 23.894px; letter-spacing: -0.391px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "890dbed9-0ec4-4047-a1e2-2f1c57e84f87",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-section-first-p",
                          "styleLess": "width: 70%; text-align: center; color: var(--Gray-600, #475467); font-family: Inter; font-size: 17px; font-style: normal; font-weight: 400; line-height: 16.292px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "6ee4cc1b-fe68-4a6f-91a1-8dda515f54e9",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-section-second",
                          "styleLess": "display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; gap: 35px; width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "e0d8338c-2329-4fc9-ba88-906f2ae71123",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-container",
                          "styleLess": "display: grid; grid-template-columns: auto auto; gap: 30px; align-self: stretch; justify-content: center; width: 290px; margin: auto;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9af03ca2-c221-4947-ae9d-4e28185a5f5c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 4px; max-width: 270px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3e6d7b31-0917-400d-b158-2ab299dec172",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-img-container",
                          "styleLess": "flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "5bff99f7-3126-4aa1-8e1c-503837f39cd3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-img",
                          "styleLess": "width: 100%; height: 100px; object-position: center center; object-fit: cover;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "1f1570d7-a564-461e-a8c8-deff916fcf54",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-text",
                          "styleLess": "flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ae030542-ed39-42af-86c2-c3aececc87fb",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-p",
                          "styleLess": "color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; margin: 10px 0px; font-weight: 400; line-height: 21.354px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "8838c5f7-9cba-4c67-9e5e-efdce5a89ab3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-h5",
                          "styleLess": "color: var(--Gray-900, var(--colors-gray-light-mode-900, #101828)); font-family: Inter; font-size: 16px; font-style: normal; margin: 10px 0px; font-weight: 600; line-height: 18.19px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "68b8effc-d30e-4604-b4d8-36d27bf8aec7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-h6",
                          "styleLess": "color: var(--Website-Main-Color, #00989B); font-family: Inter; font-size: 14px; font-style: normal; margin: 10px 0px; font-weight: 400; line-height: 26.052px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "65f33788-a0b9-4674-9d06-b722841af3f1",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Team-second-card-icons-a",
                          "styleLess": "text-decoration: none; padding: 2px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "233b0d73-11c9-482b-a985-79ac54244ad4",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Team-second-card-container { grid-template-columns: auto auto auto auto; }  .Team-second-card-img { height: 168px; }  .Team-second-card-container { width: 100%;} ",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9dfba22d-ada0-434a-a8a3-047a5302f648",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Team-second-section-first-span { font-size: 14.901px; line-height: 22.352px; }  .Team-second-section-first-h3 { font-size: 33.528px; line-height: 40.979px; letter-spacing: -0.671px; }  .Team-second-section-first-p { font-size: 16.764px; line-height: 26.077px; }  .Team-second-section-second { gap: 39px; }  .Team-second-profile { padding: 39.803px 29.803px 0px; }  .Team-second-card-h5 { font-size: 22px; line-height: 29.774px; }  .Team-second-card-h6 { font-size: 16px; line-height: 18.774px; }  .Team-second-card-p { font-size: 14.901px; line-height: 16px; }  .Team-second-card-img { height: 270px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],
              },
            }],
          default: { node: [], styles: [] },
        },
      },
      // { _id: "00005027636730", tag: "div", type: "Contact", label: "Contacts", icon:"layout-contact", data: { options: [] } },
      {
        _id: "00005027636730", tag: "div", type: "Footer", icon: "layout-footer", label: "Footer", data: {
          options: [
            {
              id: "F-001",
              label: "Logo left Footer",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715752093111-Desktop.png",
              node: [
                  {
                      "_id": "idQLzGLcki-1U1h-Dqit-mM9v-7p7iXWfZltZk",
                      "tag": "div",
                      "classes": [
                          "Footer-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idI0mVo7PT-IrgE-Mkw8-l8P5-LiYbLQMSkbns",
                          "id6nwmD1QE-9bDy-ke3H-Wvrn-kahONwzQ0neH"
                      ]
                  },
                  {
                      "_id": "iduzCuec3i-UAOV-AEJY-HeBI-lDS89Gr1LP4f",
                      "tag": "img",
                      "classes": [
                          "Footer-first-section-first-logo"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706406533383-No-code%20Logo%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idyJdbYXIE-R7bm-NflT-easr-iIkrW8gWXqUd",
                      "text": true,
                      "type": "text",
                      "v": "Design amazing digital experiences that create more happy in the world."
                  },
                  {
                      "_id": "idLAfdQ42S-Fy9f-Qsdp-OsY0-3TDrjbX0DhFL",
                      "tag": "p",
                      "classes": [
                          "Footer-first-section-first-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idyJdbYXIE-R7bm-NflT-easr-iIkrW8gWXqUd"
                      ]
                  },
                  {
                      "_id": "idkUG6hbgQ-JhL8-U0xt-jkrD-xM0FXjwPXWuL",
                      "tag": "div",
                      "classes": [
                          "Footer-first-section-first-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "iduzCuec3i-UAOV-AEJY-HeBI-lDS89Gr1LP4f",
                          "idLAfdQ42S-Fy9f-Qsdp-OsY0-3TDrjbX0DhFL"
                      ]
                  },
                  {
                      "_id": "idVWObvwKZ-iinf-dfOW-4fdQ-yCmmVyyTO8Lq",
                      "text": true,
                      "type": "text",
                      "v": "Get the app"
                  },
                  {
                      "_id": "idGXJF6C1C-eV8q-Mpua-CEk3-JUe3BRbnzv57",
                      "tag": "p",
                      "classes": [
                          "Footer-first-section-first-p2"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idVWObvwKZ-iinf-dfOW-4fdQ-yCmmVyyTO8Lq"
                      ]
                  },
                  {
                      "_id": "idUlOskAtF-72Ci-YPqt-4lX0-qqd9GGj4SpPp",
                      "tag": "img",
                      "classes": [
                          "Footer-first-section-first-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411445688-Mobile%20app%20store%20badge.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id5DS0VBS7-ZMpQ-et8E-bSJD-YWcSUDocsETF",
                      "tag": "a",
                      "classes": [],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idUlOskAtF-72Ci-YPqt-4lX0-qqd9GGj4SpPp"
                      ]
                  },
                  {
                      "_id": "idtVpEc3ay-PIHx-9TeC-cink-fgKAXCOM7UWv",
                      "tag": "img",
                      "classes": [
                          "Footer-first-section-first-img"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411479942-Mobile%20app%20store%20badge%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id3qA9bVZ6-eRgJ-wpt5-h6re-TtkOqztZIGo0",
                      "tag": "a",
                      "classes": [],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idtVpEc3ay-PIHx-9TeC-cink-fgKAXCOM7UWv"
                      ]
                  },
                  {
                      "_id": "idMaqmWdNO-ykjD-7soJ-whrW-vXgeNH1I7W8R",
                      "tag": "div",
                      "classes": [
                          "Footer-first-section-first-container2"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idGXJF6C1C-eV8q-Mpua-CEk3-JUe3BRbnzv57",
                          "id5DS0VBS7-ZMpQ-et8E-bSJD-YWcSUDocsETF",
                          "id3qA9bVZ6-eRgJ-wpt5-h6re-TtkOqztZIGo0"
                      ]
                  },
                  {
                      "_id": "idLhtL0aw0-0B8T-2yMj-iwpI-FOIaJE0HJrhF",
                      "tag": "div",
                      "classes": [
                          "Footer-first-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idkUG6hbgQ-JhL8-U0xt-jkrD-xM0FXjwPXWuL",
                          "idMaqmWdNO-ykjD-7soJ-whrW-vXgeNH1I7W8R"
                      ]
                  },
                  {
                      "_id": "idU5X3n6YA-4dQj-tVG9-rP9K-uon0caFnmUIH",
                      "text": true,
                      "type": "text",
                      "v": "Overview"
                  },
                  {
                      "_id": "idxI91vZxW-q3T6-Disr-tQOA-nePGQhpe3hcf",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idU5X3n6YA-4dQj-tVG9-rP9K-uon0caFnmUIH"
                      ]
                  },
                  {
                      "_id": "idRvikBKRv-E5b8-5FKe-rkfi-mM6j33Zbng7J",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idxI91vZxW-q3T6-Disr-tQOA-nePGQhpe3hcf"
                      ]
                  },
                  {
                      "_id": "idUsB1INWx-AEsx-KJzJ-iox0-Sn9b1aNEAKi9",
                      "text": true,
                      "type": "text",
                      "v": "Features"
                  },
                  {
                      "_id": "idQyjIytxn-ElW8-J9F1-d0Qk-mMUmbepVmteR",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idUsB1INWx-AEsx-KJzJ-iox0-Sn9b1aNEAKi9"
                      ]
                  },
                  {
                      "_id": "idYoj5bDqX-KzQM-85fn-2JpB-MYlO3ohhSC9T",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idQyjIytxn-ElW8-J9F1-d0Qk-mMUmbepVmteR"
                      ]
                  },
                  {
                      "_id": "idLGLZ3UYP-f70n-z9hW-ZFLa-D7WyxhQCyggc",
                      "text": true,
                      "type": "text",
                      "v": "Pricing"
                  },
                  {
                      "_id": "idKdvYX1ny-ztP0-ffAB-uP25-sJT3agdKUmOE",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idLGLZ3UYP-f70n-z9hW-ZFLa-D7WyxhQCyggc"
                      ]
                  },
                  {
                      "_id": "idcF6bEQpD-ZhJK-vrUe-PZpX-BOhICJVfPFIz",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idKdvYX1ny-ztP0-ffAB-uP25-sJT3agdKUmOE"
                      ]
                  },
                  {
                      "_id": "idzNTqU3Cq-65J2-S8dK-P7Yt-FLftch44iLbm",
                      "text": true,
                      "type": "text",
                      "v": "Careers"
                  },
                  {
                      "_id": "idsteiQInG-stZU-uBL6-ugmN-sQqcHgADbHtO",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idzNTqU3Cq-65J2-S8dK-P7Yt-FLftch44iLbm"
                      ]
                  },
                  {
                      "_id": "id42bwD57Y-7ZCX-faQ4-S5aU-DQUCvE5sXOJE",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idsteiQInG-stZU-uBL6-ugmN-sQqcHgADbHtO"
                      ]
                  },
                  {
                      "_id": "idqhiKgopJ-Igan-oAp6-I2gq-UxZIY5849j6V",
                      "text": true,
                      "type": "text",
                      "v": "Help"
                  },
                  {
                      "_id": "id98lxKLRM-TYKH-hJnx-CvA6-ZAhcxyLu0sgW",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idqhiKgopJ-Igan-oAp6-I2gq-UxZIY5849j6V"
                      ]
                  },
                  {
                      "_id": "id5cd545iy-qjPp-YcN3-bum5-xXSVGDBipqE9",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id98lxKLRM-TYKH-hJnx-CvA6-ZAhcxyLu0sgW"
                      ]
                  },
                  {
                      "_id": "idlT8FlLUV-ahMN-mTPr-X5hV-IC7S7DVh15Nl",
                      "text": true,
                      "type": "text",
                      "v": "Privacy"
                  },
                  {
                      "_id": "id12rFq6KV-lEVR-3bpS-Wt27-CnIVrCb4mMfp",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idlT8FlLUV-ahMN-mTPr-X5hV-IC7S7DVh15Nl"
                      ]
                  },
                  {
                      "_id": "idSMV4W38B-CGzl-vYt3-0ObO-nv5nwvin4M5V",
                      "tag": "li",
                      "classes": [
                          "Footer-first-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id12rFq6KV-lEVR-3bpS-Wt27-CnIVrCb4mMfp"
                      ]
                  },
                  {
                      "_id": "idgN8OPShG-8Od2-4MhW-UwbR-hN8PJvFTzvEL",
                      "tag": "ul",
                      "classes": [
                          "Footer-first-section-first-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idRvikBKRv-E5b8-5FKe-rkfi-mM6j33Zbng7J",
                          "idYoj5bDqX-KzQM-85fn-2JpB-MYlO3ohhSC9T",
                          "idcF6bEQpD-ZhJK-vrUe-PZpX-BOhICJVfPFIz",
                          "id42bwD57Y-7ZCX-faQ4-S5aU-DQUCvE5sXOJE",
                          "id5cd545iy-qjPp-YcN3-bum5-xXSVGDBipqE9",
                          "idSMV4W38B-CGzl-vYt3-0ObO-nv5nwvin4M5V"
                      ]
                  },
                  {
                      "_id": "idI0mVo7PT-IrgE-Mkw8-l8P5-LiYbLQMSkbns",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idLhtL0aw0-0B8T-2yMj-iwpI-FOIaJE0HJrhF",
                          "idgN8OPShG-8Od2-4MhW-UwbR-hN8PJvFTzvEL"
                      ]
                  },
                  {
                      "_id": "idABXBNdTt-zjIq-2212-ecey-94klZajSh4iA",
                      "text": true,
                      "type": "text",
                      "v": "© 2077 Tailordom. All rights reserved."
                  },
                  {
                      "_id": "idUIWcEilk-icft-cA6E-9CFc-9nhJgBX61Bha",
                      "tag": "p",
                      "classes": [
                          "Footer-first-section-scecond-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "idABXBNdTt-zjIq-2212-ecey-94klZajSh4iA"
                      ]
                  },
                  {
                      "_id": "idpxSMb75x-EnRq-AevL-Ha26-PXyNyWzt5quR",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411229858-Social%20icon%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idfPWeGxpa-ip11-xCPy-PNrt-r2BhUXYSBvI0",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-scecond-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idpxSMb75x-EnRq-AevL-Ha26-PXyNyWzt5quR"
                      ]
                  },
                  {
                      "_id": "id7qOik4aN-WjEu-0EXT-3Cic-3PWJEzGHZfyG",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411530573-Social%20icon%20%283%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id1m3MI8mW-yYEi-hUZx-HkC8-Z0s707o3yGXn",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-scecond-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id7qOik4aN-WjEu-0EXT-3Cic-3PWJEzGHZfyG"
                      ]
                  },
                  {
                      "_id": "id7QM0L3cg-5S2D-cT2t-t9UB-ZYCjvVV4muYx",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411651218-Social%20icon%20%284%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idimKZKK9b-YzS8-tsHt-4p3D-xd1N7fdT5gDw",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-scecond-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id7QM0L3cg-5S2D-cT2t-t9UB-ZYCjvVV4muYx"
                      ]
                  },
                  {
                      "_id": "id7Ujb7f4S-l32i-lbrp-ZdOG-4vOevi761meo",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411530573-Social%20icon%20%283%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idLPyO0TEA-fYco-n1pr-o9wW-COk4c7eGP0tu",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-scecond-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id7Ujb7f4S-l32i-lbrp-ZdOG-4vOevi761meo"
                      ]
                  },
                  {
                      "_id": "id9BJg2B7B-VdB2-4oKD-aGvg-KQ1Zk8iagt4o",
                      "tag": "img",
                      "classes": [],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706411276145-Social%20icon%20%282%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "idIOZjIR3k-Gzgj-A1Vo-cjjt-gc3PYH44TmZv",
                      "tag": "a",
                      "classes": [
                          "Footer-first-section-scecond-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id9BJg2B7B-VdB2-4oKD-aGvg-KQ1Zk8iagt4o"
                      ]
                  },
                  {
                      "_id": "idR452QOOW-iFHA-QYpQ-Womh-QoYEy5GZNVQJ",
                      "tag": "div",
                      "classes": [
                          "Footer-first-section-scecond-img"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idfPWeGxpa-ip11-xCPy-PNrt-r2BhUXYSBvI0",
                          "id1m3MI8mW-yYEi-hUZx-HkC8-Z0s707o3yGXn",
                          "idimKZKK9b-YzS8-tsHt-4p3D-xd1N7fdT5gDw",
                          "idLPyO0TEA-fYco-n1pr-o9wW-COk4c7eGP0tu",
                          "idIOZjIR3k-Gzgj-A1Vo-cjjt-gc3PYH44TmZv"
                      ]
                  },
                  {
                      "_id": "id6nwmD1QE-9bDy-ke3H-Wvrn-kahONwzQ0neH",
                      "tag": "div",
                      "classes": [
                          "Footer-first-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idUIWcEilk-icft-cA6E-9CFc-9nhJgBX61Bha",
                          "idR452QOOW-iFHA-QYpQ-Womh-QoYEy5GZNVQJ"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "a493f0e4-7aa1-46c2-b184-7635e565269c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first",
                          "styleLess": "display: flex; padding: 56.889px 30px 42.667px; flex-direction: column; gap: 56.889px; background: var(--Base-White, #FFF);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "29295082-02e7-45d4-b40a-50ca1afc5c92",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4564abf0-12e9-4935-9415-09e9b26a3edc",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 10px; flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "3ad24b47-17f1-4018-b119-c96a5aa1cb7d",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-container2",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 14.222px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "ec55cd72-cbe8-4c94-bdd5-ef18d35f6070",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-p2",
                          "styleLess": "color: var(--Primary-700, #6941C6); font-family: Inter; font-size: 14.222px; font-style: normal; font-weight: 500; line-height: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f815369b-a065-4528-9e0f-3f25e5a7023e",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-p",
                          "styleLess": "max-width: 350px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c7fa6ea4-32a7-4921-a74c-927491abbbb3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-uls",
                          "styleLess": "display: flex; align-items: flex-start; gap: 28.444px; justify-content: space-between; flex: 1 1 0%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "831d9a52-a6ae-4914-810d-2033506641b3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-ul",
                          "styleLess": "padding: 0px; display: flex; align-items: center; flex-wrap: wrap; gap: 17.333px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7e02f15a-28ba-4435-aaae-21cee82d5d79",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-li",
                          "styleLess": "list-style: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d330182f-8b47-473a-86b7-add6a0232e40",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-first-a",
                          "styleLess": "outline: none; cursor: pointer; text-decoration: none; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 600; line-height: 13px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "67be410b-1228-44c2-bfc9-32671512957c",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-second",
                          "styleLess": "display: flex; padding-top: 28.444px; align-items: flex-start; gap: 28.444px; flex-direction: column; align-self: stretch; justify-content: space-between; border-top: 0.889px solid var(--Gray-200, #EAECF0);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f25f49c9-1aad-4ad3-a206-fbdd62d7db3b",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-scecond-p",
                          "styleLess": "color: var(--Gray-500, #667085); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f3e9954f-cdd8-4940-9db2-667a95aca0e4",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-scecond-img",
                          "styleLess": "display: flex; align-items: center; gap: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "52f13976-1694-4874-ab75-e34405b511d3",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-first-section-scecond-img",
                          "styleLess": "padding: 2px; text-decoration: none; outline: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "79b2e29f-f433-40eb-b0df-1d6e467cfe3f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Footer-first-section-first { flex-direction: row; gap: 28.444px; }  .Footer-first-section-second { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f28d1204-60d1-4f57-8678-ccb52d407da7",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Footer-first-section-first-a { font-size: 16px; line-height: 21.333px; }  .Footer-first-section-first-p { font-size: 16px; line-height: 23.333px; }  .Footer-first-section-scecond-p { font-size: 14px; }",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],
              }
            },
            {
              id: "F-002",
              label: "Logo Footer",
              img_url: "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1715752227269-Desktop%20%281%29.png",
              node: [
                  {
                      "_id": "id78KwVcrC-QIEM-6dBr-Ybb2-qvLEO45siIPT",
                      "tag": "div",
                      "classes": [
                          "Footer-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id2azw6DJS-ZlkE-sqKK-Dx5A-KNTHWidNOZsH",
                          "idqG6QNfqW-7MST-euGR-tRqX-McCyQ1DyA6OM"
                      ]
                  },
                  {
                      "_id": "idPDDABv3i-x3Mq-BrqU-SPw3-URfqzPu4WlXl",
                      "tag": "img",
                      "classes": [
                          "Footer-second-section-first-logo"
                      ],
                      "data": {
                          "src": "https://cwm.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/tailordom/1706406533383-No-code%20Logo%20%281%29.png",
                          "alt": ""
                      },
                      "type": "img",
                      "children": []
                  },
                  {
                      "_id": "id6db1RX9U-wCYS-yeYw-RscC-bdPJOtIddB1C",
                      "tag": "div",
                      "classes": [
                          "Footer-second-section-first-container"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idPDDABv3i-x3Mq-BrqU-SPw3-URfqzPu4WlXl"
                      ]
                  },
                  {
                      "_id": "idJvFEYpyy-kq9N-dDD1-44rD-aLKIzhpff4F1",
                      "text": true,
                      "type": "text",
                      "v": "Product"
                  },
                  {
                      "_id": "idLBPYa1D6-EjTw-0hgS-fMOL-t5y6KyKcaqXg",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idJvFEYpyy-kq9N-dDD1-44rD-aLKIzhpff4F1"
                      ]
                  },
                  {
                      "_id": "idFiXudpvE-tczr-zBvU-pIIj-abRaPAGTD88b",
                      "text": true,
                      "type": "text",
                      "v": "Overview"
                  },
                  {
                      "_id": "idUFzBvWyR-okRD-z68m-4Hba-00LciaZE1PrZ",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idFiXudpvE-tczr-zBvU-pIIj-abRaPAGTD88b"
                      ]
                  },
                  {
                      "_id": "idwxFXxQuG-GVot-MxJi-jjs9-3TMUah7PuFtu",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idUFzBvWyR-okRD-z68m-4Hba-00LciaZE1PrZ"
                      ]
                  },
                  {
                      "_id": "idbIq0FxF5-XIfq-cMgj-Leuo-7gCzjeGeJoAu",
                      "text": true,
                      "type": "text",
                      "v": "Features"
                  },
                  {
                      "_id": "idLS6paqvl-hkk2-ihRj-7KnZ-20fcWaSeB4SF",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idbIq0FxF5-XIfq-cMgj-Leuo-7gCzjeGeJoAu"
                      ]
                  },
                  {
                      "_id": "idng9DkadI-SZnu-Tmjh-dSTF-FY0xw5PTZx8z",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idLS6paqvl-hkk2-ihRj-7KnZ-20fcWaSeB4SF"
                      ]
                  },
                  {
                      "_id": "idxO1HY17K-e0uf-8dR4-GVvQ-2Z2p6ENauikB",
                      "text": true,
                      "type": "text",
                      "v": "Solutions"
                  },
                  {
                      "_id": "idG16TQE0Z-jluQ-nBqs-beTv-dN1TgWYnHfFy",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idxO1HY17K-e0uf-8dR4-GVvQ-2Z2p6ENauikB"
                      ]
                  },
                  {
                      "_id": "idJnsRVU6J-AnWd-ufYa-8IIR-B5uLTKBRbPOC",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idG16TQE0Z-jluQ-nBqs-beTv-dN1TgWYnHfFy"
                      ]
                  },
                  {
                      "_id": "idg6JVHN5U-B4T7-7rP9-8wLP-xaXdIhCafir0",
                      "text": true,
                      "type": "text",
                      "v": "Tutorials"
                  },
                  {
                      "_id": "idVn4fO3W5-ZaTy-HKq4-9DZd-rLbU8pVKrj2h",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idg6JVHN5U-B4T7-7rP9-8wLP-xaXdIhCafir0"
                      ]
                  },
                  {
                      "_id": "id8wV9jY93-3qXu-BOrc-yX8K-TRewyE1nSdFG",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idVn4fO3W5-ZaTy-HKq4-9DZd-rLbU8pVKrj2h"
                      ]
                  },
                  {
                      "_id": "idqwYVhvxa-XMmj-SzIj-QIqT-zmhuQPPoXtfn",
                      "text": true,
                      "type": "text",
                      "v": "Pricing"
                  },
                  {
                      "_id": "idksLnN9Qq-wkxo-jEnP-Mq0W-L3jsaAlMyn4N",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idqwYVhvxa-XMmj-SzIj-QIqT-zmhuQPPoXtfn"
                      ]
                  },
                  {
                      "_id": "idrQMZPJsK-TjoZ-uyQg-Pqbj-9NKqXEyD4gFM",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idksLnN9Qq-wkxo-jEnP-Mq0W-L3jsaAlMyn4N"
                      ]
                  },
                  {
                      "_id": "ids10nYunh-hbRo-hVj4-Tvol-zqsrFYB43rFj",
                      "text": true,
                      "type": "text",
                      "v": "Releases"
                  },
                  {
                      "_id": "idjSqwCfKp-wIjc-PDao-duAO-Xn5CL097T3mB",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "ids10nYunh-hbRo-hVj4-Tvol-zqsrFYB43rFj"
                      ]
                  },
                  {
                      "_id": "idEQ2OPzGf-556S-pmyV-UaYj-8bwnQLwJyx5u",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idjSqwCfKp-wIjc-PDao-duAO-Xn5CL097T3mB"
                      ]
                  },
                  {
                      "_id": "idmsjRMstQ-3lj4-O2RQ-ZrCh-qIM3vaQGNnka",
                      "tag": "ul",
                      "classes": [
                          "Footer-second-section-first-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idLBPYa1D6-EjTw-0hgS-fMOL-t5y6KyKcaqXg",
                          "idwxFXxQuG-GVot-MxJi-jjs9-3TMUah7PuFtu",
                          "idng9DkadI-SZnu-Tmjh-dSTF-FY0xw5PTZx8z",
                          "idJnsRVU6J-AnWd-ufYa-8IIR-B5uLTKBRbPOC",
                          "id8wV9jY93-3qXu-BOrc-yX8K-TRewyE1nSdFG",
                          "idrQMZPJsK-TjoZ-uyQg-Pqbj-9NKqXEyD4gFM",
                          "idEQ2OPzGf-556S-pmyV-UaYj-8bwnQLwJyx5u"
                      ]
                  },
                  {
                      "_id": "id2BblVXsP-i3V5-hNJI-IPMu-ymRYjey7dWZ4",
                      "text": true,
                      "type": "text",
                      "v": "Company"
                  },
                  {
                      "_id": "idBSTUBtFe-NnzD-jWcN-JKj3-V9L8vfqmKMI5",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id2BblVXsP-i3V5-hNJI-IPMu-ymRYjey7dWZ4"
                      ]
                  },
                  {
                      "_id": "idEfjuIdI0-193K-jWQi-qlIQ-4mdHZ47UIf9V",
                      "text": true,
                      "type": "text",
                      "v": "About us"
                  },
                  {
                      "_id": "idgcFuhFFP-mq6k-USuI-RhNn-czqn1lRF2vXC",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idEfjuIdI0-193K-jWQi-qlIQ-4mdHZ47UIf9V"
                      ]
                  },
                  {
                      "_id": "ideSQq37NI-ch1u-B4Le-klIR-grD2rvSYEhbj",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idgcFuhFFP-mq6k-USuI-RhNn-czqn1lRF2vXC"
                      ]
                  },
                  {
                      "_id": "idDi8AoL4c-TtFH-FsHb-Q4jz-ClvxThFxKC5E",
                      "text": true,
                      "type": "text",
                      "v": "Careers"
                  },
                  {
                      "_id": "idzT2Sguf5-mWvY-toDk-kGMJ-galf8ruDnad7",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idDi8AoL4c-TtFH-FsHb-Q4jz-ClvxThFxKC5E"
                      ]
                  },
                  {
                      "_id": "idvUQ3FIsY-gObM-WCT1-wHH0-0e1k4uywj8zX",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idzT2Sguf5-mWvY-toDk-kGMJ-galf8ruDnad7"
                      ]
                  },
                  {
                      "_id": "idUMp7Ficb-Qnzp-grRP-tFUz-PjtjrBIITMcK",
                      "text": true,
                      "type": "text",
                      "v": "Press"
                  },
                  {
                      "_id": "idPcMfFSKx-evF5-0bOq-m7D5-yeRPyFtn0bBt",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idUMp7Ficb-Qnzp-grRP-tFUz-PjtjrBIITMcK"
                      ]
                  },
                  {
                      "_id": "idLTfujYiV-mA21-BF7j-JRbf-THcii9tSLHX2",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idPcMfFSKx-evF5-0bOq-m7D5-yeRPyFtn0bBt"
                      ]
                  },
                  {
                      "_id": "idCQ09yMQS-t14k-8XSa-jMFw-hvKW63hdH9aX",
                      "text": true,
                      "type": "text",
                      "v": "News"
                  },
                  {
                      "_id": "id6U3wkor6-zAJA-4EXT-gerK-h69ztPkwLGV6",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idCQ09yMQS-t14k-8XSa-jMFw-hvKW63hdH9aX"
                      ]
                  },
                  {
                      "_id": "idgICeSvp9-1J3d-uBAY-xV14-mxc4HXKtk2gv",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id6U3wkor6-zAJA-4EXT-gerK-h69ztPkwLGV6"
                      ]
                  },
                  {
                      "_id": "idXNEkT2Ft-tgZq-ssND-bgyd-4uNNoZSbLZuz",
                      "text": true,
                      "type": "text",
                      "v": "Media Kit"
                  },
                  {
                      "_id": "idVEz403Na-dAti-5SZw-vhqH-no8nnOTD4g5I",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idXNEkT2Ft-tgZq-ssND-bgyd-4uNNoZSbLZuz"
                      ]
                  },
                  {
                      "_id": "idTkpnnTTo-PiTH-smFB-aJiC-BBGfClQo39JU",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idVEz403Na-dAti-5SZw-vhqH-no8nnOTD4g5I"
                      ]
                  },
                  {
                      "_id": "idweTISZMK-ahPB-sqZC-T7fB-YJXYt3KCpXMt",
                      "text": true,
                      "type": "text",
                      "v": "Contact"
                  },
                  {
                      "_id": "idSd2doV41-Lllm-I3Td-h3ix-PfFGgw9AbEru",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idweTISZMK-ahPB-sqZC-T7fB-YJXYt3KCpXMt"
                      ]
                  },
                  {
                      "_id": "idgnAqmTEk-xC5x-PlwR-DA7f-OCDa4iKGK8o9",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idSd2doV41-Lllm-I3Td-h3ix-PfFGgw9AbEru"
                      ]
                  },
                  {
                      "_id": "idUkQnX2Mz-OcxP-LakW-7Fcz-iCmeXqvdSDgt",
                      "tag": "ul",
                      "classes": [
                          "Footer-second-section-first-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idBSTUBtFe-NnzD-jWcN-JKj3-V9L8vfqmKMI5",
                          "ideSQq37NI-ch1u-B4Le-klIR-grD2rvSYEhbj",
                          "idvUQ3FIsY-gObM-WCT1-wHH0-0e1k4uywj8zX",
                          "idLTfujYiV-mA21-BF7j-JRbf-THcii9tSLHX2",
                          "idgICeSvp9-1J3d-uBAY-xV14-mxc4HXKtk2gv",
                          "idTkpnnTTo-PiTH-smFB-aJiC-BBGfClQo39JU",
                          "idgnAqmTEk-xC5x-PlwR-DA7f-OCDa4iKGK8o9"
                      ]
                  },
                  {
                      "_id": "idhIh881GQ-Yotd-mWZ5-bLpz-FMtDggEfQvN4",
                      "text": true,
                      "type": "text",
                      "v": "Resources"
                  },
                  {
                      "_id": "idOwIJoOxh-IhkV-2GYw-o90H-SY87aMALXeim",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idhIh881GQ-Yotd-mWZ5-bLpz-FMtDggEfQvN4"
                      ]
                  },
                  {
                      "_id": "idF9D4vlkG-TtJI-JSeo-S8L0-CU15xyq6pZ9w",
                      "text": true,
                      "type": "text",
                      "v": "Blog"
                  },
                  {
                      "_id": "idSr9YPRys-3OA2-OmBw-yKCf-dTTZ8nDQAeiq",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idF9D4vlkG-TtJI-JSeo-S8L0-CU15xyq6pZ9w"
                      ]
                  },
                  {
                      "_id": "idoOslKYvy-qtYC-UFxM-EzrP-CCvCqjIdBil5",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idSr9YPRys-3OA2-OmBw-yKCf-dTTZ8nDQAeiq"
                      ]
                  },
                  {
                      "_id": "idK7Uf0Y8S-xIfD-OgOb-CsrU-IzclvKFe0bnB",
                      "text": true,
                      "type": "text",
                      "v": "Newsletter"
                  },
                  {
                      "_id": "idzovNk5Pb-v1hr-mTri-e9wX-KS4NxMZ6ZliD",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idK7Uf0Y8S-xIfD-OgOb-CsrU-IzclvKFe0bnB"
                      ]
                  },
                  {
                      "_id": "idEaBlgZLV-bJKO-MzfC-RZZK-0GUaIukvDBTt",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idzovNk5Pb-v1hr-mTri-e9wX-KS4NxMZ6ZliD"
                      ]
                  },
                  {
                      "_id": "id24nAuKHl-6uC5-mbGh-uR5u-Xzq9BUl11yqN",
                      "text": true,
                      "type": "text",
                      "v": "Event"
                  },
                  {
                      "_id": "idCoVvPsCz-FcPO-c4KX-k3Dy-XzXn50oBXnQd",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id24nAuKHl-6uC5-mbGh-uR5u-Xzq9BUl11yqN"
                      ]
                  },
                  {
                      "_id": "idNojRhqiN-Nl08-EPhg-Awar-NpSwAPLo0EI0",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idCoVvPsCz-FcPO-c4KX-k3Dy-XzXn50oBXnQd"
                      ]
                  },
                  {
                      "_id": "idZnS86CMU-RaHF-5gvm-CXva-HhvANfQH6pA9",
                      "text": true,
                      "type": "text",
                      "v": "Help center"
                  },
                  {
                      "_id": "idijKfsOdb-rM00-9tEu-poH9-CkuwfG5POy7B",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "idZnS86CMU-RaHF-5gvm-CXva-HhvANfQH6pA9"
                      ]
                  },
                  {
                      "_id": "idxbtwOinT-7qYL-1gZ9-IJf7-Ildfi2Z7SSb4",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idijKfsOdb-rM00-9tEu-poH9-CkuwfG5POy7B"
                      ]
                  },
                  {
                      "_id": "id43rzaleO-V0Sl-9ngj-c9GN-sOxk02j43bfj",
                      "text": true,
                      "type": "text",
                      "v": "Tutorials"
                  },
                  {
                      "_id": "id9DlGrsrp-o64D-KszL-RmeG-PUtact7XRIyp",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id43rzaleO-V0Sl-9ngj-c9GN-sOxk02j43bfj"
                      ]
                  },
                  {
                      "_id": "idlpXeCeZx-GL3S-D8z8-sbv8-9v8bh11g50BH",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "id9DlGrsrp-o64D-KszL-RmeG-PUtact7XRIyp"
                      ]
                  },
                  {
                      "_id": "id4i4U94hX-JwUh-dGPx-8H86-zJZeTzybySv1",
                      "text": true,
                      "type": "text",
                      "v": "Support"
                  },
                  {
                      "_id": "idVNIPbBk1-AMmu-F8j1-k3rC-JqGBLAzEuiIY",
                      "tag": "a",
                      "classes": [
                          "Footer-second-section-first-a"
                      ],
                      "data": {
                          "href": "#"
                      },
                      "type": "a",
                      "children": [
                          "id4i4U94hX-JwUh-dGPx-8H86-zJZeTzybySv1"
                      ]
                  },
                  {
                      "_id": "idznn7luK3-0py5-YEgv-fyss-oaz8TnFZSjRy",
                      "tag": "li",
                      "classes": [
                          "Footer-second-section-first-li"
                      ],
                      "data": {},
                      "type": "li",
                      "children": [
                          "idVNIPbBk1-AMmu-F8j1-k3rC-JqGBLAzEuiIY"
                      ]
                  },
                  {
                      "_id": "idstZpZzrp-6bpl-1wZU-fOOX-vN8tCFxOzhYK",
                      "tag": "ul",
                      "classes": [
                          "Footer-second-section-first-ul"
                      ],
                      "data": {},
                      "type": "ul",
                      "children": [
                          "idOwIJoOxh-IhkV-2GYw-o90H-SY87aMALXeim",
                          "idoOslKYvy-qtYC-UFxM-EzrP-CCvCqjIdBil5",
                          "idEaBlgZLV-bJKO-MzfC-RZZK-0GUaIukvDBTt",
                          "idNojRhqiN-Nl08-EPhg-Awar-NpSwAPLo0EI0",
                          "idxbtwOinT-7qYL-1gZ9-IJf7-Ildfi2Z7SSb4",
                          "idlpXeCeZx-GL3S-D8z8-sbv8-9v8bh11g50BH",
                          "idznn7luK3-0py5-YEgv-fyss-oaz8TnFZSjRy"
                      ]
                  },
                  {
                      "_id": "idpH2B32i1-Y1tK-Ve33-iLUv-5cESOffAckVF",
                      "tag": "div",
                      "classes": [
                          "Footer-second-section-first-uls"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idmsjRMstQ-3lj4-O2RQ-ZrCh-qIM3vaQGNnka",
                          "idUkQnX2Mz-OcxP-LakW-7Fcz-iCmeXqvdSDgt",
                          "idstZpZzrp-6bpl-1wZU-fOOX-vN8tCFxOzhYK"
                      ]
                  },
                  {
                      "_id": "id2azw6DJS-ZlkE-sqKK-Dx5A-KNTHWidNOZsH",
                      "tag": "div",
                      "classes": [
                          "Footer-second-section-first"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "id6db1RX9U-wCYS-yeYw-RscC-bdPJOtIddB1C",
                          "idpH2B32i1-Y1tK-Ve33-iLUv-5cESOffAckVF"
                      ]
                  },
                  {
                      "_id": "idKRtjsk4b-P0wu-8fAr-FQxY-5urc6WPQOmaN",
                      "text": true,
                      "type": "text",
                      "v": "Move faster with Tailordom"
                  },
                  {
                      "_id": "idqK40e8HT-FFn7-uyN0-eM0U-LaTSr39NCHbc",
                      "tag": "h4",
                      "classes": [],
                      "data": {},
                      "type": "h4",
                      "children": [
                          "idKRtjsk4b-P0wu-8fAr-FQxY-5urc6WPQOmaN"
                      ]
                  },
                  {
                      "_id": "idfwNsQK2R-MNLV-QzKR-0RVE-ZN5Af7tiGEtV",
                      "text": true,
                      "type": "text",
                      "v": "Save countless hours of design and ship great looking designs faster."
                  },
                  {
                      "_id": "id7T9OmX8g-qjXa-v7IG-98yc-JKvlch1yMvzg",
                      "tag": "span",
                      "classes": [],
                      "data": {},
                      "type": "span",
                      "children": [
                          "idfwNsQK2R-MNLV-QzKR-0RVE-ZN5Af7tiGEtV"
                      ]
                  },
                  {
                      "_id": "idsfEaEiQj-ijQE-RlDv-Wy0C-oEeHQid2yeUk",
                      "tag": "div",
                      "classes": [],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idqK40e8HT-FFn7-uyN0-eM0U-LaTSr39NCHbc",
                          "id7T9OmX8g-qjXa-v7IG-98yc-JKvlch1yMvzg"
                      ]
                  },
                  {
                      "_id": "iddwv2LImJ-ai7d-nZqw-VeSL-gr9jpGRlb9bq",
                      "text": true,
                      "type": "text",
                      "v": "© 2077 Tailordom. All rights reserved."
                  },
                  {
                      "_id": "idyEXxPxXt-lOSf-uqj0-LOsC-dQocB0ToZMUA",
                      "tag": "p",
                      "classes": [
                          "Footer-second-section-scecond-p"
                      ],
                      "data": {},
                      "type": "p",
                      "children": [
                          "iddwv2LImJ-ai7d-nZqw-VeSL-gr9jpGRlb9bq"
                      ]
                  },
                  {
                      "_id": "idqG6QNfqW-7MST-euGR-tRqX-McCyQ1DyA6OM",
                      "tag": "div",
                      "classes": [
                          "Footer-second-section-second"
                      ],
                      "data": {},
                      "type": "div",
                      "children": [
                          "idsfEaEiQj-ijQE-RlDv-Wy0C-oEeHQid2yeUk",
                          "idyEXxPxXt-lOSf-uqj0-LOsC-dQocB0ToZMUA"
                      ]
                  }
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                style: [
                  {
                      "style_id": "520134d7-2f7d-46ac-a429-5f51f98e2fdf",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "footer-second",
                          "sel": "footer-second",
                          "styleLess": "display: flex; padding: 56.889px 30px 42.667px; flex-direction: column; gap: 56.889px; background: var(--Base-White, #FFF);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "82435a80-a964-4595-8c0b-b542b084d131",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 28.444px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "d084dd89-b325-4911-92b0-a176cbf63bf0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-container",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 10px; flex: 1 0 0px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "9fc23c19-d9bf-444f-a46d-59b64b60cc86",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-container2",
                          "styleLess": "display: flex; flex-direction: column; align-items: flex-start; gap: 14.222px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "cffc678e-9c3d-436e-a3e8-37f822f6877a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-p2",
                          "styleLess": "color: var(--Primary-700, #6941C6); font-family: Inter; font-size: 14.222px; font-style: normal; font-weight: 500; line-height: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "293b9152-07c0-43b2-9894-7215b6051b2e",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-p",
                          "styleLess": "max-width: 350px; color: var(--Gray-600, #475467); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 13px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c375c7a0-d482-401e-af19-2f16f7fdea15",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-uls",
                          "styleLess": "display: flex; align-items: flex-start; gap: 28.444px; justify-content: space-between; flex: 1 1 0%; width: 100%;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "981837a7-810b-4edb-a678-d40f287b4494",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-ul",
                          "styleLess": "padding: 0px; display: flex; flex-flow: column wrap; align-items: flex-start; gap: 17.333px; align-self: stretch;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "814c73d4-7709-4439-bf65-c245c8a265c0",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-li",
                          "styleLess": "list-style: none; color: var(--Gray-600, #475467); font-family: Inter; font-size: 12px; font-style: normal; font-weight: 600; line-height: 13px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "f7930c4b-bdec-4ae2-8c2e-2e4f709ad130",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-first-a",
                          "styleLess": "cursor: pointer; text-decoration: none; color: var(--Gray-600, #667085); font-size: 14px; line-height: 16px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "7c7a6354-f19f-4c5f-b9e0-cace2a127909",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-second",
                          "styleLess": "display: flex; padding-top: 28.444px; flex-direction: column; align-items: flex-start; gap: 28.444px; align-self: stretch; justify-content: space-between; border-top: 0.889px solid var(--Gray-200, #EAECF0);",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "50470942-5449-4f6e-8480-4b5bd2b47a8a",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-scecond-p",
                          "styleLess": "color: var(--Gray-500, #667085); font-family: Inter; font-size: 14px; font-style: normal; font-weight: 400; line-height: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4b9ba7e6-d717-4def-b3f7-c198125e81f6",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-scecond-img",
                          "styleLess": "display: flex; align-items: center; gap: 21.333px;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c0e7c686-4619-4c42-a475-0ce17ccb6b92",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "",
                          "sel": ".Footer-second-section-scecond-img",
                          "styleLess": "padding: 2px; text-decoration: none; outline: none;",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "c434b0ae-5528-4551-8aa8-daf895f5e72f",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 470px)",
                          "styleLess": "  .Footer-second-section-first { flex-direction: row;} ",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "b7e44569-47c6-4fbd-b406-7d3f62fde217",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 767px)",
                          "styleLess": "  .Footer-second-section-second { flex-direction: row; }",
                          "type": "class",
                          "variants": {}
                      }
                  },
                  {
                      "style_id": "4470005b-8727-46a6-a9f6-582c5e1dd315",
                      "data": {
                          "comb": "",
                          "affects": {},
                          "children": [],
                          "name": "MediaRuleTurnedNormal",
                          "sel": "@media (min-width: 991px)",
                          "styleLess": "  .Footer-second-section-first-li { font-size: 14px; line-height: 16.333px; }  .Footer-second-section-first-a { font-size: 16px; line-height: 21.333px; }  .Footer-second-section-first-p { font-size: 16px; line-height: 23.333px; }  .Footer-second-section-scecond-p { font-size: 14px;} ",
                          "type": "class",
                          "variants": {}
                      }
                  }
              ],

              }
            }
          ]
        }
      },
    ]
  },
  addElement: {
    label: "Add",
    list: [
      {
        _id: 1,
        label: "Typography",
        data: {
          options: [
            {
              _id: "21276367376830", tag: "h1", type: "heading", label: "Heading", data: {},
              node: [
                { _id: "3347487789894", tag: "h1", type: "heading", label: "Heading", children: ["3545-4849-4702"], classes: [], data: {} },
                { _id: "3545-4849-4702", text: true, v: "H1 Heading" },
                // {id: "467788378934", tag: "h2", defaultText: "Sample Text", children: ["94988940334"], classes: ["heading", "heading-h1"]},
                // {id: "94988940334", text: true, v: "Heading Title"}
              ],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                blocks: [
                  {
                    id: "ac43e80a-7a50-03c2-5332-c1494c199001",
                    data: {
                      comb: "", affects: { "63bd5deeb0d2be0101f4dc8f": 1 },
                      children: [], name: "Team__wrapper", sel: ".Team__wrapper",
                      styleLess: "display: flex; position: relative; justify-content: center; align-items: center;",
                      type: "class",
                      variants: { small: { sel: ".header__wrapper", styleLess: "padding-top: 60px; padding-right: 15px; padding-bottom: 60px; padding-left: 15px;" } },
                    }
                  },
                ],

              }
            },
            {
              _id: "29384898598895", tag: "a", type: "linkBlock", label: "Text Link",
              data: { defaultText: "Sample Link", className: ["heading", "link"], href: "http://www.aosafrica.com" },
              node: [
                { _id: "01", tag: "a", type: "linkBlock", label: "Text Link", children: ["3545-4849-4702"], classes: [], data: {} },
                { _id: "3545-4849-4702", text: true, v: "Text Link" },
              ], styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                blocks: [],

              }
            },
            { _id: "20076367376830", tag: "div", type: "divBlock", label: "Text Block", data: { defaultText: "Sample Text", className: ["divBlock", "heading-h1"] } },
            {
              _id: "20076367376831", label: "Text Block",
              img_url: "https://d3e54v103j8qbb.cloudfront.net/img/pbl-LayoutTeamCircles-preview@2x.e493c59c1d.png",
              node: [
                { _id: "012", tag: "div", type: "textBlock", label: "Text Link", data: {}, children: ["34856d1bcad"], classes: [] },
                { _id: "34856d1bcad", text: true, v: "textBlock, lorem ipsum geruom Link" }
              ], styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                blocks: [],

              }
            },
            {
              _id: "20004898598895", tag: "p", type: "Paragraph", label: "Paragraph", data: { defaultText: "Paragraph lorem ipsum", className: ["Paragraph", "heading-new"] }
              , node: [{ _id: "012", tag: "p", type: "textBlock", label: "Paragraph", data: {}, children: ["34856d1bcad"], classes: [] },
              { _id: "34856d1bcad", text: true, v: "Paragrahp i, lorem ipsum geruom Link" }],
              styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                blocks: [],

              }
            },
            {
              _id: "20000898598895", tag: "blockquote", type: "quoteBlock", label: "Quote", data: { defaultText: "Special Quote lorem ipsum", className: ["heading-new"] },
              img_url: "https://d3e54v103j8qbb.cloudfront.net/img/pbl-LayoutTeamCircles-preview@2x.e493c59c1d.png",
              node: [
                { _id: "012", tag: "blockquote", type: "quoteBlock", label: "Quote", data: {}, children: ["34856d1bcad"], classes: [] },
                { _id: "34856d1bcad", text: true, v: "textBlock, lorem ipsum geruom Link" }
              ], styles: {
                data: {
                  appliedStylesMap: {},
                  breakpoints: {}
                },
                blocks: [],

              }
            },
          ]
        }
      },
      {
        _id: 2,
        label: "Basic",
        data: {
          options: [
            {
              _id: "1",
              label: "Circle Team",
              img_url: "https://d3e54v103j8qbb.cloudfront.net/img/pbl-LayoutTeamCircles-preview@2x.e493c59c1d.png",
              node: [
                { _id: "012", tag: "a", type: "linkBlock", label: "Text Link", data: {}, children: ["34856d1bcad"], classes: [] },
                { _id: "34856d1bcad", text: true, v: "Text Link" }
              ]
            }
          ]
        }
      },
      // {
      //   _id: 3,
      //   label: "Structure",
      //   data: {
      //     options: []
      //   }
      // },
      // {
      //   _id: "004", type: "Media", label: "Media", data: {
      //     options: [
      //       { _id: "21276367376830", tag: "h1", type: "heading", label: "Heading", data: { defaultText: "Sample Text", className: ["heading", "heading-h1"] } },
      //       { _id: "29384898598895", tag: "a", type: "linkBlock", label: "Text Link", data: { defaultText: "Sample Link", className: ["heading", "heading-h1"], href: "http://www.aosafrica.com" } },
      //       { _id: "20076367376830", tag: "div", type: "divBlock", label: "Text Block", data: { defaultText: "Sample Text", className: ["divBlock", "heading-h1"] } },
      //       { _id: "20004898598895", tag: "p", type: "Paragraph", label: "Paragraph", data: { defaultText: "Paragraph lorem ipsum", className: ["Paragraph", "heading-new"] } },
      //       { _id: "20000898598895", tag: "blockquote", type: "quoteBlock", label: "Quote", data: { defaultText: "Special Quote lorem ipsum", className: ["Paragraph", "heading-new"] } },
      //     ]
      //   }
      // },
      // {
      //   _id: "005", type: "Content manager", label: "Content Management System", data: {
      //     options: [
      //       { _id: "21276367376830", tag: "h1", type: "heading", label: "Heading", data: { defaultText: "Sample Text", className: ["heading", "heading-h1"] } },
      //     ]
      //   }
      // },
      // {
      //   _id: "006", type: "Advance", label: "Advance", data: {
      //     options: []
      //   }
      // },
      // {
      //   _id: "007", type: "other", label: "Other", data: {
      //     options: []
      //   }
      // },

    ]
  },
  addPage: {
    label: "Pages",
    list: [
      {
        _id: 1,
        label: "Add Page",
        data: {
          options: [
            {
                route:"",
                name:"Untitled Page",
                head:{
                    title:"",
                    description:""
                },
                slug:"",           
                page_id:"new-page-id-to-be-used-and-changed",
                nodes:[
                  {
                    num: 1,
                    _id: "63bd5deeb0d2be5075f4dc90", 
                    type: "Body", 
                    tag: "main",
                    tdId:"1234", 
                    children: [],
                    classes: ["main"]
                  },
                ],
                styles:{
                  data: {
                      appliedStylesMap: {},
                      breakpoints: {
                          main: {maxWidth: 10000}, large: {minWidth: 1280}, xxl: {minWidth: 1920}, medium: {maxWidth: 991}, small: {maxWidth: 767},tiny: {maxWidth: 479}, xxl: {minWidth: 1920}
                      }, 
                      macros: [], migrations: {stylesNext: true}, swatches: []
                  },
                  style: [
                    {
                      style_id: "main",
                      data: {
                          comb: "", affects: {"63bd5deeb0d2be0101f4dc8f": 1},
                          children: [], name: "Main default", sel: ".main",
                          styleLess: "width:100%;height:100%",
                          type: "class",
                          variants : {small: {sel: ".testimonial-column-light", styleLess: "padding: 30px;"}},
                      }
                    },
                  ],
                },
              },
          ]
        }
      }
    ]
  },
  layer: {
    label: "Layer",
    list: [
      {
        _id: 1,
        label: "Add Layer",
        data: {
          options: []
        }
      }
    ]
  },
  addMedia: {
    label: "Media",
    list: [
      {
        _id: 1,
        label: "Add pictures",
        data: {
          options: []
        }
      }
    ]
  },
  settingTd: {
    label: "Setting",
    list: [
      {
        _id: 1,
        label: "Theme Color",
        data: {}
      }
    ]
  }
};
