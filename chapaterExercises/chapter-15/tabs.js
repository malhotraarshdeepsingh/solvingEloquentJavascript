// EXERCISE---------------------------------------------------------------15.3
// Tabbed panels are common in user interfaces. They allow you to select an interface panel by choosing from a number of tabs “sticking out” above an element.
// Implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of <button> elements at the top of the node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden (given a display style of none). The currently visible node can be selected by clicking the buttons.
// When that works, extend it to style the button for the currently selected tab differently so that it is obvious which tab is selected.

function asTabs(node) {
  let tabs = Array.from(node.children).map((node) => {
    let button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
    let tab = { node, button };
    button.addEventListener("click", () => selectTab(tab));
    return tab;
  });

  let tabList = document.createElement("div");
  for (let { button } of tabs) tabList.appendChild(button);
  node.insertBefore(tabList, node.firstChild);

  function selectTab(selectedTab) {
    for (let tab of tabs) {
      let selected = tab == selectedTab;
      tab.node.style.display = selected ? "" : "none";
      tab.button.style.color = selected ? "red" : "";
    }
  }
  selectTab(tabs[0]);
}

asTabs(document.querySelector("tab-panel"));
