function init(){}

function select_all_OK()
{
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = true
    let size = Number(Engine.GetGUIObjectByName("select_all_number_label").caption)
    let selection = g_Selection.toList()
    size = Math.min(size, selection.length)
    let toAdd = []
    for (let i = 0; i < size; i++)
    {
        toAdd.push(+selection[i])
    }
    g_Selection.reset();
    g_Selection.addList(toAdd)
}
function select_all_INCREASE()
{
    let obj = Engine.GetGUIObjectByName("select_all_number_label")
    obj.caption = Number(obj.caption)+1
}
function select_all_DECREASE()
{
    let obj = Engine.GetGUIObjectByName("select_all_number_label")
    obj.caption = Number(obj.caption)-1
}