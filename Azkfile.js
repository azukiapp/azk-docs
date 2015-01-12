/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'docs-azk': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "azukiapp/ruby:2.1",
    // Steps to execute before running instances
    provision: [
      "bundle install --path /azk/bundler",
      "npm i",
      "node node_modules/gitbook/bin/gitbook.js install content",
      "node node_modules/gitbook/bin/gitbook.js install content",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "node node_modules/gitbook/bin/gitbook.js serve --port $HTTP_PORT content",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      '/azk/#{manifest.dir}': path("."),
      '/azk/bundler': persistent("bundler"),
    },
    scalable: {"default": 1},
    http: {
      // docs-azk.
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    envs: {
      // set instances variables
      RUBY_ENV: "development",
      BUNDLE_APP_CONFIG: "/azk/bundler",
    },
  },
});



