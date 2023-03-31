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
