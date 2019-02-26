module.exports = {
  index: async (ctx, next) => {
    await ctx.render("advise/index", { title: "iKcamp欢迎您" });
  }
};
