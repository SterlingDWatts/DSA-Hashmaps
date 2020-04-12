const HashMap = require("./hashmap");

const hashMapsDrills = {
  main() {
    const lotr = new HashMap()
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    arr = [
      {"Hobbit": "Bilbo"},
      {"Hobbit": "Frodo"},
      {"Wizard": "Gandalf"},
      {"Human": "Aragorn"},
      {"Elf": "Legolas"},
      {"Maiar": "The Necromancer"},
      {"Maiar": "Sauron"},
      {"RingBearer": "Gollum"},
      {"LadyOfLight": "Galadriel"},
      {"HalfElven": "Arwen"},
      {"Ent": "Treebeard"}
    ]

    for (const obj of arr) {
      const key = Object.keys(obj)[0]
      lotr.set(key, obj[key])
    }
    
    console.log(lotr._hashMap)
  },
  whatDoesThisDo() {
    // this function sets a key value pair, then overwrites the value
    // then it prints the new value

    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
    const arr = [10, 22, 31, 4, 15, 28, 17, 88, 59]
    for (const num of arr) {
      console.log(num, num % 11)
    }
    const arr2 = [5, 28, 19, 15, 20, 33, 12, 17, 10]
    for (const num of arr2) {
      console.log(num, num % 9)
    }
  },
  removeDuplicates(str) {
    const strHashMap = new HashMap();
    let newString = ""
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (!strHashMap.get(char)) {
        strHashMap.set(char, char)
      } else {
        newString += char
      }
    }
    return newString;
  },
  isPalindrom(str) {
    const strHashMap = new HashMap();
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (!strHashMap.get(char)) {
        strHashMap.set(char, 1)
      } else {
        const count = strHashMap.get(char)
        strHashMap.set(char, count++)
      }
    }
    if (str.length % 2 === 0) {
      if (strHashMap._hashMap.filter(obj => obj.key % 2).length > 0) {
        return false
      }
    } else {
      if (strHashMap._hashMap.filter(obj => obj.key % 2).length !== 1) {
        return false
      }
    }
    return true
  }
}

// ## 3 ##
// 1) [22, 88, , , 4, 15, 28, 17, 59, 31, 10]
// 2) [10, 28, 19, 20, 12, 5, 15, 33, 17]

module.exports = hashMapsDrills;
