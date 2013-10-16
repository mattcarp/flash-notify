Flashes
======

*Note: this package is not ready for prime time.  When it is, it will be released on meteorite.*

A meteor package for sending messages to the user.  Uses a client-side collection for flash messages (they're not persisted to Mongo).  Compatible with Boostrap 2 and 3, but not dependent on either of them.

***Setup***

You can get Flashes running with three lines of code.

*1. Template*

In you appliction's overall layout, include the `{{> flashesList}}` template.

*2. Router*

You'll just need to tell your router to clear messages after they've been seen.  In iron-router:

	after: function() {
		Flashes.clearSeen();
		// ...
*3. Call it!*

Try it in the browser console:

    Flashes.setFlash("You got a flash message!");
    
Change the style:

    Flashes.setFlash("You got a flash message!", "danger");
    
Change the display method:

	Flashes.setFlash("You got a flash message!", "success", "popover");

The call can be made anyhere in your client-side code, and takes a 'message' and two optional arguments:

    Flashes.setFlash(message [,type] [,channel]) 

Both the "type" and "channel" argumenst are options.  If not specified, the type will be set as "info", and the channel will be "inline".  If you're using bootstrap, these defaults will give you the standard blue 'info' message, with a close box, wherever you put the `{{> flashesList}}` template.  Y

**Styling**

You can use any `type` you want, and style it in your CSS.  The template 