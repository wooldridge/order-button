## Description

A Node.js script that reacts to an Amazon Dash Button. When the button is
pressed, it displays information in the console and, on Mac OS X, plays a
random sound.

## Prerequisites

* [Node.js and npm](http://nodejs.org)
* libpcap

## Setup

1. Purchase an Amazon Dash Button:

   [Shop Dash Buttons](http://www.amazon.com/gp/browse.html?node=10667898011)

2. Install libpcap dependency. On Mac OS X, this worked for me:

   [How to install Python libpcap module on Mac OS X](http://stackoverflow.com/questions/27149377/how-to-install-python-libpcap-module-on-mac-os-x)

3. Install order-button:

   ```
   $ git clone https://github.com/wooldridge/order-button
   ```

4. Install npm dependencies:

   ```
   $ cd order-button
   $ npm install
   ```

6. Set up your Amazon Dash Button:

   [Set Up Your Dash Button](https://www.amazon.com/gp/help/customer/display.html?nodeId=201746340)

7. Get MAC address of Amazon Dash Button:

   ```
   $ cd node_modules/node-dash-button
   $ node bin/findbutton
   ```

8. Press your dash button and look for corresponding MAC address in the
console. MAC addresses look like this:

   ```
   74:c2:46:ad:f5:b7
   ```

9. Add the MAC address to your config_sample.js file, and save that file as
config.js.

10. Run the order-button script:

   ```
   $ cd ../..
   $ node index
   ```

   When you press the Amazon Dash Button, your console should display information
   and, on Mac OS X, play a random sound.
