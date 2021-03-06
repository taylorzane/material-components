# material-components

## [Demo + docs](http://appcomponents.org/material-components/)

## About

* *No jQuery*
* uses [materializecss.com](http://materializecss.com)

### NPM

* https://www.npmjs.com/package/vue-material-components

## Usage

```js
// 0. Require Vue
import Vue from 'vue'

// 1. Require the module
import VueMaterialComponents from 'vue-material-components'

// 2. Require the Materialize CSS (or import it in your HTML)
import 'vue-material-components/assets/css/materialize.min.css'

// 3. Install the plugin
Vue.use(VueMaterialComponents)
```

```html
<!-- 4. Use it in a template -->
<md-button class="waves-effect waves-light">Hello, world!</md-button>
```

## Change log

* **0.2.0** Plugin now uses the `Vue.use` syntax.

* Vue is now external dependency and must be linked before MaterialComponents
