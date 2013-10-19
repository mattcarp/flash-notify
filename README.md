Flashes
======

*Note: this package is not ready for prime time.  When it is, it will be released on meteorite.*

A meteor package for sending messages to the user.  Uses a client-side collection for flash messages (they're not persisted to Mongo).  Compatible with Boostrap 2 and 3, but not dependent on either of them.

***Setup***

You can get Flashes running with two lines of code.

*1. Template*

In your appliction's overall layout, include the `{{> flashesList}}` template.
		
*2. Call it!*

Try it in the browser console:

    Flashes.setFlash("You got a flash message!");
    
Change the style:

    Flashes.setFlash("You got a flash message!", "danger");
    
Change the display method:

	Flashes.setFlash("You got a flash message!", "success", "gritter");

The call can be made anyhere in your client-side code, and takes a 'message' and two optional arguments:

    Flashes.setFlash(message [, options]) 

There are several options specified in the `options` object.  The most commonl of these are 'type', and 'channel', like this:

	Flashes.setFlash(message, {type: 'danger', channel: 'jquery-growl');

If not specified, the type will be set as "info", and the channel will be "inline".  If you're using bootstrap, these defaults will give you the standard blue 'info' message, with a close box, wherever you put the `{{> flashesList}}` template.

**Styling**

Flashes work well with Boostrap, but it's not a requirement.  You can call Flashes with any `type` you want, and add custom styling for your `type`.  The template uses the class `.alert` for generic styling of all flash messages, and `alert-myType` for specific `type`s.  So, if you call Flashes with `Flashes.setFlash('my message', 'myGroovyType')`, you woul style the message in your CSS like this:

    .alert {
    	width: 100%;
    	/* more generic styling */
    }
    .alert-myGroovyType {
    	background-color: gray;
    	/* more type-specific styling */
    }


**Credits**

Inspired by the `errors` helper in [the Microscope app](https://github.com/DiscoverMeteor/Microscope).
