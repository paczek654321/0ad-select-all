function init(){}

function select_all_count_selects()
{
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = true
    let size = Number(Engine.GetGUIObjectByName("select_all_count_label").caption)
    let selection = g_Selection.toList()
    size = Math.min(size, selection.length)
    g_Selection.reset();
    g_Selection.addList(selection.slice(0, size))
}
function select_all_count_change(value)
{
    let obj = Engine.GetGUIObjectByName("select_all_count_label")
    obj.caption = Number(obj.caption)+value
}