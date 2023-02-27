const dummy = ([]) => {
    return 1;
  }

  const addTotalLikes = (blogs) => {
    const totalLikes = blogs.reduce((sum, blog) => {
      return sum + blog.likes;
    }, 0);
    return totalLikes;
  }
    
  module.exports = {
    dummy, addTotalLikes
  }

