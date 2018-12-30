This is where "screen" or "container" components go.

The "container pattern" is the idea that you separate UI building block components from the part where data from your
stores/ API/ other data source is wired to them. Therefore, you have bits of UI that are easy to unit test (and 
often have no state at all), and then you have container components whose ONLY job is to wire your UI to data (there's often
so little logic here that it's not worth unit testing - and better for it, since these would be tricky to test).

I modify this a bit to instead call these "screen components". Screen components are container components in the respect that
they wire data to UI, but they also wire navigation to UI. I guess you could think of navigation as another store. So, the equation
is:

UI + Data + Navigation = Screens

I tried making separate containers and screens once (where only navigation was added at the screen level) and it was pretty
awful. Too many layers of abstraction. I'll also often cheat a little by putting a tiny bit of UI composition in here, as well.
Basically, if I have an Inbox component and when I wire it to data in a screen component, I might bring a loading overlay
component into the screen component as well, rather than pushing the loading bit back to the Inbox components. It makes
the Inbox a little more modular at the expense of making the screen a little more complex. But in this case,
the added complexity in the screen is pretty mundane.

Finally, the Expo "tabs" example shows this folder as "screens", but I call it "storyboard". For the sake of my 
fellow devs with an iOS background, it made sense to think of this as a code version of an XCode storyboard-
screens go into tabs go into stacks, etc., and the entire top-level folder exports a single Storyboard that 
is integrated into the app.