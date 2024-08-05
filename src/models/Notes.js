

class Notes {
  constructor(content, date, month, year, color) {
    this.content = content;
    this.date = date;
    this.month = month;
    this.year = year;
    this.color = color;
  }

  static fromJson(json) {
    return new Notes(json.content, json.date, json.month, json.year, json.color);
  }

  toJson() {
    return {
      content: this.content,
      date: this.date,
      month: this.month,
      year: this.year,
      color: this.color
    };
  }
}

export default Notes;