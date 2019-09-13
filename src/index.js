const getHashTag = string => {
  if (!Boolean(string) || string.length > 100) {
    return false;
  }
  const cleanWord = word => {
    return word.replace(/[^a-zA-ZА-Яа-яЁё0-9]/gi, "").replace(/\s+/gi, ", ");
  };

  let words = string.split(" ");
  let hash = words.map(word => {
    word = cleanWord(word);
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  return "#" + hash.join("");
};

console.log(getHashTag('Пример НОВОГО12312312 "хэштега"'));
