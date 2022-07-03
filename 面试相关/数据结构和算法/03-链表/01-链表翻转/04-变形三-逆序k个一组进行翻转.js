/*
  变形2针对的是：顺序的k个一组翻转，那如何对逆序k个一组进行翻转了？
  例如:
     head-->1-->2-->3-->4-->5 逆序 k 个一组翻转后，链表变成
     head-->1--->3-->2-->5-->4 （k = 2 时）
   这道题是字节跳动的面试题。。。。。

   思路：
   1.先将整个链表翻转得到新链表（注意head）
     head-->5-->4-->3-->2-->1
   2.再将新链表用变形2中的方式，对链表进行：k个一组翻转链表
     head-->4-->5-->2-->3-->1
   3.最后再把链表翻转回来
     head-->1-->3-->2-->5-->4

   直接调用变形1和变形2写好的函数就行啦！！！
*/

//逆序每k个一组翻转链表
function reverseIterationInvertLinkedListEveryK(k){
  //先翻转整个链表
  iterationInvertLinkedList();
  //k个一组翻转链表
  iterationInvertLinkedListEveryK(k);
  //再次翻转整个链表
  iterationInvertLinkedList();
}