YUI.add("moodle-format_grid-gridkeys",function(e,t){M.format_grid.gridkeys=M.format_grid.gridkeys||{},M.format_grid.gridkeys.init=function(e){e().use("gallery-event-nav-keys",function(e){e.on("esc",function(e){e.preventDefault(),console.log("Esc pressed"),console.log("Selected section no: "+M.format_grid.selected_section_no),M.format_grid.icon_toggle(e)}),e.on("left",function(e){e.preventDefault(),console.log("Left pressed"),M.format_grid.arrow_left(e)}),e.on("right",function(e){e.preventDefault(),console.log("Right pressed"),M.format_grid.arrow_right(e)}),e.on("enter",function(e){e.preventDefault(),console.log("Enter pressed"),console.log("Selected section no: "+M.format_grid.selected_section_no),M.format_grid.icon_toggle(e)}),e.on("tab",function(e){e.preventDefault(),e.shiftKey?(console.log("Shift Tab pressed"),M.format_grid.arrow_left(e)):(console.log("Tab pressed"),M.format_grid.arrow_right(e))})})}},"@VERSION@",{requires:["gallery-event-nav-keys"]});
