const handleScroll = (page, postsPerPage, allPosts) => {
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (scrollTop + innerHeight >= offsetHeight - 0) {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        return nextPosts;
    }
    return []
};

export default handleScroll
