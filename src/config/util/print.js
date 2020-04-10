/**
 * 打印页面中的指定的 dom
 * @param element elementNode
 */
export default (element) => {
  if (!element || element.nodeType !== 1) {
    throw new Error('请传入 dom 节点');
  }
  const htmlElement = document.documentElement.cloneNode(true);
  htmlElement.querySelector('body').innerHTML = element.cloneNode(
      true).outerHTML;
  const win = window.open();
  self.focus();
  win.document.open();
  win.document.write(htmlElement.outerHTML);
  win.document.close();

  win.onload = () => {
    win.print();
    win.close();
  };
}
