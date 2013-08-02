ember.js - notes from ember.js episode on peepcode.

Thick client framework for the browser.

* router - matches URL to code objects.
* controller - handles actions and passes model data to views.
* model - stores, retrieves and saves data.
* view - handles clicks and taps.
* template - describes html output.

## Convention Over Configuration

need to learn naming convention. no files of code is written, codegen
happens in memory.

If something is hard to do, you're probably doing it in an un-intended
way.

## directory structure

* bin
* css
* img
* js
* favicon.ico
* js

## router

runs code when URLs are visited.
loads data and assigns it to a controller.
e.g. /tables -> App.TablesRoute (find list of tables and assign to) -> App.TablesController.

Most dev time spent in route objects. route objects load data.


## naming conventions

Memorize this.

Router
* this.resource("tables")
* App.TablesRoute
* this.resource("table")
* App.TableRoute

Controller
* App.TablesController
* App.TableController

Model
* App.Table

View
* App.TablesView
* App.TableView

Template
* tables
* table

## Controllers

Deliver model data to views and templates.
Array and Object controllers manage a model property. They proxy to model attributes and methods.

* Controller proxies methods to itself.
* ObjectController proxies methods to it's 'model'. {{ name }}
* ArrayController proxies methods to each of it's models.

Controllers are long lived. (singletons)

## Partial Template

{{ partial "tableMenu" }}

<script type="text/x-handlebars" data-template-name="_tableMenu">
  <h1>hi</h1>
</script>

## model


