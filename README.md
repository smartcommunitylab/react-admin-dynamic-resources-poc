# React - Admin POC: Dynamic resources

Proof of concept for loading `<Resource>` dynamically at load.

## Steps:

- init the app barebone (without UI)
- init dataProvider
- fetch list of resources from backend via dataProvider
- load custom `<Views>` for resources from `/src/resources`
- build `<Resource>`


## How-to

1. Define resource views (List,Show,Edit...) in a file inside `resources` and export a `<View>` declaring all the views for the given resource.

2. Register the resource by adding the view as per example. Note: in the POC registration is handled in in `resources/index` only for demonstration

```
const views = new Views();
views.put(PostsView);
views.put(UsersView);

```

3. Load the `<AdminUI>` and use a side effect to 
  * call the data provider
  *  update the list of views
  *  render a `<Resource>` for every view

