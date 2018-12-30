The home for your backing data.

In this case, it's very simple - we have an API and repository that's then used by the screen components.
In a real app, this might be where you put Redux or MobX backing stores (there's a different convention for the names in
the case of MobX).

The "instances.js" file is my convention for DI/ exporting a composition root. The index exports the classes themselves
(for unit testing, for instance), while instances.js exports a fully-wired-up backing store (or stores) for actual used
in the application.