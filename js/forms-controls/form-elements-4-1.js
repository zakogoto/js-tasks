let selected = genres.options[genres.selectedIndex]
alert(selected.text);
alert(selected.value);

let classicOption = new Option("Классика", "classic");
genres.append(classicOption);

classicOption.selected = true;