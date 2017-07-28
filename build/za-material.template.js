angular.module('z-material').run(['$templateCache', function($templateCache) {$templateCache.put('component.html','\r\n<h1>\r\n  <code>component</code>\r\n</h1>\r\n\r\n\r\n  <h2>Installation</h2>\r\n\r\n  <p>First include <code>undefined</code> in your HTML:</p>\r\n\r\n  <pre><code>&lt;script src=&quot;angular.js&quot;&gt;&#13;&#10;&lt;script src=&quot;&quot;&gt;&#13;</code></pre>\r\n\r\n  <p>You can download this file from the following places:</p>\r\n  <ul>\r\n    <li>\r\n      <a href="https://developers.google.com/speed/libraries/devguide#angularjs">Google CDN</a><br>\r\n      e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/undefined</code>\r\n    </li>\r\n    <li>\r\n      <a href="http://bower.io">Bower</a><br>\r\n      e.g. <pre><code>bower install @X.Y.Z</code></pre>\r\n    </li>\r\n    <li>\r\n      <a href="http://code.angularjs.org/">code.angularjs.org</a><br>\r\n      e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/&quot;</code></pre>\r\n    </li>\r\n  </ul>\r\n  <p>where X.Y.Z is the AngularJS version you are running.</p>\r\n  <p>Then load the module in your application by adding it as a dependent module:</p>\r\n  <pre><code>angular.module(&#39;app&#39;, [&#39;component&#39;]);&#13;</code></pre>\r\n\r\n  <p>With that you&apos;re ready to get started!</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class="component-breakdown">\r\n  <h2>Module Components</h2>\r\n  \r\n  <div>\r\n    <h3 class="component-heading" id="directive">Directive</h3>\r\n    <table class="definition-table">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/action">action</a></td>\r\n        <td><p>This file reader will pull the contents from a text file (by default .ngdoc)</p>\n</td>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/appbar">appbar</a></td>\r\n        <td><p>Its position is fixed and it will located at top position of web page and will have 100% width.</p>\n</td>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/cards">cards</a></td>\r\n        <td><p>A card is a sheet of material that serves as an entry point to more detailed information.</p>\n</td>\r\n      </tr>\r\n      \r\n    </table>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n');
$templateCache.put('component/directive/action.html','\r\n<div class="paper-chapter">\r\n\r\n<header class="api-profile-header">\r\n  <h1 class="paper-chapter__title">action</h1>\r\n</header>\r\n\r\n\r\n\r\n<div class="api-profile-description">\r\n  <p>This file reader will pull the contents from a text file (by default .ngdoc)</p>\n\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n\r\n  \r\n  \r\n  \r\n  \r\n  <div class="usage">\r\n  \r\n  </div>\r\n  \r\n  \r\n\r\n\r\n  \r\n</div>\r\n</div>\r\n\r\n');
$templateCache.put('component/directive/appbar.html','\r\n<div class="paper-chapter">\r\n\r\n<header class="api-profile-header">\r\n  <h1 class="paper-chapter__title">appbar</h1>\r\n</header>\r\n\r\n\r\n\r\n<div class="api-profile-description">\r\n  <p>Its position is fixed and it will located at top position of web page and will have 100% width.</p>\n\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n\r\n  \r\n  \r\n  \r\n  \r\n  <div class="usage">\r\n  \r\n  </div>\r\n  \r\n  \r\n\r\n\r\n  \r\n</div>\r\n</div>\r\n\r\n');
$templateCache.put('component/directive/cards.html','\r\n<div class="paper-chapter">\r\n\r\n<header class="api-profile-header">\r\n  <h1 class="paper-chapter__title">cards</h1>\r\n</header>\r\n\r\n\r\n\r\n<div class="api-profile-description">\r\n  <p>A card is a sheet of material that serves as an entry point to more detailed information.</p>\n<p>Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, \nsuch as photos with captions of variable length.</p>\n<p>A card collection is a layout of cards on the same plane.</p>\n\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n\r\n  \r\n  \r\n  \r\n  \r\n  <div class="usage">\r\n  \r\n    <h2 id="usage" class="font-body2">Usage</h2> \r\n    <p>Cards are a convenient means of displaying content composed of different elements. They\u2019re also well-suited for showcasing \nelements whose size or supported actions vary, like photos with captions of variable length.</p>\n\r\n  </div>\r\n  \r\n  \r\n\r\n\r\n  \r\n  <h2 id="example">Example</h2><p>\n\n\n<div class="runnable-example"\n    path="examples/example-card"\n    name="card">\n\n \n  <div class="runnable-example-file" \n    name="index.html"\n    language="html"\n    type="html">\n    <pre><code>&lt;div class=&quot;card-paper&quot;&gt;&#13;&#10; &lt;div class=&quot;title-paper title-paper-twoline&quot;&gt;&#13;&#10;    &lt;div class=&quot;title-paper-content&quot;&gt;&#13;&#10;      &lt;span class=&quot;title-paper-title&quot;&gt;Title goes here&lt;/span&gt;&#13;&#10;      &lt;span class=&quot;title-paper-subtitle&quot;&gt;Subtitle here&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10; &lt;div class=&quot;media-paper media-paper--16-9 bg-cyan&quot;&gt;&#13;&#10;    &lt;div class=&quot;media-paper-content&quot; &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;card-paper__content&quot;&gt;&#13;&#10;    Again, the flex-start, flex-end, and center values are straightforward.&#13;&#10;  &lt;/div&gt;&#13;&#10; &lt;div class=&quot;action-paper&quot;&gt;&#13;&#10;    &lt;div class=&quot;action-paper-left&quot;&gt;&#13;&#10;      &lt;span class=&quot;button-paper button-paper-flat &quot;&gt;Action&lt;/span&gt;&#13;&#10;      &lt;span class=&quot;button-paper button-paper-flat &quot;&gt;Action&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&lt;/div&gt;&#13;</code></pre>\n  </div>\n\n<div class="row gutter__column--xdt gutter__column--dt">\n  <div class="column__xdt--12 column__dt--12">\n    <iframe class="runnable-example-frame" src="examples/example-card/index.html" name="example-card"></iframe>\n  </div>\n</div>\n\n</div>\n\n\n\n</p>\n\r\n</div>\r\n</div>\r\n\r\n');
$templateCache.put('examples/example-card/index.html','<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Example - example-card</title>\n  <link href="../../za-material.css" rel="stylesheet" type="text/css">\n  \n\n  <script src="../../za-material.lib.js"></script>\n  <script src="../../za-material.js"></script>\n  <script src="../../za-material.template.js"></script>\n  \n\n  \n</head>\n<body ng-app="">\n  <div class="card-paper">\r\n    <div class="title-paper title-paper-twoline">\r\n       <div class="title-paper-content">\r\n         <span class="title-paper-title">Title goes here</span>\r\n         <span class="title-paper-subtitle">Subtitle here</span>\r\n       </div>\r\n     </div>\r\n    <div class="media-paper media-paper--16-9 bg-cyan">\r\n       <div class="media-paper-content" ></div>\r\n     </div>\r\n     <div class="card-paper__content">\r\n       Again, the flex-start, flex-end, and center values are straightforward.\r\n     </div>\r\n    <div class="action-paper">\r\n       <div class="action-paper-left">\r\n         <span class="button-paper button-paper-flat ">Action</span>\r\n         <span class="button-paper button-paper-flat ">Action</span>\r\n       </div>\r\n     </div>\r\n   </div>\r\n</body>\n</html>');
$templateCache.put('partials/api/component/directive.html','\r\n<h1>Directive components in <code>component</code></h1>\r\n\r\n\r\n\r\n<div class="component-breakdown">\r\n  <div>\r\n    <table class="definition-table">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/action">action</a></td>\r\n        <td><p>This file reader will pull the contents from a text file (by default .ngdoc)</p>\n</td>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/appbar">appbar</a></td>\r\n        <td><p>Its position is fixed and it will located at top position of web page and will have 100% width.</p>\n</td>\r\n      </tr>\r\n      \r\n      <tr>\r\n        <td><a href="component/cards">cards</a></td>\r\n        <td><p>A card is a sheet of material that serves as an entry point to more detailed information.</p>\n</td>\r\n      </tr>\r\n      \r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n');
$templateCache.put('index.html','<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta name="viewport" content="width=device-width, initial-scale=1">\r\n    <meta charset="UTF-8">\r\n    <title>Material Design</title>\r\n    <base href="/">\r\n    <!-- inject:css -->\r\n    <!-- endinject -->\r\n  </head>\r\n\r\n  <body ng-app="z-material" class="light-them">\r\n\r\n    <div class="row" ui-view="header">\r\n    </div>\r\n    <div class="row">\r\n      <div class="column__xdt--3 column__dt--2" ui-view="side-nav"></div>\r\n      <div class="column__xdt--9 column__dt--10" >\r\n        <div class="row gutter__column--xdt gutter__column--dt" >\r\n          <div class="column__xdt--12 column__dt--12" ui-view="content"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- inject:js -->\r\n    <!-- endinject -->\r\n\r\n  </body>\r\n\r\n</html>\r\n');
$templateCache.put('footer/footer.html','');
$templateCache.put('header/header.html','<header class="paper-toolbar paper-appbar">\r\n\t<div class="paper-toolbar__left" >\r\n\t\t<div class="action-paper">\r\n\t\t\t<div class="action-paper-left" >\r\n\t\t\t\t<i class="icon icon--small  material-icons  toolbar-icon"><span class="">menu</span></i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class="paper-toolbar__center">\r\n\t\t<div class="paper-toolbar__title" ui-sref="home">Material Design</div>\r\n\t</div>\r\n\t<div class="paper-toolbar__right">\r\n\t\t<div class="action-paper">\r\n\t\t\t<div class="action-paper-right" >\r\n\t\t\t\t<i class="icon icon--small  material-icons  toolbar-icon"><span class="">search</span></i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n');
$templateCache.put('side-nav/component.html','<div class="paper-list row">\r\n\t<p class="subheader-paper">Component</p>\r\n\t<div class="paper-list__item paper-list__item--oneline"\r\n\tdata-ng-repeat="materialRoute in $ctrl.materialRoutes" >\r\n\t\t<div class="paper-list__item__content"\r\n\t\tui-sref="{{materialRoute.stateName}}">\r\n\t\t\t<p class="paper-list__item__title">{{materialRoute.name}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>');
$templateCache.put('templates/css.template.html','{% block content %}\r\n    {$ doc.description | marked $}\r\n{% endblock %}');
$templateCache.put('templates/examples/index.template.html','<!doctype html>\n<html lang="en"{% if doc.example[\'ng-csp\'] %} ng-csp{% endif %}>\n<head>\n  <meta charset="UTF-8">\n  <title>Example - {$ doc.id $}</title>\n  {% for stylesheet in doc.stylesheets %}<link href="{$ stylesheet.path $}" rel="stylesheet" type="text/css">\n  {% endfor %}\n\n  {% for script in doc.scripts %}<script src="{$ script.path $}"></script>\n  {% endfor %}\n\n  {% if doc.example.fixBase -%}\n  <script type="text/javascript">\n    angular.element(document.getElementsByTagName(\'head\')).append(angular.element(\'<base href="\' + window.location.pathname + \'" />\'));\n  </script>\n  {%- endif %}\n</head>\n<body {% if not doc.example[\'ng-app-included\'] %}ng-app="{$ doc.example.module $}"{% endif %}>\n  {$ doc.fileContents $}\n</body>\n</html>');
$templateCache.put('templates/examples/runnableExample.template.html','{# Be aware that we need these extra new lines here or marked will not realise that the <div>\n   is HTML and wrap each line in a <p> - thus breaking the HTML #}\n\n\n<div class="runnable-example"\n    path="{$ doc.example.deployments.default.path $}"\n    {%- for attrName, attrValue in doc.example.attributes %}\n    {$ attrName $}="{$ attrValue $}"{% endfor %}>\n\n {% for fileName, file in doc.example.files %}\n  <div class="runnable-example-file" {% for attrName, attrValue in file.attributes %}\n    {$ attrName $}="{$ attrValue $}"{% endfor %}>\n    {% code -%}\n    {$ file.fileContents $}\n    {%- endcode %}\n  </div>\n{% endfor %}\n<div class="row gutter__column--xdt gutter__column--dt">\n  <div class="column__xdt--12 column__dt--12">\n    <iframe class="runnable-example-frame" src="{$ doc.example.deployments.default.outputPath $}" name="{$ doc.example.id $}"></iframe>\n  </div>\n</div>\n\n</div>\n\n\n{# Be aware that we need these extra new lines here or marked will not realise that the <div>\n   above is HTML and wrap each line in a <p> - thus breaking the HTML #}\n');
$templateCache.put('templates/examples/template.html','{$ doc.fileContents $}');
$templateCache.put('templates/ngdoc/base.template.html','{% block content %}\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/overview.template.html','{% extends "base.template.html" %}\r\n\r\n{% block content %}\r\n{$ doc.description | marked $}\r\n{% endblock %}');
$templateCache.put('templates/ngdoc/api/api.template.html','{% extends "base.template.html" %}\r\n\r\n{% block content %}\r\n<div class="paper-chapter">\r\n{% block header %}\r\n<header class="api-profile-header">\r\n  <h1 class="paper-chapter__title">{$ doc.name $}</h1>\r\n</header>\r\n{% endblock %}\r\n\r\n{% block description %}\r\n<div class="api-profile-description">\r\n  {$ doc.description | marked $}\r\n</div>\r\n{% endblock %}\r\n\r\n\r\n<div>\r\n\r\n  {% block additional %}\r\n  {% endblock %}\r\n\r\n  {% block examples %}\r\n  {%- if doc.examples %}\r\n  <h2 id="example">Example</h2>\r\n  {%- for example in doc.examples -%}\r\n    {$ example | marked $}\r\n  {%- endfor -%}\r\n  {% endif -%}\r\n  {% endblock %}\r\n</div>\r\n</div>\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/componentGroup.template.html','{% block content %}\r\n<h1>\r\n  {%- if doc.title -%}\r\n    {$ doc.title $}\r\n  {%- elif doc.moduleName -%}\r\n    {$ doc.groupType | title $} components in {$ doc.moduleName | code $}\r\n  {%- else -%}\r\n    Pages\r\n  {%- endif -%}\r\n</h1>\r\n\r\n{$ doc.description | marked $}\r\n\r\n<div class="component-breakdown">\r\n  <div>\r\n    <table class="definition-table">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n      </tr>\r\n      {% for page in doc.components %}\r\n      <tr>\r\n        <td>{$ page.id | link(page.name, page) $}</td>\r\n        <td>{$ page.description | firstParagraph | marked $}</td>\r\n      </tr>\r\n      {% endfor %}\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n{% endblock %}');
$templateCache.put('templates/ngdoc/api/directive.template.html','{% import "lib/macros.html" as lib -%}\r\n{% extends "api/api.template.html" %}\r\n\r\n{% block additional %}\r\n  \r\n  {% block usage %}\r\n  \r\n  <div class="usage">\r\n  {% if doc.usage %}\r\n    <h2 id="usage" class="font-body2">Usage</h2> \r\n    {$ doc.usage | marked $}\r\n  {%- endif %}\r\n  </div>\r\n  {% endblock -%}\r\n\r\n  {%- if doc.animations %}\r\n  <h2 id="animations">Animations</h2>\r\n  {$ doc.animations | marked $}\r\n  {$ \'module:ngAnimate.$animate\' | link(\'Click here\', doc) $} to learn more about the steps involved in the animation.\r\n  {%- endif -%}\r\n\r\n  {% include "lib/params.template.html" %}\r\n  {% include "lib/events.template.html" %}\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/filter.template.html','{% import "lib/macros.html" as lib -%}\r\n{% extends "api/api.template.html" %}\r\n\r\n{% block additional %}\r\n  <h2>Usage</h2>\r\n  <h3>In HTML Template Binding</h3>\r\n  {% if doc.usage %}\r\n    {$ doc.usage | code $}\r\n  {% else %}\r\n    {% code -%}\r\n    {{ {$ doc.name $}_expression | {$ doc.name $}\r\n      {%- for param in doc.params %}{% if not loop.first %} : {$ param.name $}{% endif %}{% endfor -%}\r\n    }}\r\n    {%- endcode %}\r\n  {% endif %}\r\n\r\n  <h3>In JavaScript</h3>\r\n  {% code -%}\r\n    {%- set sep = joiner(\', \') -%}\r\n    $filter(\'{$ doc.name $}\')({% for param in doc.params %}{$ sep() $}{$ param.name $}{% endfor -%})\r\n  {%- endcode %}\r\n\r\n  {% include "lib/params.template.html" %}\r\n  {% include "lib/this.template.html" %}\r\n  {% include "lib/returns.template.html" %}\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/function.template.html','{% extends "api/object.template.html" %}\r\n');
$templateCache.put('templates/ngdoc/api/input.template.html','{% import "lib/macros.html" as lib -%}\r\n{% extends "api/directive.template.html" %}\r\n\r\n{% block usage %}\r\n  <h2>Usage</h2>\r\n  {% code %}\r\n  <input type="{$ doc.inputType $}"\r\n    {%- for param in doc.params %}\r\n         {$ lib.directiveParam(param.alias or param.name, param.type, \'="\', \'"\') $}\r\n    {%- endfor %}>\r\n  {% endcode %}\r\n{% endblock %}');
$templateCache.put('templates/ngdoc/api/module.template.html','{% extends "base.template.html" %}\r\n\r\n{% block content %}\r\n<h1>\r\n  {% if doc.title %}{$ doc.title | marked $}{% else %}{$ doc.name | code $}{% endif %}\r\n</h1>\r\n\r\n{% if doc.name != \'ng\' and doc.name != \'auto\' %}\r\n  <h2>Installation</h2>\r\n\r\n  <p>First include {$ doc.packageFile | code $} in your HTML:</p>\r\n\r\n  {% code %}\r\n      <script src="angular.js">\r\n      <script src="{$ doc.packageFile $}">\r\n  {% endcode %}\r\n\r\n  <p>You can download this file from the following places:</p>\r\n  <ul>\r\n    <li>\r\n      <a href="https://developers.google.com/speed/libraries/devguide#angularjs">Google CDN</a><br>\r\n      e.g. {$ ("//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/" + doc.packageFile) | code $}\r\n    </li>\r\n    <li>\r\n      <a href="http://bower.io">Bower</a><br>\r\n      e.g. {% code %}bower install {$ doc.packageName $}@X.Y.Z{% endcode %}\r\n    </li>\r\n    <li>\r\n      <a href="http://code.angularjs.org/">code.angularjs.org</a><br>\r\n      e.g. {% code %}"//code.angularjs.org/X.Y.Z/{$ doc.packageFile $}"{% endcode %}\r\n    </li>\r\n  </ul>\r\n  <p>where X.Y.Z is the AngularJS version you are running.</p>\r\n  <p>Then load the module in your application by adding it as a dependent module:</p>\r\n  {% code %}\r\n    angular.module(\'app\', [\'{$ doc.name $}\']);\r\n  {% endcode %}\r\n\r\n  <p>With that you&apos;re ready to get started!</p>\r\n{% endif %}\r\n\r\n{$ doc.description | marked $}\r\n\r\n{% if doc.knownIssueDocs %}\r\n<div class="known-issues">\r\n  <h2 id="known-issues">Known Issues</h2>\r\n  <table class="definition-table">\r\n  <tr><th>Name</th><th>Description</th></tr>\r\n  {% for issueDoc in doc.knownIssueDocs -%}\r\n  <tr>\r\n    <td>{$ issueDoc.id | link(issueDoc.name, issueDoc) $}</td>\r\n    <td>\r\n    {% for issue in issueDoc.knownIssues -%}\r\n      {$ issue | marked $}\r\n    {% endfor -%}\r\n    </td>\r\n  </tr>\r\n  {% endfor -%}\r\n  </table>\r\n</div>\r\n{% endif %}\r\n\r\n\r\n<div class="component-breakdown">\r\n  <h2>Module Components</h2>\r\n  {% for componentGroup in doc.componentGroups %}\r\n  <div>\r\n    <h3 class="component-heading" id="{$ componentGroup.groupType | dashCase $}">{$ componentGroup.groupType | title $}</h3>\r\n    <table class="definition-table">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n      </tr>\r\n      {% for component in componentGroup.components %}\r\n      <tr>\r\n        <td>{$ component.id | link(component.name, component) $}</td>\r\n        <td>{$ component.description | firstParagraph | marked $}</td>\r\n      </tr>\r\n      {% endfor %}\r\n    </table>\r\n  </div>\r\n  {% endfor %}\r\n</div>\r\n\r\n{% if doc.usage %}\r\n  <h2>Usage</h2>\r\n  {$ doc.usage | marked $}\r\n{% endif %}\r\n\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/object.template.html','{% import "lib/macros.html" as lib %}\r\n{% extends "api/api.template.html" %}\r\n\r\n{% block additional %}\r\n\r\n  {% if doc.params or doc.returns or doc.this or doc.kind == \'function\' -%}\r\n    <h2 id="usage">Usage</h2>\r\n    {% if doc.usage %}\r\n      {$ doc.usage | code $}\r\n    {% else %}\r\n      {$ lib.functionSyntax(doc) $}\r\n    {% endif %}\r\n\r\n    {% include "lib/params.template.html" %}\r\n    {% include "lib/this.template.html" %}\r\n    {% include "lib/returns.template.html" %}\r\n  {%- endif %}\r\n\r\n  {% include "lib/methods.template.html" %}\r\n  {% include "lib/events.template.html" %}\r\n  {% include "lib/properties.template.html" %}\r\n\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/provider.template.html','{% extends "api/object.template.html" %}\r\n\r\n{% block related_components %}\r\n  {% if doc.serviceDoc -%}\r\n  <li>\r\n    <a href="{$ doc.serviceDoc.path $}">- {$ doc.serviceDoc.name $}</a>\r\n  </li>\r\n  {%- endif %}\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/service.template.html','{% extends "api/object.template.html" %}\r\n\r\n{% block related_components %}\r\n  {% if doc.providerDoc -%}\r\n  <li>\r\n    <a href="{$ doc.providerDoc.path $}">- {$ doc.providerDoc.name $}</a>\r\n  </li>\r\n  {%- endif %}\r\n{% endblock %}\r\n');
$templateCache.put('templates/ngdoc/api/type.template.html','{% extends "api/object.template.html" %}\r\n');
$templateCache.put('templates/ngdoc/lib/events.template.html','{% import "lib/macros.html" as lib -%}\r\n{%- if doc.events %}\r\n<h2>Events</h2>\r\n<ul class="events">\r\n  {%- for event in doc.events %}\r\n  <li id="{$ event.name $}">\r\n    <h3>{$ event.name $}</h3>\r\n    <div>{$ event.description | marked $}</div>\r\n    {%- if event.eventType == \'listen\' %}\r\n    <div class="inline">\r\n      <h4>Listen on: {$ event.eventTarget $}</h4>\r\n    </div>\r\n    {%- else %}\r\n    <div class="inline">\r\n      <h4>Type:</h4>\r\n      <div class="type">{$ event.eventType $}</div>\r\n    </div>\r\n    <div class="inline">\r\n      <h4>Target:</h4>\r\n      <div class="target">{$ event.eventTarget $}</div>\r\n    </div>\r\n    {% endif -%}\r\n    {%- if event.params %}\r\n    <section class="api-section">\r\n      <h3>Parameters</h3>\r\n      {$ lib.paramTable(event.params) $}\r\n    </section>\r\n    {%- endif -%}\r\n  </li>\r\n  {% endfor -%}\r\n</ul>\r\n{% endif -%}\r\n');
$templateCache.put('templates/ngdoc/lib/macros.html','{% macro typeList(types) -%}\r\n{% for typeName in types %}<a href="" class="{$ typeName | typeClass $}">{$ typeName | escape $}</a>{% endfor %}\r\n{%- endmacro -%}\r\n\r\n{%- macro paramTable(params) %}\r\n<table class="variables-matrix input-arguments">\r\n  <thead>\r\n    <tr>\r\n      <th>Param</th>\r\n      <th>Type</th>\r\n      <th>Details</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    {% for param in params %}\r\n    <tr>\r\n      <td>\r\n        {$ param.name $}\r\n        {% if param.alias %}| {$ param.alias $}{% endif %}\r\n        {% if param.optional %}<div><em>(optional)</em></div>{% endif %}\r\n      </td>\r\n      <td>\r\n        {$ typeList(param.typeList) $}\r\n      </td>\r\n      <td>\r\n        {$ param.description | marked $}\r\n        {% if param.defaultValue %}<p><em>(default: {$ param.defaultValue $})</em></p>{% endif %}\r\n      </td>\r\n    </tr>\r\n    {% endfor %}\r\n  </tbody>\r\n</table>\r\n{% endmacro -%}\r\n\r\n\r\n{%- macro directiveParam(name, type, join, sep) %}\r\n  {%- if type.optional %}[{% endif -%}\r\n  {$ name | dashCase $}{$ join $}{$ type.name $}{$ sep $}\r\n{%- if type.optional %}]{% endif -%}\r\n{% endmacro -%}\r\n\r\n{%- macro functionSyntax(fn) %}\r\n  {%- set sep = joiner(\', \') -%}\r\n  {% marked -%}\r\n    `{$ fn.name $}({%- for param in fn.params %}{$ sep() $}\r\n    {%- if param.type.optional %}[{% endif -%}\r\n    {$ param.name $}\r\n    {%- if param.type.optional %}]{% endif -%}\r\n    {% endfor %});`\r\n  {%- endmarked %}\r\n{% endmacro -%}\r\n\r\n{%- macro typeInfo(fn) -%}\r\n<table class="variables-matrix return-arguments">\r\n  <tr>\r\n    <td>{$ typeList(fn.typeList) $}</td>\r\n    <td>{$ fn.description | marked $}</td>\r\n  </tr>\r\n</table>\r\n{%- endmacro -%}\r\n');
$templateCache.put('templates/ngdoc/lib/methods.template.html','{% import "lib/macros.html" as lib -%}\r\n{%- if doc.methods %}\r\n<h2>Methods</h2>\r\n<ul class="methods">\r\n  {%- for method in doc.methods %}\r\n  <li id="{$ method.name $}">\r\n    <h3>{$ lib.functionSyntax(method) $}</h3>\r\n    <div>{$ method.description | marked $}</div>\r\n\r\n    {% if method.params %}\r\n    <h4>Parameters</h4>\r\n    {$ lib.paramTable(method.params) $}\r\n    {% endif %}\r\n\r\n    {% if method.this %}\r\n    <h4>Method\'s {% code %}this{% endcode %}</h4>\r\n    {$ method.this | marked $}\r\n    {% endif %}\r\n\r\n    {% if method.returns %}\r\n    <h4>Returns</h4>\r\n    {$ lib.typeInfo(method.returns) $}\r\n    {% endif %}\r\n\r\n  </li>\r\n  {% endfor -%}\r\n</ul>\r\n{%- endif -%}\r\n');
$templateCache.put('templates/ngdoc/lib/params.template.html','{% import "lib/macros.html" as lib -%}\r\n{%- if doc.params %}\r\n<section class="api-section">\r\n  <h3>Arguments</h3>\r\n{$ lib.paramTable(doc.params) $}\r\n</section>\r\n{%- endif -%}\r\n');
$templateCache.put('templates/ngdoc/lib/properties.template.html','{% import "lib/macros.html" as lib -%}\r\n{%- if doc.properties %}\r\n<h2>Properties</h2>\r\n<ul class="properties">\r\n  {%- for property in doc.properties %}\r\n  <li id="{$ property.name $}">\r\n    <h3>{$ property.name | code $}</h3>\r\n    {$ lib.typeInfo(property) $}\r\n  </li>\r\n  {% endfor -%}\r\n</ul>\r\n{%- endif -%}\r\n');
$templateCache.put('templates/ngdoc/lib/returns.template.html','{% import "lib/macros.html" as lib -%}\r\n{% if doc.returns -%}\r\n<h3>Returns</h3>\r\n{$ lib.typeInfo(doc.returns) $}\r\n{%- endif %}');
$templateCache.put('templates/ngdoc/lib/this.template.html','{% if doc.this %}\r\n<h3>Method\'s {% code %}this{% endcode %}</h3>\r\n{$ doc.this | marked $}\r\n{% endif %}');}]);