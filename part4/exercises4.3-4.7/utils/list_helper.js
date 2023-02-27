const dummy = ([]) => {
	return 1;
};

const addTotalLikes = (blogs) => {
	return (totalLikes = blogs.reduce((sum, blog) => {
		return sum + blog.likes;
	}, 0));
};

const mostLikes = (blogs) => {
	return (highestLikedBlog = blogs.reduce(
		(highestBlog, blog) => {
			return highestBlog.likes < blog.likes
				? (highestBlog = blog)
				: (highestBlog = highestBlog);
		},
		{ likes: 0 }
	));
};

const mostBlogs = (blogs) => {
	if (blogs.length === 0) {
		return {};
	} else {
		let authorCounts = blogs.reduce((authorCount, blog) => {
			authorCount[blog.author] = (authorCount[blog.author] || 0) + 1;
			return authorCount;
		}, {});
		let maxCount = Math.max(...Object.values(authorCounts));
		let mostFrequent = Object.keys(authorCounts).filter(
			(author) => authorCounts[author] === maxCount
		);
		return {
			author: mostFrequent[0],
			blogs: maxCount,
		};
	}
};

module.exports = {
	dummy,
	addTotalLikes,
	mostLikes,
	mostBlogs,
};
