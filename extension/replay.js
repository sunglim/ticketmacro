if (document.getElementsByClassName("mgt5").length != 0) {
  parent_node = document.getElementsByClassName("mgt5")[0].parentNode
  // td
  tr_node = parent_node.parentNode
  suseo_node = tr_node.children[3]
  em_node = suseo_node.children[1]
  time_text = em_node.textContent
  if (time_text != '22:57') {
    id = parent_node.children[0]
    id.click()
  } else {
    document.location.reload(); 
  }
} else {
  document.location.reload(); 
}
