export default class {
  constructor(templateStr) {
    this.pos = 0;
    this.tail = templateStr;
  }

  // skip tag and change this.tail.
  scan(tag) {
    if(this.tail.indexOf(tag) ==0){
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // find stopTag and return words before stopTag
  scanUtil(stopTag) {
    const poss_back = this.pos;
    while (this.tail.indexOf(stopTag) == 0 && !this.eos()) {
      this.pos++;
      this.tail = this.templateStr.subStr(this.pos);
    }
    return this.templateStr.substring(pos_back, this.pos);
  }

  eos() {
    return pos >= this.templateStr.length;
  }
}
