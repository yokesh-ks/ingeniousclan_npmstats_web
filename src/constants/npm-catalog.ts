export const catalog = [
  {
    name: "Frontend Frameworks",
    slug: "frontend-frameworks",
    icon: "code",
    description:
      "Frontend frameworks are essential tools for modern web development, providing a structured approach to crafting interactive and visually appealing user interfaces. These libraries or collections of tools offer pre-built components, styling solutions, and state management capabilities, streamlining the development process and ensuring consistency across web applications.\n By utilizing frontend frameworks, developers can efficiently build complex user interfaces while adhering to best practices. These frameworks promote code reusability, improve performance, and enhance overall development productivity.",
    packages: [
      "alpine",
      "angular",
      "aurelia",
      "backbone",
      "ember",
      "htmx",
      "hyperapp",
      "inferno",
      "knockout",
      "lit",
      "marko",
      "mithril",
      "preact",
      "qwik",
      "react",
      "riot",
      "solid",
      "stimulus",
      "svelte",
      "vue",
    ],
  },
  {
    name: "React UI Libraries and Components",
    slug: "react-ui-libraries-and-components",
    icon: "box",
    description:
      "React UI libraries are collections of pre-built, reusable components designed to accelerate the development of user interfaces with React. These components, ranging from basic buttons and inputs to complex data tables and navigation menus, offer a streamlined approach to building consistent and visually appealing applications. By providing a foundation of styled and interactive elements, these libraries significantly reduce development time and effort, allowing developers to focus on core application logic rather than reinventing the wheel.",
    packages: [
      "@chakra-ui/react",
      "@evergreen-ui/core",
      "@fluentui/react",
      "geist-ui",
      "@grommet/react",
      "@mui/material",
      "react-bootstrap",
      "react-suite",
      "antd",
      "@headlessui/react",
      "react-desktop",
      "rebass",
      "react-calendar",
      "react-date-picker",
      "react-datepicker",
      "react-dates",
      "react-datetime",
      "react-day-picker",
      "react-helmet",
      "reactstrap",
    ],
  },
  {
    name: "State Management Libraries",
    slug: "state-management-libraries",
    icon: "layers",
    description:
      "State management libraries are essential tools for organizing and managing complex application data. They provide a structured approach to handling state changes, ensuring consistency and predictability across different parts of an application. By centralizing state management, these libraries simplify development, improve performance, and enhance code maintainability.",
    packages: [
      "akita",
      "constate",
      "easy-peasy",
      "effector",
      "harlem",
      "jotai",
      "little-state-machine",
      "mobX",
      "@ngxs/store",
      "@nanostores/react",
      "@ngrx/store",
      "0vermind",
      "react-query",
      "react-async-hook",
      "recoil",
      "Redux",
      "rxjs",
      "storeon",
      "valtio",
      "vuex",
      "xstate",
      "zustand",
      "mobx-state-tree",
      "react-async",
      "react-fetch-hook",
      "rest-hooks",
      "use-http",
    ],
  },
  {
    name: "Testing Frameworks",
    slug: "testing-frameworks",
    icon: "vault",
    description:
      "Testing frameworks are essential tools that streamline the creation and execution of software tests. By providing a structured environment for writing, organizing, and running test cases, these frameworks enhance test efficiency, maintainability, and reliability. Through features like test case management, assertion libraries, test data management, and reporting, testing frameworks empower development teams to deliver high-quality software by detecting and preventing defects early in the development cycle.",
    packages: [
      "jest",
      "mocha",
      "jasmine",
      "ava",
      "tape",
      "qunit",
      "cypress",
      "puppeteer",
      "playwright",
      "karma",
      "testcafe",
      "nightwatch",
      "webdriverio",
      "protractor",
      "selenium",
      "enzyme",
      "react-testing-library",
      "chai",
      "sinon",
      "supertest",
      "nock",
      "vitest",
      "cucumber",
      "zora",
      "testdouble",
      "expect",
      "uvu",
    ],
  },
  {
    name: "Build and Bundling Tools",
    slug: "build-and-bundling-tools",
    icon: "telescope",
    description:
      "Build and bundling tools streamline the development and optimization process by automating the transformation of source code into production-ready assets. These tools handle tasks such as code transpilation, minification, compression, and bundling, resulting in smaller, faster, and more efficient applications. By managing dependencies, optimizing assets, and generating optimized output, build tools significantly contribute to improved performance and user experience.",
    packages: [
      "webpack",
      "parcel",
      "rollup",
      "esbuild",
      "vite",
      "gulp",
      "grunt",
      "snowpack",
      "broccoli",
      "fuse-box",
      "brunch",
      "browserify",
    ],
  },
  {
    name: "CSS Frameworks and Tools",
    slug: "css-frameworks-and-tools",
    icon: "brush",
    description:
      "CSS frameworks and tools provide a foundation of pre-built styles, components, and utilities to accelerate web development and ensure visual consistency. By offering responsive grid systems, pre-designed components, and styling conventions, these frameworks streamline the design and development process, allowing developers to focus on creating unique user experiences. They promote efficient teamwork, cross-browser compatibility, and accessibility while maintaining a cohesive visual identity throughout the application.",
    packages: [
      "bootstrap",
      "tailwindcss",
      "bulma",
      "foundation",
      "semantic-ui",
      "materialize",
      "skeleton",
      "uikit",
      "purecss",
      "ant-design",
      "tachyons",
      "spectre.css",
    ],
  },
  {
    name: "React Testing Tools",
    slug: "react-testing-tools",
    icon: "monitor",
    description:
      "React testing libraries provide essential tools for ensuring the quality and reliability of React components and applications. By offering utilities for rendering components, simulating user interactions, and asserting component behavior, these libraries facilitate the creation of comprehensive test suites. Through rigorous testing, developers can identify potential issues early in the development process, improve code maintainability, and deliver high-quality user experiences.",
    packages: [
      "react-testing-library",
      "enzyme",
      "jest",
      "cypress",
      "mocha",
      "chai",
      "sinon",
      "karma",
      "puppeteer",
      "testing-library/jest-dom",
      "testcafe",
      "ava",
    ],
  },
  {
    name: "GraphQL Libraries",
    slug: "graphql-libraries",
    icon: "database",
    description:
      "GraphQL libraries provide the essential tools for constructing and consuming efficient, flexible APIs. By enabling precise data fetching through GraphQL queries, these libraries optimize data transfer, reduce over-fetching, and improve application performance. With features like schema definition, resolver implementation, and client-side integration, GraphQL libraries empower developers to build data-driven applications that meet the exact needs of their clients.",
    packages: [
      "apollo-client",
      "relay",
      "urql",
      "graphql-js",
      "graphql-tools",
      "graphql-tag",
      "graphql-yoga",
      "graphql-modules",
      "express-graphql",
      "graphql-subscriptions",
      "type-graphql",
      "hasura",
    ],
  },
  {
    name: "HTTP Request Libraries",
    slug: "http-request-libraries",
    icon: "cloud",
    description:
      "HTTP request libraries streamline interactions with web services by providing a simplified interface for making HTTP requests. These libraries abstract away the complexities of network communication, allowing developers to focus on application logic. By supporting various HTTP methods, handling responses, and offering features like error handling, retries, and request/response transformations, these libraries enhance the efficiency and reliability of web applications.",
    packages: [
      "axios",
      "fetch",
      "superagent",
      "request",
      "got",
      "ky",
      "node-fetch",
      "unfetch",
      "httpie",
      "bent",
      "needle",
      "redaxios",
    ],
  },
  {
    name: "Mobile Frameworks",
    slug: "mobile-frameworks",
    icon: "phone",
    description:
      "Mobile frameworks provide a robust foundation for building high-performance, native-like mobile applications across multiple platforms. By offering pre-built components, UI libraries, and tools for accessing device features, these frameworks accelerate development, reduce costs, and ensure consistency. Whether targeting native or cross-platform environments, mobile frameworks empower developers to create engaging and user-centric mobile experiences.",
    packages: [
      "react-native",
      "flutter",
      "ionic",
      "xamarin",
      "cordova",
      "phonegap",
      "native-script",
      "kivy",
      "expo",
      "onsen-ui",
      "appcelerator",
      "qt",
    ],
  },
  {
    name: "Charting Libraries",
    slug: "charting-libraries",
    icon: "chart-line",
    description:
      "Charting libraries provide essential tools for transforming raw data into visually compelling and interactive insights. By offering a rich array of chart types, customization options, and interactive features, these libraries enable developers to create engaging data visualizations that effectively communicate complex information. From simple bar charts to sophisticated 3D visualizations, charting libraries empower users to explore data trends, patterns, and correlations with ease.",
    packages: [
      "chart.js",
      "d3.js",
      "highcharts",
      "recharts",
      "nivo",
      "echarts",
      "victory",
      "apexcharts",
      "plotly.js",
      "chartist",
      "fusioncharts",
      "amcharts",
    ],
  },
  {
    name: "Utility Libraries",
    slug: "utility-libraries",
    icon: "wrench",
    description:
      "Utility libraries provide a collection of reusable functions and tools that streamline common programming tasks. By encapsulating frequently used operations, these libraries enhance code readability, maintainability, and efficiency. They offer solutions for data manipulation, string formatting, array operations, object handling, and other general-purpose utilities, allowing developers to focus on core application logic rather than reinventing common functionalities.",
    packages: [
      "lodash",
      "underscore",
      "ramda",
      "date-fns",
      "moment",
      "uuid",
      "numeral",
      "qs",
      "deepmerge",
      "validator",
      "luxon",
      "immutable",
    ],
  },
  {
    name: "React Form Libraries",
    slug: "react-form-libraries",
    icon: "file-pen-line",
    description:
      "React form libraries streamline the creation and management of complex forms within React applications. By providing pre-built components, state management, validation rules, and submission handling, these libraries significantly enhance developer productivity and user experience. They abstract away the complexities of form handling, allowing developers to focus on building the core functionality of their applications.",
    packages: [
      "formik",
      "react-hook-form",
      "redux-form",
      "final-form",
      "formik-material-ui",
      "react-jsonschema-form",
      "react-final-form",
      "informed",
      "unform",
      "formsy-react",
    ],
  },
  {
    name: "Markdown Parsers",
    slug: "markdown-parsers",
    icon: "file-text",
    description:
      "Markdown parsers are libraries that convert Markdown syntax into HTML or other formats. These parsers enable developers to use Markdown for writing content, which can then be easily rendered on web pages or other platforms, providing a simple and readable way to create formatted text.",
    packages: [
      "marked",
      "markdown-it",
      "showdown",
      "remark",
      "markdown-js",
      "markdown-to-jsx",
      "commonmark",
      "remarkable",
      "turndown",
      "kramed",
    ],
  },
  {
    name: "Backend Frameworks",
    slug: "backend-frameworks",
    icon: "server",
    description:
      "Backend frameworks provide a structured foundation for building robust and scalable server-side applications. By offering pre-built components, libraries, and tools for handling common tasks like routing, database interactions, and error handling, these frameworks accelerate development and improve code quality. They enable developers to focus on core business logic while relying on the framework for underlying infrastructure and best practices.",
    packages: [
      "express",
      "koa",
      "nest",
      "hapi",
      "sails",
      "loopback",
      "fastify",
      "adonis",
      "feathers",
      "total.js",
      "meteor",
      "restify",
    ],
  },
  {
    name: "Fullstack Frameworks",
    slug: "fullstack-frameworks",
    icon: "database",
    description:
      "Full-stack frameworks provide a comprehensive toolkit for building web applications from the ground up. By unifying frontend and backend development into a cohesive platform, these frameworks accelerate development, enhance code maintainability, and foster efficient collaboration. They typically include features for routing, data modeling, templating, and server-side logic, empowering developers to create robust and scalable web applications with a single technology stack.",
    packages: [
      "next.js",
      "nuxt.js",
      "blitz.js",
      "sapper",
      "remix",
      "redwood",
      "meteor",
      "nestjs",
      "phoenix",
      "asp.net",
    ],
  },
  {
    name: "Monitoring and Performance Tools",
    slug: "monitoring-and-performance-tools",
    icon: "activity",
    description:
      "Monitoring and performance tools are indispensable for ensuring optimal application health, performance, and user experience. By providing real-time visibility into application behavior, resource utilization, and user interactions, these tools empower developers and operations teams to proactively identify and address issues. Through comprehensive metrics, detailed analytics, and actionable insights, they facilitate performance optimization, error detection, and capacity planning, ultimately leading to more reliable and efficient systems.",
    packages: [
      "newrelic",
      "datadog",
      "sentry",
      "prometheus",
      "grafana",
      "lighthouse",
      "logrocket",
      "apm",
      "elastic-apm",
      "splunk",
      "appdynamics",
      "cloudwatch",
    ],
  },
  {
    name: "Visual Regression Testing Tools",
    slug: "visual-regression-testing-tools",
    icon: "eye-off",
    description:
      "Visual regression testing tools automate the detection of visual inconsistencies in web applications. By capturing and comparing screenshots of application interfaces over time, these tools identify unintended visual changes caused by code modifications. This proactive approach ensures that the application's appearance remains consistent across updates, enhancing user experience and preventing the release of visually flawed software.",
    packages: [
      "storybook",
      "reg-suit",
      "loki",
      "percy",
      "backstopjs",
      "applitools",
      "chromatic",
      "happo",
      "argos-ci",
      "wraith",
      "visual-diff",
      "resemblejs",
    ],
  },
  {
    name: "SQL and ORM Libraries",
    slug: "sql-and-orm-libraries",
    icon: "database",
    description:
      "SQL and ORM libraries provide essential tools for efficient and reliable data management within applications. While SQL offers direct interaction with databases through a structured query language, ORMs (Object-Relational Mappers) abstract database operations, allowing developers to work with data as objects. This higher-level approach simplifies database interactions, enhances code readability, and accelerates development. By combining the power of SQL with the convenience of ORMs, developers can effectively manage and manipulate data within their applications.",
    packages: [
      "sequelize",
      "typeorm",
      "prisma",
      "knex",
      "bookshelf",
      "objection",
      "mikro-orm",
      "waterline",
      "node-sql",
      "sqlalchemy",
      "hibernate",
      "doctrine",
    ],
  },
  {
    name: "Template Engines",
    slug: "template-engines",
    icon: "file-text",
    description:
      "Template engines are tools that efficiently generate dynamic HTML content by merging static templates with dynamic data. They enhance development efficiency by separating presentation logic from business logic, promoting code reusability, and improving maintainability. Through the use of placeholders and control flow structures within templates, developers can create flexible and adaptable web pages without writing extensive HTML code directly.",
    packages: [
      "ejs",
      "pug",
      "handlebars",
      "mustache",
      "nunjucks",
      "liquid",
      "twig",
      "velocity",
      "dot",
      "marko",
      "art-template",
      "swig",
    ],
  },
  {
    name: "Serverless Middleware",
    slug: "serverless-middleware",
    icon: "cloud",
    description:
      "Serverless middleware is a layer of abstraction that simplifies the development of serverless applications. By handling common cross-cutting concerns like authentication, authorization, error handling, and API gateways, middleware allows developers to focus on core business logic without the overhead of managing infrastructure. This approach promotes code reusability, improves application security, and accelerates development time.",
    packages: [
      "serverless",
      "aws-lambda",
      "azure-functions",
      "firebase-functions",
      "openwhisk",
      "netlify-functions",
      "vercel",
      "arc.codes",
      "up",
      "faas",
      "webtask",
      "kubeless",
    ],
  },
  {
    name: "Static Site Generators",
    slug: "static-site-generators",
    icon: "globe",
    description:
      "Static Site Generators (SSGs) are tools that create static HTML websites from dynamic content sources. By pre-rendering web pages into static files at build time, SSGs deliver exceptional performance, enhanced security, and cost-effective deployment. Ideal for content-heavy websites like blogs, documentation, and portfolios, SSGs combine the speed and reliability of static sites with the flexibility of dynamic content management.",
    packages: [
      "gatsby",
      "next.js",
      "hugo",
      "jekyll",
      "eleventy",
      "vuepress",
      "nuxt.js",
      "hexo",
      "docusaurus",
      "gridsome",
      "sapper",
      "scully",
    ],
  },
  {
    name: "VueJS UI Libraries",
    slug: "vuejs-ui-libraries",
    icon: "box",
    description:
      "Vue.js UI libraries offer pre-built, customizable components to accelerate the development of visually appealing and responsive user interfaces. By providing a rich set of reusable elements, these libraries streamline the design and development process, ensuring consistency and efficiency. They often incorporate design systems, theming options, and accessibility features, making it easier to create user-centric applications that adhere to modern design principles.",
    packages: [
      "vuetify",
      "buefy",
      "element-ui",
      "quasar",
      "ant-design-vue",
      "bootstrap-vue",
      "vue-material",
      "vue-tailwind",
      "cube-ui",
      "at-ui",
      "muse-ui",
      "vuesax",
    ],
  },
  {
    name: "VueJS Unit-Testing Libraries",
    slug: "vuejs-unit-testing-libraries",
    icon: "grid-2x2-check",
    description:
      "Vue.js unit testing libraries provide essential tools for rigorously testing the smallest isolated units of Vue.js components. By enabling developers to write and execute focused tests, these libraries help ensure code quality, prevent regressions, and improve code maintainability. Through features like component mounting, interaction simulation, and assertion capabilities, they facilitate the creation of comprehensive test suites that verify component behavior and data flow.",
    packages: [
      "vue-test-utils",
      "jest",
      "mocha",
      "chai",
      "sinon",
      "cypress",
      "ava",
      "karma",
      "vitest",
      "tape",
      "qunit",
      "react-testing-library",
    ],
  },
  {
    name: "Geolocation and Distance Libraries",
    slug: "geolocation-and-distance-libraries",
    icon: "map-pin",
    description:
      "Geolocation and distance libraries provide essential tools for building location-aware applications. By offering functions for determining device location, calculating distances, and performing geocoding (converting addresses to coordinates), these libraries simplify the development of map-based features, location-based services, and spatial analysis applications. They empower developers to create engaging user experiences that leverage geographic data effectively.",
    packages: [
      "leaflet",
      "mapbox",
      "google-maps",
      "geolib",
      "turf",
      "geolocation-api",
      "openlayers",
      "geoposition",
      "mapkit",
      "here-maps",
      "yandex-maps",
      "ol-geocoder",
    ],
  },
  {
    name: "Date and Time Libraries",
    slug: "date-and-time-libraries",
    icon: "calendar",
    description:
      "Date and time libraries provide essential tools for handling the complexities of date and time calculations. By offering functions for parsing, formatting, manipulating, and converting date and time values across different time zones and locales, these libraries streamline development and ensure accurate time-based operations. They are indispensable for building reliable and user-friendly applications that cater to diverse global audiences.",
    packages: [
      "moment",
      "date-fns",
      "luxon",
      "dayjs",
      "timeago",
      "chrono",
      "js-joda",
      "date-arithmetic",
      "timezone-js",
      "sugar-date",
      "date-fns-tz",
      "moment-timezone",
    ],
  },
  {
    name: "Process Management",
    slug: "process-management",
    icon: "cog",
    description:
      "Process management libraries provide essential tools for controlling and monitoring the execution of external processes within applications. By offering functions to start, stop, and interact with processes, these libraries enable developers to orchestrate complex workflows, manage resource utilization, and enhance application reliability. Through features like error handling, process output capturing, and monitoring, these libraries contribute to building robust and efficient systems.",
    packages: [
      "pm2",
      "forever",
      "nodemon",
      "supervisor",
      "strong-pm",
      "god",
      "monit",
      "upstart",
      "systemd",
      "supervisord",
      "daemontools",
      "runit",
    ],
  },
  {
    name: "Logging Libraries",
    slug: "logging-libraries",
    icon: "logs",
    description:
      "Logging libraries provide essential tools for capturing, storing, and analyzing application behavior. By generating structured log messages, these libraries enable developers to effectively troubleshoot issues, monitor performance, and gain valuable insights into application usage. Through features like log levels, custom formatting, and integration with external logging services, logging libraries enhance application observability and support efficient problem-solving.",
    packages: [
      "winston",
      "bunyan",
      "pino",
      "log4js",
      "morgan",
      "debug",
      "npmlog",
      "loglevel",
      "roarr",
      "signale",
      "log",
      "bole",
    ],
  },
  {
    name: "3D Libraries",
    slug: "3d-libraries",
    icon: "codesandbox",
    description:
      "3D libraries provide a foundation for creating immersive and interactive visual experiences within web applications. These powerful tools offer a comprehensive set of functionalities for rendering complex 3D scenes, animating objects, handling user interactions, and optimizing performance. By abstracting away the complexities of low-level graphics programming, 3D libraries empower developers to focus on creating compelling visual narratives and engaging user experiences.",
    packages: [
      "three.js",
      "babylon.js",
      "aframe",
      "playcanvas",
      "cesium",
      "react-three-fiber",
      "oimo",
      "cannon.js",
      "ammo.js",
      "phaser",
      "melonjs",
      "pixi.js",
    ],
  },
  {
    name: "Desktop App Frameworks",
    slug: "desktop-app-frameworks",
    icon: "monitor",
    description:
      "Desktop app frameworks leverage web technologies to streamline the development of cross-platform desktop applications. By providing tools and APIs to access native platform features, these frameworks enable developers to build applications that run seamlessly on Windows, macOS, and Linux using a shared codebase. This approach accelerates development, reduces costs, and ensures a consistent user experience across different operating systems.",
    packages: [
      "electron",
      "nw.js",
      "proton-native",
      "neutralinojs",
      "react-desktop",
      "tauri",
      "node-webkit",
      "meteor-desktop",
      "vue-electron",
      "sciter",
      "desk-gap",
      "revery",
    ],
  },
  {
    name: "Immutability Libraries",
    slug: "immutability-libraries",
    icon: "lock",
    description:
      "Immutability libraries provide a foundation for building robust and predictable applications by enforcing data immutability. These libraries offer efficient mechanisms for creating new data structures based on existing ones, without modifying the original data. By eliminating side effects and simplifying state management, immutability libraries enhance code clarity, testability, and performance. They are particularly valuable in complex applications with frequent state updates.",
    packages: [
      "immutable.js",
      "immer",
      "mori",
      "seamless-immutable",
      "immupdate",
      "freeze",
      "deep-freeze",
      "immutable-state",
      "timm",
      "froid",
      "debrief",
      "transducers-js",
    ],
  },
  {
    name: "Markdown Components for React",
    slug: "markdown-components-for-react",
    icon: "file-text",
    description:
      "Markdown components for React offer a seamless way to incorporate rich, formatted text into applications. By rendering Markdown content directly within React components, these libraries empower developers and content creators to easily produce dynamic and engaging user experiences. With support for a wide range of Markdown features, including headings, lists, code blocks, and images, these components enhance content flexibility and readability.",
    packages: [
      "react-markdown",
      "markdown-to-jsx",
      "react-showdown",
      "react-mde",
      "react-markdown-editor-lite",
      "react-simplemde-editor",
      "react-remarkable",
      "mdx-js",
      "react-markdown-preview",
      "react-mde-editor",
      "react-md-editor",
      "react-markdown-it",
    ],
  },
  {
    name: "Tooltip Libraries",
    slug: "tooltip-libraries",
    icon: "circle-help",
    description:
      "Tooltip libraries offer pre-built components that provide concise, on-demand information to users. By displaying relevant context or additional details upon hover or focus, these libraries enhance user experience, reduce clutter, and improve accessibility. With customizable appearance, positioning, and behavior, tooltip libraries streamline the development process and ensure consistent tooltip implementation across an application.",
    packages: [
      "tippy.js",
      "react-tooltip",
      "tooltip.js",
      "popper.js",
      "floating-ui",
      "hovercard",
      "shepherd",
      "hint.css",
      "tooltipster",
      "balloon.css",
      "balloon-css",
      "d3-tooltip",
    ],
  },
  {
    name: "Vue Testing Tools",
    slug: "vue-testing-tools",
    icon: "monitor",
    description:
      "Vue testing tools provide a comprehensive suite for ensuring the quality and reliability of Vue.js applications. These tools enable developers to write and execute unit, integration, and end-to-end tests, covering component behavior, data flow, and user interactions. By systematically verifying application functionality, these tools help prevent regressions, improve code maintainability, and boost developer confidence.",
    packages: [
      "vue-test-utils",
      "jest",
      "mocha",
      "chai",
      "sinon",
      "cypress",
      "karma",
      "ava",
      "vitest",
      "enzyme",
      "tape",
      "qunit",
    ],
  },
  {
    name: "React Hook Libraries",
    slug: "react-hook-libraries",
    icon: "link",
    description:
      "React hook libraries provide a collection of pre-built, reusable functions that encapsulate common stateful logic and side effects within React components. By abstracting away complex logic and promoting code reusability, these libraries streamline development, enhance code readability, and improve component maintainability. They adhere to React's functional component paradigm, making them a powerful tool for building efficient and scalable applications.",
    packages: [
      "react-use",
      "ahooks",
      "use-immer",
      "use-debounce",
      "react-use-gesture",
      "react-query",
      "react-spring",
      "zustand",
      "valtio",
      "swr",
      "recoil",
      "jotai",
    ],
  },
  {
    name: "React Native JS Engines",
    slug: "react-native-js-engines",
    icon: "phone",
    description:
      "React Native JS engines are specialized JavaScript runtimes optimized for executing React Native applications. By accelerating JavaScript code execution, these engines significantly enhance app performance, responsiveness, and overall user experience. They are crucial in delivering smooth animations, faster load times, and efficient resource utilization within React Native apps.",
    packages: [
      "hermes",
      "jsc",
      "v8",
      "quickjs",
      "react-native-v8",
      "react-native-jsc",
      "react-native-quickjs",
      "react-native-hermes",
      "react-native-v8-jsi",
      "react-native-jsc-android",
      "react-native-webview",
      "react-native-fast-image",
    ],
  },
  {
    name: "Vue Select Components",
    slug: "vue-select-components",
    icon: "list",
    description:
      "Vue select components offer advanced and customizable select input options for Vue.js applications. Beyond the standard HTML select element, these components provide enhanced features such as multi-selection, search functionality, and asynchronous data loading. By streamlining user interactions and offering flexible customization, Vue select components significantly improve the overall user experience and efficiency of form building.",
    packages: [
      "vue-select",
      "vue-multiselect",
      "vue-selectize",
      "vue-treeselect",
      "vue-single-select",
      "vue-dropdown",
      "vue-search-select",
      "vue-chosen",
      "vue-select2",
      "vue-multiselect-dropdown",
      "vue-select-list",
      "vue-search",
    ],
  },
  {
    name: "Web Components Libraries",
    slug: "web-components-libraries",
    icon: "box",
    description:
      "Web component libraries provide a structured approach to creating reusable and encapsulated UI components. By leveraging the Web Components standard, these libraries empower developers to build custom elements that function independently, promoting code reusability, component-based architecture, and enhanced collaboration across different projects and frameworks.",
    packages: [
      "lit-element",
      "stencil",
      "skatejs",
      "polymer",
      "hybrids",
      "omi",
      "riot",
      "atomico",
      "x-tag",
      "slim.js",
      "vanilla-lazyload",
      "elix",
    ],
  },
  {
    name: "Websocket Libraries",
    slug: "websocket-libraries",
    icon: "link",
    description:
      "WebSocket libraries provide the foundation for building dynamic and engaging real-time applications. By enabling bidirectional communication between clients and servers, these libraries facilitate the seamless exchange of data, creating immersive user experiences. Whether it's live chat, collaborative tools, or data-driven visualizations, WebSocket libraries empower developers to create applications that respond instantly to user actions and changing data, fostering engagement and productivity.",
    packages: [
      "socket.io",
      "ws",
      "uWebSockets.js",
      "primus",
      "sockjs",
      "faye-websocket",
      "websockets",
      "engine.io",
      "actioncable",
      "nchan",
      "websocketd",
      "slanger",
    ],
  },
  {
    name: "Mocking Libraries",
    slug: "mocking-libraries",
    icon: "file-text",
    description:
      "Mocking libraries provide essential tools for isolating and testing code units in isolation. By creating controlled substitutes for external dependencies, these libraries enable developers to write focused, reliable, and efficient unit tests. Mocking facilitates the creation of various test scenarios, improves test coverage, and accelerates development by reducing reliance on external systems.",
    packages: [
      "sinon",
      "nock",
      "mockjs",
      "jest-mock",
      "testdouble",
      "ts-mockito",
      "fetch-mock",
      "msw",
      "axios-mock-adapter",
      "mockttp",
      "mockery",
      "mockdate",
    ],
  },
  {
    name: "Component Explorer Tools",
    slug: "component-explorer-tools",
    icon: "eye",
    description:
      "Component explorer tools are interactive platforms that showcase and facilitate the exploration of UI components in isolation. By providing a centralized hub for visualizing, testing, and documenting components, these tools foster consistency, accelerate development, and enhance collaboration between design and development teams. They serve as a living style guide, ensuring that components are used effectively and aligned with design system guidelines.",
    packages: [
      "storybook",
      "styleguidist",
      "react-cosmos",
      "docz",
      "ladle",
      "catalog",
      "component-playground",
      "bit",
      "vue-styleguidist",
      "docsify",
      "pattern-lab",
      "fractal",
    ],
  },
  {
    name: "Data Fetching Libraries",
    slug: "data-fetching-libraries",
    icon: "download",
    description:
      "Data fetching libraries streamline the process of retrieving and managing data from external sources within web applications. By abstracting away the complexities of HTTP requests, caching, error handling, and loading states, these libraries empower developers to focus on core application logic. They enhance development efficiency, improve data management, and contribute to a better user experience through faster load times and reliable data access.",
    packages: [
      "axios",
      "react-query",
      "swr",
      "apollo-client",
      "fetch",
      "graphql-request",
      "ky",
      "got",
      "superagent",
      "request",
      "redaxios",
      "urql",
    ],
  },
  {
    name: "Type Checking Libraries",
    slug: "type-checking-libraries",
    icon: "file-text",
    description:
      "Type checking libraries enhance code reliability and maintainability by enforcing data types within JavaScript and TypeScript applications. These tools statically analyze code to identify potential type-related errors, preventing runtime exceptions and improving code comprehension. By catching type mismatches early in the development cycle, type checking libraries contribute to more robust and scalable software.",
    packages: [
      "typescript",
      "flow",
      "prop-types",
      "runtypes",
      "io-ts",
      "joi",
      "zod",
      "yup",
      "superstruct",
      "ts-morph",
      "class-validator",
      "tsd",
    ],
  },
  {
    name: "Validation Libraries",
    slug: "validation-libraries",
    icon: "badge-check",
    description:
      "Validation libraries are essential tools for safeguarding data integrity and application security. They provide comprehensive mechanisms for checking and sanitizing user input, ensuring it conforms to predefined rules and is free from malicious content. By automating validation processes, these libraries enhance user experience, prevent data errors, and protect against vulnerabilities like injection attacks.",
    packages: [
      "joi",
      "validator",
      "yup",
      "express-validator",
      "class-validator",
      "superstruct",
      "vuelidate",
      "formik",
      "redux-form",
      "validate.js",
      "vest",
      "schema-inspector",
    ],
  },
  {
    name: "Linting and Formatting Tools",
    slug: "linting-and-formatting-tools",
    icon: "code",
    description:
      "Linting and formatting tools are essential for maintaining code quality and consistency. These automated tools analyze code for potential errors, style violations, and security vulnerabilities, providing valuable feedback to developers. By enforcing coding standards and automatically formatting code, they enhance code readability, maintainability, and collaboration within development teams.",
    packages: [
      "eslint",
      "prettier",
      "stylelint",
      "tslint",
      "jshint",
      "standard",
      "xo",
      "markdownlint",
      "pylint",
      "flake8",
      "rubocop",
      "detox",
    ],
  },
  {
    name: "Assertion Libraries",
    slug: "assertion-libraries",
    icon: "badge-check",
    description:
      "Assertion libraries provide a robust foundation for verifying code correctness within unit tests. By offering a rich set of functions for comparing expected and actual values, these libraries simplify the process of identifying defects and ensuring code quality. They enable developers to write expressive and maintainable tests, ultimately leading to more reliable software.",
    packages: [
      "chai",
      "assert",
      "expect",
      "should",
      "jest-extended",
      "uvu",
      "proclaim",
      "assertthat",
      "nodeunit",
      "power-assert",
      "jasmine",
      "expect.js",
    ],
  },
  {
    name: "ReactJS Notification Libraries",
    slug: "reactjs-notification-libraries",
    icon: "bell",
    description:
      "React notification libraries streamline the creation of informative and engaging user experiences by providing pre-built, customizable components for displaying notifications. These libraries offer a variety of notification styles (toasts, alerts, banners) and customization options (position, appearance, actions) to effectively convey messages, feedback, and alerts to users. By incorporating these components, developers can enhance user engagement and provide essential information without disrupting the primary application flow.",
    packages: [
      "react-toastify",
      "notistack",
      "react-notifications",
      "reapop",
      "react-notification-system",
      "react-s-alert",
      "rc-notification",
      "cogo-toast",
      "react-notification",
      "react-alert",
      "react-toast",
      "react-notification-alert",
    ],
  },
];
