export const addBookmark = id => {
    const bookmark = getBookmark();
    let exist = bookmark.find(post => post === id);

    if (!exist) {
        bookmark.push(id);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
    } else return true;
}

export const removeBookmark = id => {
    const bookmark = getBookmark();

    bookmark.splice(bookmark.indexOf(id), 1);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));

    return true;
}

export const getBookmark = _ => {
    let bookmark = [];
    const getBookmark = localStorage.getItem("bookmark");

    if (getBookmark) bookmark = JSON.parse(getBookmark);

    return bookmark;
}

export const addRead = (id, readTime) => {
    const read = getRead();

    read[id] = readTime;
    localStorage.setItem("read", JSON.stringify(read));
}

export const removeRead = id => {
    const read = getRead();

    delete read[id];
    localStorage.setItem("read", JSON.stringify(read));
}

export const getRead = _ => {
    let read = {};
    const getRead = localStorage.getItem("read");

    if (getRead) read = JSON.parse(getRead);

    return read;
}

export const deleteRead = _ => localStorage.removeItem("read");
