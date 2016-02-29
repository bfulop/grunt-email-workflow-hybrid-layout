# Grunt Email Workflow with Hybrid layout

This is a fork of the Lee Munroe's [Grunt Email Design Workflow repo](https://github.com/leemunroe/grunt-email-workflow).

## Installation and running

See the original [Grunt Email Design Workflow repo](https://github.com/leemunroe/grunt-email-workflow) for details.
The biggest difference is the dependency on the latest (^4.0.0) version of Handlebars. This is necessary to abstract out the template to create column grids and be able to pass the name of your component to be rendered into each column.

# Car dealer demo email

## A fluid, mobile-first layout, that survives without any CSS at all

![Design and Clients](http://815b1b87b51011a7a029-623c55fb68acb92f1f433c6448bed244.r60.cf3.rackcdn.com/github/email-workflow/design-clients.jpg)

This demo newsletter represents a typical challenge that I face daily when building emails for clients.
We have a multiple-column layout on desktop, that should change to a single-column one for mobile clients. Each content block has unique background color, so they should take up always 100% of the available space. In addition it would be preferable that the email displays normally on archaic webmail clients such as free.fr that strips out 100% of your CSS.
It's based on the [hybrid/fluid approach](http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919) but had to be extended so that the individual blocks extend to the full width of their containers. 
To summarise the characteristics of the template for those who prefer skim reading:

- mobile-first
- columns to expand 100% to their containers
- support the typical selection of email clients (Outlook, Gmail, iOS, Android, Apple Mail, Yahoo, etc.)
- don't break on old clients that strip 100% of CSS (free.fr)

