const dummy = ([]) => {
	return 1;
};

const addTotalLikes = (blogs) => {
	return (totalLikes = blogs.reduce((sum, blog) => {
		return sum + blog.likes;
	}, 0));
};

const highestLikes = (blogs) => {
	return (highestLikedBlog = blogs.reduce((highestBlog, blog) => {
		return highestBlog.likes < blog.likes
			? (highestBlog = blog)
			: (highestBlog = highestBlog);
	}, {likes: 0}));
};

module.exports = {
	dummy,
	addTotalLikes,
	highestLikes,
};
