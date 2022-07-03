/*
  输入两个链表，找出它们的第一个公共结点。
  思路：
    1.先找到两个链表的长度length1,length2
    2.让长一点的链表先走length2-length1步，让长链表和锻炼表起点相同
    3.两个链表一起前进，比较获得第一个相等的节点
*/
function FindFirstCommonNode(pHead1, pHead2){
  if(!pHead1 || !pHead2){ return null; }
  //获取链表长度
  let length1 = getLength(pHead1);
  let length2 = getLength(pHead2);
  //长链表先行
  let lang, short, interval;
  if(length1>length2){
    lang = pHead1;
    short = pHead2;
    interval = length1 - length2;
  }else{
    lang = pHead2;
    short = pHead1;
    interval = length2 - length1;
  }
  while(interval--){
    lang = lang.next;
  }
  //找相同节点
  while(lang){
    if(lang === short){
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }
  return null;
}

function getLength(head){
  let current = head;
  let result = 0;
  while(current){
    result++;
    current = current.next;
  }
  return result;
}
