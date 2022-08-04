// Users with disabilities use tab and enter to select and click elements without using a mouse
// Some Link elements with multiple children require "tabindex" to be manually added in order to be selected using tab for some reason, however these Links still won't do anything when enter is pressed
// On enter, this program clicks a child of the Link element, which bubbles up and clicks the Link element

function clickOnEnter(e) {
    if (e.keyCode === 13) {
      e.target.click()
    }
}
  
export default clickOnEnter;

/*
Example Usage:
<div>
  <Link href="/">
    <div tabIndex="1" onKeyDown={clickOnEnter} className="hover:cursor-pointer">
      <i className="icon-logo" />
    </div>
  </Link>
</div>
NOTE: Cannot be used on directly on the Link element, since they accept no props
*/