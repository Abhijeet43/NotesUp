const getDate = (date) =>
  date.slice(0, 10).replaceAll("-", "/").split("/").reverse().join("/");

const getTime = (date) => date.slice(11, 16);

const getPinnedAndUnpinnedNotes = (notes) => {
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const unPinnedNotes = notes.filter((note) => !note.isPinned);
  return { pinnedNotes, unPinnedNotes };
};

export { getDate, getTime, getPinnedAndUnpinnedNotes };
