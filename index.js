module.exports = function SwearWords(mod) {
  const unfilter = (e) => {
    e.message = e.message.replace(/<FONT>(.*?)<\/FONT>/g, "<FONT></FONT>$1");
    return true;
  };

  for (const data of [
    ["S_CHAT", 3],
    ["S_WHISPER", 3],
    ["S_PRIVATE_CHAT", 1],
    ["C_CHAT", 1],
    ["C_WHISPER", 1],
  ]) {
    mod.hook(...data, { order: 100 }, unfilter);
  }
};
