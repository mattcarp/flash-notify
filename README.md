flash-notify - v 0.1.0
======


A [Meteor](http://www.meteor.com) package for sending messages to the user.  Uses a client-side collection for flash messages, and a persistent store for notifications.  Compatible with Boostrap 2 and 3, but not dependent on either of them.

Check out the [demo](http://flash-notify.meteor.com).

***Setup***

Installation:

  mrt 

You can get Flashes running with two lines of code:

*1. Add the template*

In your appliction's overall layout, include the `{{> flashesList}}` template.
		
*2. Call it!*

Try it in the browser console:

    Flashes.setFlash("You got a flash message!");
    
Change the style and the display method by passing th `options` object:

    Flashes.setFlash(
        "You got a flash message!",
        { channel: "gritter",
          image: "path/to/image.png",
          position: "bottom-left" }
    );
    
Change the display method:

	Flashes.setFlash("You got a flash message!", "success", "gritter");

The call can be made anyhere in your client-side code, and takes a 'message' and two optional arguments:

    Flashes.setFlash(message [, options]) 
    
***Notifications***

Notifications are different from flash messages in that they persist to the database, and are viewed in a dropdown.  Once a user has clicked on a notification, it is marked as 'seen' and no longer appears in their dropdown list.  However, it is still kept in the databse until you clear it in your app.

If you want to use notifications (persistent messages that appear in a dropdown menu), include `{{> notificationsList}}` where you want the dropdown.

To create a notifciation, call the method:

    FlashNotify.createNotification("This is my message to you!")


    
**Options**

Set options by passing the `options` object.  Here are the defaults for `setFlash`:

      cssClass: "alert-info", // this can be anything (see Stylng, below)
      title: null, // string
      sticky: false, // boolean. if true, message will display until user clicks close box
      delay: 3500, // how log message is visible
      image: null, // string. path to an image
      fadeDuration: 1500, // length of fade out
      channel: "inline", // string.  can alse be 'gritter'
      position: "top-right"  // for gritter only. can be 'bottom-left', 'bottom-right', etc.

If not specified, the type will be set as "info", and the channel will be "inline".  If you're using bootstrap, these defaults will give you the standard blue 'info' message, with a close box, wherever you put the `{{> flashesList}}` template.

**Styling**

Flash-Notify works well with Boostrap, but it's not a requirement.  You can set your own css class on a message, and style it however you want.  In additon, the template uses the `.alert` class for generic styling of all flash messages.

**TODO**

* Notifications should have configuration options for 'user-specific` and 'site-wide' message types, and for the dropdown menu name.
* Unit tests for notifications
* Bug: If a second growl is added while a prior one is present, the second gnores its postion setting and takes that of the first.

**Credits**

Inspired by the Errors and Messages chapters in the [Discover Meteor](http://www.discovermeteor.com) book.  Makes use of the excellent [gritter](http://boedesign.com/blog/2009/07/11/growl-for-jquery-gritter/) jQuery plugin.
