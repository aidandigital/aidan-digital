// Users with disabilities use tab and enter to select and click elements without using a mouse
// Some custom elements require "tabindex" to be manually added in order to be selected using tab, however these elements still won't do anything when enter is pressed
// On enter, this program executes a function that the custom element was meant to do when clicked by a mouse

function execOnEnter(e, functionToExec) {
  if (e.keyCode === 13) {
    functionToExec();
  }
}

export default execOnEnter;

/*
Example Usage:
<div>
  <CustomElement tabIndex="1" onKeyDown={(e) => execOnEnter(e, () => anyFunction())} />
</div>
*/