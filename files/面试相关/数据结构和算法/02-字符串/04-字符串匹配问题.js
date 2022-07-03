/*
字符串匹配问题 —— 正则表达式初相见
题目：
    设计一个支持以下两种操作的数据结构：oid addWord(word) 和 bool search(word)
    search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。其中. 可以表示任何一个字母。
示例：
    addWord("bad")，addWord("dad")，addWord("mad")
    search("pad") -> false，search("bad") -> true，search(".ad") -> true，search("b..") -> true
说明：
    你可以假设所有单词都是由小写字母 a-z 组成的。

思路分析：
    1.选择数据结构存储字符串 —— 采用键值对Map存储（或对象字面量来模拟Map），为什么不用数组？？？
    2.为了降低查找时的复杂度，我们可以考虑以字符串的长度为key，相同长度的字符串存在一个数组中，这样可以提供我们后续定位的效率
    3.难点在于search 这个 API，它既可以搜索文字，又可以搜索正则表达式。
      因此我们在搜索前需要额外判断一下，传入的到底是普通字符串，还是正则表达式。
      -若是普通字符串，则直接去 Map 中查找是否有这个 key；
      -若是正则表达式，则创建一个正则表达式对象，判断 Map 中相同长度的字符串里，是否存在一个能够与这个正则相匹配。
    4.写代码之前需复习正则表达式的创建 && 测试某个字符串是否与正则表达式相匹配的方法
      创建正则表达式：const reg = new RegExp(word)  //例如word为.ad
      测试某个字符串是否与正则表达式相匹配：reg.test(item)  //item表示某个具体的单词，例如bad
      
*/

// const WordDictionary = function(){

// }
// WordDictionary.prototype.addWord = function(word){

// }
// WordDictionary.prototype.search = function(str){

// }

const WordDictionary = function () {
  this.words = {};
};
WordDictionary.prototype.addWord = function (word) {
  //判断word长度是否已存在
  var len = word.length;
  if (this.words[len]) {
    this.words[len].push(word);
  } else {
    this.words[len] = [word];
  }
};
WordDictionary.prototype.search = function (str) {
  var len = str.length;
  //判断是否words当中是否有对应长度
  if (!this.words[len]) {
    return false;
  }
  //判断该str是普通字符串，还是正则表达式
  if (!str.includes(".")) {
    return this.words[len].includes[str];
  } else {
    var reg = new RegExp(str);
    this.words[len].some((item) => {
      return reg.test(item);
    });
  }
};

//文中的实现（这个代码看起来真的太清爽了哇，爱了~~~~）
/* 构造函数 */
// const WordDictionary = function () {
//   // 初始化一个对象字面量，承担 Map 的角色
//   this.words = {};
// };

/* 添加字符串的方法 */
// WordDictionary.prototype.addWord = function (word) {
//   // 若该字符串对应长度的数组已经存在，则只做添加
//   if (this.words[word.length]) {
//     this.words[word.length].push(word);
//   } else {
//     // 若该字符串对应长度的数组还不存在，则先创建
//     this.words[word.length] = [word];
//   }
// };

/* 搜索方法 */
// WordDictionary.prototype.search = function (word) {
//   // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
//   if (!this.words[word.length]) {
//     return false;
//   }
//   // 缓存目标字符串的长度
//   const len = word.length;
//   // 如果字符串中不包含‘.’，那么一定是普通字符串
//   if (!word.includes(".")) {
//     // 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
//     return this.words[len].includes(word);
//   }

//   // 否则是正则表达式，要先创建正则表达式对象
//   const reg = new RegExp(word);

//   // 只要数组中有一个匹配正则表达式的字符串，就返回true
//   return this.words[len].some((item) => {
//     return reg.test(item);
//   });
// };
